import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Skills from "./components/Skills";
import Journey from "./components/Journey";
import Contact from "./components/Contact";
import FAQ from "./components/FAQ";
import PortfolioAI from "./components/PortfolioAI";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#030711] text-white">
      <Hero />
      <Projects />
      <About />
      <Skills />
      <Journey />
      <Contact />
      <FAQ />
      <PortfolioAI />
    </main>
  );
}