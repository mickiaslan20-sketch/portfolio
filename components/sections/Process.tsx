import { profile } from "@/config/profile";
import { sectionIds } from "@/lib/navigation";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

/** Arbeitsweise: nummerierte Schritte – auf großen Bildschirmen nebeneinander */
export function Process() {
  const { process, sections } = profile;

  return (
    <Section id={sectionIds.process} {...sections.process}>
      <ol className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-5 lg:gap-x-6">
        {process.map((step, index) => (
          <Reveal as="li" key={step.title} delay={index * 0.07} className="border-t border-line pt-6">
            <span
              aria-hidden="true"
              className="block font-stretch-condensed text-5xl leading-none font-semibold tracking-tight text-muted tabular-nums"
            >
              {index + 1}
            </span>
            <h3 className="mt-6 text-lg leading-snug font-semibold tracking-tight">{step.title}</h3>
            <p className="mt-2 text-[0.95rem] leading-relaxed text-pretty text-muted">{step.text}</p>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
