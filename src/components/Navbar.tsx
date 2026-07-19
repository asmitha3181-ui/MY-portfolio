import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, FileText, Download, Briefcase, ChevronRight } from 'lucide-react';
import { personalDetails } from '../data';

interface NavbarProps {
  onOpenResume: () => void;
}

export default function Navbar({ onOpenResume }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrollProgress, setScrollProgress] = useState(0);

  // Monitor scroll
  useEffect(() => {
    const handleScroll = () => {
      // Background state
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Scroll progress
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress(window.scrollY / totalScroll);
      }

      // Scroll Spy
      const sections = ['home', 'about', 'education', 'internship', 'skills', 'projects', 'certifications', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'education', label: 'Education' },
    { id: 'internship', label: 'Internship' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'certifications', label: 'Credentials' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleScrollTo = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of sticky navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      {/* Top Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-[3px] bg-slate-900 z-50">
        <motion.div 
          className="h-full bg-gradient-to-r from-amber-400 via-fuchsia-400 to-violet-600 origin-left"
          style={{ scaleX: scrollProgress }}
        />
      </div>

      <header 
        id="navbar"
        className={`fixed top-[3px] left-0 w-full z-40 transition-all duration-300 ${
          scrolled 
            ? 'bg-slate-950/80 backdrop-blur-md border-b border-slate-800/50 shadow-lg shadow-black/20 py-3' 
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-10 flex items-center justify-between">
          {/* Logo */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 cursor-pointer group"
            onClick={() => handleScrollTo('home')}
          >
            <div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-amber-400 to-fuchsia-500 flex items-center justify-center font-bold text-slate-50 shadow-md shadow-fuchsia-500/10 group-hover:scale-105 transition-transform duration-300">
              AV
            </div>
            <span className="font-sans font-semibold tracking-wide text-slate-50 group-hover:text-amber-400 transition-colors duration-300">
              Asmitha<span className="text-fuchsia-500">.V</span>
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-900/40 border border-slate-800/30 rounded-full px-2 py-1 backdrop-blur-sm">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleScrollTo(item.id)}
                className={`relative px-4 py-1.5 rounded-full text-xs font-medium tracking-wide transition-colors duration-300 cursor-pointer ${
                  activeSection === item.id 
                    ? 'text-slate-50 font-semibold' 
                    : 'text-slate-400 hover:text-slate-100'
                }`}
              >
                {activeSection === item.id && (
                  <motion.span
                    layoutId="activeNavBackground"
                    className="absolute inset-0 bg-fuchsia-500/10 border border-fuchsia-500/20 rounded-full -z-10"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                {item.label}
              </button>
            ))}
          </nav>

          {/* Call To Actions */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="hidden sm:flex items-center gap-3"
          >
            <button
              onClick={onOpenResume}
              className="flex items-center gap-1.5 text-xs text-slate-300 hover:text-slate-50 transition-colors cursor-pointer bg-slate-900/60 hover:bg-slate-800/80 border border-slate-800 rounded-lg px-3 py-1.5 font-medium"
            >
              <FileText size={14} className="text-fuchsia-400" />
              View Resume
            </button>
            <button
              onClick={onOpenResume}
              className="flex items-center gap-1.5 text-xs bg-gradient-to-r from-amber-500 to-fuchsia-500 hover:from-amber-400 hover:to-fuchsia-400 text-slate-50 font-medium px-4 py-1.5 rounded-lg shadow-md shadow-fuchsia-500/15 hover:shadow-fuchsia-500/20 hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              <Download size={14} />
              Download
            </button>
          </motion.div>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden flex items-center justify-center w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-slate-50 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-30 bg-slate-950/90 backdrop-blur-md lg:hidden flex flex-col justify-center px-10"
          >
            <div className="flex flex-col gap-5 max-w-sm mx-auto w-full">
              <span className="text-xs font-bold tracking-widest text-violet-500 uppercase border-b border-slate-800/80 pb-2">Navigation</span>
              <div className="flex flex-col gap-2">
                {navItems.map((item, idx) => (
                  <motion.button
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    onClick={() => handleScrollTo(item.id)}
                    className="flex items-center justify-between py-2.5 text-left group"
                  >
                    <span className={`text-lg font-sans transition-colors duration-300 ${
                      activeSection === item.id ? 'text-fuchsia-400 font-semibold' : 'text-slate-300 group-hover:text-slate-100'
                    }`}>
                      {item.label}
                    </span>
                    <ChevronRight size={18} className="text-slate-600 group-hover:text-fuchsia-400 transition-colors group-hover:translate-x-1 duration-300" />
                  </motion.button>
                ))}
              </div>

              <div className="flex flex-col gap-3 mt-6 pt-6 border-t border-slate-800/80">
                <button
                  onClick={() => {
                    setIsOpen(false);
                    onOpenResume();
                  }}
                  className="w-full flex items-center justify-center gap-2 bg-slate-900 border border-slate-800 text-slate-100 py-3 rounded-lg font-medium text-sm hover:bg-slate-800/80"
                >
                  <FileText size={16} className="text-fuchsia-400" />
                  View Full Resume
                </button>
                <button
                  onClick={() => {
                    setIsOpen(false);
                    onOpenResume();
                  }}
                  className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-violet-600 to-fuchsia-500 text-slate-50 py-3 rounded-lg font-medium text-sm shadow-lg shadow-violet-500/10 hover:from-violet-500 hover:to-fuchsia-400 cursor-pointer"
                >
                  <Download size={16} />
                  Download Resume
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
