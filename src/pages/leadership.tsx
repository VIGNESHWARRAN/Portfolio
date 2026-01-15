import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import { siteConfig } from "@/data/config";
import { motion } from "framer-motion";
import { ExternalLink, Calendar, ImageOff } from "lucide-react";

export default function Leadership() {
  return (
    <div className="min-h-screen bg-background text-text-main">
      <Navbar />

      <main className="pt-32 pb-20 px-6 max-w-5xl mx-auto">
        
        {/* HEADER */}
        <div className="mb-24 text-center">
          <Reveal>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Leadership & <span className="text-primary">Community</span>
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-lg text-text-muted max-w-2xl mx-auto leading-relaxed">
              Real leadership is proven by execution. Here are the specific initiatives 
              I have led, from national hackathons to international conferences.
            </p>
          </Reveal>
        </div>

        {/* EVENTS LOOP */}
        <div className="space-y-32">
          {siteConfig.leadership.map((item, index) => (
            <section key={item.id} className="relative">
              {/* Decorative line */}
              {index !== siteConfig.leadership.length - 1 && (
                <div className="absolute left-8 top-16 bottom-[-128px] w-px bg-white/5 md:hidden" />
              )}

              <Reveal>
                <div className="flex flex-col md:flex-row gap-6 mb-8 items-start">
                  
                  {/* Icon */}
                  <div className="p-4 rounded-2xl bg-white/5 text-primary shrink-0 relative z-10 bg-background">
                    {item.icon}
                  </div>

                  {/* Content */}
                  <div className="max-w-2xl w-full">
                    <div className="flex items-center gap-3 mb-2 text-sm text-text-muted font-mono">
                      <span className="flex items-center gap-1">
                        <Calendar size={14} /> {item.year}
                      </span>
                      <span>•</span>
                      <span className="text-primary">{item.role}</span>
                    </div>
                    
                    <h2 className="text-3xl font-bold mb-4">{item.event}</h2>
                    <p className="text-text-muted leading-relaxed text-lg mb-6">
                      {item.description}
                    </p>

                    {/* LINKS SECTION (UPDATED) */}
                    <div className="flex flex-wrap gap-4">
                      {item.links && item.links.map((link, i) => (
                        <a 
                          key={i}
                          href={link.url}
                          target="_blank"
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-sm font-medium text-white transition-colors border border-white/5 hover:border-primary/30"
                        >
                          <ExternalLink size={14} />
                          {link.label}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>

              {/* GALLERY */}
              <Reveal delay={0.2}>
                <div className={`
                  grid gap-4 mt-8
                  ${item.images.length === 2 ? "grid-cols-1 md:grid-cols-2" : "grid-cols-1 md:grid-cols-3"}
                `}>
                  {item.images.map((img, imgIndex) => (
                    <div 
                      key={imgIndex} 
                      className="group relative h-48 rounded-xl bg-white/5 border border-white/10 overflow-hidden"
                    >
                      <img 
                        src={img.src} 
                        alt={img.caption}
                        className="object-cover w-full h-full opacity-80 group-hover:opacity-100 transition-all duration-500 group-hover:scale-105"
                        onError={(e) => {
                          e.currentTarget.style.display = "none"; 
                          e.currentTarget.nextElementSibling?.classList.remove("hidden");
                        }}
                      />
                      <div className="hidden absolute inset-0 flex flex-col items-center justify-center text-gray-500 bg-surface p-2 text-center">
                        <ImageOff className="mb-2 opacity-50" />
                        <span className="text-[10px] font-mono break-all">{img.src}</span>
                      </div>
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                        <p className="text-white text-xs font-medium translate-y-2 group-hover:translate-y-0 transition-transform">
                          {img.caption}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </Reveal>

            </section>
          ))}
        </div>

      </main>
      <Footer />
    </div>
  );
}