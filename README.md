# Airtrain — B2B Website

Hochprofessionelle, technologische Marketing-Website für **Airtrain**: die
fahrtwind-getriebene Zugklimaanlage ohne Stromverbrauch.

## Tech-Stack

- **Next.js 15** (App Router, React 19)
- **Tailwind CSS 3.4** — clean, viel Whitespace, präzises Grid
- **Framer Motion 11** — organische Spring-Physics, „High-End Agency Look"

## Schnellstart

```bash
cd airtrain-website
npm install
npm run dev
```

Dann <http://localhost:3000> öffnen.

## Struktur

```
app/
  layout.tsx          Fonts (Inter + Space Grotesk), Metadata
  page.tsx            Komposition aller Sektionen
  globals.css         Design-Tokens, Tailwind-Layer, Utilities
lib/
  motion.ts           Zentrales Motion-System (Springs, Varianten, Stagger)
  data.ts             Alle Inhalte (entkoppelt vom Layout)
components/
  Navbar.tsx          Sticky-Glassmorphism-Nav, schrumpft beim Scrollen
  Hero.tsx            Word-für-Word-Reveal + Airflow-Hintergrund
  ProblemSolution.tsx Interaktiver Toggle-Wechsler (Problem ↔ Lösung)
  BentoGrid.tsx       USP-Bento-Grid mit Hover-Lift & Stagger
  LogoTicker.tsx      Unendlicher Partner-Logo-Ticker
  Dashboard.tsx       Kennzahlen & Kostenstruktur (animierte Counter/Balken)
  Contact.tsx         Animiertes B2B-Formular mit Erfolgs-State
  Footer.tsx
  ui/                 Reveal, Stagger, Counter, Icons
```

## Design-Prinzipien

- **Spring-Physics** (`stiffness: 100, damping: 25, mass: 0.5`) statt hektischer Tweens
- **Reveal-on-Scroll** (Fade + Slide-Up 30→0), genau einmal, knapp unter dem Fold
- **Stagger** für Listen, Key-Metrics und Karten
- **`prefers-reduced-motion`** wird respektiert
