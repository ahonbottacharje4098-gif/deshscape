"use client";

import { useState } from "react";
import { ArrowLeft, ArrowUpRight, Check, Compass, LoaderCircle, Mail, MessageCircle } from "lucide-react";

type SendState = "idle" | "sending" | "success" | "error";

const emailJsConfig = {
  serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
  templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
  publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
};

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [sendState, setSendState] = useState<SendState>("idle");

  const ready = Boolean(name.trim() && email.trim() && subject.trim() && message.trim());

  const sendMessage = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!ready || sendState === "sending") return;

    if (!emailJsConfig.serviceId || !emailJsConfig.templateId || !emailJsConfig.publicKey) {
      setSendState("error");
      return;
    }

    setSendState("sending");
    try {
      const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          service_id: emailJsConfig.serviceId,
          template_id: emailJsConfig.templateId,
          user_id: emailJsConfig.publicKey,
          template_params: {
            from_name: name.trim(),
            reply_to: email.trim(),
            subject: subject.trim(),
            message: message.trim(),
          },
        }),
      });

      if (!response.ok) throw new Error("Email service rejected the request");
      setSendState("success");
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    } catch {
      setSendState("error");
    }
  };

  return (
    <main className="contact-page">
      <header className="contact-header">
        <a className="brand" href="/" aria-label="Deshscape home">
          <span className="brand-mark"><Compass size={22} strokeWidth={1.7} /></span>
          <span className="brand-name">deshscape<span>.</span><small>THE ART OF DISCOVERY</small></span>
        </a>
        <a className="contact-home-link" href="/"><ArrowLeft size={15} /> BACK TO DISCOVER</a>
      </header>

      <section className="contact-hero">
        <div className="eyebrow light"><span /> LET'S CONNECT</div>
        <h1>Every great journey<br />starts with a <em>hello.</em></h1>
        <p>Have a destination suggestion, a story to share, or an idea for Deshscape? We'd love to hear what you have in mind.</p>
        <div className="contact-hero-mark"><MessageCircle size={58} strokeWidth={1} /></div>
      </section>

      <section className="contact-content">
        <div className="contact-intro">
          <div className="eyebrow"><span /> WRITE TO US</div>
          <h2>Start a<br /><em>conversation.</em></h2>
          <p>Share your thoughts with the Deshscape team. Fill in the form and send your message directly.</p>
          <div className="contact-note"><Mail size={18} /><span><strong>Your message goes to the site owner.</strong><small>Please avoid including passwords, payment details, or other sensitive information.</small></span></div>
        </div>

        <form className="contact-form" onSubmit={sendMessage}>
          <label>Your name<input value={name} onChange={(event) => setName(event.target.value)} placeholder="How should we call you?" maxLength={80} autoComplete="name" required /></label>
          <label>Email address<input type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="you@example.com" maxLength={254} autoComplete="email" required /></label>
          <label>Subject<input value={subject} onChange={(event) => setSubject(event.target.value)} placeholder="What's on your mind?" maxLength={120} required /></label>
          <label>Your message<textarea value={message} onChange={(event) => setMessage(event.target.value)} placeholder="Tell us a little more..." rows={6} maxLength={4000} required /></label>
          <div className="contact-form-bottom"><span>All fields are required</span><button className="button button-dark" type="submit" disabled={!ready || sendState === "sending"}>{sendState === "sending" ? "Sending..." : "Send message"}{sendState === "sending" ? <LoaderCircle size={16} className="contact-spinner" /> : <ArrowUpRight size={16} />}</button></div>
          {sendState === "success" && <p className="contact-success" role="status"><Check size={15} /> Your message has been sent. Thank you for reaching out!</p>}
          {sendState === "error" && <p className="contact-error" role="alert">{emailJsConfig.serviceId && emailJsConfig.templateId && emailJsConfig.publicKey ? "Your message could not be sent. Please try again in a moment." : "Email service setup is incomplete. Add the three EmailJS environment variables in your project and redeploy."}</p>}
        </form>
      </section>

      <footer className="contact-footer"><span>© 2026 DESHSCAPE. MADE FOR THE CURIOUS.</span><a href="/">EXPLORE BANGLADESH <ArrowUpRight size={14} /></a></footer>
    </main>
  );
}
