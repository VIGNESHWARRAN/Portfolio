import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

type Props = {
  title: string;
  description: string;
  tech: string[] | string; // <--- Accepts both now
  link: string;
};

export default function ProjectCard({ title, description, tech, link }: Props) {
  // 1. If it's an array, use it.
  // 2. If it's a string, split it by the " · " dot you used in your old files.
  const tags = Array.isArray(tech) ? tech : tech.split(" · ");

  return (
    <motion.a
      href={link}
      target="_blank"
      whileHover={{ y: -5 }}
      className="block group relative p-6 rounded-2xl bg-surface border border-white/5 hover:border-primary/50 transition-colors overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      
      <div className="relative z-10">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-semibold text-white group-hover:text-primary transition-colors">
            {title}
          </h3>
          <ExternalLink size={18} className="text-text-muted group-hover:text-white" />
        </div>

        <p className="text-text-muted text-sm leading-relaxed mb-6">
          {description}
        </p>

        <div className="flex flex-wrap gap-2">
          {tags.map((t, i) => (
            <span 
              key={i} 
              className="text-xs font-medium px-2 py-1 rounded-md bg-white/5 text-primary border border-white/5"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.a>
  );
}