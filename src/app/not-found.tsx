import Link from "next/link";
import { ArrowLeft, Compass } from "lucide-react";
import AutoTranslate from "@/components/AutoTranslate";

export default function NotFound() {
  return (
    <AutoTranslate>
    <main className="not-found-page">
      <Link className="brand not-found-brand" href="/" aria-label="Deshscape home">
        <span className="brand-mark"><Compass size={22} strokeWidth={1.7} /></span>
        <span className="brand-name">deshscape<span>.</span><small>THE ART OF DISCOVERY</small></span>
      </Link>
      <div className="not-found-content">
        <span className="not-found-code">404 / OFF THE MAP</span>
        <h1>Looks like this<br /><em>path ends here.</em></h1>
        <p>The page you are looking for may have moved, or the address may be incorrect. Let’s get you back to exploring.</p>
        <Link className="not-found-home" href="/"><ArrowLeft size={16} /> BACK TO DISCOVER</Link>
      </div>
      <span className="not-found-coordinate">BANGLADESH · 23° 41' N / 90° 21' E</span>
    </main>
    </AutoTranslate>
  );
}
