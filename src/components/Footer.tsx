import { motion } from 'motion/react';
import { ArrowUp, Heart } from 'lucide-react';
import { personalDetails } from '../data';

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="relative bg-[#120204] border-t border-white/[0.04] py-12 overflow-hidden">
      {/* Decorative ambient spot */}
      <div className="absolute bottom-0 left-[50%] -translate-x-[50%] w-[300px] h-[150px] bg-fuchsia-600/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-10 flex flex-col sm:flex-row items-center justify-between gap-6 relative z-10">
        
        {/* Left copyright and design credit */}
        <div className="flex flex-col items-center sm:items-start gap-1 text-center sm:text-left">
          <p className="text-xs sm:text-sm font-semibold tracking-wide text-slate-300">
            © {new Date().getFullYear()} Asmitha V. All Rights Reserved.
          </p>
          <p className="text-[10px] font-mono text-slate-500 flex items-center gap-1">
            Handcrafted with <Heart size={10} className="text-fuchsia-500 fill-fuchsia-500 animate-pulse" /> using React, Tailwind & Motion
          </p>
        </div>

        {/* Right back to top widget */}
        <motion.button
          onClick={handleScrollToTop}
          whileHover={{ y: -4 }}
          className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-fuchsia-400 hover:border-fuchsia-500/30 shadow-lg cursor-pointer transition-colors"
          aria-label="Back to top"
        >
          <ArrowUp size={16} />
        </motion.button>

      </div>
    </footer>
  );
}
