import type { Metadata } from "next";
import { profile, site } from "@/config/profile";
import { LegalPage } from "@/components/ui/LegalPage";

export const metadata: Metadata = {
  title: "Datenschutz",
  description: `Datenschutzerklärung der Website von ${profile.name}.`,
  alternates: { canonical: "/datenschutz" },
};

/**
 * Datenschutzerklärung – VORLAGE.
 *
 * Sie beschreibt den technischen Stand dieser Website: Hosting bei Netlify
 * oder Vercel (Einstellung `site.hosting` in config/profile.ts), keine Cookies,
 * kein Tracking, Schrift lokal eingebunden, Kontaktformular über Formspree
 * oder das E-Mail-Programm des Besuchers.
 *
 * Bitte lass den Text vor der Veröffentlichung prüfen (z. B. mit einem
 * Datenschutz-Generator oder durch eine Fachperson) und passe ihn an,
 * wenn du neue Dienste einbindest. Diese Vorlage ist keine Rechtsberatung.
 */
/** Angaben zu den Hosting-Anbietern (Stand: Oktober 2026) */
const hostingProviders = {
  netlify: {
    company: "Netlify, Inc., 101 2nd Street, San Francisco, CA 94105, USA",
    privacyUrl: "https://www.netlify.com/privacy/",
    privacyLabel: "Datenschutzerklärung von Netlify",
    name: "Netlify",
  },
  vercel: {
    company: "Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, USA",
    privacyUrl: "https://vercel.com/legal/privacy-notice",
    privacyLabel: "Datenschutzerklärung von Vercel",
    name: "Vercel",
  },
};

export default function DatenschutzPage() {
  const { legal, contact } = profile;
  const usesFormspree = Boolean(contact.formspreeId);
  const host = hostingProviders[site.hosting];

  return (
    <LegalPage title="Datenschutzerklärung" updated={legal.privacyUpdated}>
      <p>
        Der Schutz Ihrer persönlichen Daten ist mir wichtig. Diese Website verwendet keine Cookies,
        keine Analyse- oder Tracking-Dienste und keine eingebetteten Inhalte von Social-Media-Plattformen.
        Im Folgenden erfahren Sie, welche Daten beim Besuch dieser Website verarbeitet werden.
      </p>

      <h2>1. Verantwortlicher</h2>
      <address>
        {legal.name}
        <br />
        {legal.street}
        <br />
        {legal.postalCode} {legal.city}
        <br />
        {legal.country}
        <br />
        E-Mail: <a href={`mailto:${contact.email}`}>{contact.email}</a>
      </address>

      <h2>2. Hosting</h2>
      <p>
        Diese Website wird bei {host.company} gehostet. Beim Aufruf der Website werden automatisch Informationen in sogenannten
        Server-Logfiles erfasst, die Ihr Browser übermittelt:
      </p>
      <ul>
        <li>IP-Adresse</li>
        <li>Datum und Uhrzeit der Anfrage</li>
        <li>aufgerufene Seite</li>
        <li>Referrer-URL (die zuvor besuchte Seite)</li>
        <li>verwendeter Browser und Betriebssystem</li>
      </ul>
      <p>
        Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Mein berechtigtes
        Interesse liegt in der sicheren und zuverlässigen Bereitstellung der Website. Dabei kann eine
        Übermittlung von Daten in die USA stattfinden. {host.name} ist unter dem EU-U.S. Data
        Privacy Framework zertifiziert. Weitere Informationen finden Sie in der{" "}
        <a href={host.privacyUrl} target="_blank" rel="noopener noreferrer">
          {host.privacyLabel}
        </a>
        .
      </p>

      <h2>3. Kontaktaufnahme</h2>
      {usesFormspree ? (
        <p>
          Wenn Sie mir über das Kontaktformular eine Nachricht senden, werden Ihr Name, Ihre
          E-Mail-Adresse und Ihre Nachricht über den Dienst Formspree (Formspree, Inc., USA) an mich
          übermittelt und dort gespeichert. Dabei kann eine Übermittlung von Daten in die USA
          stattfinden.
        </p>
      ) : (
        <p>
          Das Kontaktformular sendet keine Daten an einen Server. Es öffnet Ihr E-Mail-Programm mit
          einer vorbereiteten Nachricht, die Sie selbst absenden.
        </p>
      )}
      <p>
        Wenn Sie mich per E-Mail oder über das Kontaktformular kontaktieren, verarbeite ich Ihre
        Angaben ausschließlich zur Bearbeitung Ihrer Anfrage. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b
        DSGVO, sofern Ihre Anfrage mit einem Vertrag oder vorvertraglichen Maßnahmen zusammenhängt,
        andernfalls Art. 6 Abs. 1 lit. f DSGVO. Ihre Daten werden gelöscht, sobald Ihre Anfrage
        abschließend bearbeitet ist und keine gesetzlichen Aufbewahrungspflichten entgegenstehen.
      </p>

      <h2>4. Speicherung im Browser</h2>
      <p>
        Wenn Sie den Hell- oder Dunkelmodus umschalten, wird Ihre Auswahl im lokalen Speicher Ihres
        Browsers (localStorage) abgelegt. Zusätzlich wird für die Dauer Ihres Besuchs gespeichert, dass
        die Ladeanimation bereits angezeigt wurde (sessionStorage). Diese Informationen enthalten keine
        personenbezogenen Daten, verbleiben auf Ihrem Gerät und werden nicht an mich übertragen. Die
        Speicherung ist für die von Ihnen gewünschte Darstellung erforderlich (§ 25 Abs. 2 Nr. 2
        TDDDG).
      </p>

      <h2>5. Schriftarten</h2>
      <p>
        Die auf dieser Website verwendete Schriftart ist lokal eingebunden. Beim Aufruf der Website
        wird keine Verbindung zu Servern von Google oder anderen Schriftanbietern hergestellt.
      </p>

      <h2>6. Ihre Rechte</h2>
      <p>Sie haben jederzeit das Recht auf:</p>
      <ul>
        <li>Auskunft über Ihre gespeicherten Daten (Art. 15 DSGVO)</li>
        <li>Berichtigung unrichtiger Daten (Art. 16 DSGVO)</li>
        <li>Löschung Ihrer Daten (Art. 17 DSGVO)</li>
        <li>Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
        <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
        <li>Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)</li>
      </ul>
      <p>
        Wenden Sie sich dazu einfach per E-Mail an mich. Außerdem können Sie sich bei einer
        Datenschutz-Aufsichtsbehörde beschweren, zum Beispiel beim Landesbeauftragten für den
        Datenschutz und die Informationsfreiheit Rheinland-Pfalz.
      </p>
    </LegalPage>
  );
}
