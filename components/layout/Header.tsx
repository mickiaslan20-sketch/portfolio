"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState, type ComponentPropsWithRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/cn";
import { sectionIds, type NavItem } from "@/lib/section-ids";
import { ThemeToggle } from "./ThemeToggle";

interface HeaderProps {
  name: string;
  navItems: NavItem[];
  ctaLabel: string;
}

/**
 * Sprungmarken („#kontakt“) als normaler Link, damit der Browser weich
 * scrollt. Von Unterseiten aus („/#kontakt“) über den Next.js-Link.
 */
function NavLink({ href, ...props }: ComponentPropsWithRef<"a"> & { href: string }) {
  if (href.startsWith("#")) return <a href={href} {...props} />;
  return <Link href={href} {...props} />;
}

export function Header({ name, navItems, ctaLabel }: HeaderProps) {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState<string | null>(null);

  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const firstMenuLinkRef = useRef<HTMLAnchorElement>(null);

  const hrefFor = (id: string) => (isHome ? `#${id}` : `/#${id}`);
  const closeMenu = () => setMenuOpen(false);

  // Hintergrund des Headers einblenden, sobald gescrollt wird
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Den Bereich markieren, der gerade im Bild ist (nur auf der Startseite)
  useEffect(() => {
    if (!isHome) {
      setActiveId(null);
      return;
    }

    const ids = [sectionIds.hero, ...navItems.map((item) => item.id), sectionIds.why, sectionIds.contact];
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => element !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const id = entry.target.id;
          setActiveId(navItems.some((item) => item.id === id) ? id : null);
        }
      },
      // Zählt als „aktiv“, wenn der Bereich die Mitte des Bildschirms erreicht
      { rootMargin: "-45% 0px -50% 0px" },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [isHome, navItems]);

  // Menü bei Seitenwechsel schließen
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Offenes Menü: Escape schließt es, Fokus springt auf den ersten Link,
  // beim Wechsel auf Desktop-Breite schließt es automatisch.
  useEffect(() => {
    if (!menuOpen) return;

    firstMenuLinkRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    const desktop = window.matchMedia("(min-width: 1024px)");
    const onBreakpoint = () => {
      if (desktop.matches) setMenuOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    desktop.addEventListener("change", onBreakpoint);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      desktop.removeEventListener("change", onBreakpoint);
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color] duration-300",
          menuOpen
            ? "border-line bg-canvas"
            : scrolled
              ? "border-line bg-canvas/80 backdrop-blur-xl"
              : "border-transparent",
        )}
      >
        <Container className="flex h-16 items-center justify-between gap-6">
          <Link href="/" className="text-[0.95rem] font-semibold tracking-tight">
            {name}
          </Link>

          {/* Navigation ab Desktop-Breite */}
          <nav aria-label="Hauptnavigation" className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {navItems.map((item) => {
                const isActive = activeId === item.id;
                return (
                  <li key={item.id}>
                    <NavLink
                      href={hrefFor(item.id)}
                      aria-current={isActive ? "location" : undefined}
                      className={cn(
                        "rounded-full px-3.5 py-2 text-sm transition-colors",
                        isActive ? "text-ink" : "text-muted hover:text-ink",
                      )}
                    >
                      {item.label}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex items-center gap-1.5">
            <ThemeToggle />
            <NavLink
              href={hrefFor(sectionIds.contact)}
              className="ml-1.5 hidden h-9 items-center rounded-full bg-accent px-4 text-sm font-medium text-accent-foreground transition-colors hover:bg-accent/85 sm:inline-flex"
            >
              {ctaLabel}
            </NavLink>
            <button
              ref={menuButtonRef}
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? "Menü schließen" : "Menü öffnen"}
              className="inline-flex size-10 items-center justify-center rounded-full text-ink transition-colors hover:bg-surface lg:hidden"
            >
              {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </Container>
      </header>

      {/* Mobiles Menü – außerhalb des Headers, damit es den ganzen Bildschirm füllt */}
      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            key="mobile-menu"
            id="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed inset-x-0 top-16 bottom-0 z-40 overflow-y-auto overscroll-contain bg-canvas lg:hidden"
          >
            <nav aria-label="Mobile Navigation">
              <Container className="py-6">
                <ul className="divide-y divide-line border-b border-line">
                  {navItems.map((item, index) => (
                    <li key={item.id}>
                      <NavLink
                        ref={index === 0 ? firstMenuLinkRef : undefined}
                        href={hrefFor(item.id)}
                        onClick={closeMenu}
                        className="block py-5 text-2xl font-medium tracking-tight"
                      >
                        {item.label}
                      </NavLink>
                    </li>
                  ))}
                </ul>
                <NavLink
                  href={hrefFor(sectionIds.contact)}
                  onClick={closeMenu}
                  className="mt-8 flex h-12 items-center justify-center rounded-full bg-accent font-medium text-accent-foreground"
                >
                  {ctaLabel}
                </NavLink>
              </Container>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
