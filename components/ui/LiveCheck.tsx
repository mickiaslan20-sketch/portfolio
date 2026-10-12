"use client";

import { useEffect, useState } from "react";

/**
 * „Live-Check“ im Startbereich: zeigt echte Werte, die gerade im Browser
 * des Besuchers gemessen werden – Ladezeit, Bildschirmbreite und Farbmodus.
 * So sieht ein potenzieller Kunde direkt, was die Seite technisch kann.
 */

function formatSeconds(ms: number): string {
  const seconds = ms / 1000;
  return `${seconds.toLocaleString("de-DE", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })} s`;
}

function deviceLabel(width: number): string {
  if (width < 640) return "Smartphone";
  if (width < 1024) return "Tablet";
  return "Desktop";
}

/** Ladezeit der Seite aus der Navigation-Timing-API des Browsers */
function useLoadTime(): number | null {
  const [loadTime, setLoadTime] = useState<number | null>(null);

  useEffect(() => {
    const read = () => {
      const [entry] = performance.getEntriesByType("navigation") as PerformanceNavigationTiming[];
      if (entry && entry.loadEventEnd > 0) setLoadTime(entry.loadEventEnd);
    };

    if (document.readyState === "complete") {
      read();
      return;
    }

    // loadEventEnd steht erst kurz nach dem load-Event fest
    const onLoad = () => window.setTimeout(read, 0);
    window.addEventListener("load", onLoad, { once: true });
    return () => window.removeEventListener("load", onLoad);
  }, []);

  return loadTime;
}

function useViewportWidth(): number | null {
  const [width, setWidth] = useState<number | null>(null);

  useEffect(() => {
    const update = () => setWidth(window.innerWidth);
    update();
    window.addEventListener("resize", update, { passive: true });
    return () => window.removeEventListener("resize", update);
  }, []);

  return width;
}

function useIsDark(): boolean | null {
  const [isDark, setIsDark] = useState<boolean | null>(null);

  useEffect(() => {
    const root = document.documentElement;
    const update = () => setIsDark(root.classList.contains("dark"));
    update();
    const observer = new MutationObserver(update);
    observer.observe(root, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  return isDark;
}

interface RowProps {
  label: string;
  value: string | null;
  detail?: string;
}

function Row({ label, value, detail }: RowProps) {
  return (
    <div className="flex items-baseline justify-between gap-6 py-4">
      <dt className="text-sm text-muted">{label}</dt>
      <dd className="text-right">
        <span className="block font-stretch-condensed text-[1.75rem] font-semibold leading-none tracking-tight tabular-nums">
          {value ?? "–"}
        </span>
        {detail ? <span className="mt-1.5 block text-xs text-muted">{detail}</span> : null}
      </dd>
    </div>
  );
}

export function LiveCheck() {
  const loadTime = useLoadTime();
  const width = useViewportWidth();
  const isDark = useIsDark();

  return (
    <section
      aria-label="Live-Werte dieser Website"
      className="rounded-2xl border border-line bg-surface/60 p-6 sm:p-7"
    >
      <p className="flex items-center gap-2.5 text-sm font-medium">
        <span aria-hidden="true" className="live-dot relative size-2 rounded-full bg-accent" />
        Live auf Ihrem Gerät gemessen
      </p>

      <dl className="mt-4 divide-y divide-line">
        <Row label="Ladezeit dieser Seite" value={loadTime === null ? null : formatSeconds(loadTime)} />
        <Row
          label="Ihre Bildschirmbreite"
          value={width === null ? null : `${width} px`}
          detail={width === null ? undefined : `Optimiert für ${deviceLabel(width)}`}
        />
        <Row
          label="Darstellung"
          value={isDark === null ? null : isDark ? "Dunkel" : "Hell"}
          detail="Oben rechts umschaltbar"
        />
      </dl>

      <p className="mt-2 border-t border-line pt-5 text-sm text-pretty text-muted">
        Schnell, flexibel und barrierearm – so entwickle ich auch Ihre Website.
      </p>
    </section>
  );
}
