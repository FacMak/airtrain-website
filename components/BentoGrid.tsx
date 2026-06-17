"use client";

import { motion } from "framer-motion";
import { USPS } from "@/lib/data";
import { fadeUp, inViewProps, spring, staggerContainer } from "@/lib/motion";
import { ICONS } from "./ui/Icons";
import { Reveal } from "./ui/Reveal";

const SPAN: Record<string, string> = {
  lg: "lg:col-span-4 lg:row-span-2",
  md: "lg:col-span-3",
  sm: "lg:col-span-2",
};

export function BentoGrid() {
  return (
    <section id="vorteile" className="relative bg-paper py-24 sm:py-32">
      <div className="container-airtrain">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="kicker">Alleinstellungsmerkmale</span>
          <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight sm:text-5xl text-balance">
            Vier Hebel, ein Systemvorteil
          </h2>
          <p className="mt-4 text-lg text-muted">
            Energieeffizienz, Ausfallsicherheit, Kostenersparnis und Autarkie —
            entwickelt für die Anforderungen großer Flottenbetreiber und OEMs.
          </p>
        </Reveal>

        <motion.div
          variants={staggerContainer(0.1, 0.05)}
          {...inViewProps}
          className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:auto-rows-[220px] lg:grid-cols-6"
        >
          {USPS.map((usp) => (
            <BentoCard key={usp.id} usp={usp} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function BentoCard({ usp }: { usp: (typeof USPS)[number] }) {
  const Icon = ICONS[usp.icon];
  const feature = usp.span === "lg";

  return (
    <motion.article
      variants={fadeUp}
      whileHover={{ y: -4 }}
      transition={spring}
      className={`group relative flex flex-col justify-between overflow-hidden rounded-3xl border p-6 shadow-soft transition-shadow duration-300 ease-aero hover:shadow-lift sm:p-7 ${
        SPAN[usp.span]
      } ${
        feature
          ? "border-white/10 bg-ink text-paper"
          : "border-line bg-paper-pure text-ink"
      }`}
    >
      {/* dekorativer Airflow im Feature-Tile */}
      {feature && <FeatureFlow />}

      <div className="relative flex items-start justify-between">
        <span
          className={`flex h-12 w-12 items-center justify-center rounded-2xl transition-transform duration-300 ease-aero group-hover:scale-110 ${
            feature
              ? "bg-white/10 text-accent-teal"
              : "bg-airflow-soft text-accent-deep"
          }`}
        >
          <Icon className="h-6 w-6" />
        </span>
        <div className="text-right">
          <div
            className={`font-display font-semibold tracking-tight ${
              feature ? "text-4xl text-airflow" : "text-2xl"
            }`}
          >
            {usp.metric}
          </div>
          <div
            className={`text-xs font-medium uppercase tracking-wider ${
              feature ? "text-paper/45" : "text-muted"
            }`}
          >
            {usp.metricLabel}
          </div>
        </div>
      </div>

      <div className="relative mt-6">
        <h3
          className={`font-display font-semibold tracking-tight ${
            feature ? "text-2xl sm:text-3xl" : "text-xl"
          }`}
        >
          {usp.title}
        </h3>
        <p
          className={`mt-2 leading-relaxed ${
            feature ? "max-w-md text-paper/65" : "text-sm text-muted"
          }`}
        >
          {usp.body}
        </p>
      </div>
    </motion.article>
  );
}

/** Subtiler animierter Luftstrom im großen Feature-Tile. */
function FeatureFlow() {
  return (
    <div className="pointer-events-none absolute inset-0 opacity-70">
      <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-accent/25 blur-3xl" />
      <svg className="absolute inset-0 h-full w-full" preserveAspectRatio="none" viewBox="0 0 100 60" aria-hidden>
        {[16, 30, 44].map((y, i) => (
          <motion.path
            key={y}
            d={`M -5 ${y} C 30 ${y - 8}, 70 ${y + 8}, 105 ${y - 3}`}
            fill="none"
            stroke="#2DD4BF"
            strokeWidth={0.4}
            strokeOpacity={0.4}
            animate={{ x: [0, 8, 0] }}
            transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}
      </svg>
    </div>
  );
}
