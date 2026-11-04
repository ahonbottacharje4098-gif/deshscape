import { NextResponse } from "next/server";

type ContactPayload = {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
  turnstileToken?: string;
  website?: string;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Best-effort per-instance protection: 5 submissions per IP in a rolling 10-minute window.
// For consistent limits across serverless instances, use a shared Redis-backed store.
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX = 5;
const submissionAttempts = new Map<string, number[]>();

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

  if (submissionAttempts.size > 5000) {
    for (const [key, timestamps] of submissionAttempts) {
      const active = timestamps.filter((timestamp) => now - timestamp < RATE_LIMIT_WINDOW_MS);
      if (active.length) submissionAttempts.set(key, active);
      else submissionAttempts.delete(key);
    }
  }

  return { allowed: true, retryAfterSeconds: 0 };
}


export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactPayload;
    const name = body.name?.trim() ?? "";
    const email = body.email?.trim() ?? "";
    const subject = body.subject?.trim() ?? "";
    const message = body.message?.trim() ?? "";
    const token = body.turnstileToken?.trim() ?? "";

    // Quietly accept honeypot submissions without forwarding them.
    if (body.website?.trim()) {
      return NextResponse.json({ ok: true });
    }

    const clientIp =
      request.headers.get("x-real-ip")?.trim() ||
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      "unknown";
    const rateLimit = checkRateLimit(clientIp);

    if (!rateLimit.allowed) {
      return NextResponse.json(
        { error: "Too many messages sent. Please wait a few minutes before trying again." },
        {
          status: 429,
          headers: { "Retry-After": String(rateLimit.retryAfterSeconds) },
        }
      );
    }

    if (
      !name || name.length > 80 ||
      !emailPattern.test(email) || email.length > 254 ||
      !subject || subject.length > 120 ||
      !message || message.length > 4000 ||
      !token
    ) {
      return NextResponse.json({ error: "Please check the form and security verification." }, { status: 400 });
    }

    const turnstileSecret = process.env.TURNSTILE_SECRET_KEY;
    if (!turnstileSecret) {
      return NextResponse.json({ error: "Contact verification is not configured." }, { status: 503 });
    }

    const verificationBody = new URLSearchParams({
      secret: turnstileSecret,
      response: token,
    });
    const forwardedFor = request.headers.get("x-forwarded-for");
    const remoteIp = forwardedFor?.split(",")[0]?.trim();
    if (remoteIp) verificationBody.set("remoteip", remoteIp);

    const verificationResponse = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: verificationBody,
        cache: "no-store",
      }
    );

    if (!verificationResponse.ok) {
      return NextResponse.json({ error: "Security verification failed. Please try again." }, { status: 403 });
    }

    const verification = (await verificationResponse.json()) as { success?: boolean; hostname?: string };
    if (!verification.success || (verification.hostname && verification.hostname !== "deshscape.vercel.app")) {
      return NextResponse.json({ error: "Security verification failed. Please try again." }, { status: 403 });
    }

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
    const privateKey = process.env.EMAILJS_PRIVATE_KEY;

    if (!serviceId || !templateId || !publicKey || !privateKey) {
      return NextResponse.json({ error: "Email service is not configured." }, { status: 503 });
    }

    const emailResponse = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        service_id: serviceId,
        template_id: templateId,
        user_id: publicKey,
        accessToken: privateKey,
        template_params: {
          from_name: name,
          reply_to: email,
          subject,
          message,
        },
      }),
      cache: "no-store",
    });

    if (!emailResponse.ok) {
      const providerMessage = (await emailResponse.text()).replace(/[\\r\\n]+/g, " ").slice(0, 240);
      console.error("EmailJS send failed:", emailResponse.status, providerMessage);
      return NextResponse.json(
        { error: `Email service error (HTTP ${emailResponse.status})${providerMessage ? `: ${providerMessage}` : ""}` },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Something went wrong. Please try again." }, { status: 500 });
  }
}
