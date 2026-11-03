"use client";

import { useMemo, useState } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { ArrowUpRight, MapPin, LocateFixed, Search } from "lucide-react";
import { destinations } from "@/data/destinations";

const BangladeshLeafletMap = dynamic(() => import("@/components/BangladeshLeafletMap"), {
  ssr: false,
  loading: () => <div className="real-map-loading">Loading the map of Bangladesh…</div>
});

export default function ExploreMap() {
  const mappedPlaces = useMemo(() => destinations.filter((place) => place.coordinates), []);
  const [activeSlug, setActiveSlug] = useState("lalbagh-fort");
  const [mapSearch, setMapSearch] = useState("");
  const active = destinations.find((place) => place.slug === activeSlug) ?? mappedPlaces[0];
  const searchResults = mappedPlaces.filter((place) =>
    `${place.name} ${place.district} ${place.type}`.toLowerCase().includes(mapSearch.toLowerCase())
  );

  return (
    <section className="explore-map-section" id="map">
      <div className="section-wrap explore-map-heading">
        <div>
          <div className="eyebrow"><span /> EXPLORE BY LOCATION</div>
          <h2>Bangladesh, at<br /><em>a glance.</em></h2>
        </div>
        <p>Search destinations, explore the map and select a place to discover more.</p>
      </div>

      <div className="explore-map-layout">
        <div className="real-map-frame">
          <BangladeshLeafletMap activeSlug={activeSlug} onSelect={setActiveSlug} />
          <div className="real-map-caption">LIVE MAP DATA · OPENSTREETMAP</div>
        </div>

        <aside className="map-place-panel">
          <label className="map-search-label" htmlFor="map-destination-search"><Search size={15} /> FIND A PLACE</label>
          <input id="map-destination-search" className="map-search-input" value={mapSearch} onChange={(event) => setMapSearch(event.target.value)} placeholder="Search place or district…" />
          {mapSearch && (
            <div className="map-search-results">
              {searchResults.slice(0, 8).map((place) => (
                <button key={place.slug} type="button" onClick={() => { setActiveSlug(place.slug); setMapSearch(""); }}>
                  <span>{place.name}</span><small>{place.district}</small>
                </button>
              ))}
              {searchResults.length === 0 && <p>No matching places found.</p>}
            </div>
          )}
          <div className="map-panel-top"><span><LocateFixed size={14} /> SELECTED DESTINATION</span><span>{mappedPlaces.findIndex((item) => item.slug === activeSlug) + 1} / {mappedPlaces.length}</span></div>
          <div className="map-place-image" style={{ backgroundImage: `url(https://images.unsplash.com/${active.image}?auto=format&fit=crop&w=900&q=85)` }} />
          <div className="map-place-details">
            <span className="map-place-region"><MapPin size={13} /> {active.district}, {active.region}</span>
            <h3>{active.name}</h3>
            <span className="map-place-type">{active.tag}</span>
            <p>{active.shortDescription}</p>
            <Link className="map-place-link" href={`/destinations/${active.slug}`}>Explore destination <ArrowUpRight size={16} /></Link>
          </div>
          <div className="map-place-switcher">
            {searchResults.slice(0, 10).map((place) => (
              <button key={place.slug} type="button" className={activeSlug === place.slug ? "map-switch active" : "map-switch"} onClick={() => setActiveSlug(place.slug)}>{place.name}</button>
            ))}
          </div>
        </aside>
      </div>
      <div className="map-disclaimer section-wrap">Map tiles © OpenStreetMap contributors. Pins are approximate attraction-area markers, not turn-by-turn navigation. Verify exact locations and access locally.</div>
    </section>
  );
}
