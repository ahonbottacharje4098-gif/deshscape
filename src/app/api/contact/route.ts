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

    if (!serviceId || !templateId || !publicKey) {
      return NextResponse.json({ error: "Email service is not configured." }, { status: 503 });
    }

    const emailResponse = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        service_id: serviceId,
        template_id: templateId,
        user_id: publicKey,
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
      return NextResponse.json({ error: "Your message could not be sent. Please try again." }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Something went wrong. Please try again." }, { status: 500 });
  }
}
