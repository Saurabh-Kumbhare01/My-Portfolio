import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiSend,
  FiGithub,
  FiLinkedin,
  FiCheckCircle,
  FiAlertCircle,
  FiLoader,
  FiCopy,
  FiCheck,
  FiShield
} from 'react-icons/fi';
import confetti from 'canvas-confetti';
import { personalDetails, contactInfo } from '../data/portfolioData';
import { playHoverSound, playClickSound, playSuccessSound } from '../utils/soundEffects';

const Contact = ({ isDark }) => {
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    _gotcha: '', // Honeypot field for spam bots
  });

  const [formLoadedAt, setFormLoadedAt] = useState(Date.now());
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ loading: false, success: false, error: null });
  const [copiedItem, setCopiedItem] = useState('');

  useEffect(() => {
    setFormLoadedAt(Date.now());
  }, []);

  const copyToClipboard = (text, type) => {
    playClickSound();
    navigator.clipboard.writeText(text);
    setCopiedItem(type);
    setTimeout(() => setCopiedItem(''), 2200);
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Your name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please provide a valid email address';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject line is required';
    } else if (formData.subject.trim().length < 2) {
      newErrors.subject = 'Subject must be at least 2 characters';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message cannot be empty';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Please provide at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    playClickSound();
    if (!validate()) return;

    setStatus({ loading: true, success: false, error: null });

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          subject: formData.subject.trim(),
          message: formData.message.trim(),
          _gotcha: formData._gotcha,
          formLoadedAt,
        }),
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok || !data.success) {
        throw new Error(data.error || 'Failed to transmit message. Please try again or email directly.');
      }

      playSuccessSound();
      setStatus({
        loading: false,
        success: true,
        message: data.message || "Thank you for reaching out. Your message has landed in Saurabh's inbox via Resend.",
        error: null
      });
      setFormData({ name: '', email: '', subject: '', message: '', _gotcha: '' });

      // Trigger celebratory confetti
      confetti({
        particleCount: 95,
        spread: 85,
        origin: { y: 0.6 },
        colors: ['#00f5d4', '#38bdf8', '#818cf8', '#a855f7'],
      });
    } catch (err) {
      console.error('Contact Form Transmission Error:', err);
      setStatus({
        loading: false,
        success: false,
        error: err.message || 'Unable to connect to the email server. Please contact directly via email.',
      });
    }
  };

  return (
    <section id="contact" className="py-28 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="ambient-glow top-1/4 left-1/3 w-[450px] h-[450px] bg-cyan-500/10 dark:bg-cyan-500/15" />
      <div className="ambient-glow bottom-10 right-10 w-[450px] h-[450px] bg-indigo-500/10 dark:bg-indigo-500/15" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full hologram-pill text-xs font-mono font-semibold mb-4"
          >
            <FiMail className="w-3.5 h-3.5 text-cyan-500 dark:text-cyan-400" />
            <span className="text-cyan-600 dark:text-cyan-400 tracking-wider">06 // DIRECT TRANSMISSION</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-display font-extrabold text-slate-900 dark:text-slate-100 tracking-tight"
          >
            Let's Build Something <span className="gradient-text">Exceptional</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-600 dark:text-slate-400 text-sm sm:text-base mt-4 max-w-2xl mx-auto"
          >
            Have a project in mind, developer opening, or technical query? Send a message directly via Resend or connect through social networks.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Contact Cards & Quick Details */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-4"
          >
            {/* Direct Email Card with 1-click Copy */}
            <div
              onMouseEnter={() => playHoverSound()}
              className="glass-card rounded-3xl p-6 border border-slate-200/80 dark:border-white/10 hover:border-cyan-400/50 hover:shadow-glow-cyan transition-all flex items-center justify-between gap-4 group"
            >
              <div className="flex items-center gap-4 min-w-0">
                <div className="p-3.5 rounded-2xl bg-cyan-500/10 text-cyan-500 dark:text-cyan-400 group-hover:scale-110 transition-transform shrink-0">
                  <FiMail className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider block">
                    Direct Email
                  </span>
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="font-display font-bold text-slate-900 dark:text-slate-100 text-sm hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors truncate block"
                  >
                    {contactInfo.email}
                  </a>
                </div>
              </div>

              <button
                onClick={() => copyToClipboard(contactInfo.email, 'email')}
                title="Copy email address"
                className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-900 text-slate-500 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors shrink-0 border border-slate-200 dark:border-white/5"
              >
                {copiedItem === 'email' ? (
                  <FiCheck className="w-4 h-4 text-emerald-500" />
                ) : (
                  <FiCopy className="w-4 h-4" />
                )}
              </button>
            </div>

            {/* Direct Phone Card with 1-click Copy */}
            <div
              onMouseEnter={() => playHoverSound()}
              className="glass-card rounded-3xl p-6 border border-slate-200/80 dark:border-white/10 hover:border-indigo-400/50 hover:shadow-glow-indigo transition-all flex items-center justify-between gap-4 group"
            >
              <div className="flex items-center gap-4 min-w-0">
                <div className="p-3.5 rounded-2xl bg-indigo-500/10 text-indigo-500 dark:text-indigo-400 group-hover:scale-110 transition-transform shrink-0">
                  <FiPhone className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider block">
                    Phone & WhatsApp
                  </span>
                  <a
                    href={`tel:${personalDetails.phoneRaw}`}
                    className="font-display font-bold text-slate-900 dark:text-slate-100 text-sm hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors truncate block"
                  >
                    {contactInfo.phone}
                  </a>
                </div>
              </div>

              <button
                onClick={() => copyToClipboard(personalDetails.phoneRaw, 'phone')}
                title="Copy phone number"
                className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-900 text-slate-500 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors shrink-0 border border-slate-200 dark:border-white/5"
              >
                {copiedItem === 'phone' ? (
                  <FiCheck className="w-4 h-4 text-emerald-500" />
                ) : (
                  <FiCopy className="w-4 h-4" />
                )}
              </button>
            </div>

            {/* Location Card */}
            <div
              onMouseEnter={() => playHoverSound()}
              className="glass-card rounded-3xl p-6 border border-slate-200/80 dark:border-white/10 flex items-center gap-4"
            >
              <div className="p-3.5 rounded-2xl bg-emerald-500/10 text-emerald-500 dark:text-emerald-400 shrink-0">
                <FiMapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider block">
                  Location & Availability
                </span>
                <span className="font-display font-bold text-slate-900 dark:text-slate-100 text-sm block">
                  {contactInfo.address}
                </span>
                <span className="text-xs text-cyan-600 dark:text-cyan-400 font-mono mt-0.5 block">
                  Open to On-site & Remote Roles
                </span>
              </div>
            </div>

            {/* Professional Networks */}
            <div className="glass-card rounded-3xl p-6 border border-slate-200/80 dark:border-white/10">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 mb-4 font-bold">
                Professional Networks
              </h4>
              <div className="flex gap-3">
                <a
                  href={contactInfo.github}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => playClickSound()}
                  onMouseEnter={() => playHoverSound()}
                  data-cursor-text="GITHUB"
                  className="flex-1 p-3.5 rounded-2xl bg-slate-100 dark:bg-slate-900/80 hover:bg-cyan-500/10 border border-slate-200/80 dark:border-white/10 flex items-center justify-center gap-2 text-xs font-display font-bold text-slate-700 dark:text-slate-200 transition-all hover:text-cyan-500 dark:hover:text-cyan-400"
                >
                  <FiGithub className="w-4 h-4" /> GitHub
                </a>
                <a
                  href={contactInfo.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => playClickSound()}
                  onMouseEnter={() => playHoverSound()}
                  data-cursor-text="LINKEDIN"
                  className="flex-1 p-3.5 rounded-2xl bg-slate-100 dark:bg-slate-900/80 hover:bg-indigo-500/10 border border-slate-200/80 dark:border-white/10 flex items-center justify-center gap-2 text-xs font-display font-bold text-slate-700 dark:text-slate-200 transition-all hover:text-indigo-500 dark:hover:text-indigo-400"
                >
                  <FiLinkedin className="w-4 h-4" /> LinkedIn
                </a>
              </div>
            </div>

            {/* Resend Security Badge */}
            <div className="flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-slate-100 dark:bg-slate-900/40 border border-slate-200 dark:border-white/5 text-[11px] font-mono text-slate-500">
              <FiShield className="w-3.5 h-3.5 text-cyan-500" />
              <span>Protected by Resend TLS Encryption & Anti-Spam Gate</span>
            </div>

          </motion.div>

          {/* Right Column: High-Contrast Cyber Console Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7 glass-card rounded-3xl p-8 sm:p-10 border border-slate-200/80 dark:border-white/10"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl sm:text-2xl font-display font-extrabold text-slate-900 dark:text-slate-100">
                Send a Direct Message
              </h3>
              <span className="text-[10px] font-mono text-cyan-600 dark:text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/30 font-semibold flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                POWERED BY RESEND
              </span>
            </div>

            {/* Success Banner */}
            <AnimatePresence>
              {status.success && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="mb-6 p-4 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-700 dark:text-emerald-400 text-xs font-semibold flex items-center gap-3"
                >
                  <FiCheckCircle className="w-5 h-5 shrink-0 text-emerald-500" />
                  <div>
                    <div className="font-bold">Transmission Delivered Successfully!</div>
                    <div className="text-[11px] opacity-90 mt-0.5">
                      {status.message || "Thank you for reaching out. Your message has landed in Saurabh's inbox via Resend."}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Error Banner */}
            <AnimatePresence>
              {status.error && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="mb-6 p-4 rounded-2xl bg-rose-500/15 border border-rose-500/30 text-rose-700 dark:text-rose-400 text-xs font-semibold flex items-start gap-3"
                >
                  <FiAlertCircle className="w-5 h-5 shrink-0 text-rose-500 mt-0.5" />
                  <div className="flex-1">
                    <div className="font-bold">Transmission Error</div>
                    <div className="text-[11px] opacity-90 mt-0.5">{status.error}</div>
                    <a
                      href={`mailto:${contactInfo.email}?subject=${encodeURIComponent(formData.subject || 'Portfolio Inquiry')}&body=${encodeURIComponent(formData.message || '')}`}
                      className="inline-flex items-center gap-1 text-[11px] text-cyan-500 hover:underline mt-2 font-mono font-bold"
                    >
                      Click here to send directly via your mail client &rarr;
                    </a>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
              
              {/* Honeypot Spam Trap (Hidden from real users) */}
              <div style={{ display: 'none', position: 'absolute', left: '-9999px' }} aria-hidden="true">
                <label htmlFor="_gotcha">Leave this field blank</label>
                <input
                  type="text"
                  id="_gotcha"
                  name="_gotcha"
                  value={formData._gotcha}
                  onChange={handleChange}
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-xs font-mono text-slate-600 dark:text-slate-300 mb-1.5 font-bold">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    disabled={status.loading}
                    placeholder="e.g. Alex Morgan"
                    className={`w-full px-4 py-3.5 rounded-2xl bg-slate-100 dark:bg-slate-900/80 border ${
                      errors.name ? 'border-rose-500' : 'border-slate-200 dark:border-white/10'
                    } text-xs font-sans text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors disabled:opacity-60`}
                  />
                  {errors.name && <p className="text-[11px] text-rose-500 mt-1 font-mono">{errors.name}</p>}
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-xs font-mono text-slate-600 dark:text-slate-300 mb-1.5 font-bold">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    disabled={status.loading}
                    placeholder="e.g. alex@company.com"
                    className={`w-full px-4 py-3.5 rounded-2xl bg-slate-100 dark:bg-slate-900/80 border ${
                      errors.email ? 'border-rose-500' : 'border-slate-200 dark:border-white/10'
                    } text-xs font-sans text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors disabled:opacity-60`}
                  />
                  {errors.email && <p className="text-[11px] text-rose-500 mt-1 font-mono">{errors.email}</p>}
                </div>
              </div>

              {/* Subject Field */}
              <div>
                <label htmlFor="subject" className="block text-xs font-mono text-slate-600 dark:text-slate-300 mb-1.5 font-bold">
                  Subject / Topic *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  disabled={status.loading}
                  placeholder="e.g. Web Developer Role / AI Project Collaboration"
                  className={`w-full px-4 py-3.5 rounded-2xl bg-slate-100 dark:bg-slate-900/80 border ${
                    errors.subject ? 'border-rose-500' : 'border-slate-200 dark:border-white/10'
                  } text-xs font-sans text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors disabled:opacity-60`}
                />
                {errors.subject && <p className="text-[11px] text-rose-500 mt-1 font-mono">{errors.subject}</p>}
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-xs font-mono text-slate-600 dark:text-slate-300 mb-1.5 font-bold">
                  Your Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  disabled={status.loading}
                  placeholder="Hi Saurabh, I would like to discuss..."
                  className={`w-full px-4 py-3.5 rounded-2xl bg-slate-100 dark:bg-slate-900/80 border ${
                    errors.message ? 'border-rose-500' : 'border-slate-200 dark:border-white/10'
                  } text-xs font-sans text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors disabled:opacity-60`}
                />
                {errors.message && <p className="text-[11px] text-rose-500 mt-1 font-mono">{errors.message}</p>}
              </div>

              {/* Submit Button with Anti-Duplicate Prevention */}
              <button
                type="submit"
                disabled={status.loading}
                onMouseEnter={() => playHoverSound()}
                data-cursor-text={status.loading ? 'SENDING' : 'TRANSMIT'}
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-500 text-slate-950 font-display font-extrabold text-xs tracking-wider uppercase shadow-glow-cyan hover:shadow-cyan-400/50 hover:scale-[1.01] active:scale-95 transition-all duration-200 flex items-center justify-center gap-2.5 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status.loading ? (
                  <>
                    <FiLoader className="w-4 h-4 animate-spin" />
                    <span>Transmitting Via Resend...</span>
                  </>
                ) : (
                  <>
                    <FiSend className="w-4 h-4" />
                    <span>Transmit Message Now</span>
                  </>
                )}
              </button>
            </form>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
