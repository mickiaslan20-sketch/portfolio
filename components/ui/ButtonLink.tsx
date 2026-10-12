import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/cn";

const base =
  "inline-flex h-12 items-center justify-center gap-2 rounded-full px-6 text-[0.95rem] font-medium transition-[background-color,border-color,color,transform] duration-200 active:scale-[0.98]";

const variants = {
  /** Schwarz bzw. im Dunkelmodus weiß */
  primary: "bg-ink text-canvas hover:bg-ink/80",
  /** Mit Rahmen, zurückhaltend */
  secondary: "border border-line text-ink hover:border-ink/30 hover:bg-surface",
  /** In der Akzentfarbe */
  accent: "bg-accent text-accent-foreground hover:bg-accent/85",
};

interface ButtonLinkProps extends ComponentPropsWithoutRef<"a"> {
  href: string;
  variant?: keyof typeof variants;
}

/**
 * Link im Button-Stil. Interne Seiten („/impressum“) nutzen den schnellen
 * Next.js-Link, Sprungmarken („#kontakt“) und externe Links ein normales <a>.
 */
export function ButtonLink({ href, variant = "primary", className, ...props }: ButtonLinkProps) {
  const classes = cn(base, variants[variant], className);
  const isInternalPage = href.startsWith("/") && !href.startsWith("//");

  if (isInternalPage) {
    return <Link href={href} className={classes} {...props} />;
  }
  return <a href={href} className={classes} {...props} />;
}
