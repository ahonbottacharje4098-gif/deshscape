"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowLeft, ArrowUpRight, Compass, MapPin, Search, X, Clock3 } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";

import { journalStories as stories } from "@/data/journalStories";

export default function JournalPage() {
  const { t } = useLanguage();
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("ALL");
  const query = search.trim().toLowerCase();
  const showFeatured = query.length === 0 && category === "ALL";
  const filteredStories = stories.filter((story) => {
    const matchesCategory = category === "ALL" || story.category === category;
    const searchableText = [story.title, t(story.title), story.location, t(story.location), story.description, t(story.description), story.intro, t(story.intro), story.note, t(story.note), story.category, t(story.category), ...story.paragraphs, ...story.paragraphs.map((paragraph) => t(paragraph))];
    const matchesSearch = query.length === 0 || searchableText.some((value) => value.toLowerCase().includes(query));
    return matchesCategory && matchesSearch;
  });
  const visibleStories = showFeatured ? stories.slice(1) : filteredStories;
  const featuredStory = stories[0];

  return (
    <main id="main-content" tabIndex={-1}><span id="top" />
      <header className="site-header">
        <Link className="brand" href="/" aria-label="Deshscape home">
          <span className="brand-mark"><Compass size={22} strokeWidth={1.7} /></span>
          <span className="brand-name">deshscape<span>.</span><small>{t("THE ART OF DISCOVERY")}</small></span>
        </Link>
        <nav className="main-nav">
          <Link className="nav-link" href="/">{t("Discover")}</Link>
          <Link className="nav-link" href="/#destinations">{t("Destinations")}</Link>
          <Link className="nav-link active" href="/journal">{t("Journal")}</Link>
        </nav>
        <div className="header-actions">
          <Link className="plan-link" href="/plan-trip">{t("Plan a trip")} <ArrowUpRight size={15} /></Link>
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
                <h3>{t(featuredStory.title)}</h3>
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
              {search && <button type="button" onClick={() => setSearch("")} aria-label={t("Clear search")}><X size={16} /></button>}
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
                    <h3 className="journal-card-title">{t(story.title)}</h3>
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
              <h3>{t("No stories found")}</h3>
              <p>{t("Try another keyword or choose a different category.")}</p>
              <button type="button" onClick={() => { setSearch(""); setCategory("ALL"); }}>{t("Show all stories")} <ArrowUpRight size={15} /></button>
            </div>
          )}
          <p style={{ color: "#7d847b", fontSize: 10, lineHeight: 1.8, marginTop: 22 }}>{t("These are introductory editorial stories. Destination-specific travel details should always be checked locally before a visit.")}</p>
        </div>
      </section>

      <section className="section-wrap" style={{ paddingTop: 70, paddingBottom: 80 }}>
        <div className="planner-card">
          <div className="planner-text">
            <div className="eyebrow light"><span /> {t("KEEP EXPLORING")}</div>
            <h2>{t("Every place has")}<br />a <em>{t("story.")}</em></h2>
            <p>{t("Find a destination and start planning your next discovery.")}</p>
            <Link className="button button-light" href="/#destinations">{t("Explore Bangladesh")} <ArrowUpRight size={17} /></Link>
          </div>
          <div className="planner-art"><div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="orbit-center"><Compass size={52} strokeWidth={1} /></div></div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-top">
          <Link className="brand footer-brand" href="/"><span className="brand-mark"><Compass size={22} /></span><span className="brand-name">deshscape<span>.</span><small>THE ART OF DISCOVERY</small></span></Link>
          <p>{t("Explore beyond the ordinary.")}<br />{t("Discover Bangladesh, one journey at a time.")}</p>
          <Link className="back-top" href="#top">{t("BACK TO TOP")} <ArrowUpRight size={15} /></Link>
        </div>
        <div className="footer-bottom"><span>{t("© 2026 DESHSCAPE. MADE FOR THE CURIOUS.")}</span><span>{t("INDEPENDENTLY INSPIRED BY BANGLADESH.")}</span><span className="footer-credit">Made by Badhan</span></div>
      </footer>
      <div style={{ position: "fixed", left: 18, bottom: 18, zIndex: 10 }}>
        <Link href="/" aria-label="Back to home" style={{ display: "grid", placeItems: "center", width: 42, height: 42, borderRadius: "50%", background: "#183d32", color: "#fff" }}><ArrowLeft size={18} /></Link>
      </div>
    </main>
  );
}
