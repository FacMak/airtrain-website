"use client";

import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";
import { NAV_LINKS } from "@/lib/data";
import { spring, springSnappy } from "@/lib/motion";
import { ArrowRightIcon, TrainIcon } from "./ui/Icons";

export function Navbar() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (y) => {
    setScrolled(y > 24);
  });

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ ...spring, delay: 0.1 }}
      className="fixed inset-x-0 top-0 z-50 flex justify-center px-4"
    >
      <motion.nav
        animate={{
          marginTop: scrolled ? 10 : 18,
          paddingTop: scrolled ? 8 : 12,
          paddingBottom: scrolled ? 8 : 12,
          width: scrolled ? "min(64rem, 100%)" : "min(80rem, 100%)",
        }}
        transition={spring}
        className={`flex items-center justify-between gap-6 rounded-full border px-4 backdrop-blur-md transition-colors duration-500 sm:px-6 ${
          scrolled
            ? "border-line bg-paper-pure/75 shadow-soft"
            : "border-white/10 bg-ink/[0.03]"
        }`}
      >
        {/* Wordmark */}
        <a href="#top" className="flex shrink-0 items-center gap-2.5">
          <span
            className={`flex h-9 w-9 items-center justify-center rounded-xl transition-colors duration-500 ${
              scrolled ? "bg-ink text-paper-pure" : "bg-white/10 text-paper"
            }`}
          >
            <TrainIcon className="h-5 w-5" />
          </span>
          <span
            className={`text-[1.05rem] font-semibold tracking-tight transition-colors duration-500 ${
              scrolled ? "text-ink" : "text-paper"
            }`}
          >
            AirTrain
          </span>
        </a>

        {/* Desktop-Links */}
        <ul className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`group relative rounded-full px-3.5 py-2 text-sm font-medium transition-colors duration-300 ${
                  scrolled
                    ? "text-ink/70 hover:text-ink"
                    : "text-paper/75 hover:text-paper"
                }`}
              >
                {link.label}
                <span className="absolute inset-x-3.5 bottom-1 h-px origin-left scale-x-0 bg-accent transition-transform duration-300 ease-aero group-hover:scale-x-100" />
              </a>
            </li>
          ))}
        </ul>

        {/* CTA + Mobile-Toggle */}
        <div className="flex items-center gap-2">
          <motion.a
            href="#kontakt"
            whileHover={{ y: -1 }}
            whileTap={{ scale: 0.97 }}
            transition={springSnappy}
            className={`hidden items-center gap-1.5 rounded-full px-4 py-2 text-sm font-semibold shadow-soft transition-colors duration-500 sm:inline-flex ${
              scrolled ? "bg-ink text-paper-pure" : "bg-airflow text-ink"
            }`}
          >
            Partner werden
            <ArrowRightIcon className="h-4 w-4" />
          </motion.a>

          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Menü"
            className={`flex h-9 w-9 items-center justify-center rounded-full border transition-colors duration-500 md:hidden ${
              scrolled
                ? "border-line text-ink"
                : "border-white/20 text-paper"
            }`}
          >
            <div className="flex w-4 flex-col gap-[5px]">
              <motion.span
                animate={open ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                className="h-[1.5px] w-full bg-current"
              />
              <motion.span
                animate={open ? { opacity: 0 } : { opacity: 1 }}
                className="h-[1.5px] w-full bg-current"
              />
              <motion.span
                animate={open ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                className="h-[1.5px] w-full bg-current"
              />
            </div>
          </button>
        </div>
      </motion.nav>

      {/* Mobile-Menü */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={spring}
            className="absolute top-[4.5rem] w-[min(28rem,calc(100%-2rem))] rounded-3xl border border-line bg-paper-pure/90 p-3 shadow-lift backdrop-blur-xl md:hidden"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-2xl px-4 py-3 text-base font-medium text-ink/80 transition-colors hover:bg-paper hover:text-ink"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#kontakt"
              onClick={() => setOpen(false)}
              className="mt-1 flex items-center justify-center gap-1.5 rounded-2xl bg-ink px-4 py-3 text-base font-semibold text-paper-pure"
            >
              Partner werden
              <ArrowRightIcon className="h-4 w-4" />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
