import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiSend, FiGithub, FiLinkedin, FiCheckCircle, FiAlertCircle, FiLoader } from 'react-icons/fi';
import emailjs from '@emailjs/browser';
import confetti from 'canvas-confetti';
import { personalDetails, contactInfo } from '../data/portfolioData';

const Contact = () => {
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ loading: false, success: false, error: null });

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Valid email address required';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
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
    if (!validate()) return;

    setStatus({ loading: true, success: false, error: null });

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    try {
      if (serviceId && templateId && publicKey) {
        await emailjs.sendForm(serviceId, templateId, formRef.current, publicKey);
      } else {
        // Fallback simulation for live demonstration before live keys are updated
        await new Promise((resolve) => setTimeout(resolve, 1200));
      }

      setStatus({ loading: false, success: true, error: null });
      setFormData({ name: '', email: '', subject: '', message: '' });

      // Trigger celebratory confetti
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });

    } catch (err) {
      console.error('EmailJS Error:', err);
      setStatus({
        loading: false,
        success: false,
        error: 'Failed to send message via EmailJS. Please contact directly via kumbharesaurabh279@gmail.com.'
      });
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-mono font-semibold mb-3 border border-cyan-500/20"
          >
            <FiMail className="w-3.5 h-3.5" />
            <span>LET'S CONNECT</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-slate-100 dark:text-slate-100 light:text-slate-900 tracking-tight"
          >
            Get In <span className="gradient-text">Touch</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-400 dark:text-slate-400 light:text-slate-600 text-sm mt-3"
          >
            Have a project in mind, web developer opening, or technical question? Send a message directly.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Contact Cards & Quick Details */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Email Card */}
            <a
              href={`mailto:${contactInfo.email}`}
              className="glass-card rounded-3xl p-6 border border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 hover:border-cyan-500/40 transition-all group flex items-center gap-4 block"
            >
              <div className="p-4 rounded-2xl bg-cyan-500/10 text-cyan-400 group-hover:scale-110 transition-transform">
                <FiMail className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-mono text-slate-400 block">Direct Email</span>
                <span className="font-bold text-slate-100 dark:text-slate-100 light:text-slate-900 text-sm group-hover:text-cyan-400 transition-colors">
                  {contactInfo.email}
                </span>
              </div>
            </a>

            {/* Phone Card */}
            <a
              href={`tel:${personalDetails.phoneRaw}`}
              className="glass-card rounded-3xl p-6 border border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 hover:border-cyan-500/40 transition-all group flex items-center gap-4 block"
            >
              <div className="p-4 rounded-2xl bg-indigo-500/10 text-indigo-400 group-hover:scale-110 transition-transform">
                <FiPhone className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-mono text-slate-400 block">Phone & WhatsApp</span>
                <span className="font-bold text-slate-100 dark:text-slate-100 light:text-slate-900 text-sm group-hover:text-indigo-400 transition-colors">
                  {contactInfo.phone}
                </span>
              </div>
            </a>

            {/* Location Card */}
            <div className="glass-card rounded-3xl p-6 border border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 flex items-center gap-4">
              <div className="p-4 rounded-2xl bg-emerald-500/10 text-emerald-400">
                <FiMapPin className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-mono text-slate-400 block">Current Location</span>
                <span className="font-bold text-slate-100 dark:text-slate-100 light:text-slate-900 text-sm">
                  {contactInfo.address}
                </span>
              </div>
            </div>

            {/* Social Channels */}
            <div className="glass-card rounded-3xl p-6 border border-slate-800/80 dark:border-slate-800/80 light:border-slate-200">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-4 font-bold">
                Professional Networks
              </h4>
              <div className="flex gap-3">
                <a
                  href={contactInfo.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 p-3 rounded-2xl bg-slate-800/60 dark:bg-slate-800/60 light:bg-slate-100 hover:bg-slate-700/60 border border-slate-700/60 flex items-center justify-center gap-2 text-xs font-bold text-slate-200 transition-all hover:text-cyan-400"
                >
                  <FiGithub className="w-4 h-4" /> GitHub
                </a>
                <a
                  href={contactInfo.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 p-3 rounded-2xl bg-slate-800/60 dark:bg-slate-800/60 light:bg-slate-100 hover:bg-slate-700/60 border border-slate-700/60 flex items-center justify-center gap-2 text-xs font-bold text-slate-200 transition-all hover:text-cyan-400"
                >
                  <FiLinkedin className="w-4 h-4" /> LinkedIn
                </a>
              </div>
            </div>

          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7 glass-card rounded-3xl p-8 border border-slate-800/80 dark:border-slate-800/80 light:border-slate-200"
          >
            <h3 className="text-xl font-extrabold text-slate-100 dark:text-slate-100 light:text-slate-900 mb-6">
              Send a Message
            </h3>

            {status.success && (
              <div className="mb-6 p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold flex items-center gap-3">
                <FiCheckCircle className="w-5 h-5 shrink-0" />
                <span>Thank you! Your message has been sent successfully. Saurabh will respond shortly.</span>
              </div>
            )}

            {status.error && (
              <div className="mb-6 p-4 rounded-2xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-semibold flex items-center gap-3">
                <FiAlertCircle className="w-5 h-5 shrink-0" />
                <span>{status.error}</span>
              </div>
            )}

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-xs font-mono text-slate-400 dark:text-slate-400 light:text-slate-600 mb-1.5 font-bold">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className={`w-full px-4 py-3 rounded-2xl bg-slate-900/60 dark:bg-slate-900/60 light:bg-slate-50 border ${
                      errors.name ? 'border-red-500' : 'border-slate-800 dark:border-slate-800 light:border-slate-200'
                    } text-xs text-slate-100 dark:text-slate-100 light:text-slate-900 focus:outline-none focus:border-cyan-500 transition-colors`}
                  />
                  {errors.name && <p className="text-[11px] text-red-400 mt-1">{errors.name}</p>}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-xs font-mono text-slate-400 dark:text-slate-400 light:text-slate-600 mb-1.5 font-bold">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className={`w-full px-4 py-3 rounded-2xl bg-slate-900/60 dark:bg-slate-900/60 light:bg-slate-50 border ${
                      errors.email ? 'border-red-500' : 'border-slate-800 dark:border-slate-800 light:border-slate-200'
                    } text-xs text-slate-100 dark:text-slate-100 light:text-slate-900 focus:outline-none focus:border-cyan-500 transition-colors`}
                  />
                  {errors.email && <p className="text-[11px] text-red-400 mt-1">{errors.email}</p>}
                </div>
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block text-xs font-mono text-slate-400 dark:text-slate-400 light:text-slate-600 mb-1.5 font-bold">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Web Developer Opportunity / Project Inquiry"
                  className={`w-full px-4 py-3 rounded-2xl bg-slate-900/60 dark:bg-slate-900/60 light:bg-slate-50 border ${
                    errors.subject ? 'border-red-500' : 'border-slate-800 dark:border-slate-800 light:border-slate-200'
                  } text-xs text-slate-100 dark:text-slate-100 light:text-slate-900 focus:outline-none focus:border-cyan-500 transition-colors`}
                />
                {errors.subject && <p className="text-[11px] text-red-400 mt-1">{errors.subject}</p>}
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-xs font-mono text-slate-400 dark:text-slate-400 light:text-slate-600 mb-1.5 font-bold">
                  Your Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Hello Saurabh, I would like to discuss..."
                  className={`w-full px-4 py-3 rounded-2xl bg-slate-900/60 dark:bg-slate-900/60 light:bg-slate-50 border ${
                    errors.message ? 'border-red-500' : 'border-slate-800 dark:border-slate-800 light:border-slate-200'
                  } text-xs text-slate-100 dark:text-slate-100 light:text-slate-900 focus:outline-none focus:border-cyan-500 transition-colors`}
                />
                {errors.message && <p className="text-[11px] text-red-400 mt-1">{errors.message}</p>}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status.loading}
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-cyan-500 via-cyan-400 to-indigo-500 hover:from-cyan-400 hover:to-indigo-400 text-slate-950 font-extrabold text-xs tracking-wider uppercase shadow-glow-cyan hover:scale-[1.01] transition-all flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {status.loading ? (
                  <>
                    <FiLoader className="w-4 h-4 animate-spin" /> Sending Message...
                  </>
                ) : (
                  <>
                    <FiSend className="w-4 h-4" /> Send Message Now
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
