import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/site";

/** Erlaubt Suchmaschinen das Durchsuchen – erreichbar unter /robots.txt */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${getSiteUrl()}/sitemap.xml`,
  };
}
