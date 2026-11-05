"use client";

import { useMemo, useState } from "react";
import { ArrowRight, ArrowUpRight, Compass, Copy, MapPin, Sparkles } from "lucide-react";
import { allDestinations } from "@/data/destinations";
import { destinationImageUrl } from "@/lib/destinationImage";

const divisions = ["Any division", "Dhaka", "Chattogram", "Sylhet", "Khulna", "Rajshahi", "Barishal", "Rangpur", "Mymensingh"];
const experiences = ["Any experience", "Mountains", "Beaches", "Forests", "Rivers", "Nature", "Heritage"];

function belongsToDivision(region: string, division: string) {
  if (division === "Any division") return true;
  if (division === "Chattogram") return /Chattogram|Cox's Bazar|Rangamati/i.test(region);
  return region.toLowerCase().includes(division.toLowerCase());
}

export default function TripPlannerPage() {
  const [division, setDivision] = useState("Any division");
  const [experience, setExperience] = useState("Any experience");
  const [duration, setDuration] = useState("Any duration");
  const [copied, setCopied] = useState(false);

  const suggestions = useMemo(() => {
    const matches = allDestinations.filter((place) =>
      belongsToDivision(place.region, division) &&
      (experience === "Any experience" || place.type === experience)
    );
    const suggestionLimit =
      duration === "1–2 days" ? 3 :
      duration === "3–4 days" ? 5 : 6;

    return matches.slice(0, suggestionLimit);
  }, [division, experience, duration]);

  const tripSummary = [
    "My Deshscape trip ideas",
    `Division: ${division}`,
    `Experience: ${experience}`,
    `Duration: ${duration}`,
    "",
    "Suggested destinations:",
    ...suggestions.map((place, index) => `${index + 1}. ${place.name} — ${place.region}`)
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
        <a className="brand" href="/" aria-label="Deshscape home"><span className="brand-mark"><Compass size={22} strokeWidth={1.7} /></span><span className="brand-name">deshscape<span>.</span><small>THE ART OF DISCOVERY</small></span></a>
        <nav className="main-nav"><a className="nav-link" href="/">Discover</a><a className="nav-link" href="/#destinations">Destinations</a><a className="nav-link" href="/journal">Journal</a></nav>
        <div className="header-actions"><a className="plan-link" href="/#destinations">Explore places <ArrowUpRight size={15} /></a></div>
      </header>

      <section className="trip-hero">
        <div className="eyebrow light"><span /> YOUR JOURNEY STARTS HERE</div>
        <h1>Let's find your<br /><em>somewhere.</em></h1>
        <p>Choose the kind of escape you have in mind. We'll suggest places across Bangladesh to get your plans moving.</p>
        <span className="trip-hero-mark"><Compass size={82} strokeWidth={0.8} /></span>
      </section>

      <section className="trip-builder section-wrap">
        <div className="trip-builder-heading"><div className="eyebrow"><span /> THE TRIP BUILDER</div><h2>A few choices.<br /><em>A world to explore.</em></h2><p>Start broad or narrow it down. You can change your choices any time.</p></div>
        <div className="trip-controls">
          <label><span>WHERE IN BANGLADESH?</span><select value={division} onChange={e => setDivision(e.target.value)}>{divisions.map(item => <option key={item}>{item}</option>)}</select></label>
          <label><span>WHAT FEELS RIGHT?</span><select value={experience} onChange={e => setExperience(e.target.value)}>{experiences.map(item => <option key={item}>{item}</option>)}</select></label>
          <label><span>HOW MUCH TIME?</span><select value={duration} onChange={e => setDuration(e.target.value)}><option>Any duration</option><option>1–2 days</option><option>3–4 days</option><option>5+ days</option></select></label>
        </div>
        <div className="trip-results-heading"><div><span className="eyebrow"><span /> YOUR STARTING POINT</span><h2><Sparkles size={19} /> Places to consider</h2></div><span>{suggestions.length} SUGGESTIONS</span></div>
        {suggestions.length ? <div className="trip-suggestion-grid">{suggestions.map(place => <a className="trip-suggestion" href={`/destinations/${place.slug}`} key={place.slug}><div className="trip-suggestion-image" style={{backgroundImage:`url(${destinationImageUrl(place.image, 900)})`}} /><div className="trip-suggestion-copy"><span>{place.type} · {place.district}</span><h3>{place.name}</h3><p>{place.shortDescription}</p><b>Explore destination <ArrowUpRight size={15} /></b></div></a>)}</div> : <div className="trip-empty"><MapPin size={25} /><h3>No matching places just yet</h3><p>Try another division or choose “Any experience” to see more ideas.</p></div>}
        <div className="trip-copy-panel"><div><span className="eyebrow"><span /> TAKE YOUR IDEAS WITH YOU</span><h3>Keep your shortlist handy.</h3><p>Copy your selected preferences and suggestions as a simple planning note.</p></div><button className="button button-dark" type="button" onClick={copyPlan}><Copy size={15} /> {copied ? "Copied to clipboard" : "Copy my trip ideas"}</button></div>
        <p className="trip-note">These are inspiration suggestions, not a confirmed itinerary or booking. Check local access, weather, transport and opening information before travelling.</p>
      </section>
      <footer className="site-footer"><div className="footer-top"><a className="brand footer-brand" href="/"><span className="brand-mark"><Compass size={22} /></span><span className="brand-name">deshscape<span>.</span><small>THE ART OF DISCOVERY</small></span></a><p>Explore beyond the ordinary.<br />Discover Bangladesh, one journey at a time.</p><a className="back-top" href="#top">BACK TO TOP <ArrowUpRight size={15} /></a></div><div className="footer-bottom"><span>© 2026 DESHSCAPE. MADE FOR THE CURIOUS.</span><span>INDEPENDENTLY INSPIRED BY BANGLADESH.</span></div></footer>
    </main>
  );
}
