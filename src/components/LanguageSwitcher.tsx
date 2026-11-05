"use client";

import { Languages } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="language-switcher" role="group" aria-label="Choose website language">
      <Languages size={15} aria-hidden="true" />
      <button type="button" onClick={() => setLanguage("en")} aria-pressed={language === "en"}>EN</button>
      <span aria-hidden="true">|</span>
      <button type="button" onClick={() => setLanguage("bn")} aria-pressed={language === "bn"}>বাংলা</button>
    </div>
  );
}
