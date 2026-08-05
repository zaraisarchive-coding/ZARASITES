import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Journey from "@/components/sections/Journey";
import Experience from "@/components/sections/Experience";
import Certificates from "@/components/sections/Certificates";
import TechStack from "@/components/sections/TechStack";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

// Hero Section sudah aktif — lihat components/sections/Hero.tsx

export default function Home() {
  return (
    <main className="bg-soft-gradient">
      <Hero />

      <About />
      <Skills />
      <Projects />
      <Journey />
      <Experience />
      <Certificates />
      <TechStack />
      <Contact />
      <Footer />
    </main>
  );
}
