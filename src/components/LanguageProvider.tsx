"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import type { ReactNode } from "react";
import { translate, type Language } from "@/i18n/messages";

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (text: string) => string;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");
  const [languageReady, setLanguageReady] = useState(false);

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem("deshscape-language");
      if (saved === "bn" || saved === "en") setLanguageState(saved);
    } catch {
      // Keep English as the default when browser storage is unavailable.
    }
    setLanguageReady(true);
  }, []);

  useEffect(() => {
    if (!languageReady) return;
    document.documentElement.lang = language;
    document.documentElement.dataset.language = language;
    try {
      window.localStorage.setItem("deshscape-language", language);
    } catch {
      // The selected language still applies for the current session.
    }
  }, [language, languageReady]);

  const value = useMemo<LanguageContextValue>(() => ({
    language,
    setLanguage: setLanguageState,
    t: (text: string) => translate(text, language),
  }), [language]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
}
