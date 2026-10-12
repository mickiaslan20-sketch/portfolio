import {
  BadgeCheck,
  CodeXml,
  Gauge,
  Handshake,
  MessagesSquare,
  PencilRuler,
  Puzzle,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import type { IconName } from "@/config/types";

/**
 * Symbole, die in config/profile.ts über ihren Namen genutzt werden können.
 * Neues Symbol? Auf https://lucide.dev aussuchen, hier importieren und
 * eintragen – und den Namen in config/types.ts (IconName) ergänzen.
 */
export const icons: Record<IconName, LucideIcon> = {
  code: CodeXml,
  gauge: Gauge,
  puzzle: Puzzle,
  sparkles: Sparkles,
  message: MessagesSquare,
  pencil: PencilRuler,
  quality: BadgeCheck,
  handshake: Handshake,
};
