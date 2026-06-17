"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { spring, springSnappy, staggerContainer, wordReveal } from "@/lib/motion";
import { ArrowRightIcon } from "./ui/Icons";

const LINE_1 = "Die Zugklimaanlage";
const LINE_2 = "neu gedacht.";
const LINE_3 = "Angetrieben vom Fahrtwind der Zukunft.";

/** Zerlegt einen Satz in animierbare Wort-Spans. */
function Words({ text, gradient = false }: { text: string; gradient?: boolean }) {
  return (
    <>
      {text.split(" ").map((word, i) => (
        <span key={`${word}-${i}`} className="inline-block overflow-hidden align-bottom">
          <motion.span
            variants={wordReveal}
            className={`inline-block ${gradient ? "text-airflow" : ""}`}
          >
            {word}
            {" "}
          </motion.span>
        </span>
      ))}
    </>
  );
}

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  // Sanfter Parallax-Drift des Hintergrunds beim Scrollen
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative isolate flex min-h-[100svh] items-center overflow-hidden bg-ink text-paper"
    >
      {/* Aerodynamischer Hintergrund */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 -z-10">
        <AirflowBackdrop />
      </motion.div>
      <div className="grid-texture-dark absolute inset-0 -z-10 opacity-60" />
      {/* Vignette unten für sauberen Übergang */}
      <div className="absolute inset-x-0 bottom-0 -z-10 h-64 bg-gradient-to-t from-ink to-transparent" />

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="container-airtrain relative pb-20 pt-36 sm:pt-40"
      >
        {/* Slogan — typografisch dem Logo-Tagline nachempfunden:
            kursiv, mit feinen Rails-Linien links/rechts,
            Farbverlauf von hell → Airflow-Cyan. */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...spring, delay: 0.05 }}
          className="mb-7 flex items-center gap-4"
        >
          <span className="h-px w-10 bg-accent-teal/60 sm:w-14" />
          <p className="font-display text-2xl italic tracking-tight sm:text-3xl lg:text-4xl">
            <span className="text-paper">Im AirTrain sitzen –</span>{" "}
            <span className="text-airflow font-semibold">nicht mehr schwitzen.</span>
          </p>
          <span className="h-px w-10 bg-accent-teal/60 sm:w-14" />
        </motion.div>

        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...spring, delay: 0.15 }}
          className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/5 py-1.5 pl-2 pr-4 backdrop-blur-sm"
        >
          <span className="flex h-6 items-center rounded-full bg-airflow px-2.5 text-[0.65rem] font-bold uppercase tracking-wider text-ink">
            Neu
          </span>
          <span className="text-sm font-medium text-paper/80">
            Das fahrtwind-getriebene Klimasystem für den Schienenverkehr
          </span>
        </motion.div>

        {/* Headline — Wort für Wort */}
        <motion.h1
          variants={staggerContainer(0.08, 0.35)}
          initial="hidden"
          animate="visible"
          className="max-w-5xl font-display text-[clamp(2.6rem,7vw,5.6rem)] font-semibold leading-[1.02] tracking-tightest text-balance"
        >
          <Words text={LINE_1} />
          <br className="hidden sm:block" />
          <Words text={LINE_2} />
          <span className="mt-3 block text-[clamp(1.5rem,3.4vw,2.6rem)] font-medium leading-[1.1] text-paper/55">
            <Words text={LINE_3} gradient />
          </span>
        </motion.h1>

        {/* Sub + CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...spring, delay: 1.1 }}
          className="mt-10 max-w-xl"
        >
          <p className="text-lg leading-relaxed text-paper/70">
            Deutlich weniger Stromverbrauch. Kontinuierliche Frischluft.
            Drastisch geringere Betriebskosten — eine neue Generation der
            Klimatisierung für Züge, angetrieben vom Fahrtwind.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <motion.a
              href="#kontakt"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={springSnappy}
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-airflow px-6 py-3.5 text-base font-semibold text-ink shadow-glow"
            >
              Partnerschaft anfragen
              <ArrowRightIcon className="h-5 w-5 transition-transform duration-300 ease-aero group-hover:translate-x-1" />
            </motion.a>
            <motion.a
              href="#technologie"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={springSnappy}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3.5 text-base font-semibold text-paper backdrop-blur-sm transition-colors hover:bg-white/10"
            >
              So funktioniert AirTrain
            </motion.a>
          </div>
        </motion.div>

      </motion.div>

      {/* Scroll-Hinweis */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 lg:block"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          className="flex h-10 w-6 items-start justify-center rounded-full border border-white/20 p-1.5"
        >
          <span className="h-2 w-1 rounded-full bg-airflow" />
        </motion.div>
      </motion.div>
    </section>
  );
}

/** Animierte Fahrtwind-Stromlinien + sanfte Farbnebel. */
function AirflowBackdrop() {
  const lines = [12, 26, 40, 54, 68, 82];
  return (
    <div className="absolute inset-0">
      {/* Farbnebel */}
      <div className="absolute -left-1/4 top-0 h-[60vh] w-[60vw] rounded-full bg-accent/20 blur-[120px]" />
      <div className="absolute -right-1/4 top-1/4 h-[50vh] w-[45vw] rounded-full bg-accent-teal/15 blur-[120px]" />
      <div className="absolute bottom-0 left-1/3 h-[40vh] w-[40vw] rounded-full bg-accent-sky/10 blur-[120px]" />

      {/* Stromlinien */}
      <svg
        className="absolute inset-0 h-full w-full"
        preserveAspectRatio="none"
        viewBox="0 0 100 100"
        aria-hidden
      >
        <defs>
          <linearGradient id="flow" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#06B6D4" stopOpacity="0" />
            <stop offset="50%" stopColor="#2DD4BF" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#38BDF8" stopOpacity="0" />
          </linearGradient>
        </defs>
        {lines.map((y, i) => (
          <motion.path
            key={y}
            d={`M -10 ${y} C 25 ${y - 6}, 55 ${y + 7}, 110 ${y - 4}`}
            fill="none"
            stroke="url(#flow)"
            strokeWidth={0.25}
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{
              pathLength: { duration: 2.4, delay: 0.4 + i * 0.12, ease: "easeOut" },
              opacity: { duration: 1, delay: 0.4 + i * 0.12 },
            }}
          />
        ))}
      </svg>

      {/* Driftende Partikel */}
      {[18, 33, 50, 64, 77].map((top, i) => (
        <motion.span
          key={top}
          className="absolute h-1 w-1 rounded-full bg-accent-teal/70"
          style={{ top: `${top}%`, left: "-2%" }}
          animate={{ x: ["0vw", "104vw"] }}
          transition={{
            duration: 9 + i * 1.6,
            repeat: Infinity,
            ease: "linear",
            delay: i * 1.3,
          }}
        />
      ))}
    </div>
  );
}
