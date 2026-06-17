/**
 * Inhaltsdaten für die Airtrain-Website.
 * Content vom Layout entkoppelt — leicht pflegbar, leicht lokalisierbar.
 */

export const NAV_LINKS = [
  { label: "Technologie", href: "#technologie" },
  { label: "Lösung", href: "#loesung" },
  { label: "Vorteile", href: "#vorteile" },
  { label: "Partner", href: "#partner" },
  { label: "Kontakt", href: "#kontakt" },
] as const;

export const HERO_STATS = [
  { value: "Minimal", label: "Stromverbrauch dank Fahrtwind" },
  { value: "≈ 100 %", label: "unabhängig vom Bordnetz" },
  { value: "−42 %", label: "Lebenszyklus-Betriebskosten" },
] as const;

/** Problem-/Lösungs-Panel */
export const PROBLEM = {
  tone: "problem" as const,
  title: "Heutige Klimatechnik im Schienenverkehr",
  lead: "Konventionelle HVAC-Systeme sind Energiefresser und Wartungstreiber — und liefern trotzdem oft schlechte Luft.",
  points: [
    {
      title: "Hoher Stromverbrauch",
      body: "Klimaanlagen zählen zu den größten Nebenverbrauchern im Zug und belasten die Energiebilanz massiv.",
    },
    {
      title: "Schlechte Luftqualität",
      body: "Umluftbetrieb, Keime und CO₂-Anstieg mindern Komfort und Gesundheit auf langen Strecken.",
    },
    {
      title: "Teure Wartung",
      body: "Kompressoren, Kältemittel und bewegte Teile bedeuten regelmäßige, kostspielige Instandhaltung.",
    },
    {
      title: "Ausfallrisiko",
      body: "Komplexe Elektronik fällt aus — bei Hitze genau dann, wenn Fahrgäste die Kühlung am dringendsten brauchen.",
    },
  ],
} as const;

export const SOLUTION = {
  tone: "solution" as const,
  title: "Airtrain — angetrieben vom Fahrtwind",
  lead: "Ein fahrtwind-getriebenes Kühl- und Ventilationssystem. Intelligente Luftansaugung statt Kompressor — mit drastisch reduziertem Stromverbrauch.",
  points: [
    {
      title: "Drastisch weniger Strom",
      body: "Die Kinetik des Fahrtwinds übernimmt die Hauptarbeit — der Stromverbrauch sinkt gegenüber konventioneller Klimatechnik drastisch.",
    },
    {
      title: "Frische Außenluft",
      body: "Kontinuierlicher Frischluftstrom mit Filtration senkt CO₂ und hebt die Luftqualität spürbar an.",
    },
    {
      title: "Nahezu wartungsfrei",
      body: "Kaum bewegte Verschleißteile, kein Kältemittelkreislauf — drastisch reduzierte Instandhaltung.",
    },
    {
      title: "Ausfallsicher & autark",
      body: "Passive, robuste Mechanik arbeitet zuverlässig — gerade unter Last und bei Hitze.",
    },
  ],
} as const;

/** B2B Bento-Grid — die Alleinstellungsmerkmale */
export const USPS = [
  {
    id: "energie",
    title: "Drastisch reduzierter Stromverbrauch",
    body: "Der Fahrtwind übernimmt die Kühl- und Lüftungsarbeit — das System verbraucht im Betrieb deutlich weniger Strom als konventionelle Klimaanlagen mit Kompressor. Das verbessert die Energiebilanz des gesamten Zugs messbar.",
    metric: "Minimal",
    metricLabel: "Stromverbrauch",
    span: "lg" as const,
    icon: "bolt",
  },
  {
    id: "autark",
    title: "Nahezu vollständige Autarkie",
    body: "Unabhängig vom Bordnetz. Das System arbeitet selbstständig aus der Fahrbewegung heraus.",
    metric: "≈ 100 %",
    metricLabel: "autark",
    span: "sm" as const,
    icon: "leaf",
  },
  {
    id: "ausfall",
    title: "Ausfallsicher by Design",
    body: "Passive Mechanik statt komplexer Leistungselektronik. Weniger Teile, die ausfallen können.",
    metric: "99,9 %",
    metricLabel: "Verfügbarkeit",
    span: "sm" as const,
    icon: "shield",
  },
  {
    id: "kosten",
    title: "Signifikante Kostenersparnis",
    body: "Keine Kompressoren, kein Kältemittel, minimale Wartung. Über den Lebenszyklus sinken Betriebs- und Instandhaltungskosten drastisch.",
    metric: "−42 %",
    metricLabel: "Betriebskosten",
    span: "md" as const,
    icon: "coins",
  },
  {
    id: "luft",
    title: "Bessere Luft, höherer Komfort",
    body: "Kontinuierliche, gefilterte Frischluft senkt CO₂ und steigert das Wohlbefinden der Fahrgäste.",
    metric: "+38 %",
    metricLabel: "Frischluftrate",
    span: "md" as const,
    icon: "wind",
  },
] as const;

/** Strategisches Ökosystem — Partner & Referenz-Pipeline */
export const PARTNERS = [
  "ÖBB",
  "Siemens Mobility",
  "Stadler",
  "Alstom",
  "Liebherr",
  "TU Wien",
  "Deutsche Bahn",
  "Bombardier",
] as const;

export const CONTACT_ROLES = [
  "Eisenbahnverkehrsunternehmen (EVU)",
  "Schienenfahrzeughersteller (OEM)",
  "Systemzulieferer / Tier-1",
  "Investor / Strategie",
  "Forschung & Lehre",
] as const;

/**
 * Funktionsweise des AirTrain-Systems — der Luftweg in Reihenfolge.
 * Spiegelt die Beschriftungen des Funktions-Diagramms wider.
 */
export const TECH_STEPS = [
  {
    n: "01",
    title: "Frischluftzufuhr",
    body: "Der Fahrtwind presst frische Außenluft in den Ansaugkanal — ohne aktive elektrische Förderung.",
    icon: "wind",
  },
  {
    n: "02",
    title: "Ventilator",
    body: "Strömungsoptimierte Ventilatoren verteilen die Luft im Wagen — angetrieben vom Fahrtwind, mit minimalem Strombedarf.",
    icon: "wind",
  },
  {
    n: "03",
    title: "Filter",
    body: "Ein mehrstufiger Filter reinigt die Luft von Feinstaub, Pollen und Keimen, bevor sie einströmt.",
    icon: "shield",
  },
  {
    n: "04",
    title: "Abluft",
    body: "Verbrauchte, warme Luft wird kontinuierlich nach außen geführt — Hitze und CO₂ stauen sich nicht mehr.",
    icon: "leaf",
  },
] as const;

