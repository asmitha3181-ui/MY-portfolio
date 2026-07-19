import { motion } from 'motion/react';
import { personalDetails, aboutContent } from '../data';
import { Award, Code2, Users, FileSignature, GraduationCap, ShieldCheck, Cpu, Layers } from 'lucide-react';

export default function About() {
  // Map icons to stats just to make them more visual
  const getIcon = (label: string) => {
    switch (label) {
      case 'Completed Projects': return <Code2 className="text-violet-400" size={20} />;
      case 'Certifications': return <Award className="text-fuchsia-400" size={20} />;
      case 'Symposiums': return <Users className="text-violet-400" size={20} />;
      case 'Languages Spoken': return <FileSignature className="text-fuchsia-400" size={20} />;
      default: return <GraduationCap className="text-violet-400" size={20} />;
    }
  };

  return (
    <section 
      id="about" 
      className="relative py-24 bg-slate-900/10 border-y border-white/[0.04]"
    >
      <div className="absolute top-0 right-10 w-96 h-96 bg-violet-600/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-fuchsia-400/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-10">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            className="text-xs font-bold tracking-[0.2em] text-amber-400 uppercase mb-2"
          >
            Philosophy
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ delay: 0.1 }}
            className="font-sans text-3xl sm:text-4xl font-bold text-slate-50 tracking-tight"
          >
            About My Journey
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 60 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="h-[3px] bg-gradient-to-r from-amber-400 via-fuchsia-500 to-violet-600 mx-auto mt-4 rounded-full"
          />
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Side: Cybersecurity & IoT Badge Frame */}
          <div className="lg:col-span-5 flex justify-center order-2 lg:order-1">
            <motion.div 
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
              className="relative group cursor-pointer"
            >
              {/* Backing glass glow layer */}
              <div className="absolute inset-4 bg-amber-500/10 rounded-3xl blur-2xl group-hover:bg-amber-500/20 transition-all duration-500" />
              
              {/* Animated Outer Orbits */}
              <div className="absolute inset-[-10px] rounded-full border border-fuchsia-500/10 animate-spin duration-[20000ms]" />
              <div className="absolute inset-[-20px] rounded-full border border-dashed border-amber-400/5 animate-spin duration-[30000ms] reverse" />

              {/* Badge Frame */}
              <div className="relative w-56 h-56 sm:w-64 sm:h-64 rounded-3xl p-[1.5px] bg-gradient-to-br from-amber-400/30 via-fuchsia-500/20 to-violet-600/30 group-hover:from-amber-400 group-hover:via-fuchsia-500 group-hover:to-violet-600 transition-all duration-500 shadow-2xl overflow-hidden">
                <div className="w-full h-full rounded-3xl bg-slate-950/90 p-5 flex flex-col items-center justify-center text-center relative border border-white/[0.04]">
                  
                  {/* Subtle Grid Matrix Background */}
                  <div className="absolute inset-0 opacity-[0.08] bg-[linear-gradient(rgba(244,196,48,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(244,196,48,0.15)_1px,transparent_1px)] bg-[size:16px_16px] rounded-3xl" />

                  {/* Shield Check Icon / Cyber Emblem */}
                  <div className="relative mb-3.5 flex items-center justify-center">
                    <div className="absolute inset-0 w-16 h-16 rounded-full bg-amber-400/10 blur-md animate-pulse" />
                    <div className="relative p-3.5 rounded-2xl bg-slate-900 border border-amber-400/20 text-amber-400 group-hover:border-amber-400/40 group-hover:text-amber-300 transition-colors">
                      <ShieldCheck size={32} className="animate-pulse" />
                    </div>
                  </div>

                  {/* Monogram / Academic Specialization Title */}
                  <h3 className="font-sans font-extrabold text-2xl tracking-wide text-slate-100 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-amber-200 group-hover:via-fuchsia-300 group-hover:to-violet-400 transition-all duration-300">
                    AV
                  </h3>
                  
                  <div className="flex items-center gap-1.5 mt-1.5 px-2.5 py-0.5 rounded-full bg-slate-900 border border-slate-800/80">
                    <Cpu size={10} className="text-fuchsia-400 animate-spin duration-5000" />
                    <span className="text-[9px] font-mono font-medium text-slate-400 uppercase tracking-widest">
                      IoT SPECIALIST
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5 mt-1 px-2.5 py-0.5 rounded-full bg-slate-900 border border-slate-800/80">
                    <Layers size={10} className="text-violet-400" />
                    <span className="text-[9px] font-mono font-medium text-slate-400 uppercase tracking-widest">
                      BLOCKCHAIN TECH
                    </span>
                  </div>

                  {/* Tiny cyber text badge */}
                  <p className="text-[8px] font-mono text-slate-500 mt-4 tracking-wider uppercase select-none">
                    SNS COLLEGE OF ENGINEERING
                  </p>

                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Side: Bio text & Bento stats */}
          <div className="lg:col-span-7 flex flex-col items-start text-left order-1 lg:order-2">
            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5 }}
              className="text-base sm:text-lg text-slate-300 font-sans leading-relaxed mb-8"
            >
              {aboutContent.bio}
            </motion.p>

            {/* Bento Statistics Grid */}
            <div className="grid grid-cols-2 gap-4 w-full">
              {aboutContent.stats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  className="p-5 rounded-xl bg-white/[0.03] border border-white/[0.05] hover:border-fuchsia-500/40 hover:bg-white/[0.05] transition-all duration-300 hover:shadow-[0_0_25px_rgba(236,72,153,0.2)] active:scale-[0.98] active:shadow-[0_0_35px_rgba(236,72,153,0.3)] group cursor-pointer"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-slate-400 group-hover:scale-110 transition-transform duration-300">
                      {getIcon(stat.label)}
                    </span>
                    <span className="text-2xl sm:text-3xl font-sans font-bold text-slate-100 group-hover:text-amber-400 transition-colors duration-300">
                      {stat.value}
                    </span>
                  </div>
                  <h3 className="text-xs sm:text-sm font-medium text-slate-400 group-hover:text-slate-200 transition-colors">
                    {stat.label}
                  </h3>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
