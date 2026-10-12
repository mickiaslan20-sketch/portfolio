"use client";

import { useEffect } from "react";
import { Moon, Sun } from "lucide-react";

/**
 * Schalter für Hell- und Dunkelmodus.
 * Die Wahl wird im Browser gespeichert (localStorage) und beim nächsten
 * Besuch durch theme-script.ts sofort wieder angewendet.
 */
export function ThemeToggle() {
  // Folgt dem System, solange der Besucher selbst nichts gewählt hat
  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = (event: MediaQueryListEvent) => {
      let stored: string | null = null;
      try {
        stored = localStorage.getItem("theme");
      } catch {
        // Speicher nicht verfügbar (z. B. privater Modus) – einfach ignorieren
      }
      if (!stored) document.documentElement.classList.toggle("dark", event.matches);
    };
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  function toggleTheme() {
    const root = document.documentElement;
    const next = root.classList.contains("dark") ? "light" : "dark";
    root.classList.toggle("dark", next === "dark");
    try {
      localStorage.setItem("theme", next);
    } catch {
      // Speicher nicht verfügbar – der Modus gilt dann nur für diesen Besuch
    }
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Hell- oder Dunkelmodus umschalten"
      title="Darstellung wechseln"
      className="inline-flex size-10 items-center justify-center rounded-full text-muted transition-colors hover:bg-surface hover:text-ink"
    >
      {/* Beide Symbole sind im HTML – CSS zeigt das passende an. */}
      <Sun className="hidden size-[1.15rem] dark:block" strokeWidth={1.75} />
      <Moon className="size-[1.15rem] dark:hidden" strokeWidth={1.75} />
    </button>
  );
}
