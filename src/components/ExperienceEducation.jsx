import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiBookOpen, FiBriefcase, FiCalendar, FiMapPin, FiAward, FiCheckCircle } from 'react-icons/fi';
import { educationData, experienceHighlights } from '../data/portfolioData';
import { playHoverSound, playClickSound } from '../utils/soundEffects';

const ExperienceEducation = ({ isDark }) => {
  const [activeTab, setActiveTab] = useState('education');

  return (
    <section id="experience" className="py-28 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="ambient-glow top-1/3 left-10 w-96 h-96 bg-cyan-500/10 dark:bg-cyan-500/15" />
      <div className="ambient-glow bottom-10 right-10 w-96 h-96 bg-indigo-500/10 dark:bg-indigo-500/15" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full hologram-pill text-xs font-mono font-semibold mb-4"
          >
            <FiBookOpen className="w-3.5 h-3.5 text-cyan-500 dark:text-cyan-400" />
            <span className="text-cyan-600 dark:text-cyan-400 tracking-wider">04 // JOURNEY & TIMELINE</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-display font-extrabold text-slate-900 dark:text-slate-100 tracking-tight"
          >
            Academic Track & <span className="gradient-text">Practical Experience</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-600 dark:text-slate-400 text-sm sm:text-base mt-4 max-w-2xl mx-auto"
          >
            Academic degree track record combined with real-world full-stack web and AI application delivery.
          </motion.p>
        </div>

        {/* View Switcher Tabs */}
        <div className="flex items-center justify-center gap-3 mb-16">
          <button
            onClick={() => {
              playClickSound();
              setActiveTab('education');
            }}
            onMouseEnter={() => playHoverSound()}
            data-cursor-text="SWITCH"
            className={`flex items-center gap-2 px-6 py-3 rounded-2xl text-xs font-display font-bold transition-all duration-200 ${
              activeTab === 'education'
                ? 'bg-gradient-to-r from-cyan-400 via-sky-500 to-indigo-600 text-slate-950 shadow-glow-cyan scale-[1.03]'
                : 'glass-card text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 hover:border-cyan-400/40'
            }`}
          >
            <FiBookOpen className="w-4 h-4" /> Education Timeline
          </button>
          <button
            onClick={() => {
              playClickSound();
              setActiveTab('experience');
            }}
            onMouseEnter={() => playHoverSound()}
            data-cursor-text="SWITCH"
            className={`flex items-center gap-2 px-6 py-3 rounded-2xl text-xs font-display font-bold transition-all duration-200 ${
              activeTab === 'experience'
                ? 'bg-gradient-to-r from-cyan-400 via-sky-500 to-indigo-600 text-slate-950 shadow-glow-cyan scale-[1.03]'
                : 'glass-card text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 hover:border-indigo-400/40'
            }`}
          >
            <FiBriefcase className="w-4 h-4" /> Practical Experience
          </button>
        </div>

        {/* Timeline Items */}
        <div className="max-w-4xl mx-auto relative">
          
          {/* Vertical Glowing Spine Line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 via-indigo-500 to-transparent transform -translate-x-1/2 opacity-60" />

          <div className="space-y-12">
            {activeTab === 'education' ? (
              educationData.map((edu, idx) => {
                const isEven = idx % 2 === 0;

                return (
                  <motion.div
                    key={edu.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.15 }}
                    onMouseEnter={() => playHoverSound()}
                    className={`relative flex flex-col sm:flex-row items-center ${
                      isEven ? 'sm:flex-row-reverse' : ''
                    }`}
                  >
                    {/* Glowing Node Dot */}
                    <div className="absolute left-4 sm:left-1/2 w-8 h-8 rounded-full bg-white dark:bg-[#040711] border-2 border-cyan-400 transform -translate-x-1/2 flex items-center justify-center shadow-glow-cyan z-20">
                      <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
                    </div>

                    {/* Timeline Card */}
                    <div className={`w-full sm:w-1/2 pl-12 sm:pl-0 ${isEven ? 'sm:pr-10' : 'sm:pl-10'}`}>
                      <div className="glass-card rounded-3xl p-6 sm:p-7 border border-slate-200/80 dark:border-white/10 hover:border-cyan-400/50 hover:shadow-glow-cyan transition-all duration-300">
                        
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-[11px] font-mono font-bold text-cyan-600 dark:text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/30 flex items-center gap-1.5">
                            <FiCalendar className="w-3 h-3" /> {edu.duration}
                          </span>
                          <span className="text-xs font-mono font-bold text-amber-500 dark:text-amber-400 bg-amber-500/10 px-2.5 py-0.5 rounded-lg border border-amber-500/20">
                            {edu.scoreLabel}: {edu.score}
                          </span>
                        </div>

                        <h3 className="font-display font-extrabold text-slate-900 dark:text-slate-100 text-lg sm:text-xl">
                          {edu.degree}
                        </h3>

                        <p className="text-xs font-semibold text-slate-600 dark:text-slate-400 mt-1 flex items-center gap-1.5">
                          <FiMapPin className="w-3.5 h-3.5 text-cyan-500" />
                          {edu.institution} ({edu.location})
                        </p>

                        <div className="mt-4 pt-4 border-t border-slate-200/60 dark:border-white/5 space-y-2">
                          {edu.highlights.map((h, i) => (
                            <div key={i} className="flex items-start gap-2.5">
                              <FiCheckCircle className="w-3.5 h-3.5 text-cyan-500 dark:text-cyan-400 mt-0.5 shrink-0" />
                              <span className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
                                {h}
                              </span>
                            </div>
                          ))}
                        </div>

                      </div>
                    </div>
                  </motion.div>
                );
              })
            ) : (
              experienceHighlights.map((exp, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  onMouseEnter={() => playHoverSound()}
                  className="relative flex flex-col sm:flex-row items-center"
                >
                  <div className="absolute left-4 sm:left-1/2 w-8 h-8 rounded-full bg-white dark:bg-[#040711] border-2 border-indigo-400 transform -translate-x-1/2 flex items-center justify-center shadow-glow-indigo z-20">
                    <div className="w-2.5 h-2.5 rounded-full bg-indigo-400 animate-pulse" />
                  </div>

                  <div className="w-full sm:w-1/2 pl-12 sm:pl-10">
                    <div className="glass-card rounded-3xl p-6 sm:p-7 border border-slate-200/80 dark:border-white/10 hover:border-indigo-400/50 hover:shadow-glow-indigo transition-all duration-300">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-[11px] font-mono font-bold text-indigo-600 dark:text-indigo-400 bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/30 flex items-center gap-1.5">
                          <FiCalendar className="w-3 h-3" /> {exp.period}
                        </span>
                        <span className="text-[10px] font-mono bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 px-2.5 py-0.5 rounded-lg font-bold border border-cyan-500/20">
                          {exp.type}
                        </span>
                      </div>

                      <h3 className="font-display font-extrabold text-slate-900 dark:text-slate-100 text-lg sm:text-xl">
                        {exp.title}
                      </h3>

                      <p className="text-xs font-semibold text-slate-600 dark:text-slate-400 mt-1 flex items-center gap-1.5">
                        <FiMapPin className="w-3.5 h-3.5 text-indigo-500" />
                        {exp.organization} ({exp.location})
                      </p>

                      <div className="mt-4 pt-4 border-t border-slate-200/60 dark:border-white/5 space-y-2">
                        {exp.points.map((pt, i) => (
                          <div key={i} className="flex items-start gap-2.5">
                            <FiCheckCircle className="w-3.5 h-3.5 text-indigo-500 dark:text-indigo-400 mt-0.5 shrink-0" />
                            <span className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
                              {pt}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))
            )}
          </div>

        </div>

      </div>
    </section>
  );
};

export default ExperienceEducation;
