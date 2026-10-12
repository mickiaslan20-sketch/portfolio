import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import type { Project } from "@/config/types";
import { prettyUrl } from "@/lib/site";
import { cn } from "@/lib/cn";

/**
 * Platzhalter-Vorschau im Stil eines Browserfensters – wird angezeigt,
 * solange für ein Projekt noch kein Bild hinterlegt ist.
 */
function BrowserCover({ title, link, badge }: { title: string; link?: string; badge?: string }) {
  const address = link ? prettyUrl(link) : "vorschau-folgt";

  return (
    <div aria-hidden="true" className="absolute inset-0 flex flex-col p-4 sm:p-6">
      <div className="flex items-center gap-1.5">
        <span className="size-2.5 rounded-full bg-line" />
        <span className="size-2.5 rounded-full bg-line" />
        <span className="size-2.5 rounded-full bg-line" />
        <span className="ml-3 flex h-7 min-w-0 flex-1 items-center rounded-md border border-line bg-canvas px-3 text-xs text-muted">
          <span className="truncate">{address}</span>
        </span>
      </div>
      <div className="relative mt-4 flex flex-1 flex-col justify-end rounded-xl border border-line bg-canvas p-5 sm:p-7">
        {badge ? <Badge className="absolute top-4 right-4">{badge}</Badge> : null}
        <span className="font-stretch-condensed text-3xl leading-none font-semibold tracking-tight sm:text-4xl">
          {title}
        </span>
        <span className="mt-5 block h-2 w-3/4 rounded-full bg-surface" />
        <span className="mt-2 block h-2 w-1/2 rounded-full bg-surface" />
      </div>
    </div>
  );
}

/** Kleines Etikett, z. B. „In Arbeit“ oder „Kundenprojekt“ */
function Badge({ children, className }: { children: string; className?: string }) {
  return (
    <span
      className={cn(
        "rounded-full border border-line bg-canvas/90 px-3 py-1 text-xs font-medium backdrop-blur",
        className,
      )}
    >
      {children}
    </span>
  );
}

/** Eine Projektkarte: Bild, Name, Branche, Beschreibung, Technologien, Link */
export function ProjectCard({ project }: { project: Project }) {
  const { title, industry, description, technologies, image, link, label, inProgress } = project;
  const badge = label || (inProgress ? "In Arbeit" : "");

  return (
    <article className="group relative">
      <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-line bg-surface">
        {image ? (
          <Image
            src={image}
            alt={`Vorschau des Projekts ${title}`}
            fill
            sizes="(min-width: 1152px) 544px, (min-width: 768px) 50vw, 100vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          />
        ) : (
          <BrowserCover title={title} link={link} badge={badge} />
        )}
        {image && badge ? <Badge className="absolute right-4 bottom-4">{badge}</Badge> : null}
      </div>

      <div className="mt-6 flex items-start justify-between gap-6">
        <div>
          <h3 className="text-xl font-semibold tracking-tight">
            {link ? (
              // Der Link deckt über ::after die ganze Karte ab
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="after:absolute after:inset-0 after:rounded-2xl"
              >
                {title}
                <span className="sr-only"> (öffnet in neuem Tab)</span>
              </a>
            ) : (
              title
            )}
          </h3>
          <p className="mt-1 text-sm text-muted">
            <span className="sr-only">Branche: </span>
            {industry}
          </p>
        </div>
        {link ? (
          <ArrowUpRight
            aria-hidden="true"
            className="mt-1 size-5 shrink-0 text-muted transition-[transform,color] duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-ink"
          />
        ) : null}
      </div>

      <p className="mt-4 text-pretty text-muted">{description}</p>

      {technologies.length > 0 ? (
        <ul aria-label="Verwendete Technologien" className="mt-5 flex flex-wrap gap-2">
          {technologies.map((technology) => (
            <li
              key={technology}
              className="rounded-full border border-line px-3 py-1 text-xs font-medium text-muted"
            >
              {technology}
            </li>
          ))}
        </ul>
      ) : null}
    </article>
  );
}

/** Einladung für das nächste Projekt – füllt das Raster bei ungerader Anzahl */
export function ProjectInvite({ href, ctaLabel }: { href: string; ctaLabel: string }) {
  return (
    <a
      href={href}
      className="group flex aspect-[16/10] flex-col justify-end rounded-2xl border border-dashed border-line p-6 transition-colors duration-300 hover:border-ink/25 hover:bg-surface sm:p-8"
    >
      <span className="max-w-xs text-2xl font-semibold tracking-tight text-balance sm:text-3xl">
        Ihr Projekt könnte das nächste sein.
      </span>
      <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-accent-ink">
        {ctaLabel}
        <ArrowRight
          aria-hidden="true"
          className="size-4 transition-transform duration-300 group-hover:translate-x-1"
        />
      </span>
    </a>
  );
}
