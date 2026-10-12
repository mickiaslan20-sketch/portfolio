import { profile } from "@/config/profile";
import { sectionIds } from "@/lib/navigation";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { ProjectCard, ProjectInvite } from "@/components/ui/ProjectCard";

/** Projekte: zweispaltiges Raster, Daten aus config/profile.ts */
export function Projects() {
  const { projects, sections, contact } = profile;
  // Bei ungerader Anzahl (oder ohne Projekte) füllt eine Einladung die Lücke
  const showInvite = projects.length === 0 || projects.length % 2 === 1;

  return (
    <Section id={sectionIds.projects} {...sections.projects}>
      <div className="grid gap-x-8 gap-y-16 md:grid-cols-2">
        {projects.map((project, index) => (
          <Reveal key={project.title} delay={(index % 2) * 0.08}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
        {showInvite ? (
          <Reveal delay={projects.length % 2 === 1 ? 0.08 : 0}>
            <ProjectInvite href={`#${sectionIds.contact}`} ctaLabel={contact.ctaLabel} />
          </Reveal>
        ) : null}
      </div>
    </Section>
  );
}
