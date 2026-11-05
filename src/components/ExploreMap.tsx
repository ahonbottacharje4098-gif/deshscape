"use client";

import { useMemo, useState } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { ArrowUpRight, MapPin, LocateFixed, Search } from "lucide-react";
import { allDestinations } from "@/data/destinations";
import { destinationImageUrl } from "@/lib/destinationImage";
import { useLanguage } from "@/components/LanguageProvider";

function MapLoading() {\n  const { t } = useLanguage();\n  return <div className="real-map-loading">{t("Loading the map of Bangladesh…")}</div>;\n}\n\nconst BangladeshLeafletMap = dynamic(() => import("@/components/BangladeshLeafletMap"), {
  ssr: false,
  loading: () => <MapLoading />
});

export default function ExploreMap() {
  const { t } = useLanguage();
  const mappedPlaces = useMemo(() => allDestinations.filter((place) => place?.coordinates), []);
  const [activeSlug, setActiveSlug] = useState("lalbagh-fort");
  const [mapSearch, setMapSearch] = useState("");
  const active = mappedPlaces.find((place) => place.slug === activeSlug) ?? mappedPlaces[0];
  const searchResults = mappedPlaces.filter((place) =>
    `${place.name} ${t(place.name)} ${place.district} ${t(place.district)} ${place.type} ${t(place.type)}`.toLowerCase().includes(mapSearch.toLowerCase())
  );

  return (
    <section className="explore-map-section" id="map">
      <div className="section-wrap explore-map-heading">
        <div>
          <div className="eyebrow"><span /> {t("EXPLORE BY LOCATION")}</div>
          <h2>{t("Bangladesh, at")}<br /><em>{t("a glance.")}</em></h2>
        </div>
        <p>{t("Search destinations, explore the map and select a place to discover more.")}</p>
      </div>

      <div className="explore-map-layout">
        <div className="real-map-frame">
          <BangladeshLeafletMap activeSlug={activeSlug} onSelect={setActiveSlug} />
          <div className="real-map-caption">{t("BANGLADESH · 8 ADMINISTRATIVE DIVISIONS")}</div>
        </div>

        <aside className="map-place-panel">
          <label className="map-search-label" htmlFor="map-destination-search"><Search size={15} /> {t("FIND A PLACE")}</label>
          <input id="map-destination-search" className="map-search-input" value={mapSearch} onChange={(event) => setMapSearch(event.target.value)} placeholder={t("Search place or district…")} />
          {mapSearch && (
            <div className="map-search-results">
              {searchResults.slice(0, 8).map((place) => (
                <button key={place.slug} type="button" onClick={() => { setActiveSlug(place.slug); setMapSearch(""); }}>
                  <span>{t(place.name)}</span><small>{t(place.district)}</small>
                </button>
              ))}
              {searchResults.length === 0 && <p>{t("No matching places found.")}</p>}
            </div>
          )}
          {active ? (
            <>
              <div className="map-panel-top"><span><LocateFixed size={14} /> {t("SELECTED DESTINATION")}</span><span>{mappedPlaces.findIndex((item) => item.slug === activeSlug) + 1} / {mappedPlaces.length}</span></div>
              <div className="map-place-image" style={{ backgroundImage: `url(${destinationImageUrl(active.image, 1000)})` }} />
              <div className="map-place-details">
                <span className="map-place-region"><MapPin size={13} /> {t(active.district)}, {t(active.region)}</span>
                <h3>{t(active.name)}</h3>
                <span className="map-place-type">{t(active.tag)}</span>
                <p>{t(active.shortDescription)}</p>
                <Link className="map-place-link" href={`/destinations/${active.slug}`}>{t("Explore destination")} <ArrowUpRight size={16} /></Link>
              </div>
            </>
          ) : (
            <div className="map-place-details">
              <h3>{t("Map destinations coming soon")}</h3>
              <p>{t("There are no mapped destinations available right now. Please check back later.")}</p>
            </div>
          )}
          <div className="map-place-switcher">
            {searchResults.slice(0, 10).map((place) => (
              <button key={place.slug} type="button" className={activeSlug === place.slug ? "map-switch active" : "map-switch"} onClick={() => setActiveSlug(place.slug)}>{t(place.name)}</button>
            ))}
          </div>
        </aside>
      </div>
      <div className="map-disclaimer section-wrap">{t("Map imagery © Esri, Maxar, Earthstar Geographics and other contributors. Pins are approximate attraction-area markers, not turn-by-turn navigation. Verify exact locations and access locally.")}</div>
    </section>
  );
}
