/**
 * ============================================================================
 *  DEINE INHALTE – die zentrale Datei der Website
 * ============================================================================
 *
 *  Alles, was auf der Website steht, kommt aus dieser Datei: Name, Texte,
 *  Leistungen, Skills, Projekte, Kontaktdaten und Impressum. Ändere hier
 *  etwas, speichere – und die Website zeigt es automatisch an.
 *
 *  Drei Regeln, dann kann nichts schiefgehen:
 *    1. Texte stehen immer in Anführungszeichen:  "Mein Text"
 *    2. Nach jedem Eintrag folgt ein Komma:        name: "Mikkel Aslan",
 *    3. Listen stehen in eckigen Klammern:         ["HTML", "CSS"]
 *
 *  Die genaue Anleitung findest du in der README.md.
 * ============================================================================
 */

import type { Profile, SiteSettings } from "./types";

export const profile: Profile = {
  // ─── Startbereich (ganz oben) ─────────────────────────────────────────────
  name: "Mikkel Aslan",
  role: "Webentwickler",
  tagline: "Moderne Websites für Unternehmen",
  description:
    "Ich entwickle schnelle, moderne Websites, mit denen Unternehmen online so professionell auftreten, wie sie arbeiten – individuell geplant, sauber programmiert und auf jedem Gerät überzeugend.",

  // Zeigt oben „Offen für neue Projekte“ an. Auf false setzen, wenn du gerade
  // keine neuen Aufträge annimmst.
  available: true,
  availabilityText: "Offen für neue Projekte",

  // ─── Steckbrief (Bereich „Über mich“) ─────────────────────────────────────
  // Leere Felder ("") werden auf der Website automatisch ausgeblendet.
  location: "Rheinland-Pfalz",
  age: "", // z. B. "18" – leer lassen, um das Alter nicht anzuzeigen
  education: "Abitur, Schwerpunkt IT",
  experience: "Eigene Webprojekte seit der Schulzeit",
  focus: "Websites für Unternehmen",

  about: {
    // Jeder Eintrag ist ein eigener Absatz.
    intro: [
      "Ich bin Mikkel, Webentwickler aus Rheinland-Pfalz. Ich helfe Unternehmen, online einen starken ersten Eindruck zu hinterlassen – mit Websites, die gut aussehen, schnell laden und aus Besuchern Kunden machen.",
      "Mein Abitur habe ich mit Schwerpunkt Informationstechnik gemacht und dort ein solides Fundament in Informatik und Programmierung gelegt. Parallel habe ich sehr viel Zeit in moderne Webentwicklung gesteckt: neue Technologien ausprobiert, eigene Projekte gebaut und an Details gefeilt, bis sie sitzen.",
    ],
    motivation:
      "Ich liebe es, Menschen zu helfen und sie weiterzubringen. Wenn eine Website einem Unternehmen spürbar weiterhilft, ist das für mich der beste Beweis für gute Arbeit. Gleichzeitig lerne ich mit jedem Projekt dazu – und davon profitieren meine Kunden direkt.",
    strengths: [
      "Saubere, moderne Programmierung",
      "Gestaltung mit Blick fürs Detail",
      "Websites, die auf jedem Gerät funktionieren",
      "Verständliche Erklärungen ohne Fachchinesisch",
    ],
    career: [
      {
        title: "Abitur mit Schwerpunkt IT",
        text: "Fundierte Grundlagen in Informatik und Programmierung.",
      },
      {
        title: "Intensives Selbststudium",
        text: "Moderne Webentwicklung mit React, Next.js und Tailwind CSS in eigenen Projekten gelernt und angewendet.",
      },
      {
        title: "Heute: Freelancer",
        text: "Ich setze Websites für Unternehmen um – von der ersten Idee bis zum Livegang.",
      },
    ],
  },

  // ─── Leistungen ───────────────────────────────────────────────────────────
  // Mögliche Symbole (icon): "code", "gauge", "puzzle", "sparkles",
  // "message", "pencil", "quality", "handshake"
  services: [
    {
      icon: "code",
      title: "Webentwicklung",
      description:
        "Ihr Unternehmen professionell im Netz – von der kompletten Website bis zur gezielten Landingpage.",
      items: ["Moderne Unternehmenswebsites", "Landingpages", "Responsive Design"],
    },
    {
      icon: "gauge",
      title: "Website-Optimierung",
      description:
        "Ihre bestehende Website wird schneller, moderner und auf dem Smartphone besser nutzbar.",
      items: ["Performance", "Design-Verbesserungen", "Mobile Optimierung"],
    },
    {
      icon: "puzzle",
      title: "Digitale Lösungen",
      description:
        "Funktionen, die Ihnen Arbeit abnehmen und Ihren Kunden die Kontaktaufnahme erleichtern.",
      items: ["Kontaktformulare", "Automatisierungen", "Individuelle Funktionen"],
    },
  ],

  // ─── Technologien ─────────────────────────────────────────────────────────
  // Neue Gruppe: { name: "Backend", items: ["Node.js"] },
  techStack: [
    {
      name: "Frontend",
      items: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind CSS"],
    },
    {
      name: "Tools",
      items: ["Git", "GitHub", "VS Code"],
    },
    {
      name: "Weitere",
      items: ["Responsive Design", "SEO-Grundlagen", "Performance-Optimierung"],
    },
  ],

  // ─── Projekte ─────────────────────────────────────────────────────────────
  // Neues Projekt hinzufügen: Block kopieren, Werte anpassen, fertig.
  // Bilder legst du in den Ordner public/projects (siehe README.md).
  projects: [
    {
      title: "Website-System für lokale Unternehmen",
      industry: "Handwerk, Gastronomie, Praxen und Dienstleister",
      description:
        "Ein wiederverwendbares System für Firmenwebsites: Über eine zentrale Konfiguration entsteht in wenigen Stunden eine komplette Website mit Terminbuchung, Kontaktformular, Preisen, FAQ und Bewertungen. Vorlagen für sechs Branchen, gezeigt am erfundenen Handwerksbetrieb „Brandt Haustechnik“.",
      technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      image: "", // z. B. "/projects/website-system.jpg"
      link: "https://website-system.netlify.app",
      label: "Eigenes Projekt",
    },
    // Beispiel für ein fertiges Projekt:
    // {
    //   title: "Bäckerei Schmitt",
    //   industry: "Lebensmittelhandwerk",
    //   description: "Neue Website mit Online-Speisekarte und Filialfinder. Die Seite lädt in unter einer Sekunde.",
    //   technologies: ["Next.js", "Tailwind CSS"],
    //   image: "/projects/baeckerei-schmitt.jpg",
    //   link: "https://www.baeckerei-schmitt.de",
    //   label: "Kundenprojekt",
    // },
  ],

  // ─── Arbeitsweise ─────────────────────────────────────────────────────────
  process: [
    {
      title: "Analyse der Anforderungen",
      text: "Wir sprechen über Ihr Unternehmen, Ihre Ziele und Ihre Kunden. Daraus entsteht ein klarer Plan, was die Website leisten soll.",
    },
    {
      title: "Planung und Design",
      text: "Ich entwerfe Struktur und Gestaltung. Sie sehen früh, wie Ihre Website aussehen wird, und geben Feedback.",
    },
    {
      title: "Entwicklung",
      text: "Ich setze das Design mit modernen Technologien um – schnell, sauber und für alle Geräte.",
    },
    {
      title: "Testphase",
      text: "Ich prüfe alles auf Smartphone, Tablet und Desktop und in allen gängigen Browsern.",
    },
    {
      title: "Veröffentlichung",
      text: "Ihre Website geht online. Auch danach bin ich für Fragen und Anpassungen für Sie da.",
    },
  ],

  // ─── Warum mit mir arbeiten? ──────────────────────────────────────────────
  benefits: [
    {
      icon: "sparkles",
      title: "Moderne Lösungen",
      text: "Ich arbeite mit aktuellen Technologien, die auch Agenturen und große Unternehmen einsetzen.",
    },
    {
      icon: "message",
      title: "Schnelle Kommunikation",
      text: "Sie sprechen direkt mit mir – ohne Umwege. Anfragen beantworte ich in der Regel innerhalb von 24 Stunden.",
    },
    {
      icon: "pencil",
      title: "Individuelle Umsetzung",
      text: "Keine Baukasten-Vorlage: Jede Website wird für Ihr Unternehmen geplant und programmiert.",
    },
    {
      icon: "quality",
      title: "Fokus auf Qualität",
      text: "Schnelle Ladezeiten, saubere Technik und Sorgfalt im Detail – auch dort, wo man es nicht auf den ersten Blick sieht.",
    },
    {
      icon: "handshake",
      title: "Zuverlässige Zusammenarbeit",
      text: "Klare Absprachen, nachvollziehbare Schritte und Termine, die eingehalten werden.",
    },
  ],

  // ─── Kontakt ──────────────────────────────────────────────────────────────
  contact: {
    email: "mickiaslan20@hotmail.com",
    phone: "", // optional, z. B. "+49 151 12345678"
    responseTime: "innerhalb von 24 Stunden",
    // Formular-ID von formspree.io (z. B. "xyzabcde"), siehe README.md.
    // Solange das Feld leer ist, öffnet das Formular das E-Mail-Programm
    // des Besuchers mit der vorbereiteten Nachricht.
    formspreeId: "",
    ctaLabel: "Kontakt aufnehmen",
  },

  // ─── Social Media ─────────────────────────────────────────────────────────
  // Weitere Profile einfach ergänzen, z. B.:
  // { label: "LinkedIn", url: "https://www.linkedin.com/in/dein-name" },
  socials: [{ label: "GitHub", url: "https://github.com/mickiaslan20-sketch" }],

  // ─── Impressum ────────────────────────────────────────────────────────────
  legal: {
    name: "Mikkel Aslan",
    street: "Waldweg 17",
    postalCode: "54587",
    city: "Lissendorf",
    country: "Deutschland",
    vatId: "", // Umsatzsteuer-ID, falls vorhanden
    privacyUpdated: "Oktober 2026",
  },

  // ─── Überschriften der Bereiche ───────────────────────────────────────────
  sections: {
    about: { title: "Über mich" },
    services: {
      title: "Leistungen",
      intro: "Drei Bereiche, in denen ich Unternehmen unterstütze – einzeln oder kombiniert.",
    },
    tech: {
      title: "Technologien",
      intro: "Ich arbeite mit Werkzeugen, die sich in professionellen Projekten bewährt haben.",
    },
    projects: {
      title: "Projekte",
      intro: "Eine Auswahl meiner Arbeiten.",
    },
    process: {
      title: "Arbeitsweise",
      intro: "In fünf klaren Schritten von der ersten Idee zur fertigen Website. Sie wissen jederzeit, woran ich gerade arbeite.",
    },
    why: {
      title: "Warum mit mir arbeiten?",
      intro: "Als Freelancer bin ich Ihr direkter Ansprechpartner – vom ersten Gespräch bis nach dem Livegang.",
    },
    contact: {
      title: "Lassen Sie uns über Ihr Projekt sprechen.",
      intro: "Erzählen Sie mir kurz, worum es geht. Ich melde mich mit einer ehrlichen Einschätzung und den nächsten Schritten.",
    },
  },
};

/**
 * Technische Einstellungen der Website.
 */
export const site: SiteSettings = {
  // Deine Domain, sobald du eine hast, z. B. "https://www.mikkel-aslan.de".
  // Leer lassen: Auf Netlify und Vercel wird die Adresse automatisch erkannt.
  url: "",

  // Wo die Website veröffentlicht ist: "netlify" oder "vercel".
  // Davon hängt der Hosting-Abschnitt in der Datenschutzerklärung ab.
  hosting: "netlify",

  // Akzentfarbe der Website (Buttons, Links, Symbole). Einfach den Farbcode
  // austauschen, z. B. "#0F9D7A" für Grün. Wähle eine eher kräftige Farbe,
  // damit die weiße Schrift auf Buttons gut lesbar bleibt.
  accentColor: "#2E5BFF",
  // Schriftfarbe auf Buttons in Akzentfarbe
  accentForeground: "#FFFFFF",

  // Angaben für Google & Co.
  seo: {
    title: "Mikkel Aslan – Webentwickler für moderne Unternehmenswebsites",
    description:
      "Webentwickler aus Rheinland-Pfalz: Ich entwickle schnelle, moderne und mobil optimierte Websites für Unternehmen – individuell geplant und sauber umgesetzt.",
    keywords: [
      "Webentwickler",
      "Webentwicklung",
      "Website erstellen lassen",
      "Webdesign Rheinland-Pfalz",
      "Unternehmenswebsite",
      "Landingpage",
      "Next.js",
      "React",
      "Freelancer",
      "Mikkel Aslan",
    ],
  },
};
