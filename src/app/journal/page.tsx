"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowLeft, ArrowUpRight, Compass, MapPin, Search, X, Clock3 } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";

const stories = [
  {
    number: "01",
    slug: "river-town-rhythm",
    category: "PEOPLE & CULTURE",
    title: "The rhythm of a river town",
    location: "Goalanda, Rajbari",
    description: "Along the Padma, the river shapes more than the landscape. It influences daily routines, local trade and the stories shared by people who live beside its changing waters.",
    image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1400&q=85",
    note: "A closer look at life beside the Padma",
    readingTime: "1 MIN READ"
  },
  {
    number: "02",
    slug: "beyond-tea-gardens",
    category: "HIDDEN BANGLADESH",
    title: "Beyond the tea gardens",
    location: "Sylhet",
    description: "The green hills and winding paths of the northeast invite a slower kind of journey. Look beyond the familiar viewpoints and notice the small details that make this landscape special.",
    image: "https://images.unsplash.com/photo-1563911302283-d2bc129e7570?auto=format&fit=crop&w=1400&q=85",
    note: "A field note from the green northeast",
    readingTime: "1 MIN READ"
  },
  {
    number: "03",
    slug: "stone-stories-of-kantajew",
    category: "ART & HERITAGE",
    title: "Stone stories of Kantajew",
    location: "Dinajpur",
    description: "Intricate terracotta panels turn a historic temple into an open-air gallery of craft, belief and everyday scenes from another time.",
    image: "https://images.unsplash.com/photo-1606293926075-69a00db7562f?auto=format&fit=crop&w=1400&q=85",
    note: "An architectural field note from the north",
    readingTime: "1 MIN READ"
  },
  {
    number: "04",
    slug: "a-quiet-world-in-ratargul",
    category: "HIDDEN BANGLADESH",
    title: "A quiet world in Ratargul",
    location: "Sylhet",
    description: "In the freshwater swamp forest, water and woodland meet. The experience changes with the season, light and level of the water.",
    image: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1400&q=85",
    note: "A gentle introduction to a living wetland",
    readingTime: "1 MIN READ"
  },
  {
    number: "05",
    slug: "courtyards-and-memory-at-baliati",
    category: "ART & HERITAGE",
    title: "Courtyards and memory at Baliati",
    location: "Manikganj",
    description: "The old palace complex offers a glimpse into the region's architectural past through its courtyards, façades and layered history.",
    image: "https://images.unsplash.com/photo-1590123732197-e707a7d1a2b2?auto=format&fit=crop&w=1400&q=85",
    note: "A heritage walk through historic courtyards",
    readingTime: "1 MIN READ"
  }
];

export default function JournalPage() {
  const { t } = useLanguage();
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("ALL");
  const query = search.trim().toLowerCase();
  const showFeatured = query.length === 0 && category === "ALL";
  const filteredStories = stories.filter((story) => {
    const matchesCategory = category === "ALL" || story.category === category;
    const matchesSearch = query.length === 0 || [story.title, story.location, story.description, story.category].some((value) => value.toLowerCase().includes(query));
    return matchesCategory && matchesSearch;
  });
  const visibleStories = showFeatured ? stories.slice(1) : filteredStories;
  const featuredStory = stories[0];

  return (
    <main id="top">
      <header className="site-header">
        <Link className="brand" href="/" aria-label="Deshscape home">
          <span className="brand-mark"><Compass size={22} strokeWidth={1.7} /></span>
          <span className="brand-name">deshscape<span>.</span><small>THE ART OF DISCOVERY</small></span>
        </Link>
        <nav className="main-nav">
          <Link className="nav-link" href="/">{t("Discover")}</Link>
          <Link className="nav-link" href="/#destinations">{t("Destinations")}</Link>
          <Link className="nav-link active" href="/journal">{t("Journal")}</Link>
        </nav>
        <div className="header-actions">
          <Link className="plan-link" href="/#planner">{t("Plan a trip")} <ArrowUpRight size={15} /></Link>
        </div>
      </header>

      <section className="intro section-wrap" style={{ paddingBottom: 55 }}>
        <div className="eyebrow"><span /> {t("THE DESHSCAPE JOURNAL")}</div>
        <div className="intro-grid">
          <h2>{t("Stories from")}<br /><em>{t("the road.")}</em></h2>
          <div className="intro-text">
            <p>{t("Travel is more than reaching a place. It is the people we meet, the landscapes we remember and the little discoveries along the way.")}</p>
            <Link className="text-link" href="/#destinations">{t("Explore the destinations")} <ArrowUpRight size={16} /></Link>
          </div>
        </div>
      </section>

      <section className="destinations-section" id="stories">
        <div className="section-wrap">
          <div className="section-heading">
            <div><div className="eyebrow"><span /> {t("FIELD NOTES & INSPIRATION")}</div><h2>{t("Read, wander")}<br /><em>{t("and discover.")}</em></h2></div>
            <span className="eyebrow">05 {t("STORIES")}</span>
          </div>
          {showFeatured && (
            <article className="journal-featured">
              <Link className="journal-featured-image" href="/journal/river-town-rhythm" aria-label={`Read ${t(featuredStory.title)}`} style={{ backgroundImage: `url(${featuredStory.image})` }}>
                <span className="journal-featured-label">{t("EDITOR'S PICK")}</span>
              </Link>
              <div className="journal-featured-copy">
                <div className="eyebrow"><span /> {t("FEATURED STORY")} · {t(featuredStory.category)}</div>
                <h3>{featuredStory.title}</h3>
                <div className="journal-featured-meta"><span><MapPin size={13} /> {t(featuredStory.location)}</span><span><Clock3 size={13} /> {t(featuredStory.readingTime)}</span></div>
                <p>{t(featuredStory.description)}</p>
                <Link className="journal-read-link" href="/journal/river-town-rhythm">{t("READ FEATURED STORY")} <ArrowUpRight size={15} /></Link>
              </div>
            </article>
          )}
          <div className="journal-tools">
            <label className="journal-search">
              <Search size={17} />
              <input
                type="search"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder={t("Search stories, places...")}
                aria-label={t("Search journal stories")}
              />
              {search && <button type="button" onClick={() => setSearch("")} aria-label="Clear search"><X size={16} /></button>}
            </label>
            <div className="journal-filters" aria-label={t("Filter stories by category")}>
              {["ALL", "PEOPLE & CULTURE", "HIDDEN BANGLADESH", "ART & HERITAGE"].map((item) => (
                <button key={item} type="button" className={category === item ? "journal-filter active" : "journal-filter"} onClick={() => { setCategory(item); if (item === "ALL") setSearch(""); }} aria-pressed={category === item}>{t(item)}</button>
              ))}
            </div>
          </div>
          <div className="journal-latest-heading"><div><div className="eyebrow"><span /> {showFeatured ? t("FRESH FROM THE JOURNAL") : t("YOUR DISCOVERIES")}</div><h3>{showFeatured ? t("Latest stories") : t("Journal results")}</h3></div></div>
          <div className="journal-results-line">
            <span>{visibleStories.length} {visibleStories.length === 1 ? t("STORY") : t("STORIES")} {t("FOUND")}</span>
            {(search || category !== "ALL") && <button type="button" onClick={() => { setSearch(""); setCategory("ALL"); }}>{t("CLEAR FILTERS")} <X size={13} /></button>}
          </div>
          {visibleStories.length > 0 ? (
            <div className="journal-grid">
              {visibleStories.map((story) => (
                <article key={story.number} className="journal-card">
                  <Link className="journal-card-image" href={`/journal/${story.slug}`} aria-label={`Read ${t(story.title)}`} style={{ backgroundImage: `url(${story.image})` }} />
                  <div className="journal-card-copy">
                    <div className="eyebrow"><span /> {t(story.category)}</div>
                    <h3 style={{ font: "30px/1.15 'Playfair Display',serif", color: "#183d32", margin: "17px 0 10px" }}>{story.title}</h3>
                    <div style={{ display: "flex", alignItems: "center", gap: 6, color: "#899387", fontSize: 10, marginBottom: 15 }}><MapPin size={13} /> {t(story.location)}<span style={{ marginLeft: 10, display: "inline-flex", alignItems: "center", gap: 5 }}><Clock3 size={12} /> {t(story.readingTime)}</span></div>
                    <p style={{ color: "#70776e", fontSize: 12, lineHeight: 1.9, margin: "0 0 18px" }}>{t(story.description)}</p>
                    <div style={{ color: "#9caa96", fontSize: 9, letterSpacing: 1.1, textTransform: "uppercase" }}>{t(story.note)}</div>
                    <Link className="journal-read-link" href={`/journal/${story.slug}`}>{t("READ STORY")} <ArrowUpRight size={15} /></Link>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="journal-empty">
              <Compass size={30} strokeWidth={1.2} />
              <h3>No stories found</h3>
              <p>Try another keyword or choose a different category.</p>
              <button type="button" onClick={() => { setSearch(""); setCategory("ALL"); }}>Show all stories <ArrowUpRight size={15} /></button>
            </div>
          )}
          <p style={{ color: "#7d847b", fontSize: 10, lineHeight: 1.8, marginTop: 22 }}>These are introductory editorial stories. Destination-specific travel details should always be checked locally before a visit.</p>
        </div>
      </section>

      <section className="section-wrap" style={{ paddingTop: 70, paddingBottom: 80 }}>
        <div className="planner-card">
          <div className="planner-text">
            <div className="eyebrow light"><span /> KEEP EXPLORING</div>
            <h2>Every place has<br />a <em>story.</em></h2>
            <p>Find a destination and start planning your next discovery.</p>
            <Link className="button button-light" href="/#destinations">Explore Bangladesh <ArrowUpRight size={17} /></Link>
          </div>
          <div className="planner-art"><div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="orbit-center"><Compass size={52} strokeWidth={1} /></div></div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-top">
          <Link className="brand footer-brand" href="/"><span className="brand-mark"><Compass size={22} /></span><span className="brand-name">deshscape<span>.</span><small>THE ART OF DISCOVERY</small></span></Link>
          <p>{t("Explore beyond the ordinary.")}<br />{t("Discover Bangladesh, one journey at a time.")}</p>
          <Link className="back-top" href="#top">BACK TO TOP <ArrowUpRight size={15} /></Link>
        </div>
        <div className="footer-bottom"><span>{t("© 2026 DESHSCAPE. MADE FOR THE CURIOUS.")}</span><span>{t("INDEPENDENTLY INSPIRED BY BANGLADESH.")}</span></div>
      </footer>
      <div style={{ position: "fixed", left: 18, bottom: 18, zIndex: 10 }}>
        <Link href="/" aria-label="Back to home" style={{ display: "grid", placeItems: "center", width: 42, height: 42, borderRadius: "50%", background: "#183d32", color: "#fff" }}><ArrowLeft size={18} /></Link>
      </div>
    </main>
  );
}
