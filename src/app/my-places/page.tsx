"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Bookmark, Compass, MapPin, Trash2 } from "lucide-react";
import { allDestinations } from "@/data/destinations";
import { destinationImageUrl } from "@/lib/destinationImage";
import { useLanguage } from "@/components/LanguageProvider";
import {
  readSavedDestinations,
  SAVED_DESTINATIONS_EVENT,
  writeSavedDestinations,
} from "@/lib/savedDestinations";

export default function MyPlacesPage() {
  const { t } = useLanguage();
  const [savedSlugs, setSavedSlugs] = useState<string[]>([]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const syncSavedPlaces = () => setSavedSlugs(readSavedDestinations());
    syncSavedPlaces();
    setReady(true);
    window.addEventListener(SAVED_DESTINATIONS_EVENT, syncSavedPlaces);
    window.addEventListener("storage", syncSavedPlaces);
    return () => {
      window.removeEventListener(SAVED_DESTINATIONS_EVENT, syncSavedPlaces);
      window.removeEventListener("storage", syncSavedPlaces);
    };
  }, []);

  function removePlace(slug: string) {
    const next = savedSlugs.filter((item) => item !== slug);
    writeSavedDestinations(next);
  }

  const savedPlaces = allDestinations.filter((place) => savedSlugs.includes(place.slug));

  return (
    <main id="main-content" tabIndex={-1} className="my-places-page">
      <header className="site-header my-places-header">
        <Link className="brand" href="/">
          <span className="brand-mark"><Compass size={22} strokeWidth={1.7} /></span>
          <span className="brand-name">deshscape<span>.</span><small>{t("THE ART OF DISCOVERY")}</small></span>
        </Link>
        <Link className="detail-back" href="/#destinations"><ArrowLeft size={15} /> {t("Discover places")}</Link>
      </header>

      <section className="my-places-hero">
        <div className="eyebrow light"><span /> {t("YOUR PERSONAL COLLECTION")}</div>
        <h1>{t("My")} <em>{t("Places.")}</em></h1>
        <p>{t("Keep the places that inspire you close. Your saved destinations live here on this device.")}</p>
        <div className="my-places-count"><Bookmark size={15} /> {ready ? savedPlaces.length : "—"} {t("SAVED")} {savedPlaces.length === 1 ? t("PLACE") : t("PLACES")}</div>
      </section>

      <section className="my-places-content">
        {!ready ? (
          <p className="my-places-loading">{t("Loading your collection…")}</p>
        ) : savedPlaces.length > 0 ? (
          <div className="my-places-grid">
            {savedPlaces.map((place) => (
              <article className="my-place-card" key={place.slug}>
                <Link className="my-place-image" href={`/destinations/${place.slug}`} style={{ backgroundImage: `url(${destinationImageUrl(place.image, 1000)})` }} aria-label={`${t("View")} ${t(place.name)}`}>
                  <span>{t(place.tag)}</span>
                </Link>
                <div className="my-place-copy">
                  <span className="my-place-location"><MapPin size={13} /> {t(place.region)}</span>
                  <h2>{t(place.name)}</h2>
                  <p>{t(place.shortDescription)}</p>
                  <div className="my-place-actions">
                    <Link href={`/destinations/${place.slug}`}>{t("EXPLORE PLACE")} <ArrowUpRight size={15} /></Link>
                    <button type="button" onClick={() => removePlace(place.slug)} aria-label={`${t("Remove")} ${t(place.name)} ${t("from My Places")}`}><Trash2 size={15} /> {t("REMOVE")}</button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="my-places-empty">
            <span className="my-places-empty-icon"><Bookmark size={25} /></span>
            <div className="eyebrow"><span /> {t("NOTHING SAVED YET")}</div>
            <h2>{t("Your next favourite")}<br /><em>{t("is out there.")}</em></h2>
            <p>{t("When a destination catches your eye, choose “Save this place”. It will appear in this collection.")}</p>
            <Link className="button button-dark" href="/#destinations">{t("Explore destinations")} <ArrowUpRight size={16} /></Link>
          </div>
        )}
        <p className="my-places-note">{t("Saved places are stored only in this browser on this device. Clearing browser site data will remove this collection.")}</p>
      </section>

      <footer className="site-footer my-places-footer">
        <div className="footer-bottom"><span>{t("© 2026 DESHSCAPE. MADE FOR THE CURIOUS.")}</span><Link href="/">{t("BACK TO HOME")} <ArrowUpRight size={14} /></Link><span className="footer-credit">Made by Badhan</span></div>
      </footer>
    </main>
  );
}
