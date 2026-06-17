"use client";

import { motion } from "framer-motion";
import { GALLERY_ITEMS } from "@/lib/data";
import { fadeUp, inViewProps, spring, staggerContainer } from "@/lib/motion";
import { MediaFrame } from "./ui/MediaFrame";
import { Reveal } from "./ui/Reveal";

/**
 * Bento-Galerie für reale Fotos.
 * Lege Bilder unter /public/gallery/foto-{1..5}.{jpg|png} ab —
 * sie erscheinen dann automatisch anstelle der Platzhalter.
 */
export function Gallery() {
  return (
    <section id="galerie" className="relative bg-paper py-24 sm:py-32">
      <div className="container-airtrain">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="kicker">Galerie</span>
          <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight sm:text-5xl text-balance">
            AirTrain in Bildern
          </h2>
          <p className="mt-4 text-lg text-muted">
            Eindrücke vom System, Prototypen und Einsatzszenarien.
            Foto­dateien einfach im Ordner{" "}
            <code className="rounded bg-paper-pure px-1.5 py-0.5 text-sm text-ink">
              /public/gallery/
            </code>{" "}
            ablegen.
          </p>
        </Reveal>

        <motion.div
          variants={staggerContainer(0.1, 0.05)}
          {...inViewProps}
          className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:auto-rows-[200px] lg:grid-cols-4"
        >
          {GALLERY_ITEMS.map((item) => (
            <motion.div
              key={item.src}
              variants={fadeUp}
              whileHover={{ y: -4 }}
              transition={spring}
              className={`${
                item.span === "lg"
                  ? "lg:col-span-2 lg:row-span-2"
                  : "lg:col-span-1 lg:row-span-1"
              }`}
            >
              <MediaFrame
                src={item.src}
                alt={item.alt}
                label={item.label}
                caption={item.alt}
                rounded="rounded-2xl"
                className="h-full min-h-[200px] shadow-soft transition-shadow duration-300 ease-aero hover:shadow-lift"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
