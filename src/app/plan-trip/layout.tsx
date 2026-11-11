import type { Metadata } from "next";
import type { ReactNode } from "react";

const description = "Create a shortlist of Bangladesh destinations by division and experience, then copy your trip ideas.";

export const metadata: Metadata = {
  title: "Plan a trip across Bangladesh",
  description,
  alternates: { canonical: "/plan-trip" },
  openGraph: {
    type: "website",
    url: "https://deshscape.vercel.app/plan-trip",
    title: "Plan a trip | Deshscape",
    description,
    images: [{ url: "/bangladesh-social-cover.svg", width: 1200, height: 630, alt: "Illustrated Bangladesh river and green landscape — Deshscape trip planner" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Plan a trip across Bangladesh | Deshscape",
    description,
    images: ["/bangladesh-social-cover.svg"],
  },
};

export default function PlanTripLayout({ children }: { children: ReactNode }) {
  return children;
}
