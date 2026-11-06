import { ArrowLeft, Compass } from "lucide-react";
import FooterLegal from "@/components/FooterLegal";

export default function LegalShell({ eyebrow, title, updated, children }: Readonly<{ eyebrow: string; title: string; updated: string; children: React.ReactNode }>) {
  return (
    <main id="main-content" tabIndex={-1} className="legal-page">
      <header className="legal-header">
        <a className="brand" href="/" aria-label="Deshscape home"><span className="brand-mark"><Compass size={22} /></span><span className="brand-name">deshscape<span>.</span><small>THE ART OF DISCOVERY</small></span></a>
        <a className="legal-back" href="/"><ArrowLeft size={14} /> BACK TO HOME</a>
      </header>
      <article className="legal-body">
        <span className="legal-eyebrow">{eyebrow}</span>
        <h1>{title}</h1>
        <p className="legal-updated">Last updated: {updated}</p>
        {children}
      </article>
      <footer className="site-footer">
        <div className="footer-bottom"><span>© 2026 DESHSCAPE. MADE FOR THE CURIOUS.</span><FooterLegal /><a className="footer-contact-link" href="/contact">CONTACT</a></div>
      </footer>
    </main>
  );
}
