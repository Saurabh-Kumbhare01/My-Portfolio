import React from 'react';
import { motion } from 'framer-motion';
import { FiUser, FiTarget, FiZap, FiAward, FiGlobe, FiCheckCircle, FiShield, FiHeart } from 'react-icons/fi';
import { personalDetails } from '../data/portfolioData';
import { playHoverSound } from '../utils/soundEffects';

const About = ({ isDark }) => {
  return (
    <section id="about" className="py-28 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="ambient-glow top-1/3 left-10 w-96 h-96 bg-cyan-500/10 dark:bg-cyan-500/15" />
      <div className="ambient-glow bottom-10 right-10 w-96 h-96 bg-indigo-500/10 dark:bg-indigo-500/15" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full hologram-pill text-xs font-mono font-semibold mb-4"
          >
            <FiUser className="w-3.5 h-3.5 text-cyan-500 dark:text-cyan-400" />
            <span className="text-cyan-600 dark:text-cyan-400 tracking-wider">01 // PROFILE & BACKGROUND</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-display font-extrabold text-slate-900 dark:text-slate-100 tracking-tight"
          >
            Engineering With <span className="gradient-text">Purpose & Precision</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-600 dark:text-slate-400 text-sm sm:text-base mt-4 max-w-2xl mx-auto"
          >
            Dedicated to crafting resilient web platforms, REST APIs, and AI-assisted workflows that merge performance with delightful user experiences.
          </motion.p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main Bio Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 glass-card rounded-3xl p-8 sm:p-10 flex flex-col justify-between"
          >
            <div className="space-y-6">
              {/* Header Badge */}
              <div className="flex items-center justify-between border-b border-slate-200/80 dark:border-white/10 pb-5">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-2xl bg-cyan-500/10 text-cyan-500 dark:text-cyan-400">
                    <FiUser className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-slate-900 dark:text-slate-100 text-xl">
                      {personalDetails.name}
                    </h3>
                    <p className="text-xs font-mono text-cyan-600 dark:text-cyan-400">
                      {personalDetails.location}
                    </p>
                  </div>
                </div>

                <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-mono font-semibold">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  Available 2026
                </span>
              </div>

              {/* Bio Narrative */}
              <p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                {personalDetails.bioLong}
              </p>

              {/* Career Objective */}
              <div className="p-5 rounded-2xl bg-gradient-to-r from-cyan-500/10 via-sky-500/10 to-indigo-500/10 border border-cyan-500/20">
                <h4 className="text-xs font-mono font-bold text-cyan-600 dark:text-cyan-400 uppercase tracking-wider mb-2 flex items-center gap-2">
                  <FiTarget className="w-4 h-4 text-cyan-500" />
                  Career Objective
                </h4>
                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed italic">
                  "{personalDetails.careerObjective}"
                </p>
              </div>

              {/* Languages Spoken */}
              <div className="pt-2">
                <h4 className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider mb-3 flex items-center gap-2">
                  <FiGlobe className="w-4 h-4 text-cyan-500" />
                  Spoken Languages
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  <div
                    onMouseEnter={() => playHoverSound()}
                    className="p-3 rounded-2xl bg-slate-100 dark:bg-slate-900/60 border border-slate-200/80 dark:border-white/5 flex items-center justify-between"
                  >
                    <span className="text-xs font-semibold text-slate-800 dark:text-slate-200">English</span>
                    <span className="text-[10px] font-mono font-bold text-cyan-600 dark:text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded-md">
                      Professional
                    </span>
                  </div>
                  <div
                    onMouseEnter={() => playHoverSound()}
                    className="p-3 rounded-2xl bg-slate-100 dark:bg-slate-900/60 border border-slate-200/80 dark:border-white/5 flex items-center justify-between"
                  >
                    <span className="text-xs font-semibold text-slate-800 dark:text-slate-200">Hindi</span>
                    <span className="text-[10px] font-mono font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-md">
                      Native
                    </span>
                  </div>
                  <div
                    onMouseEnter={() => playHoverSound()}
                    className="p-3 rounded-2xl bg-slate-100 dark:bg-slate-900/60 border border-slate-200/80 dark:border-white/5 flex items-center justify-between"
                  >
                    <span className="text-xs font-semibold text-slate-800 dark:text-slate-200">Marathi</span>
                    <span className="text-[10px] font-mono font-bold text-indigo-600 dark:text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded-md">
                      Native
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </motion.div>

          {/* Right Column: Key Strengths & Academic Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            {/* Core Strengths Card */}
            <div className="glass-card rounded-3xl p-7">
              <h3 className="font-display font-bold text-slate-900 dark:text-slate-100 text-lg mb-4 flex items-center gap-2">
                <FiZap className="w-5 h-5 text-amber-500" />
                Core Engineering Strengths
              </h3>
              <div className="space-y-2.5">
                {personalDetails.strengths.map((strength, idx) => (
                  <div
                    key={idx}
                    onMouseEnter={() => playHoverSound()}
                    className="flex items-start gap-3 p-3 rounded-2xl bg-white/50 dark:bg-slate-900/40 border border-slate-200/60 dark:border-white/5 hover:border-cyan-400/40 transition-colors"
                  >
                    <div className="p-1 rounded-lg bg-cyan-500/10 text-cyan-500 dark:text-cyan-400 mt-0.5 shrink-0">
                      <FiCheckCircle className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-xs text-slate-700 dark:text-slate-300 font-medium">
                      {strength}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Academic Highlight Card with Holographic Gradient */}
            <div className="glass-card rounded-3xl p-7 border border-cyan-500/30 bg-gradient-to-br from-cyan-500/10 via-sky-500/5 to-indigo-500/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10 text-cyan-500 dark:text-cyan-400 pointer-events-none">
                <FiAward className="w-28 h-28" />
              </div>
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono font-bold text-cyan-700 dark:text-cyan-400 bg-cyan-500/15 px-3 py-1 rounded-full border border-cyan-500/30 uppercase tracking-wider">
                    ACADEMIC DISTINCTION
                  </span>
                  <span className="text-xl font-display font-black text-slate-900 dark:text-white">
                    8.2 / 10 CGPA
                  </span>
                </div>
                <h4 className="font-display font-bold text-slate-900 dark:text-white text-base">
                  Bachelor of Computer Applications (BCA)
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                  G H Raisoni University, Amravati (2022 – 2025)
                </p>
                <p className="text-xs text-slate-700 dark:text-slate-300 mt-3 leading-relaxed">
                  Maintained consistent distinction across all undergraduate semesters with dedicated focus on Web Technologies, Python Architecture, Database Design, and AI Integration.
                </p>
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
