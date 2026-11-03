"use client";

import { useEffect, useState } from "react";
import { Bookmark, BookmarkCheck } from "lucide-react";

const STORAGE_KEY = "deshscape-saved-destinations";

type Props = { slug: string };

export default function SaveDestination({ slug }: Props) {
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    try {
      const stored = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
      setSaved(Array.isArray(stored) && stored.includes(slug));
    } catch {
      setSaved(false);
    }
  }, [slug]);

  function toggleSaved() {
    try {
      const stored = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
      const current: string[] = Array.isArray(stored) ? stored.filter((item): item is string => typeof item === "string") : [];
      const next = current.includes(slug)
        ? current.filter((item) => item !== slug)
        : [...current, slug];
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      setSaved(next.includes(slug));
    } catch {
      setSaved(false);
    }
  }

  return (
    <button
      type="button"
      className={saved ? "save-destination-button is-saved" : "save-destination-button"}
      onClick={toggleSaved}
      aria-pressed={saved}
      aria-label={saved ? "Remove this destination from saved places" : "Save this destination"}
    >
      {saved ? <BookmarkCheck size={16} /> : <Bookmark size={16} />}
      {saved ? "SAVED TO MY PLACES" : "SAVE THIS PLACE"}
    </button>
  );
}
