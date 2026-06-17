"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { PROBLEM, SOLUTION } from "@/lib/data";
import { spring, springSnappy, staggerContainer } from "@/lib/motion";
import { Reveal } from "./ui/Reveal";
import { CheckIcon } from "./ui/Icons";

type Mode = "problem" | "solution";

const DATA = { problem: PROBLEM, solution: SOLUTION } as const;

export function ProblemSolution() {
  const [mode, setMode] = useState<Mode>("problem");
  const active = DATA[mode];
  const isSolution = mode === "solution";

  return (
    <section id="loesung" className="relative bg-paper py-24 sm:py-32">
      <div className="container-airtrain">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="kicker">Problem &amp; Lösung</span>
          <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight sm:text-5xl text-balance">
            Vom Energiefresser zum Fahrtwind-System
          </h2>
          <p className="mt-4 text-lg text-muted">
            Wechseln Sie die Perspektive — sehen Sie, was Airtrain im Vergleich
            zur konventionellen Klimatechnik grundlegend anders macht.
          </p>
        </Reveal>

        {/* Toggle-Wechsler */}
        <Reveal className="mt-10 flex justify-center" delay={0.1}>
          <div className="relative inline-flex rounded-full border border-line bg-paper-pure p-1 shadow-soft">
            {(["problem", "solution"] as const).map((m) => {
              const activeTab = mode === m;
              return (
                <button
                  key={m}
                  onClick={() => setMode(m)}
                  className="relative z-10 rounded-full px-6 py-2.5 text-sm font-semibold transition-colors duration-300"
                  style={{ color: activeTab ? "#fff" : "#5B6B82" }}
                >
                  {activeTab && (
                    <motion.span
                      layoutId="ps-pill"
                      transition={spring}
                      className={`absolute inset-0 -z-10 rounded-full ${
                        m === "solution" ? "bg-airflow" : "bg-signal"
                      }`}
                    />
                  )}
                  {m === "problem" ? "Das Problem" : "Die Airtrain-Lösung"}
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Panel */}
        <div className="mt-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={mode}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={spring}
              className="grid gap-6 lg:grid-cols-[1.05fr_1fr]"
            >
              {/* Visual / Statement */}
              <div
                className={`relative overflow-hidden rounded-3xl border p-8 sm:p-10 ${
                  isSolution
                    ? "border-accent/20 bg-airflow-soft"
                    : "border-signal/20 bg-signal/[0.05]"
                }`}
              >
                <span
                  className={`text-[0.7rem] font-bold uppercase tracking-[0.22em] ${
                    isSolution ? "text-accent-deep" : "text-signal"
                  }`}
                >
                  {isSolution ? "Mit Airtrain" : "Status quo"}
                </span>
                <h3 className="mt-3 max-w-md font-display text-3xl font-semibold leading-tight tracking-tight">
                  {active.title}
                </h3>
                <p className="mt-4 max-w-md text-lg leading-relaxed text-ink/70">
                  {active.lead}
                </p>

                <SceneVisual solution={isSolution} />
              </div>

              {/* Punkte-Liste mit Stagger */}
              <motion.ul
                variants={staggerContainer(0.09, 0.05)}
                initial="hidden"
                animate="visible"
                className="flex flex-col gap-3"
              >
                {active.points.map((point) => (
                  <motion.li
                    key={point.title}
                    variants={{
                      hidden: { opacity: 0, x: 24 },
                      visible: { opacity: 1, x: 0, transition: spring },
                    }}
                    className="group flex gap-4 rounded-2xl border border-line bg-paper-pure p-5 shadow-soft transition-all duration-300 ease-aero hover:-translate-y-1 hover:shadow-lift"
                  >
                    <span
                      className={`mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ${
                        isSolution
                          ? "bg-accent/10 text-accent-deep"
                          : "bg-signal/10 text-signal"
                      }`}
                    >
                      {isSolution ? (
                        <CheckIcon className="h-5 w-5" />
                      ) : (
                        <CrossIcon />
                      )}
                    </span>
                    <div>
                      <h4 className="font-semibold tracking-tight">
                        {point.title}
                      </h4>
                      <p className="mt-1 text-sm leading-relaxed text-muted">
                        {point.body}
                      </p>
                    </div>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

function CrossIcon() {
  return (
    <svg
      width={20}
      height={20}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
    >
      <path d="M7 7l10 10M17 7 7 17" />
    </svg>
  );
}

/** Illustrative Luftstrom-Szene: blockiert (Problem) vs. fließend (Lösung). */
function SceneVisual({ solution }: { solution: boolean }) {
  return (
    <div className="relative mt-8 h-40 overflow-hidden rounded-2xl border border-ink/5 bg-paper-pure/60">
      <svg viewBox="0 0 400 160" className="h-full w-full" aria-hidden>
        {/* Zug-Silhouette */}
        <rect
          x="40"
          y="55"
          width="320"
          height="60"
          rx="26"
          className="fill-ink/[0.06]"
        />
        <rect x="40" y="55" width="320" height="60" rx="26" className="fill-none stroke-ink/15" strokeWidth={1.5} />
        {/* Luftstrom */}
        {[78, 92, 106].map((y, i) => (
          <motion.path
            key={y}
            d={
              solution
                ? `M -20 ${y} C 120 ${y - 14}, 260 ${y + 14}, 420 ${y - 6}`
                : `M -20 ${y} C 120 ${y}, 260 ${y}, 420 ${y}`
            }
            fill="none"
            stroke={solution ? "#06B6D4" : "#FB7185"}
            strokeWidth={2}
            strokeLinecap="round"
            strokeDasharray={solution ? "0" : "6 10"}
            initial={{ pathLength: 0, opacity: 0.2 }}
            animate={
              solution
                ? { pathLength: 1, opacity: 0.85, x: [0, 12, 0] }
                : { pathLength: 1, opacity: 0.45 }
            }
            transition={{
              pathLength: { duration: 1.2, delay: i * 0.12 },
              x: { duration: 3, repeat: Infinity, ease: "easeInOut" },
            }}
          />
        ))}
      </svg>
      <span className="absolute bottom-3 left-4 text-xs font-medium text-muted">
        {solution ? "Kontinuierlicher Frischluftstrom" : "Umluft & Stau — hoher Energiebedarf"}
      </span>
    </div>
  );
}
