import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import { siteConfig } from "@/data/config";
import { motion } from "framer-motion";
import { Trophy, Award, Flag, ExternalLink, Calendar } from "lucide-react";

export default function Certificates() {
  
  // Helper to render a category section
  const CertificateSection = ({ title, type, icon: Icon, colorClass }: any) => {
    const items = siteConfig.certificates.filter(c => c.type === type);
    
    if (items.length === 0) return null;

    return (
      <section className="mb-20">
        <Reveal>
          <div className="flex items-center gap-3 mb-8">
            <div className={`p-3 rounded-xl bg-white/5 ${colorClass}`}>
              <Icon size={24} />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold">{title}</h2>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-6">
          {items.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group p-6 rounded-2xl bg-surface border border-white/5 hover:border-primary/30 transition-all hover:-translate-y-1"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-primary transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-text-muted flex items-center gap-2">
                    <span className="text-white/60">{cert.issuer}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1"><Calendar size={12}/> {cert.date}</span>
                  </p>
                </div>
                {cert.link && (
                  <a href={cert.link} target="_blank" className="text-text-muted hover:text-white transition-colors">
                    <ExternalLink size={18} />
                  </a>
                )}
              </div>
              
              <p className="text-text-muted leading-relaxed text-sm">
                {cert.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    );
  };

  return (
    <div className="min-h-screen bg-background text-text-main">
      <Navbar />

      <main className="pt-32 pb-20 px-6 max-w-5xl mx-auto">
        
        {/* HEADER */}
        <div className="mb-20">
          <Reveal>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Certificates & <span className="text-primary">Achievements</span>
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-lg text-text-muted max-w-2xl leading-relaxed">
              A verified track record of competitive programming wins, hackathon participations, 
              [cite_start]and technical course completions[cite: 44, 45, 46].
            </p>
          </Reveal>
        </div>

        {/* 1. COMPETITION WINS */}
        <CertificateSection 
          title="Competition Wins" 
          type="Competition Winning" 
          icon={Trophy} 
          colorClass="text-yellow-400" 
        />

        {/* 2. PARTICIPATIONS */}
        <CertificateSection 
          title="Hackathon Participation" 
          type="Competition Participation" 
          icon={Flag} 
          colorClass="text-blue-400" 
        />

        {/* 3. COURSE COMPLETIONS */}
        <CertificateSection 
          title="Course Certifications" 
          type="Course Completion" 
          icon={Award} 
          colorClass="text-green-400" 
        />

      </main>
      <Footer />
    </div>
  );
}