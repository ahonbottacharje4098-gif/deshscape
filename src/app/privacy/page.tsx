import type { Metadata } from "next";
import LegalShell from "@/components/LegalShell";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Deshscape handles the information you share when you browse the site, save places or contact us.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <LegalShell eyebrow="PRIVACY" title="Privacy Policy" updated="6 November 2026">
      <p>Deshscape is an independent Bangladesh travel guide. This page explains, in plain language, what information the site handles and why.</p>

      <h2>Information you send us</h2>
      <p>If you use the contact form, we receive the name, email address, subject and message you type. We use them only to read and reply to your message. The message is delivered to the site owner by email through EmailJS. We do not add you to any mailing list from the contact form.</p>

      <h2>Spam protection</h2>
      <p>The contact form uses Cloudflare Turnstile to tell people from bots. Turnstile may process technical information from your browser, such as your IP address, under Cloudflare&apos;s own privacy policy.</p>

      <h2>Places you save</h2>
      <p>The &quot;My places&quot; list is stored only in your own browser (local storage). It is not sent to our servers, and clearing your browser data removes it.</p>

      <h2>Third-party content</h2>
      <p>The interactive map loads satellite imagery from Esri, and some photographs are loaded from Unsplash and Wikimedia Commons. When your browser requests those files, those providers can see standard technical information such as your IP address. The site is hosted on Vercel, which keeps standard server logs.</p>

      <h2>Cookies and analytics</h2>
      <p>At the time of writing, Deshscape does not use advertising cookies and does not run an analytics service. If we add analytics, advertising or affiliate tracking in the future, we will update this page first.</p>

      <h2>Your choices</h2>
      <p>You can ask us to delete a message you sent by writing through the <a href="/contact">contact page</a>. Because we keep very little data, there is usually nothing beyond the original email to remove.</p>

      <h2>Changes</h2>
      <p>We will update the date above whenever this policy changes.</p>
    </LegalShell>
  );
}
