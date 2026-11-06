import { NextResponse } from "next/server";

type ContactPayload = Record<string, unknown>;

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_REQUEST_BYTES = 8 * 1024;
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX = 5;
const MAX_RATE_LIMIT_KEYS = 5000;

class PayloadTooLargeError extends Error {}
class InvalidPayloadError extends Error {}

// Best-effort per-instance protection. Serverless instances do not share memory;
// use a shared store if a strict cross-instance rate limit is required.
const submissionAttempts = new Map<string, number[]>();

function readString(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

async function readContactPayload(request: Request): Promise<ContactPayload> {
  const declaredLength = Number(request.headers.get("content-length") ?? 0);
  if (Number.isFinite(declaredLength) && declaredLength > MAX_REQUEST_BYTES) {
    throw new PayloadTooLargeError();
  }
  const reader = request.body?.getReader();
  if (!reader) throw new InvalidPayloadError();

  const chunks: Uint8Array[] = [];
  let totalBytes = 0;
  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    totalBytes += value.byteLength;
    if (totalBytes > MAX_REQUEST_BYTES) {
      await reader.cancel();
      throw new PayloadTooLargeError();
    }
    chunks.push(value);
  }

  const body = new Uint8Array(totalBytes);
  let offset = 0;
  for (const chunk of chunks) {
    body.set(chunk, offset);
    offset += chunk.byteLength;
  }

  let parsed: unknown;
  try {
    parsed = JSON.parse(new TextDecoder().decode(body));
  } catch {
    throw new InvalidPayloadError();
  }
  if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) {
    throw new InvalidPayloadError();
  }
  return parsed as ContactPayload;
}

function checkRateLimit(ip: string, now = Date.now()) {
  const recentAttempts = (submissionAttempts.get(ip) ?? []).filter(
    (timestamp) => now - timestamp < RATE_LIMIT_WINDOW_MS
  );
  if (recentAttempts.length >= RATE_LIMIT_MAX) {
    submissionAttempts.set(ip, recentAttempts);
    return {
      allowed: false,
      retryAfterSeconds: Math.max(
        1,
        Math.ceil((RATE_LIMIT_WINDOW_MS - (now - recentAttempts[0])) / 1000)
      ),
    };
  }

  recentAttempts.push(now);
  submissionAttempts.set(ip, recentAttempts);
  if (submissionAttempts.size > MAX_RATE_LIMIT_KEYS) {
    let oldestKey: string | undefined;
    let oldestTimestamp = Number.POSITIVE_INFINITY;
    for (const [key, timestamps] of submissionAttempts) {
      const active = timestamps.filter((timestamp) => now - timestamp < RATE_LIMIT_WINDOW_MS);
      if (active.length) {
        submissionAttempts.set(key, active);
        if (active[0] < oldestTimestamp) {
          oldestTimestamp = active[0];
          oldestKey = key;
        }
      } else {
        submissionAttempts.delete(key);
      }
    }
    if (submissionAttempts.size > MAX_RATE_LIMIT_KEYS && oldestKey) {
      submissionAttempts.delete(oldestKey);
    }
  }
  return { allowed: true, retryAfterSeconds: 0 };
}

function getClientIp(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
  return (request.headers.get("x-real-ip")?.trim() || forwarded || "unknown").slice(0, 128);
}

function allowedTurnstileHostnames(): Set<string> {
  const configured = (process.env.TURNSTILE_ALLOWED_HOSTNAMES ?? "")
    .split(",").map((hostname) => hostname.trim().toLowerCase()).filter(Boolean);
  const hostnames = ["deshscape.vercel.app", process.env.VERCEL_URL, ...configured]
    .filter((hostname): hostname is string => Boolean(hostname))
    .map((hostname) => hostname.toLowerCase());
  if (process.env.NODE_ENV !== "production") hostnames.push("localhost", "127.0.0.1");
  return new Set(hostnames);
}

export async function POST(request: Request) {
  try {
    const contentType = request.headers.get("content-type")?.split(";")[0].trim().toLowerCase();
    if (contentType !== "application/json") {
      return NextResponse.json({ error: "INVALID_CONTENT_TYPE" }, { status: 415 });
    }

    const body = await readContactPayload(request);
    const name = readString(body.name);
    const email = readString(body.email);
    const subject = readString(body.subject);
    const message = readString(body.message);
    const token = readString(body.turnstileToken);
    const website = readString(body.website);

    // Quietly accept honeypot submissions without forwarding them.
    if (website) return NextResponse.json({ ok: true });

    if (
      !name || name.length > 80 ||
      !emailPattern.test(email) || email.length > 254 ||
      !subject || subject.length > 120 ||
      !message || message.length > 4000 ||
      !token || token.length > 4096
    ) {
      return NextResponse.json({ error: "INVALID_PAYLOAD" }, { status: 400 });
    }

    const rateLimit = checkRateLimit(getClientIp(request));
    if (!rateLimit.allowed) {
      return NextResponse.json({ error: "RATE_LIMITED" }, {
        status: 429,
        headers: { "Retry-After": String(rateLimit.retryAfterSeconds) },
      });
    }

    const turnstileSecret = process.env.TURNSTILE_SECRET_KEY;
    if (!turnstileSecret) {
      return NextResponse.json({ error: "TURNSTILE_NOT_CONFIGURED" }, { status: 503 });
    }

    const verificationBody = new URLSearchParams({ secret: turnstileSecret, response: token });
    const remoteIp = getClientIp(request);
    if (remoteIp !== "unknown") verificationBody.set("remoteip", remoteIp);

    let verificationResponse: Response;
    try {
      verificationResponse = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: verificationBody,
        cache: "no-store",
        signal: AbortSignal.timeout(10_000),
      });
    } catch {
      return NextResponse.json({ error: "TURNSTILE_UNAVAILABLE" }, { status: 503 });
    }
    if (!verificationResponse.ok) {
      return NextResponse.json({ error: "TURNSTILE_UNAVAILABLE" }, { status: 503 });
    }

    const verification = (await verificationResponse.json().catch(() => null)) as
      | { success?: boolean; hostname?: string }
      | null;
    const hostname = verification?.hostname?.toLowerCase();
    if (!verification?.success || !hostname || !allowedTurnstileHostnames().has(hostname)) {
      return NextResponse.json({ error: "TURNSTILE_FAILED" }, { status: 403 });
    }

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
    const privateKey = process.env.EMAILJS_PRIVATE_KEY;
    if (!serviceId || !templateId || !publicKey || !privateKey) {
      return NextResponse.json({ error: "EMAIL_NOT_CONFIGURED" }, { status: 503 });
    }

    let emailResponse: Response;
    try {
      emailResponse = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          service_id: serviceId,
          template_id: templateId,
          user_id: publicKey,
          accessToken: privateKey,
          template_params: { from_name: name, reply_to: email, subject, message },
        }),
        cache: "no-store",
        signal: AbortSignal.timeout(10_000),
      });
    } catch {
      console.error("EmailJS request timed out or could not connect.");
      return NextResponse.json({ error: "EMAIL_SEND_FAILED" }, { status: 502 });
    }
    if (!emailResponse.ok) {
      console.error("EmailJS send failed with status:", emailResponse.status);
      return NextResponse.json({ error: "EMAIL_SEND_FAILED" }, { status: 502 });
    }
    return NextResponse.json({ ok: true });
  } catch (error) {
    if (error instanceof PayloadTooLargeError) {
      return NextResponse.json({ error: "REQUEST_TOO_LARGE" }, { status: 413 });
    }
    if (error instanceof InvalidPayloadError) {
      return NextResponse.json({ error: "INVALID_PAYLOAD" }, { status: 400 });
    }
    console.error("Contact API failed:", error);
    return NextResponse.json({ error: "INTERNAL_ERROR" }, { status: 500 });
  }
}
