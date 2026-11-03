"use client";

import { useState } from "react";
import { Check, Copy, Share2 } from "lucide-react";

type Props = { title: string };

export default function ShareStory({ title }: Props) {
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
        await navigator.share({ title: title + " | Deshscape", text: "Read this story on Deshscape.", url: window.location.href });
      } catch {
        // The visitor may dismiss the native share sheet.
      }
    } else {
      await copyLink();
    }
  }

  return (
    <div className="journal-share">
      <span className="journal-share-label">ENJOYED THIS STORY?</span>
      <div className="journal-share-actions">
        <button type="button" onClick={copyLink} className="journal-share-button">
          {copied ? <Check size={15} /> : <Copy size={15} />}
          {copied ? "LINK COPIED" : "COPY LINK"}
        </button>
        <button type="button" onClick={shareStory} className="journal-share-button journal-share-primary">
          <Share2 size={15} /> SHARE STORY
        </button>
      </div>
    </div>
  );
}
