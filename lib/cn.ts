/**
 * Fügt CSS-Klassen zusammen und ignoriert leere Werte.
 * Beispiel: cn("p-4", isActive && "text-ink") → "p-4 text-ink"
 */
export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}
