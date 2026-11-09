"use client";

import { useEffect, useMemo, useState } from "react";
import { ArrowUpRight, CalendarDays, Check, Compass, Copy, MapPin, Plus, Sparkles, Trash2 } from "lucide-react";
import { allDestinations } from "@/data/destinations";
import { destinationImageUrl } from "@/lib/destinationImage";
import { useLanguage } from "@/components/LanguageProvider";

const divisions = ["Any division", "Dhaka", "Chattogram", "Sylhet", "Khulna", "Rajshahi", "Barishal", "Rangpur", "Mymensingh"];
const experiences = ["Any experience", "Mountains", "Beaches", "Forests", "Rivers", "Nature", "Heritage"];
const PLAN_STORAGE_KEY = "deshscape-trip-draft";
const MAX_TRIP_DAYS = 5;

function belongsToDivision(region: string, division: string) {
  if (division === "Any division") return true;
  return region === `${division} Division`;
}

type StoredTripDraft = {
  duration?: number;
  selectedSlugs?: string[];
};

export default function TripPlannerPage() {
  const { t } = useLanguage();
  const [division, setDivision] = useState("Any division");
  const [experience, setExperience] = useState("Any experience");
  const [suggestionSet, setSuggestionSet] = useState("All matches (up to 6)");
  const [duration, setDuration] = useState(3);
  const [selectedSlugs, setSelectedSlugs] = useState<string[]>([]);
  const [copied, setCopied] = useState(false);
  const [storageReady, setStorageReady] = useState(false);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(PLAN_STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as StoredTripDraft;
        if (typeof parsed.duration === "number" && Number.isInteger(parsed.duration)) {
          setDuration(Math.min(MAX_TRIP_DAYS, Math.max(1, parsed.duration)));
        }
        if (Array.isArray(parsed.selectedSlugs)) {
          const valid = parsed.selectedSlugs.filter(
            (slug): slug is string => typeof slug === "string" && allDestinations.some((place) => place.slug === slug)
          );
          setSelectedSlugs([...new Set(valid)].slice(0, MAX_TRIP_DAYS));
        }
      }
    } catch {
      // An unavailable or invalid local draft should never block the planner.
    }
    setStorageReady(true);
  }, []);

  useEffect(() => {
    if (!storageReady) return;
    try {
      window.localStorage.setItem(PLAN_STORAGE_KEY, JSON.stringify({
        duration,
        selectedSlugs: selectedSlugs.slice(0, duration),
      }));
    } catch {
      // The itinerary remains available for the current session.
    }
  }, [duration, selectedSlugs, storageReady]);

  useEffect(() => {
    const syncDraft = (event: StorageEvent) => {
      if (event.key !== PLAN_STORAGE_KEY) return;
      try {
        const parsed = event.newValue ? JSON.parse(event.newValue) as StoredTripDraft : {};
        const nextDuration = typeof parsed.duration === "number" && Number.isInteger(parsed.duration)
          ? Math.min(MAX_TRIP_DAYS, Math.max(1, parsed.duration))
          : 3;
        const nextSlugs = Array.isArray(parsed.selectedSlugs)
          ? [...new Set(parsed.selectedSlugs.filter((slug): slug is string =>
              typeof slug === "string" && allDestinations.some((place) => place.slug === slug)
            ))].slice(0, nextDuration)
          : [];
        setDuration(nextDuration);
        setSelectedSlugs(nextSlugs);
      } catch {
        setSelectedSlugs([]);
      }
    };
    window.addEventListener("storage", syncDraft);
    return () => window.removeEventListener("storage", syncDraft);
  }, []);

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

  const selectedPlaces = useMemo(
    () => selectedSlugs.map((slug) => allDestinations.find((place) => place.slug === slug)).filter((place): place is (typeof allDestinations)[number] => Boolean(place)).slice(0, duration),
    [selectedSlugs, duration]
  );

  const tripSummary = [
    t("My Deshscape trip plan"),
    `${t("Trip duration")}: ${duration} ${t("days")}`,
    `${t("Division")}: ${t(division)}`,
    `${t("Experience")}: ${t(experience)}`,
    "",
    t("My day-by-day plan:"),
    ...(selectedPlaces.length
      ? selectedPlaces.map((place, index) => `${t("Day")} ${index + 1}: ${t(place.name)} — ${t(place.region)}`)
      : [t("No destinations selected yet.")]),
    "",
    t("Planning note: Suggestions are inspiration, not confirmed bookings or route guidance."),
  ].join("\n");

  function togglePlace(slug: string) {
    setSelectedSlugs((current) =>
      current.includes(slug)
        ? current.filter((item) => item !== slug)
        : current.length < duration
          ? [...current, slug]
          : current
    );
  }

  async function copyPlan() {
    try {
      await navigator.clipboard.writeText(tripSummary);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      setCopied(false);
    }
  }

  function clearPlan() {
    setSelectedSlugs([]);
    setCopied(false);
  }

  return (
    <main id="main-content" tabIndex={-1} className="trip-planner-page">
      <span id="top" />
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
          <label><span>{t("WHERE IN BANGLADESH?")}</span><select value={division} onChange={event => setDivision(event.target.value)}>{divisions.map(item => <option key={item} value={item}>{t(item)}</option>)}</select></label>
          <label><span>{t("WHAT FEELS RIGHT?")}</span><select value={experience} onChange={event => setExperience(event.target.value)}>{experiences.map(item => <option key={item} value={item}>{t(item)}</option>)}</select></label>
          <label><span>{t("HOW MANY IDEAS?")}</span><select value={suggestionSet} onChange={event => setSuggestionSet(event.target.value)}><option value="All matches (up to 6)">{t("All matches (up to 6)")}</option><option value="A few (3)">{t("A few (3)")}</option><option value="A handful (5)">{t("A handful (5)")}</option></select></label>
          <label><span>{t("HOW MANY DAYS?")}</span><select value={duration} onChange={event => { const next = Number(event.target.value); setDuration(next); setSelectedSlugs(current => current.slice(0, next)); }}>{Array.from({ length: MAX_TRIP_DAYS }, (_, index) => index + 1).map(days => <option key={days} value={days}>{days} {t("days")}</option>)}</select></label>
        </div>

        <div className="trip-results-heading"><div><span className="eyebrow"><span /> {t("YOUR STARTING POINT")}</span><h2><Sparkles size={19} /> {t("Places to consider")}</h2></div><span>{suggestions.length} {t("SUGGESTIONS")}</span></div>
        <p className="trip-selection-hint">{t("Choose up to one destination for each day. Your draft is saved in this browser.")} {selectedPlaces.length}/{duration} {t("selected")}</p>
        {suggestions.length ? <div className="trip-suggestion-grid">{suggestions.map(place => {
          const isSelected = selectedSlugs.includes(place.slug);
          const isFull = selectedPlaces.length >= duration;
          return (
            <article className={isSelected ? "trip-suggestion is-selected" : "trip-suggestion"} key={place.slug}>
              <a className="trip-suggestion-image" href={`/destinations/${place.slug}`} aria-label={`${t("Explore destination")}: ${t(place.name)}`} style={{ backgroundImage: `url(${destinationImageUrl(place.image, 900)})` }} />
              <div className="trip-suggestion-copy">
                <span>{t(place.type)} · {t(place.district)}</span>
                <h3>{t(place.name)}</h3>
                <p>{t(place.shortDescription)}</p>
                <div className="trip-suggestion-actions">
                  <a href={`/destinations/${place.slug}`}>{t("Explore destination")} <ArrowUpRight size={14} /></a>
                  <button type="button" className={isSelected ? "trip-add-button added" : "trip-add-button"} onClick={() => togglePlace(place.slug)} disabled={!isSelected && isFull} aria-pressed={isSelected}>
                    {isSelected ? <><Check size={14} /> {t("Added to plan")}</> : <><Plus size={14} /> {t("Add to plan")}</>}
                  </button>
                </div>
              </div>
            </article>
          );
        })}</div> : <div className="trip-empty"><MapPin size={25} /><h3>{t("No matching places just yet")}</h3><p>{t("Try another division or choose “Any experience” to see more ideas.")}</p></div>}

        <section className="trip-itinerary" aria-labelledby="trip-itinerary-title">
          <div className="trip-itinerary-heading">
            <div><span className="eyebrow"><span /> {t("YOUR PERSONAL ITINERARY")}</span><h2 id="trip-itinerary-title"><CalendarDays size={20} /> {t("Your day-by-day plan")}</h2></div>
            <button type="button" className="trip-clear-button" onClick={clearPlan} disabled={!selectedPlaces.length}><Trash2 size={14} /> {t("Clear plan")}</button>
          </div>
          {selectedPlaces.length ? (
            <div className="trip-day-list">{selectedPlaces.map((place, index) => (
              <article className="trip-day-card" key={place.slug}>
                <span className="trip-day-number">{t("Day")} {index + 1}</span>
                <div><h3>{t(place.name)}</h3><p><MapPin size={13} /> {t(place.district)}, {t(place.region)}</p></div>
                <button type="button" onClick={() => togglePlace(place.slug)} aria-label={`${t("Remove")} ${t(place.name)}`}><Trash2 size={15} /></button>
              </article>
            ))}</div>
          ) : (
            <div className="trip-itinerary-empty"><CalendarDays size={22} /><p>{t("Select destinations above to build your day-by-day shortlist.")}</p></div>
          )}
          <p className="trip-itinerary-note">{t("This is a flexible shortlist, not a route-optimized schedule. Check distances, local transport, weather and access before travelling.")}</p>
        </section>

        <div className="trip-copy-panel"><div><span className="eyebrow"><span /> {t("TAKE YOUR IDEAS WITH YOU")}</span><h3>{t("Keep your shortlist handy.")}</h3><p>{t("Copy your selected preferences and suggestions as a simple planning note.")}</p></div><button className="button button-dark" type="button" onClick={copyPlan} disabled={!selectedPlaces.length}><Copy size={15} /> {copied ? t("Copied to clipboard") : t("Copy my trip ideas")}</button></div>
        <p className="trip-note">{t("These are inspiration suggestions, not a confirmed itinerary or booking. Check local access, weather, transport and opening information before travelling.")}</p>
      </section>
      <footer className="site-footer"><div className="footer-top"><a className="brand footer-brand" href="/"><span className="brand-mark"><Compass size={22} /></span><span className="brand-name">deshscape<span>.</span><small>{t("THE ART OF DISCOVERY")}</small></span></a><p>{t("Explore beyond the ordinary.")}<br />{t("Discover Bangladesh, one journey at a time.")}</p><a className="back-top" href="#top">{t("BACK TO TOP")} <ArrowUpRight size={15} /></a></div><div className="footer-bottom"><span>{t("© 2026 DESHSCAPE. MADE FOR THE CURIOUS.")}</span><span>{t("INDEPENDENTLY INSPIRED BY BANGLADESH.")}</span></div></footer>
    </main>
  );
}
