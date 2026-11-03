import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ArrowUpRight, Compass, MapPin, Check, Info } from "lucide-react";
import { destinations } from "@/data/destinations";
import { destinationImageUrl } from "@/lib/destinationImage";
import DestinationGallery from "@/components/DestinationGallery";
import ShareDestination from "@/components/ShareDestination";
import SaveDestination from "@/components/SaveDestination";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return destinations.map((place) => ({ slug: place.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const place = destinations.find((item) => item.slug === slug);
  if (!place) return { title: "Destination not found | Deshscape" };
  return {
    title: `${place.name} | Deshscape`,
    description: place.shortDescription
  };
}

export default async function DestinationPage({ params }: Props) {
  const { slug } = await params;
  const place = destinations.find((item) => item.slug === slug);
  if (!place) notFound();

  const related = destinations.filter((item) => item.slug !== place.slug && item.type === place.type).slice(0, 2);

  return (
    <main className="detail-page">
      <header className="site-header detail-header">
        <Link className="brand" href="/">
          <span className="brand-mark"><Compass size={22} strokeWidth={1.7} /></span>
          <span className="brand-name">deshscape<span>.</span><small>THE ART OF DISCOVERY</small></span>
        </Link>
        <Link className="detail-back" href="/#destinations"><ArrowLeft size={15} /> All destinations</Link>
      </header>

      <nav className="detail-breadcrumb" aria-label="Breadcrumb">
        <Link href="/">Home</Link><span>/</span><Link href="/#destinations">Destinations</Link><span>/</span><span aria-current="page">{place.name}</span>
      </nav>

      <section className="detail-hero">
        <div className="detail-hero-image" style={{ backgroundImage: `url(${destinationImageUrl(place.image, 2200)})` }} />
        <div className="detail-hero-shade" />
        <div className="detail-hero-content">
          <div className="eyebrow light"><span /> {place.tag.toUpperCase()}</div>
          <div className="detail-location"><MapPin size={14} /> {place.region}</div>
          <h1>{place.name}<span>.</span></h1>
          <p>{place.shortDescription}</p>
        </div>
        <span className="detail-hero-index">DESHSCAPE / DESTINATIONS</span>
      </section>

      <section className="detail-content section-wrap">
        <div className="detail-main">
          <div className="eyebrow"><span /> GET TO KNOW THE PLACE</div>
          <h2>A little closer to<br /><em>somewhere special.</em></h2>
          <p className="detail-description">{place.description}</p>
          <div className="detail-highlights">
            <div className="eyebrow"><span /> THE EXPERIENCE</div>
            <h3>What makes it special</h3>
            <ul>{place.highlights.map((item) => <li key={item}><Check size={16} /> {item}</li>)}</ul>
          </div>
        </div>
        <aside className="detail-aside">
          <div className="detail-fact"><span>REGION</span><strong>{place.region}</strong></div>
          <div className="detail-fact"><span>DISTRICT</span><strong>{place.district}</strong></div>
          <div className="detail-fact"><span>EXPERIENCE</span><strong>{place.type}</strong></div>
          {place.coordinates && (
            <div className="detail-map-card">
              <div className="detail-map-heading"><MapPin size={16} /><span>FIND THIS PLACE</span></div>
              <p>See the location on an interactive OpenStreetMap.</p>
              <a
                className="detail-map-link"
                href={`https://www.openstreetmap.org/?mlat=${place.coordinates[0]}&mlon=${place.coordinates[1]}#map=13/${place.coordinates[0]}/${place.coordinates[1]}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                View on map <ArrowUpRight size={15} />
              </a>
              <small>{place.coordinates[0].toFixed(4)}, {place.coordinates[1].toFixed(4)}</small>
            </div>
          )}
          <div className="detail-note"><Info size={17} /><div><strong>Before you go</strong><p>Conditions, access and local guidance can change. Check current information before travelling.</p></div></div>
        </aside>
      </section>

      <DestinationGallery image={destinationImageUrl(place.image, 1800)} title={place.name} />
      <section className="section-wrap destination-share-wrap">
        <ShareDestination title={place.name} />
      </section>

      <section className="detail-travel section-wrap">
        <div className="eyebrow"><span /> TRAVEL NOTES</div>
        <h2>Travel thoughtfully.</h2>
        <div className="travel-note-grid">{place.travelNotes.map((note, index) => <div className="travel-note" key={note}><span>0{index + 1}</span><p>{note}</p></div>)}</div>
        <Link className="button button-dark" href="/#destinations">Explore more destinations <ArrowRight size={16} /></Link>
      </section>

      <section className="detail-route section-wrap">
        <div className="detail-route-copy">
          <div className="eyebrow"><span /> HOW TO REACH</div>
          <h2>Make your way to<br /><em>{place.name}.</em></h2>
          <p>Plan a route from your starting point and review the available roads and travel options before setting out.</p>
          <p className="detail-route-location"><MapPin size={15} /> {place.district}, Bangladesh</p>
          <a
            className="button button-dark detail-route-button"
            href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(`${place.name}, ${place.district}, Bangladesh`)}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Get directions <ArrowUpRight size={16} />
          </a>
          <small>Routes and travel times are provided by Google Maps and may change. Confirm local transport and access conditions before travelling.</small>
        </div>
        <div className="detail-route-art" aria-hidden="true">
          <div className="detail-route-ring"><Compass size={58} strokeWidth={1} /></div>
          <span>THE JOURNEY IS PART OF THE DISCOVERY</span>
        </div>
      </section>

      {related.length > 0 && <section className="related-section section-wrap">
        <div className="section-heading"><div><div className="eyebrow"><span /> KEEP EXPLORING</div><h2>More places to<br /><em>fall for.</em></h2></div><Link className="text-link heading-link" href="/#destinations">All destinations <ArrowUpRight size={16} /></Link></div>
        <div className="related-grid">{related.map((item) => <Link className="related-card" href={`/destinations/${item.slug}`} key={item.slug}><div className="related-image" style={{ backgroundImage: `url(${destinationImageUrl(item.image, 900)})` }} /><div><span>{item.region}</span><h3>{item.name}</h3></div><ArrowUpRight size={18} /></Link>)}</div>
      </section>}

      <footer className="site-footer detail-footer">
        <div className="footer-top"><Link className="brand footer-brand" href="/"><span className="brand-mark"><Compass size={22} /></span><span className="brand-name">deshscape<span>.</span><small>THE ART OF DISCOVERY</small></span></Link><p>Explore beyond the ordinary.<br />Discover Bangladesh, one journey at a time.</p><Link className="back-top" href="/#destinations">BACK TO DISCOVER <ArrowUpRight size={15} /></Link></div>
        <div className="footer-bottom"><span>© 2026 DESHSCAPE. MADE FOR THE CURIOUS.</span><span>INDEPENDENTLY INSPIRED BY BANGLADESH.</span></div>
      </footer>
    </main>
  );
}
