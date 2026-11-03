"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { ArrowUpRight, MapPin, LocateFixed } from "lucide-react";
import { destinations } from "@/data/destinations";

const BangladeshLeafletMap = dynamic(() => import("@/components/BangladeshLeafletMap"), {
  ssr: false,
  loading: () => <div className="real-map-loading">Loading the map of Bangladesh…</div>
});

const locations = [
  { slug: "sajek-valley", label: "Sajek Valley" },
  { slug: "cox-s-bazar", label: "Cox's Bazar" },
  { slug: "ratargul-swamp-forest", label: "Ratargul" },
  { slug: "bichanakandi", label: "Bichanakandi" },
  { slug: "sundarbans", label: "Sundarbans" },
  { slug: "jaflong", label: "Jaflong" }
];

export default function ExploreMap() {
  const [activeSlug, setActiveSlug] = useState("sajek-valley");
  const active = destinations.find((place) => place.slug === activeSlug) ?? destinations[0];

  return (
    <section className="explore-map-section" id="map">
      <div className="section-wrap explore-map-heading">
        <div>
          <div className="eyebrow"><span /> EXPLORE BY LOCATION</div>
          <h2>Bangladesh, at<br /><em>a glance.</em></h2>
        </div>
        <p>Explore real map tiles, zoom into the landscape, and select a destination to learn more.</p>
      </div>

      <div className="explore-map-layout">
        <div className="real-map-frame">
          <BangladeshLeafletMap activeSlug={activeSlug} onSelect={setActiveSlug} />
          <div className="real-map-caption">LIVE MAP DATA · OPENSTREETMAP</div>
        </div>

        <aside className="map-place-panel">
          <div className="map-panel-top"><span><LocateFixed size={14} /> SELECTED DESTINATION</span><span>0{locations.findIndex((item) => item.slug === activeSlug) + 1} / 06</span></div>
          <div className="map-place-image" style={{ backgroundImage: `url(https://images.unsplash.com/${active.image}?auto=format&fit=crop&w=900&q=85)` }} />
          <div className="map-place-details">
            <span className="map-place-region"><MapPin size={13} /> {active.region}</span>
            <h3>{active.name}</h3>
            <span className="map-place-type">{active.tag}</span>
            <p>{active.shortDescription}</p>
            <Link className="map-place-link" href={`/destinations/${active.slug}`}>Explore destination <ArrowUpRight size={16} /></Link>
          </div>
          <div className="map-place-switcher">
            {locations.map((location) => (
              <button key={location.slug} type="button" className={activeSlug === location.slug ? "map-switch active" : "map-switch"} onClick={() => setActiveSlug(location.slug)}>{location.label}</button>
            ))}
          </div>
        </aside>
      </div>
      <div className="map-disclaimer section-wrap">Map tiles by OpenStreetMap contributors. Destination markers indicate approximate attraction areas and are not turn-by-turn navigation.</div>
    </section>
  );
}
