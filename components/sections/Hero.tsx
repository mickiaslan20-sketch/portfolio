import type { CSSProperties } from "react";
import { profile } from "@/config/profile";
import { sectionIds } from "@/lib/navigation";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { LiveCheck } from "@/components/ui/LiveCheck";

/** Verzögerung für die gestaffelte Einblendung (siehe .hero-in in globals.css) */
const delay = (seconds: number) => ({ "--d": `${seconds}s` }) as CSSProperties;

/**
 * Startbereich: großer Name, Rolle, Kurzbeschreibung, zwei Buttons
 * und der Live-Check mit echten Messwerten.
 */
export function Hero() {
  const { name, role, tagline, description, available, availabilityText } = profile;
  const [firstName, ...lastNames] = name.split(" ");

  return (
    <section id={sectionIds.hero} aria-label="Start" className="pt-28 pb-20 sm:pt-36 sm:pb-28">
      <Container>
        {available ? (
          <p className="hero-in flex items-center gap-2.5 text-sm text-muted" style={delay(0)}>
            <span aria-hidden="true" className="size-2 rounded-full bg-accent" />
            {availabilityText}
          </p>
        ) : null}

        <h1
          className="hero-in mt-6 font-stretch-condensed text-[clamp(3.75rem,19vw,6.5rem)] leading-[0.9] font-semibold tracking-[-0.035em] sm:text-[clamp(4.5rem,12vw,10rem)]"
          style={delay(0.08)}
        >
          <span className="block sm:inline">{firstName}</span>{" "}
          <span className="block sm:inline">{lastNames.join(" ")}</span>
        </h1>

        <div className="mt-10 grid gap-12 border-t border-line pt-8 sm:mt-14 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            {/* Rolle und Slogan untereinander – bricht so auf keinem Bildschirm unschön um */}
            <p className="hero-in text-xl font-medium tracking-tight sm:text-2xl" style={delay(0.2)}>
              <span className="block">{role}</span>
              <span className="sr-only">: </span>
              <span className="block text-muted">{tagline}</span>
            </p>
            <p
              className="hero-in mt-5 max-w-xl text-pretty text-lg leading-relaxed text-muted"
              style={delay(0.28)}
            >
              {description}
            </p>
            <div className="hero-in mt-9 grid gap-3 sm:flex sm:flex-wrap" style={delay(0.36)}>
              <ButtonLink href={`#${sectionIds.projects}`} variant="primary">
                Projekte ansehen
              </ButtonLink>
              <ButtonLink href={`#${sectionIds.contact}`} variant="secondary">
                {profile.contact.ctaLabel}
              </ButtonLink>
            </div>
          </div>

          <div className="hero-in lg:col-span-5" style={delay(0.44)}>
            <LiveCheck />
          </div>
        </div>
      </Container>
    </section>
  );
}
