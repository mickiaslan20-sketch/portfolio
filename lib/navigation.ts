import { profile } from "@/config/profile";
import { sectionIds, type NavItem } from "./section-ids";

export { sectionIds, type NavItem };

/** Einträge der Hauptnavigation – die Beschriftungen kommen aus profile.ts. */
export const navItems: NavItem[] = (
  ["about", "services", "tech", "projects", "process"] as const
).map((key) => ({
  id: sectionIds[key],
  label: profile.sections[key].title,
}));
