"use client";

import { useMemo, useState } from "react";
import {
  ArrowDown, ArrowRight, ArrowUpRight, Compass, MapPin, Menu, Search,
  X, Mountain, Waves, Trees, Landmark, Instagram, Facebook, Youtube,
  SlidersHorizontal, RotateCcw, ChevronDown
} from "lucide-react";
import { allDestinations, destinationRegions, destinationTypes } from "@/data/destinations";
import ExploreMap from "@/components/ExploreMap";
import { destinationImageUrl } from "@/lib/destinationImage";

const divisions = ["Dhaka", "Chattogram", "Rajshahi", "Khulna", "Barishal", "Sylhet", "Rangpur", "Mymensingh"] as const;

const divisionFor = (place: (typeof allDestinations)[number]) => {
  if (place.region === "Dhaka Division") return "Dhaka";
  if (place.region.includes("Chattogram") || place.region.includes("Cox's Bazar") || place.region.includes("Rangamati")) return "Chattogram";
  if (place.region.includes("Sylhet")) return "Sylhet";
  if (place.region.includes("Khulna")) return "Khulna";
  if (place.region.includes("Rajshahi")) return "Rajshahi";
  if (place.region.includes("Barishal")) return "Barishal";
  if (place.region.includes("Rangpur")) return "Rangpur";
  if (place.region.includes("Mymensingh")) return "Mymensingh";
  return "";
};

const categories = [
  { label: "Mountains", icon: Mountain, count: "Hill escapes" },
  { label: "Beaches", icon: Waves, count: "Coastal places" },
  { label: "Forests", icon: Trees, count: "Into the wild" },
  { label: "Heritage", icon: Landmark, count: "Culture & history" }
];

export default function Home() {
  const [query, setQuery] = useState("");
  const [division, setDivision] = useState<(typeof divisions)[number]>("Dhaka");
  const [region, setRegion] = useState("All regions");
  const [type, setType] = useState("All experiences");
  const [sort, setSort] = useState("featured");
  const [menuOpen, setMenuOpen] = useState(false);

  const filtered = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    const result = allDestinations.filter((place) => {
      const matchesDivision = divisionFor(place) === division;
      const matchesQuery = !normalized || [
        place.name, place.region, place.district, place.type, place.tag, place.shortDescription
      ].join(" ").toLowerCase().includes(normalized);
      const matchesRegion = region === "All regions" || place.region.includes(region);
      const matchesType = type === "All experiences" || place.type === type;
      return matchesDivision && matchesQuery && matchesRegion && matchesType;
    });
    if (sort === "az") result.sort((a, b) => a.name.localeCompare(b.name));
    if (sort === "za") result.sort((a, b) => b.name.localeCompare(a.name));
    return result;
  }, [query, division, region, type, sort]);

  const resetFilters = () => {
    setQuery("");
    setDivision("Dhaka");
    setRegion("All regions");
    setType("All experiences");
    setSort("featured");
  };

  const chooseCategory = (label: string) => {
    setType(label);
    document.getElementById("destinations")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#" aria-label="Deshscape home">
          <span className="brand-mark"><Compass size={22} strokeWidth={1.7} /></span>
          <span className="brand-name">deshscape<span>.</span><small>THE ART OF DISCOVERY</small></span>
        </a>
        <nav className={menuOpen ? "main-nav open" : "main-nav"}>
          <a className="nav-link active" href="#" onClick={() => setMenuOpen(false)}>Discover</a>
          <a className="nav-link" href="#destinations" onClick={() => setMenuOpen(false)}>Destinations</a>
          <a className="nav-link" href="#map" onClick={() => setMenuOpen(false)}>Explore map</a>
          <a className="nav-link" href="#stories" onClick={() => setMenuOpen(false)}>Stories</a>
          <a className="nav-link mobile-only" href="/plan-trip" onClick={() => setMenuOpen(false)}>Plan a trip</a>
        </nav>
        <div className="header-actions">
          <a className="plan-link" href="/plan-trip">Plan a trip <ArrowUpRight size={15} /></a>
          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu" aria-expanded={menuOpen}>
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
          <div><strong>8</strong><span>Divisions across the land</span></div>
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

          <div className="division-tabs" role="tablist" aria-label="Explore by division">
            {divisions.map((item) => <button type="button" role="tab" aria-selected={division === item} className={division === item ? "division-tab active" : "division-tab"} key={item} onClick={() => { setDivision(item); setRegion("All regions"); }}>{item}</button>)}
          </div>

          <div className="advanced-search">
            <div className="search-box search-main">
              <Search size={19} />
              <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search places, districts, experiences..." aria-label="Search destinations" />
              {query && <button className="clear-search" onClick={() => setQuery("")} aria-label="Clear search"><X size={16} /></button>}
              <span>DISCOVER</span>
            </div>
            <div className="filter-row">
              <label className="filter-control"><span>REGION</span><select value={region} onChange={(event) => setRegion(event.target.value)} aria-label="Filter by region">{destinationRegions.map((item) => <option key={item}>{item}</option>)}</select><ChevronDown size={14} /></label>
              <label className="filter-control"><span>EXPERIENCE</span><select value={type} onChange={(event) => setType(event.target.value)} aria-label="Filter by experience">{destinationTypes.map((item) => <option key={item}>{item}</option>)}</select><ChevronDown size={14} /></label>
              <label className="filter-control sort-control"><span>SORT BY</span><select value={sort} onChange={(event) => setSort(event.target.value)} aria-label="Sort destinations"><option value="featured">Featured</option><option value="az">Name: A–Z</option><option value="za">Name: Z–A</option></select><ChevronDown size={14} /></label>
              <button className="reset-filters" onClick={resetFilters}><RotateCcw size={14} /> Reset filters</button>
            </div>
            <div className="results-line"><span><SlidersHorizontal size={14} /> Showing <strong>{filtered.length}</strong> destinations in {division} Division</span><span>{query || region !== "All regions" || type !== "All experiences" ? "FILTERS APPLIED" : "CURATED FOR THE CURIOUS"}</span></div>
          </div>

          <div className="destination-grid">
            {filtered.map((place, index) => (
              <a className={index === 0 && sort === "featured" ? "destination-card featured" : "destination-card"} href={`/destinations/${place.slug}`} key={place.slug} aria-label={`Explore ${place.name} in ${place.district}`} title={`Explore ${place.name}`}>
                <div className="destination-image" style={{ backgroundImage: `url(${destinationImageUrl(place.image, 1200)})` }} />
                <div className="destination-overlay" />
                <span className="destination-tag">{place.tag}</span>
                <div className="destination-info"><span><MapPin size={13} /> {place.region}</span><h3>{place.name}</h3><div className="card-bottom"><small>{place.type}</small><i><ArrowUpRight size={17} /></i></div></div>
              </a>
            ))}
            {filtered.length === 0 && <div className="empty-state"><Search size={25} /><h3>{query || region !== "All regions" || type !== "All experiences" ? "No destinations found" : `${division} Division is coming soon`}</h3><p>{query || region !== "All regions" || type !== "All experiences" ? "Try another keyword or reset your filters." : "We are preparing destination guides for this division. Check back soon as the collection grows."}</p>{(query || region !== "All regions" || type !== "All experiences") && <button className="button button-dark" onClick={resetFilters}>Reset filters <ArrowRight size={16} /></button>}</div>}
          </div>
        </div>
      </section>

      <section className="categories-section section-wrap">
        <div className="eyebrow"><span /> FIND YOUR KIND OF ESCAPE</div>
        <div className="category-heading"><h2>What moves <em>you?</em></h2><p>Every journey has a feeling. Find the landscape<br />that speaks your language.</p></div>
        <div className="category-grid">
          {categories.map(({ label, icon: Icon, count }) => <button type="button" onClick={() => chooseCategory(label)} className="category-item" key={label}><span className="category-icon"><Icon size={23} strokeWidth={1.5} /></span><span className="category-name">{label}</span><span className="category-count">{count}</span><ArrowUpRight className="category-arrow" size={17} /></button>)}
        </div>
      </section>

      <ExploreMap />

      <section className="planner-section section-wrap" id="planner">
        <div className="planner-card">
          <div className="planner-text"><div className="eyebrow light"><span /> YOUR NEXT CHAPTER</div><h2>Good trips don't<br />happen by <em>accident.</em></h2><p>Tell us what you love. We'll help you find where to go next.</p><a className="button button-light" href="/plan-trip">Let's plan a trip <ArrowRight size={17} /></a></div>
          <div className="planner-art"><div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="orbit-center"><Compass size={52} strokeWidth={1} /></div><span className="orbit-label label-one">FIND</span><span className="orbit-label label-two">WANDER</span><span className="orbit-label label-three">DISCOVER</span></div>
        </div>
      </section>

      <section className="stories-section section-wrap" id="stories">
        <div className="section-heading"><div><div className="eyebrow"><span /> FIELD NOTES</div><h2>Stories from<br /><em>the road.</em></h2></div><a className="text-link heading-link" href="/journal">Read our journal <ArrowUpRight size={16} /></a></div>
        <div className="story-row"><div className="story-number">01</div><div className="story-title"><span>PEOPLE & CULTURE</span><h3>The rhythm of a river town</h3></div><p>Somewhere along the banks, life moves to a different rhythm. Discover the communities shaped by water.</p><a href="/journal" aria-label="Read story"><ArrowUpRight /></a></div>
        <div className="story-row"><div className="story-number">02</div><div className="story-title"><span>HIDDEN BANGLADESH</span><h3>Beyond the tea gardens</h3></div><p>Follow the winding paths into the green heart of the northeast, where every turn reveals a new view.</p><a href="/journal" aria-label="Read story"><ArrowUpRight /></a></div>
      </section>

      <footer className="site-footer">
        <div className="footer-top"><a className="brand footer-brand" href="#"><span className="brand-mark"><Compass size={22} /></span><span className="brand-name">deshscape<span>.</span><small>THE ART OF DISCOVERY</small></span></a><p>Explore beyond the ordinary.<br />Discover Bangladesh, one journey at a time.</p><a className="back-top" href="#">BACK TO TOP <ArrowUpRight size={15} /></a></div>
        <div className="footer-bottom"><span>© 2026 DESHSCAPE. MADE FOR THE CURIOUS.</span><a className="footer-contact-link" href="/contact">CONTACT <ArrowUpRight size={14} /></a><div className="social-links"><a href="#" aria-label="Instagram"><Instagram size={17} /></a><a href="#" aria-label="Facebook"><Facebook size={17} /></a><a href="#" aria-label="YouTube"><Youtube size={17} /></a></div><span>INDEPENDENTLY INSPIRED BY BANGLADESH.</span></div>
      </footer>
    </main>
  );
}
