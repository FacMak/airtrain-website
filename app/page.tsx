import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Technology } from "@/components/Technology";
import { ProblemSolution } from "@/components/ProblemSolution";
import { BentoGrid } from "@/components/BentoGrid";
import { LogoTicker } from "@/components/LogoTicker";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        {/* Das Kernelement steht ganz vorne — direkt nach dem Hero. */}
        <Technology />
        <ProblemSolution />
        <BentoGrid />
        <LogoTicker />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
