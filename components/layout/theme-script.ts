/**
 * Kleines Skript, das ausgeführt wird, bevor die Seite sichtbar ist.
 *
 * 1. Setzt den Dark Mode, wenn der Besucher ihn gewählt hat oder sein
 *    System dunkel eingestellt ist – so blitzt die Seite nicht hell auf.
 * 2. Zeigt die Ladeanimation nur beim ersten Besuch pro Browser-Sitzung.
 */
export const themeScript = `(function () {
  var root = document.documentElement;
  try {
    var stored = localStorage.getItem("theme");
    var prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (stored === "dark" || (!stored && prefersDark)) root.classList.add("dark");
  } catch (e) {}
  try {
    if (sessionStorage.getItem("intro-seen")) root.classList.add("skip-intro");
    sessionStorage.setItem("intro-seen", "1");
  } catch (e) {}
})();`;
