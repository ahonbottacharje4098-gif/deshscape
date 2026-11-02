"use client";

import { useMemo, useState } from "react";
import {
  ArrowDown, ArrowRight, ArrowUpRight, Compass, MapPin, Menu, Search,
  Sparkles, X, Mountain, Waves, Trees, Landmark, Footprints, Instagram,
  Facebook, Youtube, ChevronDown
} from "lucide-react";

const destinations = [
  { name: "Sajek Valley", region: "Rangamati, Chattogram", type: "Mountains", image: "photo-1500530855697-b586d89ba3ee", tag: "Mountain escape" },
  { name: "Cox's Bazar", region: "Cox's Bazar, Chattogram", type: "Sea & beach", image: "photo-1500375592092-40eb2168fd21", tag: "Coastal wonder" },
  { name: "Ratargul Swamp Forest", region: "Sylhet", type: "Forest", image: "photo-1441974231531-c6227db76b6e", tag: "Into the wild" },
  { name: "Bichanakandi", region: "Sylhet", type: "Rivers", image: "photo-1470770841072-f978cf4d019e", tag: "Hidden gem" },
  { name: "Sundarbans", region: "Khulna", type: "Forest", image: "photo-1511497584788-876760111969", tag: "World heritage" },
  { name: "Jaflong", region: "Sylhet", type: "Nature", image: "photo-1472396961693-142e6e269027", tag: "Nature retreat" }
];

const categories = [
  { label: "Mountains", icon: Mountain, count: "12 places" },
  { label: "Beaches", icon: Waves, count: "08 places" },
  { label: "Forests", icon: Trees, count: "15 places" },
  { label: "Heritage", icon: Landmark, count: "24 places" }
];

export default function Home() {
  const [query, setQuery] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const filtered = useMemo(() => destinations.filter((place) =>
    (place.name + " " + place.region + " " + place.type).toLowerCase().includes(query.toLowerCase())
  ), [query]);

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#" aria-label="Deshscape home">
          <span className="brand-mark"><Compass size={22} strokeWidth={1.7} /></span>
          <span className="brand-name">deshscape<span>.</span><small>THE ART OF DISCOVERY</small></span>
        </a>
        <nav className={menuOpen ? "main-nav open" : "main-nav"}>
          <a className="nav-link active" href="#">Discover</a>
          <a className="nav-link" href="#destinations">Destinations</a>
          <a className="nav-link" href="#map">Explore map</a>
          <a className="nav-link" href="#stories">Stories</a>
          <a className="nav-link mobile-only" href="#planner">Plan a trip</a>
        </nav>
        <div className="header-actions">
          <a className="plan-link" href="#planner">Plan a trip <ArrowUpRight size={15} /></a>
          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      <section className="hero">
        <div className="hero-image" />
        <div className="hero-shade" />
        <div className="hero-content">
          <div className="eyebrow light"><span /> A DIFFERENT SIDE OF BANGLADESH</div>
          <h1>Find your<br /><em>somewhere.</em></h1>
          <p className="hero-copy">Beyond the familiar. Into the extraordinary.<br />Your next story begins somewhere in Bangladesh.</p>
          <a className="button button-light" href="#destinations">Start exploring <ArrowRight size={17} /></a>
        </div>
        <div className="hero-bottom">
          <span>22° 20' 12.0&quot; N &nbsp; 91° 50' 07.0&quot; E</span>
          <span className="hero-scroll"><span className="scroll-line" /> SCROLL TO DISCOVER</span>
          <span>CHAPTER 01 — THE LAND</span>
        </div>
        <div className="hero-index">01 <span>/ 06</span></div>
      </section>

      <section className="intro section-wrap">
        <div className="eyebrow"><span /> NOT JUST A DESTINATION</div>
        <div className="intro-grid">
          <h2>A country of a<br /><em>thousand</em> stories.</h2>
          <div className="intro-text">
            <p>There is more to Bangladesh than meets the eye. From mist-covered hills and quiet rivers to ancient architecture and vibrant local life — discover the places that make this land unforgettable.</p>
            <a className="text-link" href="#destinations">Get to know Bangladesh <ArrowUpRight size={16} /></a>
          </div>
        </div>
        <div className="stats-row">
          <div><strong>64</strong><span>Districts to discover</span></div>
          <div><strong>8</strong><spanUnique>Divisions across the land</spanUnique></div>
          <div><strong>∞</strong><span>Stories waiting to unfold</span></div>
          <div className="stats-note">A LITTLE COUNTRY.<br />A LOT TO EXPLORE.</div>
        </div>
      </section>

      <section className="destinations-section" id="destinations">
        <div className="section-wrap">
          <div className="section-heading">
            <div><div className="eyebrow"><span /> THE COLLECTION</div><h2>Places worth<br /><em>getting lost in.</em></h2></div>
            <a className="text-link heading-link" href="#map">Explore all destinations <ArrowUpRight size={16} /></a>
          </div>
          <div className="search-box">
            <Search size={19} />
            <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search places, districts, experiences..." aria-label="Search destinations" />
            <span>DISCOVER</span>
          </div>
          <div className="destination-grid">
            {filtered.map((place, index) => (
              <a className={index === 0 ? "destination-card featured" : "destination-card"} href="#planner" key={place.name}>
                <div className="destination-image" style={{ backgroundImage: `url(https://images.unsplash.com/${place.image}?auto=format&fit=crop&w=1100&q=85)` }} />
                <div className="destination-overlay" />
                <span className="destination-tag">{place.tag}</span>
                <div className="destination-info"><span><MapPin size={13} /> {place.region}</span><h3>{place.name}</h3><div className="card-bottom"><small>{place.type}</small><i><ArrowUpRight size={17} /></i></div></div>
              </a>
            ))}
            {filtered.length === 0 && <p className="empty-state">No places found. Try another search.</p>}
          </div>
        </div>
      </section>

      <section className="categories-section section-wrap">
        <div className="eyebrow"><span /> FIND YOUR KIND OF ESCAPE</div>
        <div className="category-heading"><h2>What moves <em>you?</em></h2><p>Every journey has a feeling. Find the landscape<br />that speaks your language.</p></div>
        <div className="category-grid">
          {categories.map(({ label, icon: Icon, count }) => <a href="#destinations" className="category-item" key={label}><span className="category-icon"><Icon size={23} strokeWidth={1.5} /></span><span className="category-name">{label}</span><span className="category-count">{count}</span><ArrowUpRight className="category-arrow" size={17} /></a>)}
        </div>
      </section>

      <section className="map-feature" id="map">
        <div className="map-photo" />
        <div className="map-copy">
          <div className="eyebrow light"><span /> THE WHOLE COUNTRY, IN YOUR HANDS</div>
          <h2>64 districts.<br /><em>Endless</em> discoveries.</h2>
          <p>From the tea gardens of Sylhet to the shores of the south — explore Bangladesh district by district. Your map to somewhere wonderful.</p>
          <a className="button button-outline" href="#planner">Explore the map <ArrowRight size={17} /></a>
          <span className="map-caption">BANGLADESH — 8 DIVISIONS / 64 DISTRICTS</span>
        </div>
      </section>

      <section className="planner-section section-wrap" id="planner">
        <div className="planner-card">
          <div className="planner-text"><div className="eyebrow light"><span /> YOUR NEXT CHAPTER</div><h2>Good trips don't<br />happen by <em>accident.</em></h2><p>Tell us what you love. We'll help you find where to go next.</p><a className="button button-light" href="mailto:hello@deshscape.com?subject=Plan%20my%20trip">Let's plan a trip <ArrowRight size={17} /></a></div>
          <div className="planner-art"><div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="orbit-center"><Compass size={52} strokeWidth={1} /></div><span className="orbit-label label-one">FIND</span><span className="orbit-label label-two">WANDER</span><span className="orbit-label label-three">DISCOVER</span></div>
        </div>
      </section>

      <section className="stories-section section-wrap" id="stories">
        <div className="section-heading"><div><div className="eyebrow"><span /> FIELD NOTES</div><h2>Stories from<br /><em>the road.</em></h2></div><a className="text-link heading-link" href="mailto:hello@deshscape.com">Read our journal <ArrowUpRight size={16} /></a></div>
        <div className="story-row"><div className="story-number">01</div><div className="story-title"><span>PEOPLE & CULTURE</span><h3>The rhythm of a river town</h3></div><p>Somewhere along the banks, life moves to a different rhythm. Discover the communities shaped by water.</p><a href="#planner" aria-label="Read story"><ArrowUpRight /></a></div>
        <div className="story-row"><div className="story-number">02</div><div className="story-title"><span>HIDDEN BANGLADESH</span><h3>Beyond the tea gardens</h3></div><p>Follow the winding paths into the green heart of the northeast, where every turn reveals a new view.</p><a href="#planner" aria-label="Read story"><ArrowUpRight /></a></div>
      </section>

      <footer className="site-footer">
        <div className="footer-top"><a className="brand footer-brand" href="#"><span className="brand-mark"><Compass size={22} /></span><span className="brand-name">deshscape<span>.</span><small>THE ART OF DISCOVERY</small></span></a><p>Explore beyond the ordinary.<br />Discover Bangladesh, one journey at a time.</p><a className="back-top" href="#">BACK TO TOP <ArrowUpRight size={15} /></a></div>
        <div className="footer-bottom"><span>© 2026 DESHSCAPE. MADE FOR THE CURIOUS.</span><div className="social-links"><a href="#" aria-label="Instagram"><Instagram size={17} /></a><a href="#" aria-label="Facebook"><Facebook size={17} /></a><a href="#" aria-label="YouTube"><Youtube size={17} /></a></div><span>INDEPENDENTLY INSPIRED BY BANGLADESH.</span></div>
      </footer>
    </main>
  );
}
