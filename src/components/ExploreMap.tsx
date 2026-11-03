"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, MapPin, Compass, LocateFixed } from "lucide-react";
import { destinations } from "@/data/destinations";

const locations = [
  { slug: "sajek-valley", x: 75, y: 30, label: "Sajek Valley", area: "Rangamati" },
  { slug: "cox-s-bazar", x: 65, y: 76, label: "Cox's Bazar", area: "Chattogram" },
  { slug: "ratargul-swamp-forest", x: 35, y: 23, label: "Ratargul", area: "Sylhet" },
  { slug: "bichanakandi", x: 40, y: 17, label: "Bichanakandi", area: "Sylhet" },
  { slug: "sundarbans", x: 23, y: 69, label: "Sundarbans", area: "Khulna" },
  { slug: "jaflong", x: 45, y: 12, label: "Jaflong", area: "Sylhet" },
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
        <p>Pick a pin and discover a new corner of the country. Your next journey might be closer than you think.</p>
      </div>

      <div className="explore-map-layout">
        <div className="map-canvas" aria-label="Illustrated map of Bangladesh with selectable destination markers">
          <div className="map-grid-lines" />
          <div className="map-water-label water-north">INDIA</div>
          <div className="map-water-label water-east">INDIA / MYANMAR</div>
          <svg className="bangladesh-shape" viewBox="0 0 500 620" role="img" aria-label="Stylised outline representing Bangladesh">
            <defs>
              <linearGradient id="landGradient" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#c7d2b9" />
                <stop offset="100%" stopColor="#8fa68e" />
              </linearGradient>
              <pattern id="landTexture" width="24" height="24" patternUnits="userSpaceOnUse">
                <circle cx="5" cy="7" r="1" fill="#6f8b75" opacity=".18" />
                <path d="M0 19 Q12 13 24 19" fill="none" stroke="#6f8b75" strokeWidth=".7" opacity=".13" />
              </pattern>
            </defs>
            <path className="land-shadow" d="M139 25 L191 39 224 25 264 54 302 48 326 80 365 88 356 124 389 146 375 185 401 220 380 255 394 289 366 324 378 363 351 396 357 436 330 470 311 511 280 535 267 581 239 565 225 528 195 509 180 473 151 454 145 418 117 392 123 354 97 323 108 287 82 257 98 222 78 191 105 162 91 128 120 105 115 70 Z" />
            <path d="M139 25 L191 39 224 25 264 54 302 48 326 80 365 88 356 124 389 146 375 185 401 220 380 255 394 289 366 324 378 363 351 396 357 436 330 470 311 511 280 535 267 581 239 565 225 528 195 509 180 473 151 454 145 418 117 392 123 354 97 323 108 287 82 257 98 222 78 191 105 162 91 128 120 105 115 70 Z" fill="url(#landGradient)" stroke="#66816d" strokeWidth="3" strokeLinejoin="round" />
            <path d="M139 25 L191 39 224 25 264 54 302 48 326 80 365 88 356 124 389 146 375 185 401 220 380 255 394 289 366 324 378 363 351 396 357 436 330 470 311 511 280 535 267 581 239 565 225 528 195 509 180 473 151 454 145 418 117 392 123 354 97 323 108 287 82 257 98 222 78 191 105 162 91 128 120 105 115 70 Z" fill="url(#landTexture)" />
            <path d="M125 185 Q205 200 355 185 M110 290 Q220 275 382 300 M135 390 Q225 365 360 395 M175 475 Q235 450 330 470" fill="none" stroke="#f3f1e7" strokeWidth="2" opacity=".45" strokeDasharray="5 7" />
            <path d="M95 225 Q180 250 250 230 T385 250 M115 335 Q190 315 270 340 T370 350" fill="none" stroke="#6f9d9a" strokeWidth="5" opacity=".55" strokeLinecap="round" />
          </svg>
          <div className="map-country-label">BANGLADESH</div>
          {locations.map((location) => {
            const selected = activeSlug === location.slug;
            return (
              <button
                type="button"
                key={location.slug}
                className={selected ? "map-pin active" : "map-pin"}
                style={{ left: `${location.x}%`, top: `${location.y}%` }}
                onClick={() => setActiveSlug(location.slug)}
                aria-label={`Show ${location.label}`}
                aria-pressed={selected}
              >
                <span className="map-pin-dot"><MapPin size={14} fill="currentColor" /></span>
                <span className="map-pin-label">{location.label}</span>
              </button>
            );
          })}
          <div className="map-legend"><span /> FEATURED PLACES</div>
          <div className="map-compass"><Compass size={22} /><small>N</small></div>
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
      <div className="map-disclaimer section-wrap">A stylised discovery map showing featured destinations — marker positions are illustrative, not for navigation.</div>
    </section>
  );
}
