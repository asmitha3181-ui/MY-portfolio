import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumeViewerModal from './components/ResumeViewerModal';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [resumeOpen, setResumeOpen] = useState(false);

  // Loading indicator loop
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 300); // Small pause at 100%
          return 100;
        }
        // Accelerate near the end
        const step = prev < 50 ? 5 : prev < 85 ? 8 : 12;
        return Math.min(prev + step, 100);
      });
    }, 80);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#120204] min-h-screen font-sans selection:bg-fuchsia-500/30 selection:text-slate-50 overflow-x-hidden relative">
      
      {/* Interactive Loading Screen */}
      <AnimatePresence mode="wait">
        {loading && (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-50 bg-[#120204] flex flex-col items-center justify-center p-6"
          >
            <div className="flex flex-col items-center max-w-xs w-full">
              {/* Glowing Monogram */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-amber-400 to-fuchsia-500 flex items-center justify-center font-display font-bold text-2xl text-slate-50 shadow-2xl shadow-fuchsia-500/20 mb-8"
              >
                AV
              </motion.div>

              {/* Progress counter */}
              <span className="font-mono text-xs text-fuchsia-400 tracking-[0.2em] uppercase font-bold mb-3 select-none">
                Assembling Portfolio • {progress}%
              </span>

              {/* Progress Bar Container */}
              <div className="w-full h-[3px] bg-slate-900 border border-slate-800/40 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-amber-400 via-fuchsia-400 to-violet-600 origin-left"
                  style={{ width: `${progress}%` }}
                />
              </div>

              {/* Tagline */}
              <span className="text-[10px] font-mono text-slate-500 tracking-wider text-center mt-6 uppercase opacity-60">
                Crafting Modern Web Experiences
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Portfolio Content */}
      <div className={loading ? 'opacity-0' : 'opacity-100 transition-opacity duration-700'}>
        {/* Navigation header */}
        <Navbar onOpenResume={() => setResumeOpen(true)} />

        {/* Content Wrapper */}
        <main>
          {/* Hero segment */}
          <Hero onOpenResume={() => setResumeOpen(true)} />

          {/* Biography segment */}
          <About />

          {/* Timeline Education Segment */}
          <Education />

          {/* Industrial experience segment */}
          <Experience />

          {/* Skill sets segment */}
          <Skills />

          {/* Project catalog */}
          <Projects />

          {/* Achievements & Certifications */}
          <Certifications />

          {/* Working form segment */}
          <Contact />
        </main>

        {/* Footer */}
        <Footer />

        {/* Interactive Resume Drawer Modal */}
        <AnimatePresence>
          {resumeOpen && (
            <ResumeViewerModal 
              isOpen={resumeOpen} 
              onClose={() => setResumeOpen(false)} 
            />
          )}
        </AnimatePresence>
      </div>

    </div>
  );
}
