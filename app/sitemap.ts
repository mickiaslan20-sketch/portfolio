import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/site";

/** Sitemap für Suchmaschinen – erreichbar unter /sitemap.xml */
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getSiteUrl();
  const lastModified = new Date();

  return [
    { url: baseUrl, lastModified, changeFrequency: "monthly", priority: 1 },
    { url: `${baseUrl}/impressum`, lastModified, changeFrequency: "yearly", priority: 0.2 },
    { url: `${baseUrl}/datenschutz`, lastModified, changeFrequency: "yearly", priority: 0.2 },
  ];
}
