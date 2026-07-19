import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { X, Printer, Download, Mail, Phone, MapPin, Github, Linkedin, Award, Briefcase, GraduationCap, ChevronRight, Info, ExternalLink } from 'lucide-react';
import { personalDetails, aboutContent, educationData, internshipData, skillCategories, certificationsData, achievementsData } from '../data';

interface ResumeViewerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeViewerModal({ isOpen, onClose }: ResumeViewerModalProps) {
  const [isIframe, setIsIframe] = useState(false);

  useEffect(() => {
    if (isOpen) {
      try {
        setIsIframe(window.self !== window.top);
      } catch (e) {
        setIsIframe(true);
      }
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handlePrint = () => {
    // Elegant system print call
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 sm:p-6 md:p-10 bg-slate-950/90 backdrop-blur-md">
      
      {/* Backing sheet */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ type: 'spring', duration: 0.5 }}
        className="relative bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl w-full max-w-4xl h-[90vh] flex flex-col overflow-hidden"
      >
        
        {/* Modal Header Controls */}
        <div className="flex items-center justify-between p-5 border-b border-slate-800 shrink-0 bg-slate-900/80 backdrop-blur">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse" />
            <h3 className="font-sans font-bold text-slate-100 text-sm sm:text-base">
              Asmitha V — Professional Resume
            </h3>
          </div>
          
          <div className="flex items-center gap-2">
            {/* Save as PDF Trigger */}
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold cursor-pointer transition-all hover:scale-105 active:scale-95"
              title="Save as PDF / Download"
            >
              <Download size={14} />
              <span>Save as PDF</span>
            </button>

            {/* Print Trigger */}
            <button
              onClick={handlePrint}
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-slate-50 text-xs font-semibold cursor-pointer transition-colors"
              title="Print Resume"
            >
              <Printer size={14} className="text-amber-400" />
              <span>Print</span>
            </button>

            {/* Close */}
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-slate-100 transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Iframe Hint Banner */}
        {isIframe && (
          <div className="bg-amber-400/10 border-b border-amber-400/20 px-5 py-3 flex items-start gap-3 text-amber-300 text-xs sm:text-sm shrink-0">
            <Info size={16} className="text-amber-400 shrink-0 mt-0.5" />
            <div className="flex-1 leading-relaxed">
              <span className="font-bold">Preview Mode Restriction:</span> Browsers block printing/PDF exports inside iframe previews. Please click the <span className="font-bold text-amber-200 underline">"Open in new tab"</span> button <ExternalLink size={12} className="inline mx-0.5" /> at the top-right of your screen, then you can download or save your resume as a PDF perfectly!
            </div>
          </div>
        )}

        {/* Modal Scrollable Canvas */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-10 md:p-12 print-container bg-slate-900 text-slate-100">
          
          {/* Quick PDF Instruction Tip (hidden in printout) */}
          <div className="mb-6 p-4 rounded-xl bg-slate-950/60 border border-slate-800 flex items-start gap-3 text-slate-300 text-xs max-w-3xl mx-auto print:hidden">
            <span className="text-base select-none">💡</span>
            <div>
              <p className="font-semibold text-slate-200 mb-0.5">Pro Tip for Saving as PDF:</p>
              <p className="leading-relaxed text-slate-400">
                Click the <span className="text-amber-400 font-bold">"Save as PDF"</span> button above. In the print dialog, set the <span className="font-semibold text-slate-200">Destination</span> to <span className="text-fuchsia-400 font-semibold">"Save as PDF"</span> (or choose your preferred printer) to generate a pristine, high-fidelity A4 document.
              </p>
            </div>
          </div>
          
          <div className="max-w-3xl mx-auto flex flex-col gap-8 text-left" id="printable-area">
            
            {/* Resume Header Section */}
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 pb-6 border-b border-slate-800">
              <div>
                <h1 className="font-sans text-3xl sm:text-4xl font-extrabold text-slate-50 tracking-tight leading-none mb-2">
                  {personalDetails.name}
                </h1>
                <p className="text-sm font-semibold tracking-wide text-fuchsia-400 font-sans uppercase">
                  {personalDetails.headline}
                </p>
                <div className="flex flex-wrap gap-x-4 gap-y-1.5 text-xs text-slate-400 font-mono mt-3">
                  <span className="flex items-center gap-1">
                    <MapPin size={11} className="text-amber-400" />
                    {personalDetails.location}
                  </span>
                  <span>•</span>
                  <a href={`mailto:${personalDetails.email}`} className="flex items-center gap-1 hover:text-fuchsia-400 transition-colors">
                    <Mail size={11} className="text-amber-400" />
                    {personalDetails.email}
                  </a>
                  <span>•</span>
                  <a href={`tel:${personalDetails.phone}`} className="flex items-center gap-1 hover:text-fuchsia-400 transition-colors">
                    <Phone size={11} className="text-amber-400" />
                    {personalDetails.phone}
                  </a>
                </div>
              </div>

              {/* QR and Portfolio domains */}
              <div className="flex flex-col text-left sm:text-right font-mono text-xs text-slate-500">
                <span className="text-slate-400 font-bold">Portfolio:</span>
                <span className="text-fuchsia-400 font-semibold">{personalDetails.domain}</span>
                <div className="flex gap-2.5 mt-2.5 justify-start sm:justify-end text-slate-400">
                  <a href={personalDetails.linkedin} target="_blank" rel="noreferrer" className="hover:text-amber-400">
                    <Linkedin size={15} />
                  </a>
                  <a href={personalDetails.github} target="_blank" rel="noreferrer" className="hover:text-slate-100">
                    <Github size={15} />
                  </a>
                </div>
              </div>
            </div>

            {/* Profile Summary */}
            <div>
              <h2 className="text-xs font-bold tracking-[0.2em] text-amber-400 uppercase mb-3 flex items-center gap-2">
                <ChevronRight size={14} className="text-amber-400" />
                Profile Summary
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                {aboutContent.bio}
              </p>
            </div>

            {/* Internship Section */}
            <div>
              <h2 className="text-xs font-bold tracking-[0.2em] text-amber-400 uppercase mb-4 flex items-center gap-2">
                <ChevronRight size={14} className="text-amber-400" />
                Professional Internship
              </h2>
              <div className="p-5 rounded-2xl bg-white/[0.01] border border-white/[0.03]">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 mb-2.5">
                  <h3 className="text-base font-bold text-slate-100 flex items-center gap-1.5">
                    <Briefcase size={14} className="text-fuchsia-400" />
                    {internshipData.role}
                  </h3>
                  <span className="text-xs font-mono text-slate-400 bg-slate-900 border border-slate-800 px-2 py-0.5 rounded">
                    {internshipData.period}
                  </span>
                </div>
                <p className="text-xs font-bold text-fuchsia-400 mb-3">{internshipData.company}</p>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                  {internshipData.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {internshipData.skills.map((skill, idx) => (
                    <span key={idx} className="text-[10px] font-mono text-slate-400 bg-slate-950 border border-slate-900 px-2 py-0.5 rounded">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Education Section */}
            <div>
              <h2 className="text-xs font-bold tracking-[0.2em] text-amber-400 uppercase mb-4 flex items-center gap-2">
                <ChevronRight size={14} className="text-amber-400" />
                Academic Timeline
              </h2>
              <div className="flex flex-col gap-4">
                {educationData.map((edu, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-white/[0.01] border border-white/[0.03] flex flex-col sm:flex-row sm:items-start justify-between gap-2">
                    <div>
                      <h3 className="text-sm sm:text-base font-bold text-slate-100 flex items-center gap-1.5">
                        <GraduationCap size={15} className="text-amber-400" />
                        {edu.institution}
                      </h3>
                      <p className="text-xs font-medium text-slate-300 mt-0.5">
                        {edu.degree} {edu.specialization ? `— ${edu.specialization}` : ''}
                      </p>
                      {edu.score && (
                        <span className="inline-flex text-[10px] font-mono font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded mt-2">
                          Score: {edu.score}
                        </span>
                      )}
                    </div>
                    <span className="text-xs font-mono text-slate-400 shrink-0">
                      {edu.period}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Skills split layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Technical skills */}
              <div>
                <h2 className="text-xs font-bold tracking-[0.2em] text-amber-400 uppercase mb-4 flex items-center gap-2">
                  <ChevronRight size={14} className="text-amber-400" />
                  Technical Skillsets
                </h2>
                <div className="flex flex-col gap-3">
                  {skillCategories.map((cat, idx) => (
                    <div key={idx} className="p-3.5 rounded-lg bg-white/[0.01] border border-white/[0.03]">
                      <h4 className="text-[10px] font-bold text-fuchsia-400 uppercase tracking-widest mb-2">{cat.title}</h4>
                      <p className="text-xs sm:text-sm text-slate-300">
                        {cat.skills.map(s => s.name).join(', ')}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Certifications */}
              <div>
                <h2 className="text-xs font-bold tracking-[0.2em] text-amber-400 uppercase mb-4 flex items-center gap-2">
                  <ChevronRight size={14} className="text-amber-400" />
                  Certifications
                </h2>
                <div className="flex flex-col gap-2.5">
                  {certificationsData.map((cert, idx) => (
                    <div key={idx} className="p-3 rounded-lg bg-white/[0.01] border border-white/[0.03] flex justify-between items-start gap-2">
                      <div>
                        <h4 className="text-xs sm:text-sm font-bold text-slate-100 flex items-center gap-1.5">
                          <Award size={12} className="text-amber-400 shrink-0" />
                          {cert.name}
                        </h4>
                        <span className="text-[10px] text-slate-400 font-mono">{cert.issuer}</span>
                      </div>
                      <span className="text-[10px] font-mono text-fuchsia-400 shrink-0">{cert.year}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Achievements */}
            <div>
              <h2 className="text-xs font-bold tracking-[0.2em] text-amber-400 uppercase mb-4 flex items-center gap-2">
                <ChevronRight size={14} className="text-amber-400" />
                Symposium Honors
              </h2>
              <div className="flex flex-col gap-4">
                {achievementsData.map((ach, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-white/[0.01] border border-white/[0.03]">
                    <h3 className="text-xs font-mono font-bold text-fuchsia-400 uppercase tracking-widest">{ach.title}</h3>
                    <h4 className="text-sm sm:text-base font-bold text-slate-100 mt-0.5">{ach.event}</h4>
                    <ul className="list-disc pl-5 text-xs sm:text-sm text-slate-300 mt-2.5 flex flex-col gap-1.5">
                      {ach.details.map((detail, dIdx) => (
                        <li key={dIdx}>{detail}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-slate-800 shrink-0 flex justify-center text-[10px] font-mono text-slate-500 bg-slate-900/40">
          Press "Print / Save PDF" to download this beautifully formatted resume natively as a PDF document.
        </div>

      </motion.div>
    </div>
  );
}
