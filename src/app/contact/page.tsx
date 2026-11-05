"use client";

import { useState } from "react";
import { ArrowLeft, ArrowUpRight, Check, Compass, LoaderCircle, Mail, MessageCircle } from "lucide-react";
import TurnstileWidget from "@/components/TurnstileWidget";
import { useLanguage } from "@/components/LanguageProvider";

type SendState = "idle" | "sending" | "success" | "error";

const turnstileSiteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

export default function ContactPage() {
  const { t } = useLanguage();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [website, setWebsite] = useState("");
  const [turnstileToken, setTurnstileToken] = useState("");
  const [widgetVersion, setWidgetVersion] = useState(0);
  const [sendState, setSendState] = useState<SendState>("idle");
  const [sendError, setSendError] = useState("");

  const ready = Boolean(name.trim() && email.trim() && subject.trim() && message.trim() && turnstileToken && turnstileSiteKey);

  const sendMessage = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!ready || sendState === "sending") return;

    setSendError("");
    setSendState("sending");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          subject: subject.trim(),
          message: message.trim(),
          website,
          turnstileToken,
        }),
      });

      const result = (await response.json().catch(() => ({}))) as { error?: string };
      if (!response.ok) throw new Error(result.error || `Request failed (HTTP ${response.status})`);
      setSendState("success");
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
      setWebsite("");
      setTurnstileToken("");
      setWidgetVersion((version) => version + 1);
    } catch (error) {
      setSendError(error instanceof Error ? error.message : "Please try again.");
      setSendState("error");
      setTurnstileToken("");
      setWidgetVersion((version) => version + 1);
    }
  };

  return (
    <main className="contact-page">
      <header className="contact-header">
        <a className="brand" href="/" aria-label="Deshscape home">
          <span className="brand-mark"><Compass size={22} strokeWidth={1.7} /></span>
          <span className="brand-name">deshscape<span>.</span><small>{t("THE ART OF DISCOVERY")}</small></span>
        </a>
        <a className="contact-home-link" href="/"><ArrowLeft size={15} /> {t("BACK TO DISCOVER")}</a>
      </header>

      <section className="contact-hero">
        <div className="eyebrow light"><span /> {t("LET'S CONNECT")}</div>
        <h1>{t("Every great journey")}<br />{t("starts with a")} <em>{t("hello.")}</em></h1>
        <p>{t("Have a destination suggestion, a story to share, or an idea for Deshscape? We'd love to hear what you have in mind.")}</p>
        <div className="contact-hero-mark"><MessageCircle size={58} strokeWidth={1} /></div>
      </section>

      <section className="contact-content">
        <div className="contact-intro">
          <div className="eyebrow"><span /> {t("WRITE TO US")}</div>
          <h2>{t("Start a")}<br /><em>{t("conversation.")}</em></h2>
          <p>{t("Share your thoughts with the Deshscape team. Fill in the form and send your message directly.")}</p>
          <div className="contact-note"><Mail size={18} /><span><strong>{t("Your message goes to the site owner.")}</strong><small>{t("Please avoid including passwords, payment details, or other sensitive information.")}</small></span></div>
        </div>

        <form className="contact-form" onSubmit={sendMessage}>
          <label>{t("Your name")}<input value={name} onChange={(event) => setName(event.target.value)} placeholder={t("How should we call you?")} maxLength={80} autoComplete="name" required /></label>
          <label>{t("Email address")}<input type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="you@example.com" maxLength={254} autoComplete="email" required /></label>
          <label>{t("Subject")}<input value={subject} onChange={(event) => setSubject(event.target.value)} placeholder={t("What's on your mind?")} maxLength={120} required /></label>
          <label>{t("Your message")}<textarea value={message} onChange={(event) => setMessage(event.target.value)} placeholder={t("Tell us a little more...")} rows={6} maxLength={4000} required /></label>
          <div aria-hidden="true" style={{ position: "absolute", left: "-10000px", width: 1, height: 1, overflow: "hidden" }}>
            <label>{t("Leave this field empty")}<input name="website" tabIndex={-1} autoComplete="off" value={website} onChange={(event) => setWebsite(event.target.value)} /></label>
          </div>
          {turnstileSiteKey ? (
            <div className="contact-verification">
              <TurnstileWidget
                key={widgetVersion}
                siteKey={turnstileSiteKey}
                onVerify={setTurnstileToken}
                onExpire={() => setTurnstileToken("")}
              />
            </div>
          ) : (
            <p className="contact-error" role="alert">{t("Security verification is not configured yet. Please try again later.")}</p>
          )}
          <div className="contact-form-bottom"><span>{t("All fields are required")}</span><button className="button button-dark" type="submit" disabled={!ready || sendState === "sending"}>{sendState === "sending" ? t("Sending...") : t("Send message")}{sendState === "sending" ? <LoaderCircle size={16} className="contact-spinner" /> : <ArrowUpRight size={16} />}</button></div>
          {sendState === "success" && <p className="contact-success" role="status"><Check size={15} /> {t("Your message has been sent. Thank you for reaching out!")}</p>}
          {sendState === "error" && <p className="contact-error" role="alert">{sendError || t("Your message could not be sent. Please try again.")}</p>}
        </form>
      </section>

      <footer className="contact-footer"><span>{t("© 2026 DESHSCAPE. MADE FOR THE CURIOUS.")}</span><a href="/">{t("EXPLORE BANGLADESH")} <ArrowUpRight size={14} /></a></footer>
    </main>
  );
}
