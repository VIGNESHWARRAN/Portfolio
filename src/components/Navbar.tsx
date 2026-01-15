import Link from "next/link";
import { siteConfig } from "@/data/config";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function Navbar() {
  // Note: In Next.js pages dir, use useRouter, but this works for standard links
  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 right-0 z-50 glass"
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold tracking-tight hover:text-primary transition-colors">
          Vigneshwarran<span className="text-primary">.</span>
        </Link>

        <div className="hidden md:flex gap-8 text-sm font-medium text-text-muted">
          {siteConfig.navItems.map((item) => (
            <Link 
              key={item.name} 
              href={item.href}
              className="hover:text-white transition-colors relative group"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-primary transition-all group-hover:w-full" />
            </Link>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}