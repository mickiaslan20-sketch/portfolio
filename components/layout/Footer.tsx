import Link from "next/link";
import { profile } from "@/config/profile";
import { Container } from "@/components/ui/Container";

const linkClass = "transition-colors hover:text-ink";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line">
      <Container className="flex flex-col gap-5 py-10 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {year} {profile.name}. {profile.role} aus {profile.location}.
        </p>
        <nav aria-label="Rechtliches und Profile">
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            <li>
              <Link href="/impressum" className={linkClass}>
                Impressum
              </Link>
            </li>
            <li>
              <Link href="/datenschutz" className={linkClass}>
                Datenschutz
              </Link>
            </li>
            {profile.socials.map((social) => (
              <li key={social.url}>
                <a href={social.url} target="_blank" rel="noopener noreferrer" className={linkClass}>
                  {social.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </footer>
  );
}
