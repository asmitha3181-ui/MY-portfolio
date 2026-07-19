import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { FileText, Download, Github, Linkedin, MapPin, Mail, ArrowRight, Sparkles, GraduationCap, Award, Briefcase, Eye } from 'lucide-react';
import { personalDetails } from '../data';

interface HeroProps {
  onOpenResume: () => void;
}

export default function Hero({ onOpenResume }: HeroProps) {
  const [typedText, setTypedText] = useState('');
  const [wordIdx, setWordIdx] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const words = [
    'Full Stack Web Developer',
    'Frontend Developer',
    'Computer Science Student',
    'IoT & Cyber Security Enthusiast',
    'Blockchain Tech Explorer'
  ];

  const typingSpeed = 100;
  const deletingSpeed = 50;
  const wordDelay = 2000;

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const currentFullWord = words[wordIdx];

    if (isDeleting) {
      timer = setTimeout(() => {
        setTypedText(currentFullWord.substring(0, typedText.length - 1));
      }, deletingSpeed);
    } else {
      timer = setTimeout(() => {
        setTypedText(currentFullWord.substring(0, typedText.length + 1));
      }, typingSpeed);
    }

    if (!isDeleting && typedText === currentFullWord) {
      timer = setTimeout(() => setIsDeleting(true), wordDelay);
    } else if (isDeleting && typedText === '') {
      setIsDeleting(false);
      setWordIdx((prev) => (prev + 1) % words.length);
    }

    return () => clearTimeout(timer);
  }, [typedText, isDeleting, wordIdx]);

  // Interactive IoT & Blockchain Node Connection Canvas
  useEffect(() => {
    const canvas = document.getElementById('iot-blockchain-canvas') as HTMLCanvasElement;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Track mouse
    let mouse = { x: -1000, y: -1000 };

    const handleMouseMove = (e: MouseEvent) => {
      // Offset mouse coordinates based on bounding rect to keep precise alignment inside iframe
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    // Attach listener to section to track locally rather than document window (perfect for iframe)
    const section = document.getElementById('home');
    if (section) {
      section.addEventListener('mousemove', handleMouseMove);
      section.addEventListener('mouseleave', handleMouseLeave);
    }
    window.addEventListener('resize', handleResize);

    // Particles array
    const particleCount = Math.min(65, Math.floor((width * height) / 22000));
    interface Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      glow: boolean;
    }
    const particles: Particle[] = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 2 + 1,
        glow: Math.random() > 0.85,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];
        
        // Update position
        p1.x += p1.vx;
        p1.y += p1.vy;

        // Bounce boundaries
        if (p1.x < 0 || p1.x > width) p1.vx *= -1;
        if (p1.y < 0 || p1.y > height) p1.vy *= -1;

        // Draw particle node
        ctx.beginPath();
        ctx.arc(p1.x, p1.y, p1.radius, 0, Math.PI * 2);
        if (p1.glow) {
          ctx.fillStyle = 'rgba(236, 72, 153, 0.85)'; // glowing fuchsia core node
          ctx.fill();
        } else {
          ctx.fillStyle = 'rgba(139, 92, 246, 0.5)'; // clean violet node
          ctx.fill();
        }

        // Draw mesh connection lines between close particles
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            const alpha = (1 - dist / 120) * 0.12;
            ctx.strokeStyle = `rgba(139, 92, 246, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }

        // Draw active interactive security connections to cursor mouse
        const dxMouse = p1.x - mouse.x;
        const dyMouse = p1.y - mouse.y;
        const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);
        if (distMouse < 180) {
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(mouse.x, mouse.y);
          const alpha = (1 - distMouse / 180) * 0.22;
          ctx.strokeStyle = `rgba(245, 158, 11, ${alpha})`; // Glowing interactive amber lines
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (section) {
        section.removeEventListener('mousemove', handleMouseMove);
        section.removeEventListener('mouseleave', handleMouseLeave);
      }
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden bg-[#120204]"
    >
      {/* Immersive interactive background decoration (glowing mesh + radial grids) */}
      <div className="absolute inset-0 z-0">
        <canvas id="iot-blockchain-canvas" className="absolute inset-0 w-full h-full opacity-45 z-[1] pointer-events-none" />
        
        <div className="absolute top-[20%] left-[10%] w-[350px] h-[350px] rounded-full bg-violet-600/10 blur-[120px] animate-pulse duration-10000 z-0" />
        <div className="absolute bottom-[20%] right-[10%] w-[400px] h-[400px] rounded-full bg-fuchsia-500/10 blur-[130px] animate-pulse duration-[8000ms] z-0" />
        <div className="absolute top-[40%] right-[30%] w-[300px] h-[300px] rounded-full bg-amber-500/5 blur-[100px] animate-pulse duration-[12000ms] z-0" />
        
        {/* Subtle dot grid pattern */}
        <div className="absolute inset-0 opacity-[0.05] z-0" 
          style={{
            backgroundImage: `radial-gradient(#F8FAFC 1px, transparent 1px)`,
            backgroundSize: '24px 24px'
          }} 
        />
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10 w-full">
        {/* Left: Headline & Information */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          {/* Greeting Tag */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-violet-500/10 via-fuchsia-500/10 to-amber-500/10 border border-violet-500/20 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider text-fuchsia-300 mb-6 uppercase"
          >
            <Sparkles size={12} className="text-amber-400 animate-spin duration-3000" />
            Welcome to my space
          </motion.div>

          {/* Headline */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-sans text-4xl sm:text-5xl xl:text-6xl font-bold text-[#F8FAFC] tracking-tight leading-none mb-3"
          >
            Hi, I am <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-fuchsia-400 to-violet-500 hover:scale-105 transition-transform duration-500 block sm:inline">{personalDetails.name}</span>
          </motion.h1>

          {/* Typing Subtitle */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-sans text-lg sm:text-2xl font-medium text-fuchsia-400 h-9 mb-4 flex items-center"
          >
            <span>{typedText}</span>
            <span className="w-[3px] h-[1.2em] bg-violet-500 ml-1.5 animate-blink" />
          </motion.div>

          {/* Tagline */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-base sm:text-lg text-[#94A3B8] font-sans max-w-xl leading-relaxed mb-8"
          >
            {personalDetails.tagline} Specialize in designing clean backend code, secure blockchain structures, and mesmerizing web interfaces.
          </motion.p>

          {/* Quick Contact Chips */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-4 mb-8"
          >
            <div className="flex items-center gap-1.5 text-xs text-slate-300 bg-slate-800/40 border border-slate-700/30 px-3.5 py-1.5 rounded-full font-mono">
              <MapPin size={13} className="text-violet-500" />
              {personalDetails.location}
            </div>
            <a 
              href={`mailto:${personalDetails.email}`}
              className="flex items-center gap-1.5 text-xs text-slate-300 bg-slate-800/40 border border-slate-700/30 hover:border-violet-500/50 hover:bg-slate-800/80 px-3.5 py-1.5 rounded-full transition-colors font-mono"
            >
              <Mail size={13} className="text-fuchsia-400" />
              {personalDetails.email}
            </a>
          </motion.div>

          {/* Main Action Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto"
          >
            <button
              onClick={onOpenResume}
              className="group flex items-center justify-center gap-2 text-sm bg-gradient-to-r from-violet-600 to-fuchsia-500 hover:from-violet-500 hover:to-fuchsia-400 text-slate-50 font-semibold px-6 py-3.5 rounded-xl shadow-lg shadow-violet-500/10 hover:shadow-[0_0_30px_rgba(139,92,246,0.4)] active:scale-[0.97] active:shadow-[0_0_40px_rgba(139,92,246,0.6)] transition-all duration-300 cursor-pointer"
            >
              <FileText size={16} />
              View Resume
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={onOpenResume}
              className="flex items-center justify-center gap-2 text-sm text-slate-300 hover:text-slate-50 bg-slate-900 border border-slate-800 hover:border-violet-500/40 hover:shadow-[0_0_25px_rgba(139,92,246,0.15)] active:scale-[0.97] px-6 py-3.5 rounded-xl font-medium transition-all duration-300 cursor-pointer"
            >
              <Download size={16} />
              Download Resume
            </button>

            {/* Social Buttons */}
            <div className="flex items-center justify-center gap-3 border-t sm:border-t-0 sm:border-l border-slate-800 pt-4 sm:pt-0 sm:pl-4 mt-2 sm:mt-0">
              <a 
                href={personalDetails.linkedin}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-violet-500 hover:border-violet-500/50 hover:scale-110 transition-all duration-300"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={18} />
              </a>
              <a 
                href={personalDetails.github}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-slate-100 hover:border-slate-600 hover:scale-110 transition-all duration-300"
                aria-label="GitHub Profile"
              >
                <Github size={18} />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Right: Floating Interactive Resume Mockup Card */}
        <div className="lg:col-span-5 flex justify-center items-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Pulsing glow background */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-amber-500/10 via-fuchsia-500/15 to-violet-600/10 blur-[40px] z-0 animate-pulse duration-[6000ms]" />

            {/* Glowing active scanning bar */}
            <motion.div 
              animate={{ y: [10, 380, 10] }}
              transition={{ repeat: Infinity, duration: 4.5, ease: 'easeInOut' }}
              className="absolute left-1 right-1 h-[2px] bg-gradient-to-r from-transparent via-amber-400 to-transparent z-20 pointer-events-none opacity-60"
            />

            {/* The Virtual Resume Sheet */}
            <motion.div
              onClick={onOpenResume}
              whileHover={{ 
                scale: 1.04, 
                rotateX: 6, 
                rotateY: -6, 
                z: 20, 
                boxShadow: "0 25px 50px -12px rgba(236, 72, 153, 0.3)" 
              }}
              animate={{ y: [0, -10, 0] }}
              transition={{ 
                y: { repeat: Infinity, duration: 5, ease: 'easeInOut' },
                hover: { type: 'spring', stiffness: 300, damping: 20 }
              }}
              className="relative w-[280px] sm:w-[320px] h-[380px] sm:h-[430px] rounded-2xl p-[1.5px] bg-gradient-to-tr from-amber-500/30 via-fuchsia-500/20 to-violet-600/30 shadow-2xl z-10 overflow-hidden cursor-pointer group"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="w-full h-full rounded-2xl bg-slate-950/90 backdrop-blur-xl p-5 flex flex-col justify-between overflow-hidden relative border border-white/[0.04]">
                
                {/* Visual subtle card mesh pattern */}
                <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#F8FAFC_1px,transparent_1px)] bg-[size:12px_12px] rounded-2xl" />

                {/* Resume Header Area */}
                <div className="relative border-b border-white/[0.06] pb-3 shrink-0">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-sm font-extrabold tracking-wider text-slate-100 uppercase">
                        ASMITHA V
                      </h4>
                      <p className="text-[9px] sm:text-[10px] font-mono text-amber-400 mt-0.5 tracking-wide">
                        BE – Computer Science & Engineering
                      </p>
                      <p className="text-[8px] text-slate-400 font-mono mt-0.5">
                        IoT, Cyber Security & Blockchain
                      </p>
                    </div>
                    <div className="px-1.5 py-0.5 rounded bg-fuchsia-500/10 border border-fuchsia-500/20 text-[7px] font-mono text-fuchsia-300 tracking-wider uppercase shrink-0">
                      Active Profile
                    </div>
                  </div>
                </div>

                {/* Resume Miniature Sections */}
                <div className="flex-1 flex flex-col gap-3.5 my-3.5 text-left select-none overflow-hidden pr-1">
                  
                  {/* Profile section block */}
                  <div>
                    <span className="text-[8px] font-extrabold tracking-[0.15em] text-fuchsia-400 uppercase block mb-1">
                      Profile
                    </span>
                    <p className="text-[9px] text-slate-300 leading-normal line-clamp-3">
                      Motivated Computer Science student specializing in IoT & Cyber Security including Blockchain Technology at SNS College of Engineering, Coimbatore. Interested in programming, AI, and emerging tech.
                    </p>
                  </div>

                  {/* Education block */}
                  <div>
                    <span className="text-[8px] font-extrabold tracking-[0.15em] text-fuchsia-400 uppercase block mb-1">
                      Academic Timeline
                    </span>
                    <div className="flex flex-col gap-1.5 text-[9px]">
                      <div className="flex items-start gap-1.5">
                        <GraduationCap size={10} className="text-amber-400 mt-0.5 shrink-0" />
                        <div>
                          <span className="font-bold text-slate-200 block leading-tight">BE CSE (IoT & Cyber Security)</span>
                          <span className="text-slate-400 block text-[8px]">SNS College of Engineering</span>
                        </div>
                      </div>
                      <div className="flex items-start gap-1.5">
                        <Award size={10} className="text-amber-400 mt-0.5 shrink-0" />
                        <div>
                          <span className="font-semibold text-slate-200 block leading-tight">HSC (75%) & SSLC (76%)</span>
                          <span className="text-slate-400 block text-[8px]">CSI Matric HR Sec School</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Certifications & Tech Skills block */}
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <span className="text-[8px] font-extrabold tracking-[0.15em] text-fuchsia-400 uppercase block mb-1">
                        Tech Skills
                      </span>
                      <div className="flex flex-wrap gap-1">
                        {['Java', 'Python', 'C', 'MySQL'].map((s) => (
                          <span key={s} className="px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800 text-[8px] text-slate-300 font-mono">
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <span className="text-[8px] font-extrabold tracking-[0.15em] text-fuchsia-400 uppercase block mb-1">
                        Certifications
                      </span>
                      <div className="flex flex-col gap-1 text-[8px] text-slate-300">
                        <span className="truncate">• Azure AI Fundamentals</span>
                        <span className="truncate">• OCI AI Foundations</span>
                        <span className="truncate">• IBM AI & ML Course</span>
                      </div>
                    </div>
                  </div>

                </div>

                {/* Interactive Overlay Call to Action on hover */}
                <div className="relative border-t border-white/[0.06] pt-2.5 shrink-0 flex items-center justify-between text-[9px] text-slate-400">
                  <span className="flex items-center gap-1">
                    <MapPin size={9} className="text-amber-400" />
                    Coimbatore, TN
                  </span>
                  <span className="font-mono text-fuchsia-400 group-hover:text-amber-300 transition-colors flex items-center gap-1 group-hover:scale-105 transition-all">
                    Open Interactive Resume <Eye size={10} className="inline animate-pulse" />
                  </span>
                </div>

                {/* Full Card Hover Screen Accent */}
                <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[1px] pointer-events-none">
                  <motion.div 
                    whileHover={{ scale: 1.1 }}
                    className="px-4 py-2 rounded-xl bg-amber-400 text-slate-950 font-sans font-bold text-xs flex items-center gap-1.5 shadow-xl shadow-amber-400/20 translate-y-3 group-hover:translate-y-0 transition-all duration-300"
                  >
                    <FileText size={14} />
                    Open Live CV
                  </motion.div>
                </div>

              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
