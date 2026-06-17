import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ProblemSolution } from "@/components/ProblemSolution";
import { BentoGrid } from "@/components/BentoGrid";
import { LogoTicker } from "@/components/LogoTicker";
import { Dashboard } from "@/components/Dashboard";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ProblemSolution />
        <BentoGrid />
        <LogoTicker />
        <Dashboard />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
