import { useRef, useState, MouseEvent } from 'react';
import { motion } from 'motion/react';
import { Github, ExternalLink, ShieldAlert, Briefcase, Calendar } from 'lucide-react';
import { projectsData } from '../data';

// Custom 3D Tilt Component
function TiltCard({ project }: { project: typeof projectsData[0] }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    // Mouse coordinates relative to card
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    // Calculate rotation (-10deg to 10deg)
    const rY = ((mouseX / width) - 0.5) * 12;
    const rX = (0.5 - (mouseY / height)) * 12;

    setRotateX(rX);
    setRotateY(rY);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: 'preserve-3d',
        perspective: '1000px',
      }}
      className="w-full"
    >
      <motion.div
        animate={{
          rotateX: rotateX,
          rotateY: rotateY,
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        className="relative p-6 sm:p-8 rounded-3xl bg-white/[0.03] border border-white/[0.05] hover:border-fuchsia-500/40 hover:bg-white/[0.05] transition-all duration-300 shadow-xl hover:shadow-[0_0_35px_rgba(236,72,153,0.2)] active:scale-[0.98] active:shadow-[0_0_45px_rgba(236,72,153,0.3)] flex flex-col justify-between h-[360px] sm:h-[400px] overflow-hidden group cursor-pointer"
      >
        {/* Glow backdrop following mouse can be simulated, or simple glowing spot */}
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-violet-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-violet-500/20 transition-all duration-500" />
        
        {/* Project Header Tag */}
        <div style={{ transform: 'translateZ(30px)' }} className="flex justify-between items-center mb-6">
          <span className="inline-flex text-[10px] font-bold tracking-widest text-fuchsia-400 uppercase bg-fuchsia-400/10 border border-fuchsia-400/20 px-3 py-1 rounded-full">
            {project.tag}
          </span>
          <span className="inline-flex items-center gap-1.5 text-xs text-emerald-400 font-medium bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-0.5 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            {project.status}
          </span>
        </div>

        {/* Project Metadata */}
        <div style={{ transform: 'translateZ(40px)' }} className="flex-1">
          {/* Custom Illustration depending on project */}
          <div className="mb-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-violet-500 group-hover:scale-110 transition-transform">
              {project.id === 'project-1' ? (
                <Briefcase size={18} className="text-fuchsia-400" />
              ) : (
                <ShieldAlert size={18} className="text-violet-400" />
              )}
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-50 group-hover:text-fuchsia-400 transition-colors">
              {project.title}
            </h3>
          </div>

          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-sans line-clamp-4 sm:line-clamp-5">
            {project.description}
          </p>
        </div>

        {/* Footer: Tech stack and Links */}
        <div style={{ transform: 'translateZ(30px)' }} className="mt-6 pt-6 border-t border-white/[0.05]">
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.technologies.map((tech, idx) => (
              <span
                key={idx}
                className="text-[10px] font-mono text-slate-400 bg-slate-900 border border-slate-800 px-2 py-0.5 rounded"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex justify-between items-center">
            {/* Project code/live buttons (beautiful fallbacks) */}
            <div className="flex gap-3">
              <a
                href="https://github.com/asmitha3181-ui"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-slate-100 transition-colors"
              >
                <Github size={14} />
                <span>Source</span>
              </a>
              <span className="text-slate-700">|</span>
              <span className="flex items-center gap-1.5 text-xs text-slate-500 cursor-not-allowed">
                <ExternalLink size={14} />
                <span>Live View</span>
              </span>
            </div>

            {/* Glowing icon feedback */}
            <div className="w-8 h-8 rounded-full bg-slate-900/60 border border-slate-800 flex items-center justify-center text-slate-400 group-hover:text-fuchsia-400 group-hover:border-fuchsia-500/30 group-hover:scale-105 transition-all">
              <ExternalLink size={14} />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function Projects() {
  return (
    <section 
      id="projects" 
      className="relative py-24 bg-slate-900/10 border-y border-white/[0.04]"
    >
      <div className="absolute top-[20%] left-[10%] w-[400px] h-[400px] rounded-full bg-violet-600/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-10">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            className="text-xs font-bold tracking-[0.2em] text-amber-400 uppercase mb-2"
          >
            My Works
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ delay: 0.1 }}
            className="font-sans text-3xl sm:text-4xl font-bold text-slate-50 tracking-tight"
          >
            Featured Projects
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 60 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="h-[3px] bg-gradient-to-r from-amber-400 via-fuchsia-500 to-violet-600 mx-auto mt-4 rounded-full"
          />
        </div>

        {/* Project grid containing tilt cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projectsData.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <TiltCard project={project} />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
