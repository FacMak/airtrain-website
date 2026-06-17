"use client";

import { motion } from "framer-motion";
import { PARTNER_LOGOS, PARTNERS } from "@/lib/data";
import { Reveal } from "./ui/Reveal";
import { MediaFrame } from "./ui/MediaFrame";

export function LogoTicker() {
  // Liste verdoppeln → nahtlose Endlosschleife bei x: -50%
  const row = [...PARTNERS, ...PARTNERS];

  return (
    <section id="partner" className="border-y border-line bg-paper-pure py-16 sm:py-20">
      <div className="container-airtrain">
        <Reveal className="text-center">
          <span className="kicker">Strategisches Ökosystem</span>
          <h2 className="mt-3 text-lg font-medium text-muted">
            Im Dialog mit führenden Betreibern, Herstellern und Forschung
          </h2>
        </Reveal>
      </div>

      {/* Text-Ticker */}
      <div className="mask-fade-x relative mt-10 overflow-hidden">
        <motion.div
          className="flex w-max items-center"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 32, ease: "linear", repeat: Infinity }}
        >
          {row.map((name, i) => (
            <div
              key={`${name}-${i}`}
              className="mr-16 flex shrink-0 items-center gap-3"
            >
              <span className="h-2 w-2 rounded-full bg-gradient-to-br from-accent to-accent-teal" />
              <span className="whitespace-nowrap font-display text-2xl font-semibold tracking-tight text-ink/35 transition-colors duration-300 hover:text-ink sm:text-3xl">
                {name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Logo-Bilderleiste — Platzhalter, bis echte Dateien unter /public/logos/ liegen */}
      <div className="container-airtrain mt-12">
        <Reveal className="mb-6 text-center">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-muted">
            Partner-Logos · echte Dateien unter{" "}
            <code className="rounded bg-paper px-1.5 py-0.5 text-ink/70">
              /public/logos/
            </code>{" "}
            ablegen
          </p>
        </Reveal>
        <Reveal
          className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6"
          delay={0.1}
        >
          {PARTNER_LOGOS.map((logo) => (
            <MediaFrame
              key={logo.src}
              src={logo.src}
              alt={logo.alt}
              label={logo.src.split("/").pop()}
              fit="contain"
              rounded="rounded-2xl"
              className="aspect-[3/2] bg-paper transition-all duration-300 ease-aero hover:bg-paper-pure"
            />
          ))}
        </Reveal>
      </div>
    </section>
  );
}
