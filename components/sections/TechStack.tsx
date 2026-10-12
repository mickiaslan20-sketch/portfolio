import { profile } from "@/config/profile";
import { sectionIds } from "@/lib/navigation";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

/** Technologien: eine Zeile pro Gruppe (Frontend, Tools, Weitere …) */
export function TechStack() {
  const { techStack, sections } = profile;

  return (
    <Section id={sectionIds.tech} {...sections.tech}>
      <dl className="divide-y divide-line border-y border-line">
        {techStack.map((group, index) => (
          <Reveal
            key={group.name}
            delay={index * 0.06}
            className="grid gap-4 py-7 sm:grid-cols-12 sm:items-center sm:gap-8"
          >
            <dt className="font-semibold tracking-tight sm:col-span-3">{group.name}</dt>
            <dd className="sm:col-span-9">
              <ul className="flex flex-wrap gap-2.5">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-line px-4 py-2 text-sm font-medium"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </dd>
          </Reveal>
        ))}
      </dl>
    </Section>
  );
}
