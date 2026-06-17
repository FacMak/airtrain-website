"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { CONTACT_ROLES } from "@/lib/data";
import { inViewProps, spring, springSnappy, staggerContainer } from "@/lib/motion";
import { ArrowRightIcon, CheckIcon } from "./ui/Icons";
import { Reveal } from "./ui/Reveal";

const fieldVariant = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: spring },
};

export function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Demo: kein Backend — hier würde der API-Call erfolgen.
    setSent(true);
  }

  return (
    <section id="kontakt" className="relative bg-paper py-24 sm:py-32">
      <div className="container-airtrain">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          {/* Linke Spalte: Pitch */}
          <Reveal className="lg:pt-6">
            <span className="kicker">Kontakt &amp; Partnerschaft</span>
            <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight sm:text-5xl text-balance">
              Bringen wir Airtrain auf die Schiene.
            </h2>
            <p className="mt-5 max-w-md text-lg leading-relaxed text-muted">
              Ob Eisenbahnverkehrsunternehmen, Fahrzeughersteller oder Tier-1-Zulieferer
              — sprechen wir über Pilotprojekte, Integration und Lizenzmodelle.
            </p>

            <ul className="mt-8 flex flex-col gap-3">
              {[
                "Technische Machbarkeitsstudie für Ihre Flotte",
                "Pilot-Integration in bestehende Wagenkästen",
                "Patent- & Lizenzmodelle für OEMs",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-ink/80">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-airflow-soft text-accent-deep">
                    <CheckIcon className="h-3.5 w-3.5" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-10 rounded-2xl border border-line bg-paper-pure p-5 shadow-soft">
              <p className="text-sm text-muted">Direkter Draht</p>
              <a
                href="mailto:partner@airtrain.tech"
                className="font-display text-xl font-semibold tracking-tight text-ink hover:text-accent-deep"
              >
                partner@airtrain.tech
              </a>
            </div>
          </Reveal>

          {/* Rechte Spalte: Formular */}
          <Reveal delay={0.1}>
            <div className="relative overflow-hidden rounded-4xl border border-line bg-paper-pure p-7 shadow-lift sm:p-9">
              <AnimatePresence mode="wait">
                {sent ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={spring}
                    className="flex min-h-[28rem] flex-col items-center justify-center text-center"
                  >
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ ...spring, delay: 0.1 }}
                      className="flex h-16 w-16 items-center justify-center rounded-full bg-airflow text-ink"
                    >
                      <CheckIcon className="h-8 w-8" />
                    </motion.span>
                    <h3 className="mt-6 font-display text-2xl font-semibold tracking-tight">
                      Vielen Dank!
                    </h3>
                    <p className="mt-2 max-w-sm text-muted">
                      Ihre Anfrage ist eingegangen. Unser Partner-Team meldet sich
                      innerhalb von zwei Werktagen bei Ihnen.
                    </p>
                    <button
                      onClick={() => setSent(false)}
                      className="mt-6 text-sm font-semibold text-accent-deep hover:underline"
                    >
                      Weitere Anfrage senden
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    variants={staggerContainer(0.07, 0.05)}
                    {...inViewProps}
                    className="flex flex-col gap-5"
                  >
                    <div className="grid gap-5 sm:grid-cols-2">
                      <Field label="Name" name="name" placeholder="Vor- und Nachname" required />
                      <Field label="Unternehmen" name="company" placeholder="z. B. ÖBB" required />
                    </div>

                    <motion.div variants={fieldVariant}>
                      <Label>Rolle</Label>
                      <div className="relative">
                        <select
                          name="role"
                          required
                          defaultValue=""
                          className="peer w-full appearance-none rounded-xl border border-line bg-paper px-4 py-3 text-ink outline-none transition-all duration-300 focus:border-accent focus:bg-paper-pure focus:ring-4 focus:ring-accent/10"
                        >
                          <option value="" disabled>
                            Bitte auswählen …
                          </option>
                          {CONTACT_ROLES.map((role) => (
                            <option key={role} value={role}>
                              {role}
                            </option>
                          ))}
                        </select>
                        <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-muted">
                          ▾
                        </span>
                      </div>
                    </motion.div>

                    <Field
                      label="Geschäftliche E-Mail"
                      name="email"
                      type="email"
                      placeholder="name@unternehmen.com"
                      required
                    />

                    <motion.div variants={fieldVariant}>
                      <Label>Ihre Nachricht</Label>
                      <textarea
                        name="message"
                        rows={4}
                        placeholder="Erzählen Sie uns von Ihrer Flotte, Ihrem Projekt oder Ihrer Fragestellung …"
                        className="w-full resize-none rounded-xl border border-line bg-paper px-4 py-3 text-ink outline-none transition-all duration-300 placeholder:text-muted/60 focus:border-accent focus:bg-paper-pure focus:ring-4 focus:ring-accent/10"
                      />
                    </motion.div>

                    <motion.div variants={fieldVariant}>
                      <motion.button
                        type="submit"
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        transition={springSnappy}
                        className="group flex w-full items-center justify-center gap-2 rounded-xl bg-ink px-6 py-4 text-base font-semibold text-paper-pure shadow-soft transition-colors hover:bg-ink-soft"
                      >
                        Anfrage senden
                        <ArrowRightIcon className="h-5 w-5 transition-transform duration-300 ease-aero group-hover:translate-x-1" />
                      </motion.button>
                      <p className="mt-3 text-center text-xs text-muted">
                        Mit dem Absenden stimmen Sie der Verarbeitung Ihrer Daten
                        gemäß Datenschutzerklärung zu.
                      </p>
                    </motion.div>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <label className="mb-1.5 block text-sm font-medium text-ink/70">
      {children}
    </label>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <motion.div variants={fieldVariant}>
      <Label>{label}</Label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        required={required}
        className="w-full rounded-xl border border-line bg-paper px-4 py-3 text-ink outline-none transition-all duration-300 placeholder:text-muted/60 focus:border-accent focus:bg-paper-pure focus:ring-4 focus:ring-accent/10"
      />
    </motion.div>
  );
}
