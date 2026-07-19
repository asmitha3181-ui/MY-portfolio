import { motion } from 'motion/react';
import { Award, Trophy, Compass, ArrowUpRight, Flame, BookOpen, Star } from 'lucide-react';
import { certificationsData, achievementsData } from '../data';

export default function Certifications() {
  return (
    <section 
      id="certifications" 
      className="relative py-24 bg-[#120204]"
    >
      <div className="absolute top-[20%] right-[10%] w-[350px] h-[350px] rounded-full bg-violet-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[10%] w-[350px] h-[350px] rounded-full bg-fuchsia-400/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-10">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            className="text-xs font-bold tracking-[0.2em] text-amber-400 uppercase mb-2"
          >
            Milestones
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ delay: 0.1 }}
            className="font-sans text-3xl sm:text-4xl font-bold text-slate-50 tracking-tight"
          >
            Credentials & Achievements
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 60 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="h-[3px] bg-gradient-to-r from-amber-400 via-fuchsia-500 to-violet-600 mx-auto mt-4 rounded-full"
          />
        </div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Certifications (6/12 cols) */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <h3 className="text-lg font-bold text-slate-200 tracking-tight mb-2 flex items-center gap-2">
              <Award className="text-amber-400" size={20} />
              Industry Certifications
            </h3>
            
            <div className="flex flex-col gap-4">
              {certificationsData.map((cert, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -25 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.04] hover:border-fuchsia-500/40 hover:bg-white/[0.04] transition-all duration-300 hover:shadow-[0_0_25px_rgba(236,72,153,0.15)] active:scale-[0.99] active:shadow-[0_0_35px_rgba(236,72,153,0.25)] flex items-start gap-4 group cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform shrink-0">
                    <Award size={18} />
                  </div>
                  
                  <div className="flex-1">
                    <h4 className="text-sm sm:text-base font-semibold text-slate-100 group-hover:text-amber-300 transition-colors">
                      {cert.name}
                    </h4>
                    <div className="flex items-center justify-between text-xs font-mono text-slate-400 mt-1">
                      <span>{cert.issuer}</span>
                      <span className="text-fuchsia-400">{cert.year}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Achievements & Symposiums (6/12 cols) */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <h3 className="text-lg font-bold text-slate-200 tracking-tight mb-2 flex items-center gap-2">
              <Trophy className="text-amber-400" size={20} />
              Symposium Honors
            </h3>
            
            <div className="flex flex-col gap-6">
              {achievementsData.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 25 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.04] hover:border-fuchsia-400/40 hover:bg-white/[0.04] transition-all duration-300 hover:shadow-[0_0_25px_rgba(236,72,153,0.15)] active:scale-[0.99] active:shadow-[0_0_35px_rgba(236,72,153,0.25)] relative overflow-hidden group cursor-pointer"
                >
                  {/* Glowing background hint */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-fuchsia-400/5 rounded-full blur-2xl group-hover:bg-fuchsia-400/10 transition-colors pointer-events-none" />

                  {/* Icon + Title block */}
                  <div className="flex items-center gap-3.5 mb-5">
                    <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform">
                      <Trophy size={18} />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold tracking-wider text-amber-400 uppercase">
                        {item.title}
                      </h4>
                      <h5 className="text-base font-bold text-slate-100">
                        {item.event}
                      </h5>
                    </div>
                  </div>

                  {/* Details mapping */}
                  <div className="flex flex-col gap-3">
                    {item.details.map((detail, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
                        <Star size={12} className="text-fuchsia-400 shrink-0 mt-1" />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
