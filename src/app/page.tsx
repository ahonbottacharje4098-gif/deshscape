"use client";

import { useEffect, useMemo, useState } from "react";
import {
  ArrowRight, ArrowUpRight, Compass, MapPin, Menu, Search,
  X, Mountain, Waves, Trees, Landmark,
  SlidersHorizontal, RotateCcw, ChevronDown
} from "lucide-react";
import { allDestinations, destinationTypes } from "@/data/destinations";
import ExploreMap from "@/components/ExploreMap";
import { destinationImageUrl } from "@/lib/destinationImage";
import { useLanguage } from "@/components/LanguageProvider";

const divisions = ["All divisions", "Dhaka", "Chattogram", "Rajshahi", "Khulna", "Barishal", "Sylhet", "Rangpur", "Mymensingh"] as const;

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
  const { t } = useLanguage();
  const [query, setQuery] = useState("");
  const [division, setDivision] = useState<(typeof divisions)[number]>("All divisions");
  const [region, setRegion] = useState("All regions");
  const [type, setType] = useState("All experiences");
  const [sort, setSort] = useState("featured");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [menuOpen]);

  const availableRegions = useMemo(() => {
    const regions = allDestinations
      .filter((place) => division === "All divisions" || divisionFor(place) === division)
      .map((place) => place.region.trim())
      .filter(Boolean);
    return ["All regions", ...Array.from(new Set(regions)).sort((a, b) => a.localeCompare(b))];
  }, [division]);

  const filtered = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    const result = allDestinations.filter((place) => {
      const matchesDivision = division === "All divisions" || divisionFor(place) === division;
      const matchesQuery = !normalized || [
        place.name, t(place.name), place.region, t(place.region), place.district, t(place.district), place.type, t(place.type), place.tag, t(place.tag), place.shortDescription, t(place.shortDescription)
      ].join(" ").toLowerCase().includes(normalized);
      const matchesRegion = region === "All regions" || place.region.trim() === region;
      const matchesType = type === "All experiences" || place.type === type;
      return matchesDivision && matchesQuery && matchesRegion && matchesType;
    });
    if (sort === "az") result.sort((a, b) => a.name.localeCompare(b.name));
    if (sort === "za") result.sort((a, b) => b.name.localeCompare(a.name));
    return result;
  }, [query, division, region, type, sort, t]);

  const resetFilters = () => {
    setQuery("");
    setDivision("All divisions");
    setRegion("All regions");
    setType("All experiences");
    setSort("featured");
  };

  const chooseCategory = (label: string) => {
    setType(label);
    setRegion("All regions");
    setQuery("");
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    document.getElementById("destinations")?.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth" });
  };

  return (
    <main id="main-content" tabIndex={-1}><span id="top" />
      <header className="site-header">
        <a className="brand" href="/" aria-label="Deshscape home">
          <span className="brand-mark"><Compass size={22} strokeWidth={1.7} /></span>
          <span className="brand-name">deshscape<span>.</span><small>{t("THE ART OF DISCOVERY")}</small></span>
        </a>
        <nav id="primary-navigation" className={menuOpen ? "main-nav open" : "main-nav"}>
          <a className="nav-link active" href="#top" onClick={() => setMenuOpen(false)}>{t("Discover")}</a>
          <a className="nav-link" href="#destinations" onClick={() => setMenuOpen(false)}>{t("Destinations")}</a>
          <a className="nav-link" href="#map" onClick={() => setMenuOpen(false)}>{t("Explore map")}</a>
          <a className="nav-link" href="#stories" onClick={() => setMenuOpen(false)}>{t("Stories")}</a>
          <a className="nav-link mobile-only" href="/plan-trip" onClick={() => setMenuOpen(false)}>{t("Plan a trip")}</a>
        </nav>
        <div className="header-actions">
          <a className="plan-link" href="/plan-trip">{t("Plan a trip")} <ArrowUpRight size={15} /></a>
          <button type="button" className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={t("Toggle menu")} aria-expanded={menuOpen} aria-controls="primary-navigation">
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      <section className="hero">
        <div className="hero-image" />
        <div className="hero-shade" />
        <div className="hero-content">
          <div className="eyebrow light"><span /> {t("A DIFFERENT SIDE OF BANGLADESH")}</div>
          <h1>{t("Find your")}<br /><em>{t("somewhere.")}</em></h1>
          <p className="hero-copy">{t("Beyond the familiar. Into the extraordinary.")}<br />{t("Your next story begins somewhere in Bangladesh.")}</p>
          <a className="button button-light" href="#destinations">{t("Start exploring")} <ArrowRight size={17} /></a>
        </div>
        <div className="hero-bottom">
          <span>22° 20' 12.0&quot; N &nbsp; 91° 50' 07.0&quot; E</span>
          <span className="hero-scroll"><span className="scroll-line" /> {t("SCROLL TO DISCOVER")}</span>
          <span>{t("CHAPTER 01 — THE LAND")}</span>
        </div>
        <div className="hero-index">01 <span>/ 06</span></div>
      </section>

      <section className="intro section-wrap">
        <div className="eyebrow"><span /> {t("NOT JUST A DESTINATION")}</div>
        <div className="intro-grid">
          <h2>{t("A country of a")}<br /><em>{t("thousand")}</em> {t("stories.")}</h2>
          <div className="intro-text">
            <p>{t("There is more to Bangladesh than meets the eye. From mist-covered hills and quiet rivers to ancient architecture and vibrant local life — discover the places that make this land unforgettable.")}</p>
            <a className="text-link" href="#destinations">{t("Get to know Bangladesh")} <ArrowUpRight size={16} /></a>
          </div>
        </div>
        <div className="stats-row">
          <div><strong>64</strong><span>{t("Districts to discover")}</span></div>
          <div><strong>8</strong><span>{t("Divisions across the land")}</span></div>
          <div><strong>∞</strong><span>{t("Stories waiting to unfold")}</span></div>
          <div className="stats-note">{t("A LITTLE COUNTRY.")}<br />{t("A LOT TO EXPLORE.")}</div>
        </div>
      </section>

      <section className="destinations-section" id="destinations">
        <div className="section-wrap">
          <div className="section-heading">
            <div><div className="eyebrow"><span /> {t("THE COLLECTION")}</div><h2>{t("Places worth")}<br /><em>{t("getting lost in.")}</em></h2></div>
            <a className="text-link heading-link" href="#map">{t("Explore all destinations")} <ArrowUpRight size={16} /></a>
          </div>

          <div className="division-tabs" role="group" aria-label={t("Explore by division")}>
            {divisions.map((item) => <button type="button" aria-pressed={division === item} className={division === item ? "division-tab active" : "division-tab"} key={item} onClick={() => { setDivision(item); setRegion("All regions"); }}>{t(item)}</button>)}
          </div>

          <div className="advanced-search">
            <div className="search-box search-main">
              <Search size={19} />
              <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder={t("Search places, districts, experiences...")} aria-label={t("Search destinations")} />
              {query && <button className="clear-search" onClick={() => setQuery("")} aria-label={t("Clear search")}><X size={16} /></button>}
              <span>{t("DISCOVER")}</span>
            </div>
            <div className="filter-row">
              <label className="filter-control"><span>{t("REGION")}</span><select value={region} onChange={(event) => setRegion(event.target.value)} aria-label={`${t("Filter by region in")} ${t(division)} ${t("Division")}`}>{availableRegions.map((item) => <option key={item} value={item}>{t(item)}</option>)}</select><ChevronDown size={14} /></label>
              <label className="filter-control"><span>{t("EXPERIENCE")}</span><select value={type} onChange={(event) => setType(event.target.value)} aria-label={t("Filter by experience")}>{destinationTypes.map((item) => <option key={item} value={item}>{t(item)}</option>)}</select><ChevronDown size={14} /></label>
              <label className="filter-control sort-control"><span>{t("SORT BY")}</span><select value={sort} onChange={(event) => setSort(event.target.value)} aria-label={t("Sort destinations")}><option value="featured">{t("Featured")}</option><option value="az">{t("Name: A–Z")}</option><option value="za">{t("Name: Z–A")}</option></select><ChevronDown size={14} /></label>
              <button className="reset-filters" onClick={resetFilters}><RotateCcw size={14} /> {t("Reset filters")}</button>
            </div>
            <div className="results-line"><span><SlidersHorizontal size={14} /> {t("Showing")} <strong>{filtered.length}</strong> {t("destinations across")} {division === "All divisions" ? t("Bangladesh") : `${t(division)} ${t("Division")}`}</span><span>{query || region !== "All regions" || type !== "All experiences" ? t("FILTERS APPLIED") : t("CURATED FOR THE CURIOUS")}</span></div>
          </div>

          <div className="destination-grid">
            {filtered.map((place, index) => (
              <a className={index === 0 && sort === "featured" ? "destination-card featured" : "destination-card"} href={`/destinations/${place.slug}`} key={place.slug} aria-label={`${t("Explore")} ${t(place.name)} ${t("in")} ${t(place.district)}`} title={`${t("Explore")} ${t(place.name)}`}>
                <img
                  className="destination-image"
                  src={destinationImageUrl(place.image, 1200)}
                  alt=""
                  loading="lazy"
                  decoding="async"
                />
                <div className="destination-overlay" />
                <span className="destination-tag">{t(place.tag)}</span>
                <div className="destination-info"><span><MapPin size={13} /> {t(place.region)}</span><h3>{t(place.name)}</h3><div className="card-bottom"><small>{t(place.type)}</small><i><ArrowUpRight size={17} /></i></div></div>
              </a>
            ))}
            {filtered.length === 0 && <div className="empty-state"><Search size={25} /><h3>{query || region !== "All regions" || type !== "All experiences" ? t("No destinations found") : `${t(division)} ${t("Division is coming soon")}`}</h3><p>{query || region !== "All regions" || type !== "All experiences" ? t("Try another keyword or reset your filters.") : t("We are preparing destination guides for this division. Check back soon as the collection grows.")}</p>{(query || region !== "All regions" || type !== "All experiences") && <button className="button button-dark" onClick={resetFilters}>{t("Reset filters")} <ArrowRight size={16} /></button>}</div>}
          </div>
        </div>
      </section>

      <section className="categories-section section-wrap">
        <div className="eyebrow"><span /> {t("FIND YOUR KIND OF ESCAPE")}</div>
        <div className="category-heading"><h2>{t("What moves")} <em>{t("you?")}</em></h2><p>{t("Every journey has a feeling. Find the landscape")}<br />{t("that speaks your language.")}</p></div>
        <div className="category-grid">
          {categories.map(({ label, icon: Icon, count }) => <button type="button" onClick={() => chooseCategory(label)} className="category-item" key={label}><span className="category-icon"><Icon size={23} strokeWidth={1.5} /></span><span className="category-name">{t(label)}</span><span className="category-count">{t(count)}</span><ArrowUpRight className="category-arrow" size={17} /></button>)}
        </div>
      </section>

      <ExploreMap />

      <section className="planner-section section-wrap" id="planner">
        <div className="planner-card">
          <div className="planner-text"><div className="eyebrow light"><span /> {t("YOUR NEXT CHAPTER")}</div><h2>{t("Good trips don't")}<br />{t("happen by")} <em>{t("accident.")}</em></h2><p>{t("Tell us what you love. We'll help you find where to go next.")}</p><a className="button button-light" href="/plan-trip">{t("Let's plan a trip")} <ArrowRight size={17} /></a></div>
          <div className="planner-art"><div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="orbit-center"><Compass size={52} strokeWidth={1} /></div><span className="orbit-label label-one">{t("FIND")}</span><span className="orbit-label label-two">{t("WANDER")}</span><span className="orbit-label label-three">{t("DISCOVER")}</span></div>
        </div>
      </section>

      <section className="stories-section section-wrap" id="stories">
        <div className="section-heading"><div><div className="eyebrow"><span /> {t("FIELD NOTES")}</div><h2>{t("Stories from")}<br /><em>{t("the road.")}</em></h2></div><a className="text-link heading-link" href="/journal">{t("Read our journal")} <ArrowUpRight size={16} /></a></div>
        <div className="story-row"><div className="story-number">01</div><div className="story-title"><span>{t("PEOPLE & CULTURE")}</span><h3>{t("The rhythm of a river town")}</h3></div><p>{t("Somewhere along the banks, life moves to a different rhythm. Discover the communities shaped by water.")}</p><a href="/journal/river-town-rhythm" aria-label={t("Read The rhythm of a river town")}><ArrowUpRight /></a></div>
        <div className="story-row"><div className="story-number">02</div><div className="story-title"><span>{t("HIDDEN BANGLADESH")}</span><h3>{t("Beyond the tea gardens")}</h3></div><p>{t("Follow the winding paths into the green heart of the northeast, where every turn reveals a new view.")}</p><a href="/journal/beyond-tea-gardens" aria-label={t("Read Beyond the tea gardens")}><ArrowUpRight /></a></div>
      </section>

      <footer className="site-footer">
        <div className="footer-top"><a className="brand footer-brand" href="/"><span className="brand-mark"><Compass size={22} /></span><span className="brand-name">deshscape<span>.</span><small>{t("THE ART OF DISCOVERY")}</small></span></a><p>{t("Explore beyond the ordinary.")}<br />{t("Discover Bangladesh, one journey at a time.")}</p><a className="back-top" href="#top">{t("BACK TO TOP")} <ArrowUpRight size={15} /></a></div>
        <div className="footer-bottom"><span>{t("© 2026 DESHSCAPE. MADE FOR THE CURIOUS.")}</span><a className="footer-contact-link" href="/contact">{t("CONTACT")} <ArrowUpRight size={14} /></a><span>{t("INDEPENDENTLY INSPIRED BY BANGLADESH.")}</span></div>
      </footer>
    </main>
  );
}
