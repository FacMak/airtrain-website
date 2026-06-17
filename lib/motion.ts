import type { Transition, Variants } from "framer-motion";

/**
 * Airtrain Motion System
 * ----------------------
 * Eine einzige Quelle der Wahrheit für das "Aerodynamik-Gefühl".
 * Ausschließlich organische Spring-Physics — keine hektischen Bewegungen.
 */

/** Primärer Spring — edel, präzise, leicht gedämpft. */
export const spring: Transition = {
  type: "spring",
  stiffness: 100,
  damping: 25,
  mass: 0.5,
};

/** Weicherer Spring für große Flächen / Panels. */
export const springSoft: Transition = {
  type: "spring",
  stiffness: 80,
  damping: 22,
  mass: 0.6,
};

/** Schneller, knackiger Spring für Micro-Interactions (Hover/Tap). */
export const springSnappy: Transition = {
  type: "spring",
  stiffness: 320,
  damping: 28,
  mass: 0.5,
};

/** Aerodynamische Ease-Kurve für nicht-physikalische Tweens (z.B. Counter). */
export const easeAero: [number, number, number, number] = [0.16, 1, 0.3, 1];

/** Standard Reveal: präziser Fade-In + leichter Slide-Up (30 → 0). */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: spring },
};

/** Reveal mit etwas mehr Weg — für Hero-Cluster. */
export const fadeUpLg: Variants = {
  hidden: { opacity: 0, y: 44 },
  visible: { opacity: 1, y: 0, transition: springSoft },
};

/** Seitlicher Slide-In (z.B. Listen-Items, Split-Panels). */
export const fadeInX = (from: number = 24): Variants => ({
  hidden: { opacity: 0, x: from },
  visible: { opacity: 1, x: 0, transition: spring },
});

/** Sanftes Scale-In für Karten / Badges. */
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.96, y: 18 },
  visible: { opacity: 1, scale: 1, y: 0, transition: spring },
};

/**
 * Stagger-Container — lässt Kinder organisch nacheinander hineingleiten.
 * Auf `visible` setzen die Kinder die jeweiligen Item-Varianten.
 */
export const staggerContainer = (
  stagger: number = 0.1,
  delay: number = 0.05
): Variants => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren: stagger,
      delayChildren: delay,
    },
  },
});

/** Word-für-Word Reveal für die Hero-Headline (mit feinem Blur-Lift). */
export const wordReveal: Variants = {
  hidden: { opacity: 0, y: 28, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { type: "spring", stiffness: 120, damping: 24, mass: 0.5 },
  },
};

/** Gemeinsame whileInView-Props — einmal aufdecken, knapp unter dem Fold. */
export const inViewProps = {
  initial: "hidden" as const,
  whileInView: "visible" as const,
  viewport: { once: true, margin: "-80px" },
};
