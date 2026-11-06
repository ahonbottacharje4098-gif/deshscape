import type { Metadata } from "next";
import LegalShell from "@/components/LegalShell";

export const metadata: Metadata = {
  title: "Editorial & Affiliate Disclosure",
  description: "How Deshscape chooses what to feature, and how we will label any paid or affiliate links.",
  alternates: { canonical: "/affiliate-disclosure" },
};

export default function AffiliateDisclosurePage() {
  return (
    <LegalShell eyebrow="DISCLOSURE" title="Editorial & Affiliate Disclosure" updated="6 November 2026">
      <p>We want you to know how Deshscape works and how it may earn money, so you can trust what you read.</p>

      <h2>Where things stand today</h2>
      <p>Deshscape does not currently show advertising and does not currently earn commission from any link. Destinations and stories are included because we think they are worth visiting, not because anyone paid for a place.</p>

      <h2>If this changes</h2>
      <p>In the future we may add affiliate links, such as hotel, tour or travel-insurance partners. If we do, we will follow these rules:</p>
      <ul>
        <li>Any link that may earn us a commission will be clearly labelled where it appears.</li>
        <li>Paid or sponsored placements will be marked as sponsored and kept visually separate from editorial picks.</li>
        <li>Commission will never change how we describe or rank a place.</li>
      </ul>

      <h2>Accuracy</h2>
      <p>Our stories are editorial inspiration, not live travel updates. Opening hours, access, safety and prices can change, so please confirm local conditions before you travel. Map pins are approximate and are not turn-by-turn navigation.</p>

      <h2>Questions</h2>
      <p>If something here is unclear, reach us through the <a href="/contact">contact page</a>.</p>
    </LegalShell>
  );
}
