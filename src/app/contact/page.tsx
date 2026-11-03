"use client";

import { useState } from "react";
import { ArrowLeft, ArrowUpRight, Check, Clipboard, Compass, Mail, MessageCircle } from "lucide-react";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [copied, setCopied] = useState(false);

  const copyMessage = async () => {
    const content = `Deshscape contact message
Name: ${name}
Email: ${email}
Subject: ${subject}

${message}`;
    try {
      await navigator.clipboard.writeText(content);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2400);
    } catch {
      setCopied(false);
    }
  };

  const ready = name.trim() && email.trim() && subject.trim() && message.trim();

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
          <p>Use the form to put your thoughts together. When you're ready, copy the message and send it through your preferred email or messaging app.</p>
          <div className="contact-note"><Mail size={18} /><span><strong>No message is sent automatically.</strong><small>This demo form keeps your message in this browser session only. It does not submit to a server.</small></span></div>
        </div>

        <form className="contact-form" onSubmit={(event) => { event.preventDefault(); if (ready) void copyMessage(); }}>
          <label>Your name<input value={name} onChange={(event) => setName(event.target.value)} placeholder="How should we call you?" required /></label>
          <label>Email address<input type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="you@example.com" required /></label>
          <label>Subject<input value={subject} onChange={(event) => setSubject(event.target.value)} placeholder="What's on your mind?" required /></label>
          <label>Your message<textarea value={message} onChange={(event) => setMessage(event.target.value)} placeholder="Tell us a little more..." rows={6} required /></label>
          <div className="contact-form-bottom"><span>All fields are required</span><button className="button button-dark" type="submit" disabled={!ready}><>{copied ? "Message copied" : "Copy message"}{copied ? <Check size={16} /> : <Clipboard size={16} />}</></button></div>
          {copied && <p className="contact-success" role="status"><Check size={15} /> Your message is copied. You can now paste it into an email or message.</p>}
        </form>
      </section>

      <footer className="contact-footer"><span>© 2026 DESHSCAPE. MADE FOR THE CURIOUS.</span><a href="/">EXPLORE BANGLADESH <ArrowUpRight size={14} /></a></footer>
    </main>
  );
}
