import type { Metadata } from "next";
import type { ReactNode } from "react";

const description = "Create a shortlist of Bangladesh destinations by division and experience, then copy your trip ideas.";

export const metadata: Metadata = {
  title: "Plan a trip",
  description,
  alternates: { canonical: "/plan-trip" },
  openGraph: {
    type: "website",
    url: "https://deshscape.vercel.app/plan-trip",
    title: "Plan a trip | Deshscape",
    description,
  },
};

export default function PlanTripLayout({ children }: { children: ReactNode }) {
  return children;
}
