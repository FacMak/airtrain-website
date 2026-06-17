"use client";

import { useState } from "react";

interface MediaFrameProps {
  src: string;
  alt: string;
  /** Beschriftung im Platzhalter — zeigt dem Nutzer den Dateipfad zum Ablegen. */
  label?: string;
  /** Optionaler Untertitel unter dem Platzhalter. */
  caption?: string;
  /** "ratio" lässt das Tailwind-aspect-ratio greifen (z.B. "aspect-video"). */
  className?: string;
  /** Variante steuert die Optik des Platzhalters. */
  variant?: "light" | "dark";
  /** Bildausrichtung — contain für Logos/Diagramme, cover für Fotos. */
  fit?: "cover" | "contain";
  rounded?: string;
}

/**
 * Bild-Container mit eingebauter Platzhalter-Logik.
 *
 * - Existiert das Bild unter `src`, wird es sauber gerendert.
 * - Fehlt es noch, sieht der Nutzer einen edlen Platzhalter, der den
 *   exakten Dateinamen nennt, unter dem er die Datei ablegen soll
 *   (z.B. "Foto hier ablegen · foto-1.jpg").
 *
 * So bleibt das Layout auch ohne reale Assets in Form.
 */
export function MediaFrame({
  src,
  alt,
  label,
  caption,
  className = "",
  variant = "light",
  fit = "cover",
  rounded = "rounded-3xl",
}: MediaFrameProps) {
  const [failed, setFailed] = useState(false);

  const isDark = variant === "dark";
  const placeholderBase = isDark
    ? "bg-ink/40 text-paper/70"
    : "bg-paper text-muted";

  return (
    <figure className={`relative overflow-hidden ${rounded} ${className}`}>
      {!failed ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt={alt}
          onError={() => setFailed(true)}
          loading="lazy"
          decoding="async"
          className={`block h-full w-full ${
            fit === "contain" ? "object-contain" : "object-cover"
          }`}
        />
      ) : (
        <div
          className={`flex h-full w-full flex-col items-center justify-center gap-3 border border-dashed ${
            isDark
              ? "border-white/15 bg-ink/60"
              : "border-line bg-airflow-soft/40"
          } ${placeholderBase} p-6 text-center`}
          aria-label={`Bildplatzhalter: ${alt}`}
        >
          <PlaceholderIcon isDark={isDark} />
          <div>
            <p
              className={`text-[0.7rem] font-bold uppercase tracking-[0.22em] ${
                isDark ? "text-accent-teal" : "text-accent-deep"
              }`}
            >
              Bildplatzhalter
            </p>
            <p className="mt-1 max-w-xs text-sm font-medium leading-snug">
              {label ?? alt}
            </p>
            <p
              className={`mt-2 break-all text-xs font-mono ${
                isDark ? "text-paper/40" : "text-muted/70"
              }`}
            >
              {src}
            </p>
          </div>
        </div>
      )}
      {caption && (
        <figcaption
          className={`pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t ${
            isDark ? "from-ink/85" : "from-ink/70"
          } to-transparent p-4 text-sm font-medium text-paper`}
        >
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

function PlaceholderIcon({ isDark }: { isDark: boolean }) {
  return (
    <svg
      width={36}
      height={36}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={isDark ? "text-accent-teal" : "text-accent-deep"}
      aria-hidden
    >
      <rect x="3" y="4" width="18" height="16" rx="3" />
      <circle cx="9" cy="10" r="1.6" />
      <path d="m3 17 5-5 4 4 3-3 6 6" />
    </svg>
  );
}
