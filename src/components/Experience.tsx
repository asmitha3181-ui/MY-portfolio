import { motion } from 'motion/react';
import { Briefcase, Calendar, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { internshipData } from '../data';

export default function Experience() {
  // Map technologies to subtle colors
  const getTechColor = (tech: string) => {
    switch (tech) {
      case 'React': return 'text-violet-400 bg-violet-500/10 border-violet-500/20';
      case 'JavaScript': return 'text-yellow-400 bg-yellow-500/10 border-yellow-500/20';
      case 'HTML': return 'text-orange-400 bg-orange-500/10 border-orange-500/20';
      case 'CSS': return 'text-fuchsia-400 bg-fuchsia-500/10 border-fuchsia-500/20';
      case 'Bootstrap': return 'text-purple-400 bg-purple-500/10 border-purple-500/20';
      default: return 'text-slate-300 bg-slate-800 border-slate-700/50';
    }
  };

  return (
    <section 
      id="internship" 
      className="relative py-24 bg-slate-900/10 border-y border-white/[0.04]"
    >
      <div className="absolute top-[20%] right-[15%] w-[350px] h-[350px] rounded-full bg-fuchsia-500/5 blur-[120px] pointer-events-none" />

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
            Industry Internship
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 60 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="h-[3px] bg-gradient-to-r from-amber-400 via-fuchsia-500 to-violet-600 mx-auto mt-4 rounded-full"
          />
        </div>

        {/* Premium Experience Card */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="group relative rounded-3xl p-8 sm:p-10 bg-white/[0.03] border border-white/[0.05] hover:border-fuchsia-500/40 hover:bg-white/[0.05] transition-all duration-500 shadow-2xl hover:shadow-[0_0_40px_rgba(236,72,153,0.25)] active:scale-[0.995] active:shadow-[0_0_50px_rgba(236,72,153,0.35)] overflow-hidden"
          >
            {/* Glowing accent border inside card */}
            <div className="absolute top-0 left-0 w-[4px] h-full bg-gradient-to-b from-violet-600 via-fuchsia-400 to-transparent" />
            
            {/* Glow spot */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-violet-500/5 rounded-full blur-3xl pointer-events-none group-hover:bg-violet-500/10 transition-colors" />

            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
              
              {/* Left Column: Role & Company info */}
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-fuchsia-500/10 border border-fuchsia-500/20 flex items-center justify-center text-fuchsia-400 group-hover:scale-110 transition-transform duration-300 shadow-md">
                    <Briefcase size={22} />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-50 group-hover:text-amber-400 transition-colors">
                      {internshipData.role}
                    </h3>
                    <p className="text-sm font-semibold tracking-wide text-slate-300">
                      {internshipData.company}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-mono text-slate-400 mb-6">
                  <span className="flex items-center gap-1.5 bg-slate-900 border border-slate-800 px-3 py-1 rounded-lg">
                    <Calendar size={12} className="text-violet-500" />
                    {internshipData.period}
                  </span>
                  <span className="text-slate-600 hidden sm:inline">|</span>
                  <span className="bg-violet-500/10 border border-violet-500/20 text-fuchsia-400 px-3 py-1 rounded-lg font-semibold uppercase tracking-wider">
                    Full-time intern
                  </span>
                </div>

                {/* Description */}
                <p className="text-base text-slate-300 leading-relaxed font-sans mb-8">
                  {internshipData.description}
                </p>

                {/* Bullets of achievements in Internship */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  <div className="flex items-start gap-2 text-sm text-slate-400">
                    <CheckCircle2 size={15} className="text-fuchsia-400 shrink-0 mt-0.5" />
                    <span>Designed secure registration interfaces</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm text-slate-400">
                    <CheckCircle2 size={15} className="text-fuchsia-400 shrink-0 mt-0.5" />
                    <span>Engineered responsive landing pages</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm text-slate-400">
                    <CheckCircle2 size={15} className="text-fuchsia-400 shrink-0 mt-0.5" />
                    <span>Developed component structures in React</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm text-slate-400">
                    <CheckCircle2 size={15} className="text-fuchsia-400 shrink-0 mt-0.5" />
                    <span>Validated client-side authentication states</span>
                  </div>
                </div>

                {/* Tech Chips */}
                <div>
                  <h4 className="text-xs font-bold tracking-widest text-slate-400 uppercase mb-3">Technologies Mastered</h4>
                  <div className="flex flex-wrap gap-2.5">
                    {internshipData.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className={`text-xs font-mono px-3.5 py-1.5 rounded-lg border font-medium ${getTechColor(skill)}`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
