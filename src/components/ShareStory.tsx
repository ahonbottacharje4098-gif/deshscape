"use client";

import { useState } from "react";
import { Check, Copy, Share2 } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";

type Props = { title: string };

export default function ShareStory({ title }: Props) {
  const { t } = useLanguage();
  const [copied, setCopied] = useState(false);

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      setCopied(false);
    }
  }

  async function shareStory() {
    if (navigator.share) {
      try {
        await navigator.share({ title: `${t(title)} | Deshscape`, text: t("Read this story on Deshscape."), url: window.location.href });
      } catch {
        // The visitor may dismiss the native share sheet.
      }
    } else {
      await copyLink();
    }
  }

  return (
    <div className="journal-share">
      <span className="journal-share-label">{t("ENJOYED THIS STORY?")}</span>
      <div className="journal-share-actions">
        <button type="button" onClick={copyLink} className="journal-share-button">
          {copied ? <Check size={15} /> : <Copy size={15} />}
          {copied ? t("LINK COPIED") : t("COPY LINK")}
        </button>
        <button type="button" onClick={shareStory} className="journal-share-button journal-share-primary">
          <Share2 size={15} /> {t("SHARE STORY")}
        </button>
      </div>
    </div>
  );
}
