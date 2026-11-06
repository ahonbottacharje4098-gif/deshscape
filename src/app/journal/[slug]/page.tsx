import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Compass, MapPin } from "lucide-react";
import { allDestinations } from "@/data/destinations";
import { destinationImageUrl } from "@/lib/destinationImage";
import ShareStory from "@/components/ShareStory";
import ReadingProgress from "@/components/ReadingProgress";
import BackToTop from "@/components/BackToTop";
import AutoTranslate from "@/components/AutoTranslate";

import { journalStories as stories } from "@/data/journalStories";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return stories.map((story) => ({ slug: story.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const story = stories.find((item) => item.slug === slug);
  if (!story) return { title: "Story not found" };
  const canonicalUrl = `https://deshscape.vercel.app/journal/${story.slug}`;
  return {
    title: `${story.title} — Deshscape Journal`,
    description: story.intro,
    keywords: ["Bangladesh travel", "Deshscape Journal", story.category.toLowerCase(), story.location, story.title],
    alternates: { canonical: canonicalUrl },
    openGraph: {
      type: "article",
      url: canonicalUrl,
      title: `${story.title} | Deshscape Journal`,
      description: story.intro,
      images: [{ url: story.image, alt: `${story.title} — ${story.location}, Bangladesh` }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${story.title} | Deshscape Journal`,
      description: story.intro,
      images: [story.image],
    },
  };
}

export default async function JournalStoryPage({ params }: Props) {
  const { slug } = await params;
  const story = stories.find((item) => item.slug === slug);
  if (!story) notFound();

  const relatedPlaces = story.relatedDestinationSlugs
    .map((relatedSlug) => allDestinations.find((place) => place.slug === relatedSlug))
    .filter((place) => place !== undefined);
  const articleWordCount = [story.intro, ...story.paragraphs].join(" ").trim().split(/\s+/).length;
  const readingMinutes = Math.max(1, Math.ceil(articleWordCount / 200));
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: story.title,
    description: story.intro,
    image: story.image,
    articleSection: story.category,
    wordCount: articleWordCount,
    inLanguage: "en",
    mainEntityOfPage: `https://deshscape.vercel.app/journal/${story.slug}`,
    author: { "@type": "Organization", name: "Deshscape" },
    publisher: { "@type": "Organization", name: "Deshscape" },
    contentLocation: {
      "@type": "Place",
      name: `${story.location}, Bangladesh`,
    },
  };

  return (
    <AutoTranslate>
    <main id="main-content" tabIndex={-1} className="journal-article-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }}
      />
      <ReadingProgress />
      <BackToTop />
      <header className="site-header">
        <Link className="brand" href="/" aria-label="Deshscape home">
          <span className="brand-mark"><Compass size={22} strokeWidth={1.7} /></span>
          <span className="brand-name">deshscape<span>.</span><small>THE ART OF DISCOVERY</small></span>
        </Link>
        <nav className="main-nav">
          <Link className="nav-link" href="/">Discover</Link>
          <Link className="nav-link" href="/#destinations">Destinations</Link>
          <Link className="nav-link active" href="/journal">Journal</Link>
        </nav>
        <div className="header-actions"><Link className="plan-link" href="/plan-trip">Plan a trip <ArrowUpRight size={15} /></Link></div>
      </header>

      <nav className="detail-breadcrumb journal-breadcrumb" aria-label="Breadcrumb">
        <Link href="/">Home</Link><span>/</span><Link href="/journal">Journal</Link><span>/</span><span aria-current="page">{story.title}</span>
      </nav>

      <section className="journal-article-hero">
        <div className="journal-article-cover" style={{ backgroundImage: `url("${story.image}")` }} />
        <div className="journal-article-shade" />
        <div className="journal-article-hero-copy">
          <Link className="journal-back-link" href="/journal"><ArrowLeft size={14} /> BACK TO JOURNAL</Link>
          <div className="eyebrow light"><span /> {story.category}</div>
          <span className="journal-article-number">{"FIELD NOTE"} {story.number}</span>
          <h1>{story.title}<span>.</span></h1>
          <p><MapPin size={15} /> {story.location}, Bangladesh <span className="journal-reading-time">· {readingMinutes} {"MIN READ"}</span></p>
        </div>
      </section>

      <article className="journal-article-body">
        <p className="journal-article-intro">{story.intro}</p>
        <div className="journal-article-divider"><span /> {story.note} <span /></div>
        {story.paragraphs.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
        <aside className="journal-article-note">
          <Compass size={20} />
          <div><strong>Explore thoughtfully</strong><span>These stories are editorial inspiration, not live travel updates. Confirm local conditions and access before visiting.</span></div>
        </aside>
        <ShareStory title={story.title} />
        <Link className="journal-article-explore" href="/#destinations">DISCOVER DESTINATIONS <ArrowUpRight size={16} /></Link>
      </article>

      {relatedPlaces.length > 0 && (
        <section className="related-section section-wrap journal-related-section">
          <div className="section-heading">
            <div>
              <div className="eyebrow"><span /> CONTINUE THE JOURNEY</div>
              <h2>Explore places<br /><em>in the story.</em></h2>
            </div>
            <Link className="text-link heading-link" href="/#destinations">All destinations <ArrowUpRight size={16} /></Link>
          </div>
          <div className="related-grid">
            {relatedPlaces.map((place) => (
              <Link className="related-card" href={`/destinations/${place.slug}`} key={place.slug}>
                <div className="related-image" style={{ backgroundImage: `url(${destinationImageUrl(place.image, 900)})` }} />
                <div><span>{place.region}</span><h3>{place.name}</h3></div>
                <ArrowUpRight size={18} />
              </Link>
            ))}
          </div>
        </section>
      )}

      <footer className="site-footer">
        <div className="footer-top">
          <Link className="brand footer-brand" href="/"><span className="brand-mark"><Compass size={22} /></span><span className="brand-name">deshscape<span>.</span><small>THE ART OF DISCOVERY</small></span></Link>
          <p>Explore beyond the ordinary.<br />Discover Bangladesh, one journey at a time.</p>
          <Link className="back-top" href="/journal">BACK TO JOURNAL <ArrowUpRight size={15} /></Link>
        </div>
        <div className="footer-bottom"><span>© 2026 DESHSCAPE. MADE FOR THE CURIOUS.</span><span>INDEPENDENTLY INSPIRED BY BANGLADESH.</span></div>
      </footer>
    </main>
    </AutoTranslate>
  );
}
