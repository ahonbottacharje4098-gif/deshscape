"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/components/LanguageProvider";

export default function ReadingProgress() {
  const { t } = useLanguage();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const article = document.querySelector(".journal-article-body");
      if (!article) return;
      const articleTop = article.getBoundingClientRect().top + window.scrollY;
      const articleHeight = article.scrollHeight;
      const available = Math.max(1, articleHeight - window.innerHeight);
      const current = window.scrollY - articleTop;
      setProgress(Math.min(100, Math.max(0, (current / available) * 100)));
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);
    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  return (
    <div className="reading-progress-track" role="progressbar" aria-label={t("Article reading progress")} aria-valuemin={0} aria-valuemax={100} aria-valuenow={Math.round(progress)}>
      <span className="reading-progress-fill" style={{ width: `${progress}%` }} />
    </div>
  );
}
