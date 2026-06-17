import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "AirTrain — Fahrtwind-Klimaanlage für Züge",
  description:
    "AirTrain ist das fahrtwind-getriebene Klima- und Ventilationssystem für Züge — mit drastisch reduziertem Stromverbrauch gegenüber konventioneller HVAC. Entwickelt für EVUs und Schienenfahrzeughersteller.",
  keywords: [
    "AirTrain",
    "Zugklimaanlage",
    "Fahrtwind",
    "Schienenverkehr",
    "HVAC",
    "Energieeffizienz",
    "B2B",
  ],
  openGraph: {
    title: "AirTrain — Fahrtwind-Klimaanlage für Züge",
    description:
      "Fahrtwind-getriebene Klimatisierung für den Schienenverkehr. Deutlich weniger Stromverbrauch, ausfallsicher, wartungsarm.",
    type: "website",
    locale: "de_AT",
  },
};

export const viewport: Viewport = {
  themeColor: "#070B14",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" className={`${inter.variable} ${display.variable}`}>
      <body>{children}</body>
    </html>
  );
}
