import { Check } from "lucide-react";
import { profile } from "@/config/profile";
import { sectionIds } from "@/lib/navigation";
import { icons } from "@/components/ui/icons";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

/** Leistungen: ein Raster mit feinen Trennlinien, eine Spalte pro Leistung */
export function Services() {
  const { services, sections } = profile;

  return (
    <Section id={sectionIds.services} {...sections.services}>
      <div className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-3">
        {services.map((service, index) => {
          const Icon = icons[service.icon];
          return (
            <div key={service.title} className="bg-canvas">
              <Reveal delay={index * 0.08} className="flex h-full flex-col p-7 sm:p-9">
                <span className="inline-flex size-11 items-center justify-center rounded-xl bg-accent/10 text-accent-ink">
                  <Icon aria-hidden="true" className="size-5" strokeWidth={1.75} />
                </span>
                <h3 className="mt-7 text-xl font-semibold tracking-tight">{service.title}</h3>
                {/* flex-1: Die Listen stehen in allen Spalten auf gleicher Höhe */}
                <p className="mt-3 flex-1 text-pretty text-muted">{service.description}</p>
                <ul className="mt-7 space-y-3 border-t border-line pt-6">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-[0.95rem]">
                      <Check
                        aria-hidden="true"
                        className="size-4 shrink-0 text-accent-ink"
                        strokeWidth={2.25}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
