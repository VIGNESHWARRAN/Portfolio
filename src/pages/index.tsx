import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer"; // Ensure you have the Footer component
import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import { siteConfig } from "@/data/config";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-text-main selection:bg-primary/30">
      <Navbar />

      <main className="pt-32 pb-20 px-6 max-w-6xl mx-auto">
        
        {/* HERO SECTION */}
        <section className="min-h-[60vh] flex flex-col justify-center">
          <Reveal>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
              Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Intelligent</span> <br />
              Systems.
            </h1>
          </Reveal>
          
          <Reveal delay={0.1}>
            <p className="text-lg md:text-xl text-text-muted max-w-2xl leading-relaxed mb-10">
              I am {siteConfig.name}, an {siteConfig.title}. I bridge the gap between 
              advanced machine learning research and scalable software engineering.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="flex gap-4">
              <Link 
                href="/projects" 
                className="px-6 py-3 rounded-full bg-white text-black font-medium hover:bg-gray-200 transition-colors flex items-center gap-2"
              >
                View Projects <ArrowRight size={18} />
              </Link>
              <div className="flex gap-4 items-center px-6">
                {siteConfig.socials.map((social) => (
                  <a 
                    key={social.name} 
                    href={social.href} 
                    target="_blank" 
                    className="text-text-muted hover:text-primary transition-colors"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </Reveal>
        </section>

        {/* FOCUS AREAS (Grid) */}
        <Section title="Focus Areas">
          <div className="grid md:grid-cols-3 gap-6">
            {siteConfig.focusAreas.map((area, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5 }}
                className="p-6 rounded-2xl bg-surface border border-white/5"
              >
                <h3 className="text-lg font-semibold text-white mb-2">{area.title}</h3>
                <p className="text-sm text-text-muted">{area.desc}</p>
              </motion.div>
            ))}
          </div>
        </Section>

        {/* TIMELINE */}
        <Section title="Journey">
          <div className="border-l border-white/10 ml-3 space-y-12 pl-8 relative">
            {siteConfig.timeline.map((item, i) => (
              <div key={i} className="relative">
                <span className="absolute -left-[37px] top-1 w-4 h-4 rounded-full bg-background border-2 border-primary" />
                <span className="text-xs font-mono text-primary mb-1 block">{item.year}</span>
                <h3 className="text-lg font-medium text-white">{item.title}</h3>
                <p className="text-sm text-text-muted mb-2">{item.company}</p>
                <p className="text-sm text-gray-400 max-w-2xl">{item.desc}</p>
              </div>
            ))}
          </div>
        </Section>

      </main>
      <Footer />
    </div>
  );
}