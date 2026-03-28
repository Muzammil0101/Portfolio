import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Process } from "@/components/sections/Process";
import { TechStack } from "@/components/sections/TechStack";
import { Projects } from "@/components/sections/Projects";
import { Testimonials } from "@/components/sections/Testimonials";
import { Contact } from "@/components/sections/Contact";
import { AnimatedBackground } from "@/components/ui/AnimatedBackground";

export default function Home() {
  return (
    <main className="min-h-screen text-zinc-900 font-sans selection:bg-primary-500/30 selection:text-zinc-900 relative">
      <AnimatedBackground />
      <Navbar />
      <section id="hero">
        <Hero />
      </section>
      <Services />
      <Process />
      <Projects />
      <section id="tech-stack" className="py-10 bg-transparent border-t border-zinc-200/50">
        <TechStack />
      </section>
      <Testimonials />
      <section id="contact" className="border-t border-zinc-200/50">
        <Contact />
      </section>
    </main>
  );
}
