"use client";

import { motion } from "framer-motion";
import { PARTNERS } from "@/lib/data";
import { Reveal } from "./ui/Reveal";

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
    </section>
  );
}
