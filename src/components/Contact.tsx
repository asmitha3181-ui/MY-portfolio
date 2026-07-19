import { useState, FormEvent, FocusEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, Copy, Check } from 'lucide-react';
import { personalDetails } from '../data';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [copiedType, setCopiedType] = useState<'email' | 'phone' | null>(null);

  const handleFocus = (field: string) => setFocusedField(field);
  const handleBlur = () => setFocusedField(null);

  const handleCopy = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2000);
  };

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    // Form validation
    if (!formData.name.trim()) {
      setStatus('error');
      setErrorMessage('Please enter your name.');
      return;
    }
    if (!formData.email.trim() || !validateEmail(formData.email)) {
      setStatus('error');
      setErrorMessage('Please enter a valid email address.');
      return;
    }
    if (!formData.message.trim() || formData.message.length < 10) {
      setStatus('error');
      setErrorMessage('Please enter a message (at least 10 characters).');
      return;
    }

    setStatus('loading');

    // Simulate server POST submission (and store in local storage)
    setTimeout(() => {
      try {
        const existingMessages = JSON.parse(localStorage.getItem('portfolio_messages') || '[]');
        const newMessage = {
          ...formData,
          id: Date.now().toString(),
          timestamp: new Date().toISOString()
        };
        existingMessages.push(newMessage);
        localStorage.setItem('portfolio_messages', JSON.stringify(existingMessages));
        
        setStatus('success');
        // Reset form
        setFormData({ name: '', email: '', subject: '', message: '' });
      } catch (err) {
        setStatus('error');
        setErrorMessage('Something went wrong. Please try again.');
      }
    }, 1500);
  };

  return (
    <section 
      id="contact" 
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
            Connect
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ delay: 0.1 }}
            className="font-sans text-3xl sm:text-4xl font-bold text-slate-50 tracking-tight"
          >
            Get In Touch
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 60 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="h-[3px] bg-gradient-to-r from-amber-400 via-fuchsia-500 to-violet-600 mx-auto mt-4 rounded-full"
          />
        </div>

        {/* Form & Info Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-5xl mx-auto items-stretch">
          
          {/* Left: Contact Info (5/12 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-8 h-full">
            <div className="flex flex-col gap-6">
              <h3 className="text-xl font-bold text-slate-100 tracking-tight">
                Let's discuss something <span className="text-fuchsia-400">significant</span>
              </h3>
              <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
                I am looking forward to exciting opportunities, placements, internships, or collaborating on innovative projects. Feel free to contact me via the form or through direct channels.
              </p>

              {/* Direct Info Blocks */}
              <div className="flex flex-col gap-4 mt-4">
                
                {/* Email block */}
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.04] flex items-center justify-between group hover:border-violet-500/30 transition-all duration-300 hover:shadow-[0_0_20px_rgba(139,92,246,0.15)] active:scale-[0.99]">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400 shrink-0">
                      <Mail size={16} />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[10px] font-bold tracking-wider text-slate-500 uppercase">Direct Email</span>
                      <a href={`mailto:${personalDetails.email}`} className="text-sm font-semibold text-slate-200 hover:text-fuchsia-400 transition-colors">
                        {personalDetails.email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => handleCopy(personalDetails.email, 'email')}
                    className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-slate-100 transition-all cursor-pointer"
                    title="Copy Email"
                  >
                    {copiedType === 'email' ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                  </button>
                </div>

                {/* Phone block */}
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.04] flex items-center justify-between group hover:border-fuchsia-500/30 transition-all duration-300 hover:shadow-[0_0_20px_rgba(240,70,250,0.15)] active:scale-[0.99]">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-fuchsia-500/10 border border-fuchsia-500/20 flex items-center justify-center text-fuchsia-400 shrink-0">
                      <Phone size={16} />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[10px] font-bold tracking-wider text-slate-500 uppercase">Mobile Contact</span>
                      <a href={`tel:${personalDetails.phone}`} className="text-sm font-semibold text-slate-200 hover:text-fuchsia-400 transition-colors">
                        {personalDetails.phone}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => handleCopy(personalDetails.phone, 'phone')}
                    className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-slate-100 transition-all cursor-pointer"
                    title="Copy Number"
                  >
                    {copiedType === 'phone' ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                  </button>
                </div>

                {/* Location block */}
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.04] flex items-center gap-3 group hover:border-violet-500/30 transition-all duration-300 hover:shadow-[0_0_20px_rgba(139,92,246,0.15)] active:scale-[0.99]">
                  <div className="w-10 h-10 rounded-lg bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400 shrink-0">
                    <MapPin size={16} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold tracking-wider text-slate-500 uppercase">Location</span>
                    <span className="text-sm font-semibold text-slate-200">
                      {personalDetails.location}
                    </span>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Right: Glassmorphic Interactive Form (7/12 cols) */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
              className="relative p-6 sm:p-8 rounded-3xl bg-white/[0.03] border border-white/[0.05] h-full flex flex-col justify-center"
            >
              {/* Form success layout */}
              <AnimatePresence mode="wait">
                {status === 'success' ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="flex flex-col items-center justify-center text-center py-10 h-full"
                  >
                    <motion.div 
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                      className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-6 shadow-lg shadow-emerald-500/5"
                    >
                      <CheckCircle2 size={32} />
                    </motion.div>
                    <h4 className="text-2xl font-bold text-slate-50 mb-3">Message Sent Successfully!</h4>
                    <p className="text-sm text-slate-400 max-w-sm leading-relaxed mb-6">
                      Thank you for reaching out! Your submission has been saved securely, and Asmitha V will get in touch with you shortly.
                    </p>
                    <button
                      onClick={() => setStatus('idle')}
                      className="px-5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-slate-100 font-semibold text-xs transition-colors cursor-pointer"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-5"
                  >
                    {/* Error block */}
                    {status === 'error' && (
                      <motion.div 
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center gap-2.5 p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-xs"
                      >
                        <AlertCircle size={15} className="shrink-0" />
                        <span>{errorMessage}</span>
                      </motion.div>
                    )}

                    {/* Inputs */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Name input */}
                      <div className="flex flex-col gap-2">
                        <label className="text-[10px] font-bold tracking-widest text-slate-400 uppercase">Your Name</label>
                        <input
                          type="text"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          onFocus={() => handleFocus('name')}
                          onBlur={handleBlur}
                          placeholder="Asmitha V"
                          className={`w-full px-4 py-3 text-sm bg-slate-900 border rounded-xl text-slate-100 placeholder-slate-600 focus:outline-none transition-all duration-300 ${
                            focusedField === 'name' ? 'border-violet-500 shadow-lg shadow-violet-500/5' : 'border-slate-800/80'
                          }`}
                        />
                      </div>

                      {/* Email input */}
                      <div className="flex flex-col gap-2">
                        <label className="text-[10px] font-bold tracking-widest text-slate-400 uppercase">Your Email</label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          onFocus={() => handleFocus('email')}
                          onBlur={handleBlur}
                          placeholder="asmitha3181@gmail.com"
                          className={`w-full px-4 py-3 text-sm bg-slate-900 border rounded-xl text-slate-100 placeholder-slate-600 focus:outline-none transition-all duration-300 ${
                            focusedField === 'email' ? 'border-violet-500 shadow-lg shadow-violet-500/5' : 'border-slate-800/80'
                          }`}
                        />
                      </div>
                    </div>

                    {/* Subject input */}
                    <div className="flex flex-col gap-2">
                      <label className="text-[10px] font-bold tracking-widest text-slate-400 uppercase">Subject</label>
                      <input
                        type="text"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        onFocus={() => handleFocus('subject')}
                        onBlur={handleBlur}
                        placeholder="Collaboration Opportunities"
                        className={`w-full px-4 py-3 text-sm bg-slate-900 border rounded-xl text-slate-100 placeholder-slate-600 focus:outline-none transition-all duration-300 ${
                          focusedField === 'subject' ? 'border-violet-500 shadow-lg shadow-violet-500/5' : 'border-slate-800/80'
                        }`}
                      />
                    </div>

                    {/* Message input */}
                    <div className="flex flex-col gap-2">
                      <label className="text-[10px] font-bold tracking-widest text-slate-400 uppercase">Your Message</label>
                      <textarea
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        onFocus={() => handleFocus('message')}
                        onBlur={handleBlur}
                        placeholder="Hello Asmitha, I saw your portfolio and would love to connect..."
                        className={`w-full px-4 py-3 text-sm bg-slate-900 border rounded-xl text-slate-100 placeholder-slate-600 focus:outline-none transition-all duration-300 resize-none ${
                          focusedField === 'message' ? 'border-violet-500 shadow-lg shadow-violet-500/5' : 'border-slate-800/80'
                        }`}
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className="group relative flex items-center justify-center gap-2 text-sm bg-gradient-to-r from-violet-600 to-fuchsia-500 hover:from-violet-500 hover:to-fuchsia-400 text-slate-50 font-bold py-3.5 rounded-xl shadow-lg shadow-violet-500/10 hover:shadow-fuchsia-400/20 disabled:opacity-50 transition-all cursor-pointer"
                    >
                      {status === 'loading' ? (
                        <>
                          <div className="w-5 h-5 rounded-full border-2 border-slate-200 border-t-transparent animate-spin" />
                          <span>Dispatching message...</span>
                        </>
                      ) : (
                        <>
                          <Send size={15} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                          <span>Transmit Message</span>
                        </>
                      )}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
