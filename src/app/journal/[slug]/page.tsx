import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Compass, MapPin } from "lucide-react";
import { destinations } from "@/data/destinations";
import { destinationImageUrl } from "@/lib/destinationImage";
import ShareStory from "@/components/ShareStory";
import ReadingProgress from "@/components/ReadingProgress";
import BackToTop from "@/components/BackToTop";
import AutoTranslate from "@/components/AutoTranslate";

type Story = {
  slug: string;
  number: string;
  category: string;
  title: string;
  location: string;
  image: string;
  intro: string;
  paragraphs: string[];
  note: string;
};

const stories: Story[] = [
  {
    slug: "river-town-rhythm",
    number: "01",
    category: "PEOPLE & CULTURE",
    title: "The rhythm of a river town",
    location: "Goalanda, Rajbari",
    image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=2000&q=85",
    intro: "Along the Padma, the river is more than a line on a map. It is part of the everyday rhythm of the communities that call its banks home.",
    paragraphs: [
      "A river town asks you to slow down and pay attention. The water changes its character with the light, boats move across familiar routes, and the riverbank becomes a meeting place for work, conversation and quiet observation.",
      "In places such as Goalanda, the Padma is closely connected with local identity and movement. Its presence can be felt in the landscape and in the routines of people whose lives are shaped by the river.",
      "The most memorable part of a visit may be a simple moment: watching the changing water, noticing the activity around a landing point, or listening to the stories people share about their home.",
      "Travel with care around river edges and ferry areas. Conditions can change, so follow local guidance, respect working spaces and check current transport information before setting out."
    ],
    note: "A closer look at life beside the Padma"
  },
  {
    slug: "beyond-tea-gardens",
    number: "02",
    category: "HIDDEN BANGLADESH",
    title: "Beyond the tea gardens",
    location: "Sylhet",
    image: "https://images.unsplash.com/photo-1563911302283-d2bc129e7570?auto=format&fit=crop&w=2000&q=85",
    intro: "Sylhet's green landscapes invite a slower kind of journey. Look beyond the familiar views and discover the small details that give the northeast its character.",
    paragraphs: [
      "The tea-growing landscapes of the northeast are often remembered for their rolling green patterns. Seen from a distance, the hills and gardens can feel almost endless; up close, the details tell a more varied story.",
      "A thoughtful visit is about more than taking photographs. Notice the changing shapes of the land, the quiet roads between settlements and the everyday life that continues around these working landscapes.",
      "Give yourself time to pause, learn about the place and appreciate it without disturbing the people who live and work there. Choose public viewpoints and respect signs, private property and local instructions.",
      "Weather and access can vary by season and location. Check local conditions before travelling, and leave the landscape as you found it."
    ],
    note: "A field note from the green northeast"
  }  ,
  {
    slug: "stone-stories-of-kantajew",
    number: "03",
    category: "ART & HERITAGE",
    title: "Stone stories of Kantajew",
    location: "Dinajpur",
    image: "https://images.unsplash.com/photo-1606293926075-69a00db7562f?auto=format&fit=crop&w=2000&q=85",
    intro: "At Kantajew Temple, the outer walls invite a closer look. Their terracotta decoration makes the historic building feel like a record of artistic skill, stories and life in Bengal.",
    paragraphs: [
      "The temple is widely recognised for its elaborate terracotta surface. Rather than treating the building as a single distant view, take time to notice how the panels, patterns and repeated details create a richly textured whole.",
      "Architectural heritage is best experienced with patience. Observe the craftsmanship from the visitor areas, and remember that the structure is both a historic monument and a place with cultural and religious meaning.",
      "A visit can also be an opportunity to learn about the wider history of Dinajpur. Local interpretation and reliable site information can add context that photographs alone cannot provide.",
      "Opening arrangements and visitor access may change. Check current local guidance before travelling, dress respectfully and avoid touching or damaging the historic surfaces."
    ],
    note: "An architectural field note from the north"
  },
  {
    slug: "a-quiet-world-in-ratargul",
    number: "04",
    category: "HIDDEN BANGLADESH",
    title: "A quiet world in Ratargul",
    location: "Sylhet",
    image: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=2000&q=85",
    intro: "Ratargul is known for its freshwater swamp forest, where trees and waterways shape a landscape that feels closely connected to the rhythm of the seasons.",
    paragraphs: [
      "The character of a swamp forest changes with the water. Seasonal levels influence how the landscape appears, which routes are accessible and what visitors can observe from permitted areas.",
      "A thoughtful visit is about appreciating the ecosystem rather than rushing through it. Notice the relationship between the trees, water and surrounding wetland environment, while keeping noise and disturbance to a minimum.",
      "Local guidance matters in a wetland. Use authorised routes and boat services where applicable, follow safety instructions and avoid entering sensitive areas or disturbing wildlife.",
      "Before setting out, check weather, water conditions and current access arrangements with reliable local sources. Take all rubbish back with you and leave the forest as undisturbed as possible."
    ],
    note: "A gentle introduction to a living wetland"
  },
  {
    slug: "courtyards-and-memory-at-baliati",
    number: "05",
    category: "ART & HERITAGE",
    title: "Courtyards and memory at Baliati",
    location: "Manikganj",
    image: "https://images.unsplash.com/photo-1590123732197-e707a7d1a2b2?auto=format&fit=crop&w=2000&q=85",
    intro: "Baliati Palace is a heritage complex whose courtyards and historic façades offer a window into the architectural and social history of the region.",
    paragraphs: [
      "The scale of a palace complex is often easiest to understand by moving slowly through its open spaces. Courtyards, entrances and repeated architectural details help visitors read the relationship between the buildings.",
      "Historic places are more than backdrops. They carry memories of the people who built, used and maintained them, and they deserve care from everyone who visits.",
      "Look closely at the craftsmanship without touching fragile surfaces. Follow marked visitor routes, respect any restricted spaces and give other visitors room to experience the site.",
      "Museum hours, maintenance and public access can change. Confirm current arrangements before travelling and follow the site's photography and preservation rules."
    ],
    note: "A heritage walk through historic courtyards"
  }
];

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return stories.map((story) => ({ slug: story.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const story = stories.find((item) => item.slug === slug);
  if (!story) return { title: "Story not found | Deshscape" };
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

  const relatedSlugs = story.slug === "river-town-rhythm"
    ? ["goalanda-ghat", "hardinge-bridge"]
    : story.slug === "beyond-tea-gardens" ? ["jaflong", "ratargul-swamp-forest", "lalakhal"]
    : story.slug === "stone-stories-of-kantajew" ? ["kantajew-temple", "tajhat-palace"]
    : story.slug === "a-quiet-world-in-ratargul" ? ["ratargul-swamp-forest", "lalakhal", "jaflong"]
    : ["baliati-palace", "idrakpur-fort"];
  const relatedPlaces = relatedSlugs
    .map((relatedSlug) => destinations.find((place) => place.slug === relatedSlug))
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
    <main className="journal-article-page">
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
          <span className="journal-article-number">FIELD NOTE {story.number}</span>
          <h1>{story.title}<span>.</span></h1>
          <p><MapPin size={15} /> {story.location}, Bangladesh <span className="journal-reading-time">· {readingMinutes} MIN READ</span></p>
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
  );
}
