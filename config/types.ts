/**
 * Typen für die Inhalte in `config/profile.ts`.
 *
 * Diese Datei musst du normalerweise nicht anfassen. Sie sorgt dafür,
 * dass dein Editor (z. B. VS Code) dich warnt, wenn in `profile.ts`
 * etwas fehlt oder falsch geschrieben ist.
 */

/** Verfügbare Symbole für Leistungen und Vorteile (siehe components/ui/icons.ts). */
export type IconName =
  | "code"
  | "gauge"
  | "puzzle"
  | "sparkles"
  | "message"
  | "pencil"
  | "quality"
  | "handshake";

/** Überschrift und Einleitungstext eines Bereichs der Startseite. */
export interface SectionText {
  title: string;
  intro?: string;
}

export interface CareerStep {
  title: string;
  text: string;
}

export interface Service {
  icon: IconName;
  title: string;
  description: string;
  items: string[];
}

export interface TechGroup {
  name: string;
  items: string[];
}

export interface Project {
  /** Name des Projekts */
  title: string;
  /** Branche des Kunden, z. B. „Handwerk“ oder „Gastronomie“ */
  industry: string;
  /** Kurze Beschreibung: Aufgabe, Lösung, Ergebnis */
  description: string;
  /** Verwendete Technologien, z. B. ["Next.js", "Tailwind CSS"] */
  technologies: string[];
  /** Pfad zum Vorschaubild im Ordner /public, z. B. "/projects/baeckerei.jpg" */
  image?: string;
  /** Link zur Live-Website, z. B. "https://www.beispiel.de" */
  link?: string;
  /** Kleines Etikett auf dem Bild, z. B. "Kundenprojekt" oder "Konzeptprojekt" */
  label?: string;
  /** true = Projekt ist noch in Arbeit */
  inProgress?: boolean;
}

export interface ProcessStep {
  title: string;
  text: string;
}

export interface Benefit {
  icon: IconName;
  title: string;
  text: string;
}

export interface SocialLink {
  label: string;
  url: string;
}

export interface Profile {
  name: string;
  role: string;
  tagline: string;
  description: string;
  available: boolean;
  availabilityText: string;

  location: string;
  age?: string;
  education: string;
  experience: string;
  focus: string;

  about: {
    intro: string[];
    motivation: string;
    strengths: string[];
    career: CareerStep[];
  };

  services: Service[];
  techStack: TechGroup[];
  projects: Project[];
  process: ProcessStep[];
  benefits: Benefit[];

  contact: {
    email: string;
    phone?: string;
    responseTime: string;
    formspreeId?: string;
    ctaLabel: string;
  };

  socials: SocialLink[];

  legal: {
    name: string;
    street: string;
    postalCode: string;
    city: string;
    country: string;
    vatId?: string;
    privacyUpdated: string;
  };

  sections: {
    about: SectionText;
    services: SectionText;
    tech: SectionText;
    projects: SectionText;
    process: SectionText;
    why: SectionText;
    contact: SectionText;
  };
}

export interface SiteSettings {
  url: string;
  hosting: "netlify" | "vercel";
  accentColor: string;
  accentForeground: string;
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
}
