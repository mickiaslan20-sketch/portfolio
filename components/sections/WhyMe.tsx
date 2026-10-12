import { profile } from "@/config/profile";
import { sectionIds } from "@/lib/navigation";
import { icons } from "@/components/ui/icons";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

/** Warum mit mir arbeiten? Überschrift links, Vorteile als Liste rechts */
export function WhyMe() {
  const { benefits, sections } = profile;

  return (
    <Section id={sectionIds.why} {...sections.why} layout="split">
      <ul className="divide-y divide-line border-y border-line">
        {benefits.map((benefit, index) => {
          const Icon = icons[benefit.icon];
          return (
            <Reveal
              as="li"
              key={benefit.title}
              delay={index * 0.05}
              className="grid grid-cols-[auto_1fr] gap-x-5 py-7"
            >
              <Icon aria-hidden="true" className="mt-0.5 size-6 text-accent-ink" strokeWidth={1.75} />
              <div>
                <h3 className="text-lg font-semibold tracking-tight">{benefit.title}</h3>
                <p className="mt-1.5 text-pretty text-muted">{benefit.text}</p>
              </div>
            </Reveal>
          );
        })}
      </ul>
    </Section>
  );
}
