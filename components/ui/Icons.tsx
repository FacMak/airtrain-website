import type { SVGProps } from "react";

/**
 * Schlankes, einheitliches Icon-Set (1.5px stroke, runde Enden).
 * Bewusst reduziert — passend zum technischen, cleanen Look.
 */

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function BoltIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" />
    </svg>
  );
}

export function LeafIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 20c0-8 6-14 16-14 0 10-6 16-14 16" />
      <path d="M4 20c4-6 8-8 12-9" />
    </svg>
  );
}

export function ShieldIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3 5 6v6c0 4 3 7 7 9 4-2 7-5 7-9V6l-7-3Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

export function CoinsIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <ellipse cx="9" cy="6" rx="6" ry="3" />
      <path d="M3 6v5c0 1.7 2.7 3 6 3s6-1.3 6-3V6" />
      <path d="M3 11v5c0 1.7 2.7 3 6 3 1 0 2-.1 3-.4" />
      <circle cx="17" cy="16" r="4" />
    </svg>
  );
}

export function WindIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M3 8h10a3 3 0 1 0-3-3" />
      <path d="M3 12h15a3 3 0 1 1-3 3" />
      <path d="M3 16h8a2.5 2.5 0 1 1-2.5 2.5" />
    </svg>
  );
}

export function TrainIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="5" y="3" width="14" height="14" rx="3" />
      <path d="M5 11h14" />
      <circle cx="9" cy="14" r="0.6" fill="currentColor" stroke="none" />
      <circle cx="15" cy="14" r="0.6" fill="currentColor" stroke="none" />
      <path d="m7 21 2-2m8 2-2-2" />
    </svg>
  );
}

export function ArrowRightIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

export function CheckIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="m5 12 4.5 4.5L19 7" />
    </svg>
  );
}

export const ICONS = {
  bolt: BoltIcon,
  leaf: LeafIcon,
  shield: ShieldIcon,
  coins: CoinsIcon,
  wind: WindIcon,
  train: TrainIcon,
} as const;

export type IconName = keyof typeof ICONS;
