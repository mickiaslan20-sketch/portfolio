"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** Verzögerung in Sekunden, z. B. für gestaffelte Listen */
  delay?: number;
  /** HTML-Element, das gerendert wird */
  as?: "div" | "li";
}

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

/**
 * Blendet Inhalte sanft ein, sobald sie beim Scrollen sichtbar werden.
 * Die Animation läuft nur einmal und ist bewusst dezent gehalten.
 */
export function Reveal({ children, className, delay = 0, as = "div" }: RevealProps) {
  const animation = {
    initial: { opacity: 0, y: 18 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "0px 0px -10% 0px" },
    transition: { duration: 0.7, ease, delay },
  } as const;

  if (as === "li") {
    return (
      <motion.li className={className} {...animation}>
        {children}
      </motion.li>
    );
  }

  return (
    <motion.div className={className} {...animation}>
      {children}
    </motion.div>
  );
}
