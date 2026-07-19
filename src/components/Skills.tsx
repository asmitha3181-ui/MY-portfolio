import { motion } from 'motion/react';
import { Check, Flame, MessageSquare, Compass, ShieldAlert, Cpu, Heart, CheckCircle2 } from 'lucide-react';
import { skillCategories, softSkills, languagesData, hobbiesData } from '../data';

export default function Skills() {
  return (
    <section 
      id="skills" 
      className="relative py-24 bg-[#120204]"
    >
      <div className="absolute bottom-[10%] left-[5%] w-[300px] h-[300px] rounded-full bg-violet-500/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-10">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            className="text-xs font-bold tracking-[0.2em] text-amber-400 uppercase mb-2"
          >
            Capabilities
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ delay: 0.1 }}
            className="font-sans text-3xl sm:text-4xl font-bold text-slate-50 tracking-tight"
          >
            Skills & Proficiencies
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 60 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="h-[3px] bg-gradient-to-r from-amber-400 via-fuchsia-500 to-violet-600 mx-auto mt-4 rounded-full"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Technical Skills (8/12 cols) */}
          <div className="lg:col-span-8 flex flex-col gap-6">
            <h3 className="text-lg font-bold text-slate-200 tracking-tight mb-2 border-l-2 border-amber-400 pl-3">
              Technical Skillsets
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skillCategories.map((category, catIdx) => (
                <motion.div
                  key={catIdx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.5, delay: catIdx * 0.1 }}
                  className={`p-6 rounded-2xl bg-white/[0.02] border border-white/[0.04] hover:border-fuchsia-500/40 hover:bg-white/[0.04] transition-all duration-300 hover:shadow-[0_0_25px_rgba(236,72,153,0.15)] active:scale-[0.99] active:shadow-[0_0_35px_rgba(236,72,153,0.25)] ${
                    catIdx === 0 ? 'md:col-span-2' : ''
                  }`}
                >
                  <h4 className="text-sm font-bold text-fuchsia-400 tracking-wider uppercase mb-5">
                    {category.title}
                  </h4>
                  
                  <div className="flex flex-col gap-5">
                    {category.skills.map((skill, sIdx) => (
                      <div key={sIdx} className="flex flex-col gap-2">
                        <div className="flex justify-between items-center text-xs font-mono">
                          <span className="text-slate-300 font-medium">{skill.name}</span>
                          <span className="text-slate-400 font-semibold">
                            {/* Avoid labeling as expert, use Proficient / Intermediate labels along with levels */}
                            {skill.level >= 85 ? 'Proficient' : 'Intermediate'} ({skill.level}%)
                          </span>
                        </div>
                        
                        {/* Animated Progress Bar */}
                        <div className="w-full h-2 bg-slate-900 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: sIdx * 0.05, ease: 'easeOut' }}
                            className="h-full bg-gradient-to-r from-amber-400 to-fuchsia-500 rounded-full"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Soft Skills, Languages, Hobbies (4/12 cols) */}
          <div className="lg:col-span-4 flex flex-col gap-8">
            
            {/* Soft Skills Card */}
            <div>
              <h3 className="text-lg font-bold text-slate-200 tracking-tight mb-4 border-l-2 border-fuchsia-400 pl-3">
                Soft Skills
              </h3>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5 }}
                className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.04] hover:border-violet-500/30 transition-all duration-300 hover:shadow-[0_0_25px_rgba(139,92,246,0.15)] active:scale-[0.99] active:shadow-[0_0_35px_rgba(139,92,246,0.25)] flex flex-wrap gap-2.5"
              >
                {softSkills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1.5 text-xs text-slate-300 bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 hover:bg-slate-800/80 px-3 py-1.5 rounded-lg transition-all duration-300 cursor-default"
                  >
                    <CheckCircle2 size={13} className="text-violet-500" />
                    {skill}
                  </span>
                ))}
              </motion.div>
            </div>

            {/* Languages Card */}
            <div>
              <h3 className="text-lg font-bold text-slate-200 tracking-tight mb-4 border-l-2 border-violet-500 pl-3">
                Languages
              </h3>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.04] hover:border-violet-500/30 transition-all duration-300 hover:shadow-[0_0_25px_rgba(139,92,246,0.15)] active:scale-[0.99] active:shadow-[0_0_35px_rgba(139,92,246,0.25)] flex flex-col gap-4"
              >
                {languagesData.map((lang, idx) => (
                  <div key={idx} className="flex justify-between items-center">
                    <span className="text-sm font-sans font-medium text-slate-200">{lang.name}</span>
                    <span className="text-xs font-mono text-fuchsia-400 bg-fuchsia-500/10 border border-fuchsia-500/20 px-2.5 py-0.5 rounded-full">
                      {lang.proficiency}
                    </span>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Hobbies Card */}
            <div>
              <h3 className="text-lg font-bold text-slate-200 tracking-tight mb-4 border-l-2 border-fuchsia-400 pl-3">
                Hobbies & Interests
              </h3>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.04] hover:border-violet-500/30 transition-all duration-300 hover:shadow-[0_0_25px_rgba(139,92,246,0.15)] active:scale-[0.99] active:shadow-[0_0_35px_rgba(139,92,246,0.25)] flex flex-col gap-3"
              >
                {hobbiesData.map((hobby, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-violet-500 shrink-0 mt-2" />
                    <span className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">{hobby}</span>
                  </div>
                ))}
              </motion.div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
