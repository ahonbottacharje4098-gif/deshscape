"use client";

import { useEffect, useState } from "react";
import { Bookmark, BookmarkCheck } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";
import {
  readSavedDestinations,
  SAVED_DESTINATIONS_EVENT,
  writeSavedDestinations,
} from "@/lib/savedDestinations";

type Props = { slug: string };

export default function SaveDestination({ slug }: Props) {
  const { t } = useLanguage();
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const syncSavedState = () => setSaved(readSavedDestinations().includes(slug));
    syncSavedState();
    window.addEventListener(SAVED_DESTINATIONS_EVENT, syncSavedState);
    window.addEventListener("storage", syncSavedState);
    return () => {
      window.removeEventListener(SAVED_DESTINATIONS_EVENT, syncSavedState);
      window.removeEventListener("storage", syncSavedState);
    };
  }, [slug]);

  function toggleSaved() {
    const current = readSavedDestinations();
    const next = current.includes(slug)
      ? current.filter((item) => item !== slug)
      : [...current, slug];
    writeSavedDestinations(next);
  }

  return (
    <button
      type="button"
      className={saved ? "save-destination-button is-saved" : "save-destination-button"}
      onClick={toggleSaved}
      aria-pressed={saved}
      aria-label={saved ? t("Remove this destination from saved places") : t("Save this destination")}
    >
      {saved ? <BookmarkCheck size={16} /> : <Bookmark size={16} />}
      {saved ? t("SAVED TO MY PLACES") : t("SAVE THIS PLACE")}
    </button>
  );
}
