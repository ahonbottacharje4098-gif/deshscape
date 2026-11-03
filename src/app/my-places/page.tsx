"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Bookmark, Compass, MapPin, Trash2 } from "lucide-react";
import { destinations } from "@/data/destinations";
import { dhakaDivisionDestinations } from "@/data/dhakaDivision";

const allDestinations = [...destinations, ...dhakaDivisionDestinations];
import { destinationImageUrl } from "@/lib/destinationImage";

const STORAGE_KEY = "deshscape-saved-destinations";

export default function MyPlacesPage() {
  const [savedSlugs, setSavedSlugs] = useState<string[]>([]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const stored = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
      setSavedSlugs(Array.isArray(stored) ? stored.filter((item): item is string => typeof item === "string") : []);
    } catch {
      setSavedSlugs([]);
    }
    setReady(true);
  }, []);

  function removePlace(slug: string) {
    const next = savedSlugs.filter((item) => item !== slug);
    setSavedSlugs(next);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  }

  const savedPlaces = allDestinations.filter((place) => savedSlugs.includes(place.slug));

  return (
    <main className="my-places-page">
      <header className="site-header my-places-header">
        <Link className="brand" href="/">
          <span className="brand-mark"><Compass size={22} strokeWidth={1.7} /></span>
          <span className="brand-name">deshscape<span>.</span><small>THE ART OF DISCOVERY</small></span>
        </Link>
        <Link className="detail-back" href="/#destinations"><ArrowLeft size={15} /> Discover places</Link>
      </header>

      <section className="my-places-hero">
        <div className="eyebrow light"><span /> YOUR PERSONAL COLLECTION</div>
        <h1>My <em>Places.</em></h1>
        <p>Keep the places that inspire you close. Your saved destinations live here on this device.</p>
        <div className="my-places-count"><Bookmark size={15} /> {ready ? savedPlaces.length : "—"} SAVED {savedPlaces.length === 1 ? "PLACE" : "PLACES"}</div>
      </section>

      <section className="my-places-content">
        {!ready ? (
          <p className="my-places-loading">Loading your collection…</p>
        ) : savedPlaces.length > 0 ? (
          <div className="my-places-grid">
            {savedPlaces.map((place) => (
              <article className="my-place-card" key={place.slug}>
                <Link className="my-place-image" href={`/destinations/${place.slug}`} style={{ backgroundImage: `url(${destinationImageUrl(place.image, 1000)})` }} aria-label={`View ${place.name}`}>
                  <span>{place.tag}</span>
                </Link>
                <div className="my-place-copy">
                  <span className="my-place-location"><MapPin size={13} /> {place.region}</span>
                  <h2>{place.name}</h2>
                  <p>{place.shortDescription}</p>
                  <div className="my-place-actions">
                    <Link href={`/destinations/${place.slug}`}>EXPLORE PLACE <ArrowUpRight size={15} /></Link>
                    <button type="button" onClick={() => removePlace(place.slug)} aria-label={`Remove ${place.name} from My Places`}><Trash2 size={15} /> REMOVE</button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="my-places-empty">
            <span className="my-places-empty-icon"><Bookmark size={25} /></span>
            <div className="eyebrow"><span /> NOTHING SAVED YET</div>
            <h2>Your next favourite<br /><em>is out there.</em></h2>
            <p>When a destination catches your eye, choose “Save this place”. It will appear in this collection.</p>
            <Link className="button button-dark" href="/#destinations">Explore destinations <ArrowUpRight size={16} /></Link>
          </div>
        )}
        <p className="my-places-note">Saved places are stored only in this browser on this device. Clearing browser site data will remove this collection.</p>
      </section>

      <footer className="site-footer my-places-footer">
        <div className="footer-bottom"><span>© 2026 DESHSCAPE. MADE FOR THE CURIOUS.</span><Link href="/">BACK TO HOME <ArrowUpRight size={14} /></Link></div>
      </footer>
    </main>
  );
}
