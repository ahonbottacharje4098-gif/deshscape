"use client";

import { useState } from "react";
import { Check, Copy, Share2 } from "lucide-react";

type Props = { title: string };

export default function ShareDestination({ title }: Props) {
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

  async function shareDestination() {
    if (navigator.share) {
      try {
        await navigator.share({
          title: title + " | Deshscape",
          text: "Discover " + title + " on Deshscape.",
          url: window.location.href,
        });
      } catch {
        // The visitor may dismiss the native share sheet.
      }
    } else {
      await copyLink();
    }
  }

  return (
    <div className="journal-share destination-share">
      <span className="journal-share-label">WANT TO EXPLORE THIS PLACE?</span>
      <div className="journal-share-actions">
        <button type="button" onClick={copyLink} className="journal-share-button">
          {copied ? <Check size={15} /> : <Copy size={15} />}
          {copied ? "LINK COPIED" : "COPY LINK"}
        </button>
        <button type="button" onClick={shareDestination} className="journal-share-button journal-share-primary">
          <Share2 size={15} /> SHARE DESTINATION
        </button>
      </div>
    </div>
  );
}
