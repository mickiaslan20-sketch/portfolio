import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowLeft } from "lucide-react";
import { Container } from "./Container";

interface LegalPageProps {
  title: string;
  updated?: string;
  children: ReactNode;
}

/** Gemeinsames Layout für Impressum und Datenschutzerklärung */
export function LegalPage({ title, updated, children }: LegalPageProps) {
  return (
    <Container className="pt-28 pb-24 sm:pt-36">
      <article className="max-w-3xl">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-ink"
        >
          <ArrowLeft aria-hidden="true" className="size-4" />
          Zur Startseite
        </Link>
        <h1 className="mt-8 text-4xl font-semibold tracking-tight sm:text-5xl">{title}</h1>
        {updated ? <p className="mt-4 text-sm text-muted">Stand: {updated}</p> : null}
        <div className="legal mt-8">{children}</div>
      </article>
    </Container>
  );
}
