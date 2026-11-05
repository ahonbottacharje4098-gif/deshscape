import type { MetadataRoute } from "next";
import { allDestinations } from "@/data/destinations";
import { stories } from "@/app/journal/[slug]/page";

const siteUrl = "https://deshscape.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/journal", "/plan-trip", "/contact"].map((route) => ({
    url: `${siteUrl}${route}`,
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.7,
  }));

  const destinationRoutes = allDestinations.map((place) => ({
    url: `${siteUrl}/destinations/${place.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const journalRoutes = stories.map((story) => ({
    url: `${siteUrl}/journal/${story.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...destinationRoutes, ...journalRoutes];
}
