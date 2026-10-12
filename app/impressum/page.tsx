import type { Metadata } from "next";
import { profile } from "@/config/profile";
import { LegalPage } from "@/components/ui/LegalPage";

export const metadata: Metadata = {
  title: "Impressum",
  description: `Impressum von ${profile.name}, ${profile.role}.`,
  alternates: { canonical: "/impressum" },
};

/**
 * Impressum – die Angaben kommen aus config/profile.ts (Bereich „legal“).
 * Hinweis: Bitte prüfe die Angaben selbst. Diese Vorlage ersetzt keine
 * Rechtsberatung.
 */
export default function ImpressumPage() {
  const { legal, contact } = profile;

  return (
    <LegalPage title="Impressum">
      <h2>Angaben gemäß § 5 DDG</h2>
      <address>
        {legal.name}
        <br />
        {legal.street}
        <br />
        {legal.postalCode} {legal.city}
        <br />
        {legal.country}
      </address>

      <h2>Kontakt</h2>
      <p>
        E-Mail: <a href={`mailto:${contact.email}`}>{contact.email}</a>
        {contact.phone ? (
          <>
            <br />
            Telefon: <a href={`tel:${contact.phone.replace(/[^\d+]/g, "")}`}>{contact.phone}</a>
          </>
        ) : null}
      </p>

      {legal.vatId ? (
        <>
          <h2>Umsatzsteuer-ID</h2>
          <p>Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz: {legal.vatId}</p>
        </>
      ) : null}

      <h2>Haftung für Links</h2>
      <p>
        Diese Website enthält Links zu externen Websites Dritter, auf deren Inhalte ich keinen Einfluss
        habe. Für diese fremden Inhalte ist stets der jeweilige Anbieter oder Betreiber der Seiten
        verantwortlich. Sollten mir Rechtsverletzungen bekannt werden, entferne ich derartige Links
        umgehend.
      </p>
    </LegalPage>
  );
}
