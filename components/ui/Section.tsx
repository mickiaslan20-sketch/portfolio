import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Container } from "./Container";
import { Reveal } from "./Reveal";

interface SectionProps {
  id: string;
  title: string;
  intro?: string;
  children: ReactNode;
  /**
   * "stacked": Überschrift oben, Inhalt darunter
   * "split":   Überschrift links (bleibt beim Scrollen stehen), Inhalt rechts
   */
  layout?: "stacked" | "split";
  /** Zusätzlicher Inhalt unter der Überschrift (nur bei layout="split") */
  aside?: ReactNode;
  className?: string;
}

/** Einheitlicher Rahmen für alle Bereiche der Startseite. */
export function Section({
  id,
  title,
  intro,
  children,
  layout = "stacked",
  aside,
  className,
}: SectionProps) {
  const titleId = `${id}-title`;

  const heading = (
    <Reveal>
      <h2
        id={titleId}
        className="text-3xl font-semibold tracking-tight sm:text-[2.75rem] sm:leading-[1.1]"
      >
        {title}
      </h2>
      {intro ? <p className="mt-5 max-w-xl text-pretty text-lg text-muted">{intro}</p> : null}
    </Reveal>
  );

  return (
    <section
      id={id}
      aria-labelledby={titleId}
      className={cn("border-t border-line py-24 sm:py-32", className)}
    >
      <Container>
        {layout === "split" ? (
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <div className="lg:sticky lg:top-28">
                {heading}
                {aside}
              </div>
            </div>
            <div className="lg:col-span-8">{children}</div>
          </div>
        ) : (
          <>
            <div className="max-w-2xl">{heading}</div>
            <div className="mt-14 sm:mt-16">{children}</div>
          </>
        )}
      </Container>
    </section>
  );
}
