import type { Metadata } from "next";
import { StructuredData } from "@/components/StructuredData";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { TechStack } from "@/components/sections/TechStack";
import { Projects } from "@/components/sections/Projects";
import { Process } from "@/components/sections/Process";
import { WhyMe } from "@/components/sections/WhyMe";
import { Contact } from "@/components/sections/Contact";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

/**
 * Startseite. Die Reihenfolge der Bereiche lässt sich hier ändern –
 * einfach die Zeilen verschieben oder einen Bereich auskommentieren.
 */
export default function HomePage() {
  return (
    <>
      <StructuredData />
      <Hero />
      <About />
      <Services />
      <TechStack />
      <Projects />
      <Process />
      <WhyMe />
      <Contact />
    </>
  );
}
