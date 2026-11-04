import type { MetadataRoute } from "next";
import { allDestinations } from "@/data/destinations";

const siteUrl = "https://deshscape-ccznp5kl3-deshscape.vercel.app";

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

  const journalRoutes = ["river-town-rhythm", "beyond-tea-gardens"].map((slug) => ({
    url: `${siteUrl}/journal/${slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...destinationRoutes, ...journalRoutes];
}
