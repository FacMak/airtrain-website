"use client";

import { motion } from "framer-motion";
import type { ElementType, ReactNode } from "react";
import { fadeUp, inViewProps, spring, staggerContainer } from "@/lib/motion";

type Tag = "div" | "section" | "ul" | "li" | "span" | "h2" | "p";

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** Verzögerung in Sekunden (für manuelle Choreografie). */
  delay?: number;
  as?: Tag;
}

/**
 * Reveal-on-Scroll: präziser Fade-In + leichter Slide-Up (Y 30 → 0).
 * Deckt genau einmal auf, knapp unter dem Fold.
 */
export function Reveal({ children, className, delay = 0, as = "div" }: RevealProps) {
  const MotionTag = motion[as] as ElementType;
  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ ...spring, delay }}
    >
      {children}
    </MotionTag>
  );
}

interface StaggerProps {
  children: ReactNode;
  className?: string;
  stagger?: number;
  delay?: number;
  as?: Tag;
}

/**
 * Container, der seine direkten Kinder organisch nacheinander
 * hineingleiten lässt. Kinder mit <StaggerItem> umschließen.
 */
export function Stagger({
  children,
  className,
  stagger = 0.1,
  delay = 0.05,
  as = "div",
}: StaggerProps) {
  const MotionTag = motion[as] as ElementType;
  return (
    <MotionTag
      className={className}
      variants={staggerContainer(stagger, delay)}
      {...inViewProps}
    >
      {children}
    </MotionTag>
  );
}

export function StaggerItem({
  children,
  className,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: Tag;
}) {
  const MotionTag = motion[as] as ElementType;
  return (
    <MotionTag className={className} variants={fadeUp}>
      {children}
    </MotionTag>
  );
}
