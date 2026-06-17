"use client";

import { motion } from "framer-motion";
import { TECH_STEPS } from "@/lib/data";
import { fadeUp, inViewProps, spring, staggerContainer } from "@/lib/motion";
import { ICONS } from "./ui/Icons";
import { Reveal } from "./ui/Reveal";
import { TechDiagram } from "./ui/TechDiagram";

/**
 * Die Hauptbühne für das Kernelement: das AirTrain-System selbst.
 * Großes Diagramm + die vier Stationen des Luftwegs
 * (Frischluft → Ventilator → Filter → Abluft).
 */
export function Technology() {
  return (
    <section
      id="technologie"
      className="relative isolate overflow-hidden bg-ink py-24 text-paper sm:py-32"
    >
      <div className="grid-texture-dark absolute inset-0 -z-10 opacity-50" />
      <div className="pointer-events-none absolute -left-32 top-24 -z-10 h-80 w-80 rounded-full bg-accent/20 blur-[120px]" />
      <div className="pointer-events-none absolute -right-32 bottom-24 -z-10 h-80 w-80 rounded-full bg-accent-teal/20 blur-[120px]" />

      <div className="container-airtrain">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="kicker !text-accent-teal">Das Kernelement</span>
          <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight sm:text-5xl text-balance">
            So funktioniert <span className="text-airflow">AirTrain</span>.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-paper/70">
            Ein vollständig in den Wagenkasten integriertes System, das die
            Bewegungs­energie des Zugs in saubere, kühle Frischluft umwandelt —
            mit drastisch reduziertem Stromverbrauch.
          </p>
        </Reveal>

        {/* Funktions-Diagramm im großen Glow-Frame */}
        <Reveal className="mt-14" delay={0.1}>
          <div className="relative mx-auto max-w-5xl">
            <div className="absolute -inset-4 -z-10 rounded-[2.5rem] bg-airflow opacity-25 blur-2xl" />
            <figure className="relative overflow-hidden rounded-4xl border border-white/10 bg-paper-pure shadow-lift">
              <TechDiagram />
            </figure>
            <p className="mt-3 text-center text-xs uppercase tracking-[0.22em] text-paper/40">
              Schema · Luftweg im Wagenkasten
            </p>
          </div>
        </Reveal>

        {/* 4-Schritte-Luftweg */}
        <motion.ol
          variants={staggerContainer(0.1, 0.05)}
          {...inViewProps}
          className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {TECH_STEPS.map((step) => {
            const Icon = ICONS[step.icon as keyof typeof ICONS];
            return (
              <motion.li
                key={step.n}
                variants={fadeUp}
                whileHover={{ y: -4 }}
                transition={spring}
                className="group relative flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm transition-shadow duration-300 ease-aero hover:shadow-glow"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-accent-teal">
                    Schritt {step.n}
                  </span>
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-accent-teal transition-transform duration-300 ease-aero group-hover:scale-110">
                    <Icon className="h-5 w-5" />
                  </span>
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold tracking-tight">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-paper/65">
                    {step.body}
                  </p>
                </div>
              </motion.li>
            );
          })}
        </motion.ol>

        {/* Kernbotschaft */}
        <Reveal className="mt-12 flex flex-col items-center text-center" delay={0.15}>
          <p className="max-w-3xl text-lg leading-relaxed text-paper/75">
            <span className="font-semibold text-paper">Das gesamte System</span>{" "}
            arbeitet passiv mit dem Fahrtwind — und ersetzt damit die
            stromintensiven Kompressoren konventioneller Zugklimaanlagen.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
