/**
 * IDs der Bereiche auf der Startseite. Sie erscheinen in der Adresszeile,
 * z. B. „/#projekte“, und werden für die Navigation verwendet.
 *
 * Bewusst in einer eigenen Datei ohne weitere Importe: So landen im
 * JavaScript für den Browser nur diese IDs, nicht alle Inhalte.
 */
export const sectionIds = {
  hero: "start",
  about: "ueber-mich",
  services: "leistungen",
  tech: "technologien",
  projects: "projekte",
  process: "arbeitsweise",
  why: "warum-ich",
  contact: "kontakt",
} as const;

export interface NavItem {
  id: string;
  label: string;
}
