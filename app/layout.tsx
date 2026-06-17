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
  title: "Airtrain — Die Zugklimaanlage ohne Strom",
  description:
    "Airtrain ist ein revolutionäres, fahrtwind-getriebenes Klima- und Ventilationssystem für Züge. Null Stromverbrauch, ausfallsicher, autark — entwickelt für EVUs und Schienenfahrzeughersteller.",
  keywords: [
    "Zugklimaanlage",
    "Fahrtwind",
    "Schienenverkehr",
    "HVAC",
    "Energieeffizienz",
    "B2B",
  ],
  openGraph: {
    title: "Airtrain — Die Zugklimaanlage ohne Strom",
    description:
      "Fahrtwind-getriebene Klimatisierung für den Schienenverkehr. Null Strom, ausfallsicher, autark.",
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
