import type { ReactNode } from "react";
import { ArrowUpRight, Clock, Mail, MapPin, Phone } from "lucide-react";
import { profile } from "@/config/profile";
import { sectionIds } from "@/lib/navigation";
import { prettyUrl } from "@/lib/site";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { ContactForm } from "@/components/ui/ContactForm";

interface DetailRow {
  label: string;
  icon: ReactNode;
  content: ReactNode;
}

const iconClass = "size-4 shrink-0";

/** Kontakt: direkte Kontaktdaten links, Formular rechts */
export function Contact() {
  const { contact, socials, location, sections } = profile;
  const titleId = `${sectionIds.contact}-title`;

  const rows: DetailRow[] = [
    {
      label: "E-Mail",
      icon: <Mail aria-hidden="true" className={iconClass} />,
      content: (
        <a href={`mailto:${contact.email}`} className="link-underline font-medium [overflow-wrap:anywhere]">
          {contact.email}
        </a>
      ),
    },
    ...(contact.phone
      ? [
          {
            label: "Telefon",
            icon: <Phone aria-hidden="true" className={iconClass} />,
            content: (
              <a href={`tel:${contact.phone.replace(/[^\d+]/g, "")}`} className="link-underline font-medium">
                {contact.phone}
              </a>
            ),
          },
        ]
      : []),
    ...socials.map((social) => ({
      label: social.label,
      icon: <ArrowUpRight aria-hidden="true" className={iconClass} />,
      content: (
        <a
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="link-underline font-medium [overflow-wrap:anywhere]"
        >
          {prettyUrl(social.url)}
        </a>
      ),
    })),
    {
      label: "Standort",
      icon: <MapPin aria-hidden="true" className={iconClass} />,
      content: <span className="font-medium">{location}</span>,
    },
    {
      label: "Antwort",
      icon: <Clock aria-hidden="true" className={iconClass} />,
      content: <span className="font-medium">In der Regel {contact.responseTime}</span>,
    },
  ];

  return (
    <section
      id={sectionIds.contact}
      aria-labelledby={titleId}
      className="border-t border-line py-24 sm:py-32"
    >
      <Container className="grid gap-14 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <Reveal>
            <h2
              id={titleId}
              className="text-4xl font-semibold tracking-tight sm:text-5xl sm:leading-[1.05]"
            >
              {sections.contact.title}
            </h2>
            {sections.contact.intro ? (
              <p className="mt-6 text-pretty text-lg text-muted">{sections.contact.intro}</p>
            ) : null}
          </Reveal>

          <Reveal delay={0.1}>
            <dl className="mt-10 divide-y divide-line border-y border-line text-[0.95rem]">
              {rows.map((row) => (
                <div key={row.label} className="grid grid-cols-[6.5rem_1fr] gap-4 py-4 sm:grid-cols-[7.5rem_1fr]">
                  <dt className="flex items-center gap-2.5 text-muted">
                    {row.icon}
                    {row.label}
                  </dt>
                  <dd className="min-w-0">{row.content}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        <Reveal delay={0.15} className="lg:col-span-7">
          <ContactForm
            email={contact.email}
            formspreeId={contact.formspreeId}
            responseTime={contact.responseTime}
          />
        </Reveal>
      </Container>
    </section>
  );
}
