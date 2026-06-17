"use client";

import { motion } from "framer-motion";
import { COST_BREAKDOWN, KPIS } from "@/lib/data";
import { inViewProps, spring, staggerContainer } from "@/lib/motion";
import { Counter } from "./ui/Counter";
import { Reveal } from "./ui/Reveal";

export function Dashboard() {
  return (
    <section id="kennzahlen" className="relative bg-paper py-24 sm:py-32">
      <div className="container-airtrain">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="kicker">Kennzahlen &amp; Wirtschaftlichkeit</span>
          <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight sm:text-5xl text-balance">
            Die Zahlen hinter dem System
          </h2>
          <p className="mt-4 text-lg text-muted">
            Produktionskosten, Entwicklungszeiträume und der Umsatzhebel durch
            Patentlizenzen — transparent für die Investitions­entscheidung.
          </p>
        </Reveal>

        {/* Dunkles Dashboard-Panel */}
        <Reveal
          className="relative mt-14 overflow-hidden rounded-4xl border border-ink-700/40 bg-ink p-6 text-paper shadow-lift sm:p-10"
          delay={0.1}
        >
          <div className="grid-texture-dark pointer-events-none absolute inset-0 opacity-50" />
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accent/20 blur-[100px]" />

          <div className="relative grid gap-10 lg:grid-cols-[1.25fr_1fr] lg:gap-12">
            {/* KPI-Raster */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-paper/45">
                Key Performance Indicators
              </h3>
              <motion.dl
                variants={staggerContainer(0.12, 0.05)}
                {...inViewProps}
                className="mt-6 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/5 sm:grid-cols-2"
              >
                {KPIS.map((kpi) => (
                  <motion.div
                    key={kpi.label}
                    variants={{
                      hidden: { opacity: 0, y: 24 },
                      visible: { opacity: 1, y: 0, transition: spring },
                    }}
                    className="bg-ink/60 p-6"
                  >
                    <dd className="font-display text-4xl font-semibold tracking-tight text-airflow">
                      <Counter
                        value={kpi.value}
                        decimals={"decimals" in kpi ? (kpi.decimals as number) : 0}
                        prefix={kpi.prefix}
                        suffix={kpi.suffix}
                      />
                    </dd>
                    <dt className="mt-2 text-sm font-medium text-paper/80">
                      {kpi.label}
                    </dt>
                    <p className="mt-0.5 text-xs text-paper/40">{kpi.sub}</p>
                  </motion.div>
                ))}
              </motion.dl>
            </div>

            {/* Kostenstruktur-Balken */}
            <div className="flex flex-col">
              <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-paper/45">
                Kostenstruktur / Einheit
              </h3>

              <motion.ul
                variants={staggerContainer(0.1, 0.1)}
                {...inViewProps}
                className="mt-6 flex flex-col gap-5"
              >
                {COST_BREAKDOWN.map((item) => (
                  <motion.li
                    key={item.label}
                    variants={{
                      hidden: { opacity: 0, y: 16 },
                      visible: { opacity: 1, y: 0, transition: spring },
                    }}
                  >
                    <div className="flex items-baseline justify-between text-sm">
                      <span className="font-medium text-paper/80">
                        {item.label}
                      </span>
                      <span className="tnum font-semibold text-paper/90">
                        {item.pct}%
                      </span>
                    </div>
                    <div className="mt-2 h-2.5 overflow-hidden rounded-full bg-white/10">
                      <motion.div
                        className="h-full rounded-full bg-airflow"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.pct}%` }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{ ...spring, mass: 0.7 }}
                      />
                    </div>
                  </motion.li>
                ))}
              </motion.ul>

              <div className="mt-auto pt-8">
                <div className="rounded-2xl border border-accent/20 bg-accent/[0.07] p-5">
                  <p className="text-xs font-medium uppercase tracking-wider text-accent-teal">
                    Break-even-Perspektive
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-paper/70">
                    Amortisation der Mehrkosten gegenüber konventioneller HVAC
                    typischerweise in{" "}
                    <span className="font-semibold text-paper">
                      &lt; 3 Jahren
                    </span>{" "}
                    durch eingesparte Energie- und Wartungskosten.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
