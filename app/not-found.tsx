import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/ButtonLink";

/** Wird angezeigt, wenn eine Seite nicht existiert (Fehler 404). */
export default function NotFound() {
  return (
    <Container className="flex min-h-[75vh] flex-col items-start justify-center pt-32 pb-24">
      <p className="font-stretch-condensed text-8xl leading-none font-semibold tracking-tight text-muted">
        404
      </p>
      <h1 className="mt-6 text-3xl font-semibold tracking-tight sm:text-4xl">
        Diese Seite gibt es nicht.
      </h1>
      <p className="mt-3 text-pretty text-muted">
        Vielleicht hat sich ein Tippfehler in die Adresse eingeschlichen.
      </p>
      <ButtonLink href="/" className="mt-8">
        Zur Startseite
      </ButtonLink>
    </Container>
  );
}
