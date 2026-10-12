import type { Metadata, Viewport } from "next";
import type { CSSProperties, ReactNode } from "react";
import { Instrument_Sans } from "next/font/google";

import { profile, site } from "@/config/profile";
import { getSiteUrl } from "@/lib/site";
import { navItems } from "@/lib/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { IntroLoader } from "@/components/layout/IntroLoader";
import { Providers } from "@/components/layout/Providers";
import { themeScript } from "@/components/layout/theme-script";
import "./globals.css";

/**
 * Schrift: Instrument Sans – wird beim Build heruntergeladen und von der
 * eigenen Domain ausgeliefert (schnell und ohne Verbindung zu Google).
 * Die Breiten-Achse (wdth) erlaubt die schmale Variante für den Namen.
 */
const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  axes: ["wdth"],
  variable: "--font-instrument",
  display: "swap",
});

/** Meta Tags, Open Graph und Twitter-Karten für Suchmaschinen und Social Media */
export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: site.seo.title,
    template: `%s | ${profile.name}`,
  },
  description: site.seo.description,
  keywords: site.seo.keywords,
  authors: [{ name: profile.name }],
  creator: profile.name,
  applicationName: profile.name,
  openGraph: {
    type: "website",
    locale: "de_DE",
    siteName: profile.name,
    title: site.seo.title,
    description: site.seo.description,
  },
  twitter: {
    card: "summary_large_image",
    title: site.seo.title,
    description: site.seo.description,
  },
  robots: {
    index: true,
    follow: true,
  },
  formatDetection: {
    telephone: false,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
};

/** Akzentfarbe aus config/profile.ts als CSS-Variable bereitstellen */
const accentStyle = {
  "--accent": site.accentColor,
  "--accent-foreground": site.accentForeground,
} as CSSProperties;

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="de"
      className={instrumentSans.variable}
      style={accentStyle}
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <head>
        {/* Muss vor dem ersten Zeichnen laufen, damit der Dark Mode nicht flackert */}
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="bg-canvas font-sans text-ink antialiased">
        <a href="#inhalt" className="skip-link">
          Zum Inhalt springen
        </a>
        <IntroLoader name={profile.name} />
        <Providers>
          <Header name={profile.name} navItems={navItems} ctaLabel={profile.contact.ctaLabel} />
          <main id="inhalt" tabIndex={-1} className="outline-none">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
