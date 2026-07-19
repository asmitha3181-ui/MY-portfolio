import { motion } from 'motion/react';
import { GraduationCap, Award, Calendar, BookOpen } from 'lucide-react';
import { educationData } from '../data';

export default function Education() {
  return (
    <section 
      id="education" 
      className="relative py-24 bg-[#120204]"
    >
      <div className="absolute top-[30%] left-[5%] w-[300px] h-[300px] rounded-full bg-violet-500/5 blur-[100px] pointer-events-none animate-pulse" />

      <div className="max-w-7xl mx-auto px-5 sm:px-10">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            className="text-xs font-bold tracking-[0.2em] text-amber-400 uppercase mb-2"
          >
            Academic Foundation
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ delay: 0.1 }}
            className="font-sans text-3xl sm:text-4xl font-bold text-slate-50 tracking-tight"
          >
            Education Timeline
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 60 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="h-[3px] bg-gradient-to-r from-amber-400 via-fuchsia-500 to-violet-600 mx-auto mt-4 rounded-full"
          />
        </div>

        {/* Timeline container */}
        <div className="relative max-w-3xl mx-auto pl-6 sm:pl-8">
          
          {/* Main vertical line */}
          <div className="absolute top-0 bottom-0 left-[15px] sm:left-[19px] w-[2px] bg-gradient-to-b from-violet-600 via-fuchsia-400 to-slate-800" />

          {/* Timeline Nodes */}
          <div className="flex flex-col gap-12 relative">
            {educationData.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="relative flex items-start gap-6 sm:gap-8 group"
              >
                {/* Timeline node icon */}
                <div className="absolute -left-[6px] sm:-left-[8px] z-10 flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-slate-950 border-2 border-amber-500 group-hover:border-fuchsia-500 group-hover:scale-110 transition-all duration-300 shadow-lg shadow-amber-500/15">
                  {item.type === 'college' ? (
                    <GraduationCap size={16} className="text-amber-400 group-hover:text-fuchsia-300" />
                  ) : (
                    <BookOpen size={14} className="text-fuchsia-400 group-hover:text-fuchsia-300" />
                  )}
                </div>

                {/* Card block */}
                <div className="w-full pl-6 sm:pl-8">
                  <div className="p-6 sm:p-8 rounded-2xl bg-white/[0.03] border border-white/[0.05] hover:border-fuchsia-500/40 hover:bg-white/[0.05] transition-all duration-300 relative hover:shadow-[0_0_30px_rgba(236,72,153,0.2)] active:scale-[0.99] active:shadow-[0_0_40px_rgba(236,72,153,0.3)] group-hover:shadow-xl">
                    
                    {/* Glow backdrop on active college node */}
                    {item.type === 'college' && (
                      <div className="absolute top-0 right-0 w-24 h-24 bg-fuchsia-500/5 rounded-full blur-2xl pointer-events-none" />
                    )}

                    {/* Metadata header */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                      {/* Specialization or Class tag */}
                      <span className="inline-flex text-[10px] font-bold tracking-wider text-fuchsia-400 uppercase bg-fuchsia-500/10 border border-fuchsia-500/20 px-2.5 py-1 rounded-full w-fit">
                        {item.type === 'college' ? 'Degree Course' : 'Secondary Education'}
                      </span>
                      
                      {/* Period */}
                      <span className="flex items-center gap-1.5 text-xs font-mono text-slate-400">
                        <Calendar size={12} className="text-violet-500" />
                        {item.period}
                      </span>
                    </div>

                    {/* Institution Name */}
                    <h3 className="text-lg sm:text-xl font-bold text-slate-50 mb-1 group-hover:text-fuchsia-400 transition-colors">
                      {item.institution}
                    </h3>
                    
                    {/* Degree */}
                    <p className="text-sm font-medium text-slate-300 mb-2">
                      {item.degree}
                    </p>

                    {/* Details: Specialization or Score */}
                    {item.specialization && (
                      <div className="mt-3 p-3 rounded-lg bg-slate-900/60 border border-slate-800/60 text-xs text-slate-400 font-sans leading-relaxed">
                        <span className="font-semibold text-slate-300">Specialization:</span> {item.specialization}
                      </div>
                    )}

                    {item.score && (
                      <div className="mt-3 inline-flex items-center gap-1.5 text-xs text-slate-300 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-full">
                        <Award size={13} className="text-emerald-400" />
                        <span className="font-semibold text-emerald-400">Score:</span> {item.score}
                      </div>
                    )}

                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
