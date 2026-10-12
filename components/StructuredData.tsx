import { profile } from "@/config/profile";
import { getSiteUrl } from "@/lib/site";

/**
 * Strukturierte Daten (JSON-LD) für Suchmaschinen.
 * Google versteht dadurch, dass es sich um die Website eines
 * Webentwicklers handelt – inklusive Region und Profilen.
 */
export function StructuredData() {
  const siteUrl = getSiteUrl();

  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: profile.role,
    description: profile.description,
    url: siteUrl,
    email: `mailto:${profile.contact.email}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: profile.legal.city,
      addressRegion: profile.location,
      addressCountry: "DE",
    },
    knowsAbout: profile.techStack.flatMap((group) => group.items),
    sameAs: profile.socials.map((social) => social.url),
  };

  return (
    <script
      type="application/ld+json"
      // „<“ wird maskiert, damit Texte das Skript nicht vorzeitig beenden können
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
