"use client";

import { motion } from "framer-motion";

/**
 * Inline-SVG-Nachbau des AirTrain-Funktions-Diagramms.
 * Zeigt den Luftweg: Frischluftzufuhr → Ventilator → Filter → Abluft,
 * dazu die Wagonwand als untere Hülle.
 *
 * Vorteile gegenüber einer PNG:
 * - Gestochen scharf in jeder Auflösung
 * - Theme-fähig (passt sich der dunklen Section automatisch an)
 * - Animierbare Luftströme & Ventilatoren
 */
export function TechDiagram() {
  return (
    <svg
      viewBox="0 0 1600 880"
      className="block h-full w-full"
      role="img"
      aria-label="Funktionsweise des AirTrain-Systems: Frischluftzufuhr, Ventilatoren, Filter und Abluft"
    >
      <defs>
        {/* Blueprint-Hintergrund — feines, mittelfeines und grobes Gitter */}
        <pattern id="grid-fine" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#3B82F6" strokeOpacity="0.16" strokeWidth="0.6" />
        </pattern>
        <pattern id="grid-bold" width="100" height="100" patternUnits="userSpaceOnUse">
          <rect width="100" height="100" fill="url(#grid-fine)" />
          <path d="M 100 0 L 0 0 0 100" fill="none" stroke="#3B82F6" strokeOpacity="0.28" strokeWidth="1.1" />
        </pattern>

        {/* Sanftes Glühen der Luftstrom-Linien */}
        <linearGradient id="flow-fill" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#7DD3FC" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#22D3EE" stopOpacity="0.75" />
        </linearGradient>

        {/* Pfeil-Markierungen für die Luftrichtung */}
        <marker
          id="arrow"
          viewBox="0 0 10 10"
          refX="8"
          refY="5"
          markerWidth="7"
          markerHeight="7"
          orient="auto-start-reverse"
        >
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#1E3A8A" />
        </marker>

        {/* Frischluftstrom-Pfad (oben, ins Zentrum) — als reusable Pfad */}
        <path
          id="path-intake"
          d="M 90 60 L 90 200 L 760 200"
          fill="none"
        />
        {/* Reinraum-Pfad (oben rechts: Filter → Abluft) */}
        <path
          id="path-outtop"
          d="M 870 200 L 1540 200"
          fill="none"
        />
        {/* Unterer Pfad (Wagoninnenraum) */}
        <path
          id="path-cabin"
          d="M 870 460 L 1540 460"
          fill="none"
        />
      </defs>

      {/* Blueprint-Hintergrund */}
      <rect width="1600" height="880" fill="#EAF2FE" />
      <rect width="1600" height="880" fill="url(#grid-bold)" />

      {/* Wagonwand — abgerundete Hülle unten */}
      <path
        d="M 200 800 C 200 520, 600 360, 820 360 C 1040 360, 1440 520, 1440 800"
        fill="none"
        stroke="#1E3A8A"
        strokeWidth="3"
        strokeLinecap="round"
      />
      {/* Boden-Schraffur */}
      <g stroke="#1E3A8A" strokeWidth="2.5">
        <line x1="60" y1="820" x2="1600" y2="820" />
        {Array.from({ length: 60 }).map((_, i) => (
          <line
            key={i}
            x1={60 + i * 26}
            y1={820}
            x2={60 + i * 26 + 16}
            y2={848}
          />
        ))}
      </g>

      {/* Luftströme — breite hellblaue Bänder mit dunkler Kontur */}
      <g>
        {/* 1) Frischluftzufuhr (oben links → Mitte) */}
        <path
          d="M 64 60 L 64 220 L 740 220 L 740 180 L 64 180 Z M 64 180 L 116 180 L 116 60 L 64 60 Z"
          fill="url(#flow-fill)"
          stroke="#1E3A8A"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />

        {/* 2) Nach Ventilator → Filter → Abluft rechts */}
        <path
          d="M 870 180 L 1540 180 L 1540 220 L 870 220 Z"
          fill="url(#flow-fill)"
          stroke="#1E3A8A"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />

        {/* 3) Wagoninnenraum — Bogen entlang der Wagonwand */}
        <path
          d="M 280 760 C 280 540, 600 410, 820 410 C 1040 410, 1360 540, 1360 760
             L 1340 760 C 1340 560, 1030 450, 820 450 C 610 450, 300 560, 300 760 Z"
          fill="url(#flow-fill)"
          stroke="#1E3A8A"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
      </g>

      {/* Richtungspfeile auf den Strömen */}
      <g stroke="#1E3A8A" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round">
        {/* Einlauf-Pfeil oben links */}
        <path d="M 78 110 L 90 130 L 102 110" />
        {/* Pfeil im oberen Band */}
        <path d="M 360 195 L 380 200 L 360 205" />
        <path d="M 1180 195 L 1200 200 L 1180 205" />
        <path d="M 1470 195 L 1490 200 L 1470 205" />
        {/* Pfeile entlang des Bogens */}
        <path d="M 500 615 L 525 605 L 528 633" />
        <path d="M 1120 605 L 1145 615 L 1120 633" />
      </g>

      {/* Ventilatoren — zwei in der Mitte, einer oben, einer im Bogen */}
      <Fan cx={800} cy={200} r={80} speed={4} />
      <Fan cx={800} cy={430} r={80} speed={5.5} />

      {/* Verbindungslinien Ventilatoren ↔ Beschriftung */}
      <g stroke="#1E3A8A" strokeWidth="2.5" fill="none" strokeLinecap="round">
        <line x1="720" y1="280" x2="610" y2="380" />
        <line x1="880" y1="280" x2="990" y2="380" />
      </g>

      {/* Filter — schraffiertes Rechteck */}
      <g>
        <rect x="1290" y="155" width="70" height="90" fill="#EAF2FE" stroke="#1E3A8A" strokeWidth="2.5" />
        <g stroke="#1E3A8A" strokeWidth="1.5">
          {Array.from({ length: 6 }).map((_, i) => (
            <line key={`d1-${i}`} x1={1290 + i * 12} y1={155} x2={1290 + i * 12 + 20} y2={245} />
          ))}
          {Array.from({ length: 6 }).map((_, i) => (
            <line key={`d2-${i}`} x1={1290 + i * 12} y1={245} x2={1290 + i * 12 + 20} y2={155} />
          ))}
        </g>
      </g>

      {/* Beschriftungen — handschriftlich-anmutende Sans, große Größen */}
      <g
        fill="#0F172A"
        fontFamily="'Caveat', 'Comic Sans MS', sans-serif"
        fontWeight={500}
      >
        <text x="140" y="430" fontSize="58">Frisch</text>
        <text x="140" y="500" fontSize="58">Luftzufuhr</text>

        <text x="1010" y="430" fontSize="58">Ventilator</text>

        <text x="1240" y="110" fontSize="58">Filter</text>

        <text x="1310" y="600" fontSize="58">Abluft</text>

        <text x="700" y="730" fontSize="58">Wagonwand</text>
      </g>

      {/* Hinweislinie Wagonwand → Wagonwand-Bogen */}
      <line
        x1="820"
        y1="700"
        x2="830"
        y2="650"
        stroke="#1E3A8A"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

/** Animierter Ventilator mit 4 Flügeln und langsamer, organischer Rotation. */
function Fan({ cx, cy, r, speed }: { cx: number; cy: number; r: number; speed: number }) {
  return (
    <g>
      {/* Gehäuse */}
      <circle cx={cx} cy={cy} r={r} fill="#EAF2FE" stroke="#1E3A8A" strokeWidth="3" />
      <circle cx={cx} cy={cy} r={r - 12} fill="none" stroke="#1E3A8A" strokeWidth="1.8" />

      {/* Rotierende Flügel */}
      <motion.g
        style={{ transformOrigin: `${cx}px ${cy}px` }}
        animate={{ rotate: 360 }}
        transition={{ duration: speed, ease: "linear", repeat: Infinity }}
      >
        {[0, 90, 180, 270].map((angle) => (
          <FanBlade key={angle} cx={cx} cy={cy} r={r - 14} angle={angle} />
        ))}
        {/* Nabe */}
        <circle cx={cx} cy={cy} r={11} fill="#1E3A8A" />
      </motion.g>
    </g>
  );
}

function FanBlade({ cx, cy, r, angle }: { cx: number; cy: number; r: number; angle: number }) {
  // Tropfenförmiger Flügel — radial vom Zentrum, mit ordentlicher Breite
  const a = (angle * Math.PI) / 180;
  const sideA = ((angle - 90) * Math.PI) / 180;
  const sideB = ((angle + 90) * Math.PI) / 180;

  // Basis am Naben-Rand
  const baseX1 = cx + Math.cos(sideA) * 14;
  const baseY1 = cy + Math.sin(sideA) * 14;
  const baseX2 = cx + Math.cos(sideB) * 14;
  const baseY2 = cy + Math.sin(sideB) * 14;

  // Spitze
  const tipX = cx + Math.cos(a) * r;
  const tipY = cy + Math.sin(a) * r;

  // Kontrollpunkte für die geschwungenen Seiten (offset von der Mittellinie)
  const ctrlX1 = cx + Math.cos(a) * (r * 0.55) + Math.cos(sideA) * 22;
  const ctrlY1 = cy + Math.sin(a) * (r * 0.55) + Math.sin(sideA) * 22;
  const ctrlX2 = cx + Math.cos(a) * (r * 0.55) + Math.cos(sideB) * 22;
  const ctrlY2 = cy + Math.sin(a) * (r * 0.55) + Math.sin(sideB) * 22;

  return (
    <path
      d={`M ${baseX1} ${baseY1} Q ${ctrlX1} ${ctrlY1} ${tipX} ${tipY} Q ${ctrlX2} ${ctrlY2} ${baseX2} ${baseY2} Z`}
      fill="#EAF2FE"
      stroke="#1E3A8A"
      strokeWidth="2.5"
      strokeLinejoin="round"
    />
  );
}
