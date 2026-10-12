"use client";

import { MotionConfig } from "framer-motion";
import type { ReactNode } from "react";

/**
 * Globale Einstellungen für Animationen.
 * reducedMotion="user": Wer in den Systemeinstellungen „Bewegung reduzieren“
 * aktiviert hat, bekommt nur sanfte Überblendungen ohne Bewegung.
 */
export function Providers({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
