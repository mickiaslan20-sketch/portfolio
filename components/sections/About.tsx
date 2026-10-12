import { Check } from "lucide-react";
import { profile } from "@/config/profile";
import { sectionIds } from "@/lib/navigation";
import { cn } from "@/lib/cn";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

/** Über mich: Vorstellung, Steckbrief, Motivation, Stärken und Werdegang */
export function About() {
  const { about, location, age, education, experience, focus, sections } = profile;

  // Leere Angaben werden automatisch ausgeblendet
  const facts = [
    { label: "Standort", value: location },
    { label: "Ausbildung", value: education },
    { label: "Erfahrung", value: experience },
    { label: "Schwerpunkt", value: focus },
    { label: "Alter", value: age ? `${age} Jahre` : "" },
  ].filter((fact) => fact.value);

  const factList = (
    <Reveal delay={0.1}>
      <dl className="mt-10 divide-y divide-line border-y border-line text-[0.95rem]">
        {facts.map((fact) => (
          <div key={fact.label} className="flex justify-between gap-6 py-3.5">
            <dt className="text-muted">{fact.label}</dt>
            <dd className="text-right font-medium">{fact.value}</dd>
          </div>
        ))}
      </dl>
    </Reveal>
  );

  return (
    <Section id={sectionIds.about} {...sections.about} layout="split" aside={factList}>
      <div className="space-y-16">
        {/* Vorstellung */}
        <Reveal className="space-y-6">
          {about.intro.map((paragraph, index) => (
            <p
              key={paragraph}
              className={cn(
                "text-pretty",
                index === 0
                  ? "text-xl leading-relaxed font-medium tracking-tight sm:text-2xl sm:leading-relaxed"
                  : "text-lg leading-relaxed text-muted",
              )}
            >
              {paragraph}
            </p>
          ))}
        </Reveal>

        {/* Motivation */}
        <Reveal>
          <h3 className="text-lg font-semibold tracking-tight">Was mich antreibt</h3>
          <p className="mt-4 border-l-2 border-accent pl-6 text-lg leading-relaxed text-pretty">
            {about.motivation}
          </p>
        </Reveal>

        {/* Stärken */}
        <Reveal>
          <h3 className="text-lg font-semibold tracking-tight">Was ich mitbringe</h3>
          <ul className="mt-5 grid gap-x-8 gap-y-3.5 sm:grid-cols-2">
            {about.strengths.map((strength) => (
              <li key={strength} className="flex gap-3">
                <Check
                  aria-hidden="true"
                  className="mt-1 size-4 shrink-0 text-accent-ink"
                  strokeWidth={2.25}
                />
                <span>{strength}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        {/* Werdegang */}
        <Reveal>
          <h3 className="text-lg font-semibold tracking-tight">Mein Werdegang</h3>
          <ol className="mt-6 ml-1 space-y-8 border-l border-line">
            {about.career.map((step, index) => {
              const isCurrent = index === about.career.length - 1;
              return (
                <li key={step.title} className="relative pl-7">
                  <span
                    aria-hidden="true"
                    className={cn(
                      "absolute top-1.5 -left-[5px] size-2.5 rounded-full ring-4 ring-canvas",
                      isCurrent ? "bg-accent" : "bg-ink",
                    )}
                  />
                  <p className="font-semibold tracking-tight">{step.title}</p>
                  <p className="mt-1 text-pretty text-muted">{step.text}</p>
                </li>
              );
            })}
          </ol>
        </Reveal>
      </div>
    </Section>
  );
}
