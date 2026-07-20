import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiBookOpen, FiBriefcase, FiCalendar, FiMapPin, FiAward, FiCheckCircle } from 'react-icons/fi';
import { educationData, experienceHighlights } from '../data/portfolioData';

const ExperienceEducation = () => {
  const [activeTab, setActiveTab] = useState('education');

  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-mono font-semibold mb-3 border border-cyan-500/20"
          >
            <FiBookOpen className="w-3.5 h-3.5" />
            <span>TIMELINE & JOURNEY</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-slate-100 dark:text-slate-100 light:text-slate-900 tracking-tight"
          >
            Education & <span className="gradient-text">Practical Experience</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-400 dark:text-slate-400 light:text-slate-600 text-sm mt-3"
          >
            Academic degree track record combined with real-world full-stack web and AI application delivery.
          </motion.p>
        </div>

        {/* View Switcher Tabs */}
        <div className="flex items-center justify-center gap-4 mb-16">
          <button
            onClick={() => setActiveTab('education')}
            className={`flex items-center gap-2 px-6 py-3 rounded-2xl text-xs font-bold transition-all ${
              activeTab === 'education'
                ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-glow-cyan scale-105'
                : 'glass-card text-slate-400 hover:text-slate-200'
            }`}
          >
            <FiBookOpen className="w-4 h-4" /> Education Timeline
          </button>
          <button
            onClick={() => setActiveTab('experience')}
            className={`flex items-center gap-2 px-6 py-3 rounded-2xl text-xs font-bold transition-all ${
              activeTab === 'experience'
                ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-glow-cyan scale-105'
                : 'glass-card text-slate-400 hover:text-slate-200'
            }`}
          >
            <FiBriefcase className="w-4 h-4" /> Practical Experience
          </button>
        </div>

        {/* Timeline Items */}
        <div className="max-w-4xl mx-auto relative">
          
          {/* Vertical Glowing Spine Line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-indigo-500 to-transparent transform -translate-x-1/2" />

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
                    className={`relative flex flex-col sm:flex-row items-center ${
                      isEven ? 'sm:flex-row-reverse' : ''
                    }`}
                  >
                    {/* Glowing Node Dot */}
                    <div className="absolute left-4 sm:left-1/2 w-8 h-8 rounded-full bg-slate-900 border-2 border-cyan-400 transform -translate-x-1/2 flex items-center justify-center shadow-glow-cyan z-20">
                      <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
                    </div>

                    {/* Timeline Card */}
                    <div className={`w-full sm:w-1/2 pl-12 sm:pl-0 ${isEven ? 'sm:pr-10' : 'sm:pl-10'}`}>
                      <div className="glass-card rounded-3xl p-6 border border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 hover:border-cyan-500/40 transition-all">
                        
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-[11px] font-mono font-bold text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/30 flex items-center gap-1">
                            <FiCalendar className="w-3 h-3" /> {edu.duration}
                          </span>
                          <span className="text-xs font-mono font-bold text-amber-400">
                            {edu.scoreLabel}: {edu.score}
                          </span>
                        </div>

                        <h3 className="font-extrabold text-slate-100 dark:text-slate-100 light:text-slate-900 text-lg">
                          {edu.degree}
                        </h3>

                        <p className="text-xs font-semibold text-slate-300 dark:text-slate-300 light:text-slate-700 mt-1 flex items-center gap-1">
                          <FiMapPin className="w-3.5 h-3.5 text-cyan-400" />
                          {edu.institution} ({edu.location})
                        </p>

                        <div className="mt-4 pt-3 border-t border-slate-800/60 dark:border-slate-800/60 light:border-slate-200 space-y-2">
                          {edu.highlights.map((h, i) => (
                            <div key={i} className="flex items-start gap-2">
                              <FiCheckCircle className="w-3.5 h-3.5 text-cyan-400 mt-0.5 shrink-0" />
                              <span className="text-xs text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed">{h}</span>
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
                  className="relative flex flex-col sm:flex-row items-center"
                >
                  <div className="absolute left-4 sm:left-1/2 w-8 h-8 rounded-full bg-slate-900 border-2 border-indigo-400 transform -translate-x-1/2 flex items-center justify-center shadow-glow-indigo z-20">
                    <div className="w-2.5 h-2.5 rounded-full bg-indigo-400 animate-pulse" />
                  </div>

                  <div className="w-full sm:w-1/2 pl-12 sm:pl-10">
                    <div className="glass-card rounded-3xl p-6 border border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 hover:border-indigo-500/40 transition-all">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[11px] font-mono font-bold text-indigo-400 bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/30 flex items-center gap-1">
                          <FiCalendar className="w-3 h-3" /> {exp.period}
                        </span>
                        <span className="text-[10px] font-mono bg-cyan-500/10 text-cyan-400 px-2 py-0.5 rounded">
                          {exp.type}
                        </span>
                      </div>

                      <h3 className="font-extrabold text-slate-100 dark:text-slate-100 light:text-slate-900 text-lg">
                        {exp.title}
                      </h3>

                      <p className="text-xs font-semibold text-slate-300 dark:text-slate-300 light:text-slate-700 mt-1 flex items-center gap-1">
                        <FiMapPin className="w-3.5 h-3.5 text-indigo-400" />
                        {exp.organization} ({exp.location})
                      </p>

                      <div className="mt-4 pt-3 border-t border-slate-800/60 dark:border-slate-800/60 light:border-slate-200 space-y-2">
                        {exp.points.map((pt, i) => (
                          <div key={i} className="flex items-start gap-2">
                            <FiCheckCircle className="w-3.5 h-3.5 text-indigo-400 mt-0.5 shrink-0" />
                            <span className="text-xs text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed">{pt}</span>
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
