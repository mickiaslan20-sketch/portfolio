import { profile, site } from "@/config/profile";

/**
 * Liefert die öffentliche Adresse der Website (ohne Schrägstrich am Ende).
 *
 * Reihenfolge:
 *   1. `site.url` aus config/profile.ts (eigene Domain)
 *   2. die Adresse, die Netlify bzw. Vercel beim Veröffentlichen automatisch bereitstellt
 *   3. localhost für die Entwicklung
 */
export function getSiteUrl(): string {
  if (site.url) return site.url.replace(/\/+$/, "");

  // Netlify stellt die Hauptadresse der Website als Variable „URL“ bereit
  const netlifyUrl = process.env.URL;
  if (netlifyUrl) return netlifyUrl.replace(/\/+$/, "");

  const vercelUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  if (vercelUrl) return `https://${vercelUrl}`;

  return "http://localhost:3000";
}

/** Initialen aus dem Namen, z. B. „Mikkel Aslan“ → „MA“. */
export function getInitials(name: string = profile.name): string {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

/** Zeigt eine URL ohne Protokoll an, z. B. „github.com/name“. */
export function prettyUrl(url: string): string {
  return url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/+$/, "");
}
