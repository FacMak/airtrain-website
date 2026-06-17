# Airtrain — B2B Website

Hochprofessionelle, technologische Marketing-Website für **Airtrain**: die
fahrtwind-getriebene Zugklimaanlage mit drastisch reduziertem Stromverbrauch.

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

## Deploy auf Vercel (GitHub-Dashboard-Flow)

### 1) Repo auf GitHub anlegen

Auf <https://github.com/new>:

| Feld | Wert |
| --- | --- |
| **Repository name** | `airtrain-website` |
| **Visibility** | Private (oder Public) |
| **Initialize** | _nichts_ ankreuzen (kein README, kein .gitignore, keine License) |

Auf **Create repository** klicken. GitHub zeigt dir dann den Push-Befehl — er sieht genauso aus wie unten.

### 2) Repo pushen (aus diesem Ordner)

```bash
cd airtrain-website
git remote add origin git@github.com:<DEIN-USERNAME>/airtrain-website.git
git push -u origin main
```

> Falls du HTTPS statt SSH bevorzugst, nimm stattdessen
> `https://github.com/<DEIN-USERNAME>/airtrain-website.git`.

### 3) In Vercel verbinden

Auf <https://vercel.com/new>:

1. **Import Git Repository** → `airtrain-website` auswählen
2. **Framework Preset:** `Next.js` (wird automatisch erkannt)
3. **Root Directory:** `./` _(belassen — das Repo enthält direkt die Next-App)_
4. **Build & Output Settings:** Defaults belassen
   - Build Command: `next build`
   - Install Command: `npm install`
   - Output Directory: `.next`
5. **Environment Variables:** keine nötig
6. **Deploy** klicken

Nach ca. 1–2 Minuten ist die Seite unter `https://airtrain-website-<hash>.vercel.app` live. Jeder weitere `git push` triggert automatisch einen neuen Deploy — Pushes auf `main` werden zur **Production-URL**, alle anderen Branches zu Preview-URLs.

### 4) Eigene Domain (optional)

In Vercel → Projekt → **Settings → Domains** kannst du `airtrain.tech` o. ä. verbinden. Vercel zeigt dir die nötigen DNS-Einträge.
