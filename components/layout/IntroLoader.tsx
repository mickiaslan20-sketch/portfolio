/**
 * Kurze Ladeanimation beim ersten Seitenaufruf.
 *
 * Die Animation läuft komplett über CSS (siehe globals.css, „Ladeanimation“).
 * Sie blockiert keine Klicks, wird pro Sitzung nur einmal gezeigt und bei
 * „Bewegung reduzieren“ in den Systemeinstellungen ganz weggelassen.
 */
export function IntroLoader({ name }: { name: string }) {
  return (
    <div className="intro-loader" aria-hidden="true">
      <div className="flex flex-col items-center">
        <span className="intro-loader__name">{name}</span>
        <span className="intro-loader__bar">
          <span />
        </span>
      </div>
    </div>
  );
}
