"use client";

import { useMemo, useState } from "react";
import { ArrowRight, ArrowUpRight, Compass, Copy, MapPin, Sparkles } from "lucide-react";
import { allDestinations } from "@/data/destinations";
import { destinationImageUrl } from "@/lib/destinationImage";
import { useLanguage } from "@/components/LanguageProvider";

const divisions = ["Any division", "Dhaka", "Chattogram", "Sylhet", "Khulna", "Rajshahi", "Barishal", "Rangpur", "Mymensingh"];
const experiences = ["Any experience", "Mountains", "Beaches", "Forests", "Rivers", "Nature", "Heritage"];

function belongsToDivision(region: string, division: string) {
  if (division === "Any division") return true;
  if (division === "Chattogram") return /Chattogram|Cox's Bazar|Rangamati/i.test(region);
  return region.toLowerCase().includes(division.toLowerCase());
}

export default function TripPlannerPage() {
  const { t } = useLanguage();
  const [division, setDivision] = useState("Any division");
  const [experience, setExperience] = useState("Any experience");
  const [suggestionSet, setSuggestionSet] = useState("All matches (up to 6)");
  const [copied, setCopied] = useState(false);

  const suggestions = useMemo(() => {
    const matches = allDestinations.filter((place) =>
      belongsToDivision(place.region, division) &&
      (experience === "Any experience" || place.type === experience)
    );
    const suggestionLimit =
      suggestionSet === "A few (3)" ? 3 :
      suggestionSet === "A handful (5)" ? 5 : 6;

    return matches.slice(0, suggestionLimit);
  }, [division, experience, suggestionSet]);

  const tripSummary = [
    "My Deshscape trip ideas",
    `Division: ${division}`,
    `Experience: ${experience}`,
    `Suggestion set: ${suggestionSet}`,
    "",
    "Suggested destinations:",
    ...suggestions.map((place, index) => `${index + 1}. ${t(place.name)} — ${t(place.region)}`)
  ].join("\n");

  async function copyPlan() {
    try {
      await navigator.clipboard.writeText(tripSummary);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      setCopied(false);
    }
  }

  return (
    <main className="trip-planner-page">
      <header className="site-header">
        <a className="brand" href="/" aria-label="Deshscape home"><span className="brand-mark"><Compass size={22} strokeWidth={1.7} /></span><span className="brand-name">deshscape<span>.</span><small>{t("THE ART OF DISCOVERY")}</small></span></a>
        <nav className="main-nav"><a className="nav-link" href="/">{t("Discover")}</a><a className="nav-link" href="/#destinations">{t("Destinations")}</a><a className="nav-link" href="/journal">{t("Journal")}</a></nav>
        <div className="header-actions"><a className="plan-link" href="/#destinations">{t("Explore places")} <ArrowUpRight size={15} /></a></div>
      </header>

      <section className="trip-hero">
        <div className="eyebrow light"><span /> {t("YOUR JOURNEY STARTS HERE")}</div>
        <h1>{t("Let's find your")}<br /><em>{t("somewhere.")}</em></h1>
        <p>{t("Choose the kind of escape you have in mind. We'll suggest places across Bangladesh to get your plans moving.")}</p>
        <span className="trip-hero-mark"><Compass size={82} strokeWidth={0.8} /></span>
      </section>

      <section className="trip-builder section-wrap">
        <div className="trip-builder-heading"><div className="eyebrow"><span /> {t("THE TRIP BUILDER")}</div><h2>{t("A few choices.")}<br /><em>{t("A world to explore.")}</em></h2><p>{t("Start broad or narrow it down. You can change your choices any time.")}</p></div>
        <div className="trip-controls">
          <label><span>{t("WHERE IN BANGLADESH?")}</span><select value={division} onChange={e => setDivision(e.target.value)}>{divisions.map(item => <option key={item} value={item}>{t(item)}</option>)}</select></label>
          <label><span>{t("WHAT FEELS RIGHT?")}</span><select value={experience} onChange={e => setExperience(e.target.value)}>{experiences.map(item => <option key={item} value={item}>{t(item)}</option>)}</select></label>
          <label><span>{t("HOW MANY IDEAS?")}</span><select value={suggestionSet} onChange={e => setSuggestionSet(e.target.value)}><option value="All matches (up to 6)">{t("All matches (up to 6)")}</option><option value="A few (3)">{t("A few (3)")}</option><option value="A handful (5)">{t("A handful (5)")}</option></select></label>
        </div>
        <div className="trip-results-heading"><div><span className="eyebrow"><span /> {t("YOUR STARTING POINT")}</span><h2><Sparkles size={19} /> {t("Places to consider")}</h2></div><span>{suggestions.length} {t("SUGGESTIONS")}</span></div>
        {suggestions.length ? <div className="trip-suggestion-grid">{suggestions.map(place => <a className="trip-suggestion" href={`/destinations/${place.slug}`} key={place.slug}><div className="trip-suggestion-image" style={{backgroundImage:`url(${destinationImageUrl(place.image, 900)})`}} /><div className="trip-suggestion-copy"><span>{t(place.type)} · {t(place.district)}</span><h3>{t(place.name)}</h3><p>{t(place.shortDescription)}</p><b>{t("Explore destination")} <ArrowUpRight size={15} /></b></div></a>)}</div> : <div className="trip-empty"><MapPin size={25} /><h3>{t("No matching places just yet")}</h3><p>{t("Try another division or choose “Any experience” to see more ideas.")}</p></div>}
        <div className="trip-copy-panel"><div><span className="eyebrow"><span /> {t("TAKE YOUR IDEAS WITH YOU")}</span><h3>{t("Keep your shortlist handy.")}</h3><p>{t("Copy your selected preferences and suggestions as a simple planning note.")}</p></div><button className="button button-dark" type="button" onClick={copyPlan}><Copy size={15} /> {copied ? t("Copied to clipboard") : t("Copy my trip ideas")}</button></div>
        <p className="trip-note">{t("These are inspiration suggestions, not a confirmed itinerary or booking. Check local access, weather, transport and opening information before travelling.")}</p>
      </section>
      <footer className="site-footer"><div className="footer-top"><a className="brand footer-brand" href="/"><span className="brand-mark"><Compass size={22} /></span><span className="brand-name">deshscape<span>.</span><small>{t("THE ART OF DISCOVERY")}</small></span></a><p>{t("Explore beyond the ordinary.")}<br />{t("Discover Bangladesh, one journey at a time.")}</p><a className="back-top" href="#top">{t("BACK TO TOP")} <ArrowUpRight size={15} /></a></div><div className="footer-bottom"><span>{t("© 2026 DESHSCAPE. MADE FOR THE CURIOUS.")}</span><span>{t("INDEPENDENTLY INSPIRED BY BANGLADESH.")}</span></div></footer>
    </main>
  );
}

