import React from 'react';
import { motion } from 'framer-motion';
import { FiUser, FiTarget, FiZap, FiAward, FiGlobe, FiCheckCircle } from 'react-icons/fi';
import { personalDetails } from '../data/portfolioData';

const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-mono font-semibold mb-3 border border-cyan-500/20"
          >
            <FiUser className="w-3.5 h-3.5" />
            <span>GET TO KNOW ME</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-slate-100 dark:text-slate-100 light:text-slate-900 tracking-tight"
          >
            About <span className="gradient-text">Saurabh Kumbhare</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-400 dark:text-slate-400 light:text-slate-600 text-sm mt-3"
          >
            Full-Stack Developer passionate about merging clean software design with modern AI capabilities.
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
            className="lg:col-span-7 glass-card rounded-3xl p-8 border border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 flex flex-col justify-between"
          >
            <div className="space-y-6">
              <div className="flex items-center gap-3 border-b border-slate-800 dark:border-slate-800 light:border-slate-200 pb-4">
                <div className="p-3 rounded-2xl bg-cyan-500/10 text-cyan-400">
                  <FiUser className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-100 dark:text-slate-100 light:text-slate-900 text-lg">
                    Professional Profile
                  </h3>
                  <p className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-500">
                    Nagpur, Maharashtra, India
                  </p>
                </div>
              </div>

              <p className="text-slate-300 dark:text-slate-300 light:text-slate-700 text-sm leading-relaxed">
                {personalDetails.bioLong}
              </p>

              {/* Career Objective */}
              <div className="p-5 rounded-2xl bg-gradient-to-r from-cyan-500/10 to-indigo-500/10 border border-cyan-500/20">
                <h4 className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider mb-2 flex items-center gap-2">
                  <FiTarget className="w-4 h-4 text-cyan-400" />
                  Career Objective
                </h4>
                <p className="text-xs text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed italic">
                  "{personalDetails.careerObjective}"
                </p>
              </div>

              {/* Languages */}
              <div className="pt-2">
                <h4 className="text-xs font-mono font-bold text-slate-400 dark:text-slate-400 light:text-slate-600 uppercase tracking-wider mb-3 flex items-center gap-2">
                  <FiGlobe className="w-4 h-4 text-cyan-400" />
                  Spoken Languages
                </h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3.5 py-1.5 rounded-xl bg-slate-800/60 dark:bg-slate-800/60 light:bg-slate-100 border border-slate-700/60 text-xs font-medium text-slate-200 dark:text-slate-200 light:text-slate-800 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-cyan-400" /> English (Professional)
                  </span>
                  <span className="px-3.5 py-1.5 rounded-xl bg-slate-800/60 dark:bg-slate-800/60 light:bg-slate-100 border border-slate-700/60 text-xs font-medium text-slate-200 dark:text-slate-200 light:text-slate-800 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" /> Hindi (Native)
                  </span>
                  <span className="px-3.5 py-1.5 rounded-xl bg-slate-800/60 dark:bg-slate-800/60 light:bg-slate-100 border border-slate-700/60 text-xs font-medium text-slate-200 dark:text-slate-200 light:text-slate-800 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-indigo-400" /> Marathi (Native)
                  </span>
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
            <div className="glass-card rounded-3xl p-7 border border-slate-800/80 dark:border-slate-800/80 light:border-slate-200">
              <h3 className="font-bold text-slate-100 dark:text-slate-100 light:text-slate-900 text-lg mb-4 flex items-center gap-2">
                <FiZap className="w-5 h-5 text-amber-400" />
                Core Personal Strengths
              </h3>
              <div className="space-y-3">
                {personalDetails.strengths.map((strength, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-slate-900/40 dark:bg-slate-900/40 light:bg-slate-50 border border-slate-800/40 dark:border-slate-800/40 light:border-slate-200">
                    <FiCheckCircle className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                    <span className="text-xs text-slate-300 dark:text-slate-300 light:text-slate-700 font-medium">
                      {strength}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Academic Highlight Card */}
            <div className="glass-card rounded-3xl p-7 border border-cyan-500/30 bg-gradient-to-br from-cyan-950/20 to-slate-900/60 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10 text-cyan-400">
                <FiAward className="w-24 h-24" />
              </div>
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono font-bold text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/30">
                    ACADEMIC EXCELLENCE
                  </span>
                  <span className="text-lg font-extrabold text-white font-mono">8.2 / 10 CGPA</span>
                </div>
                <h4 className="font-bold text-white text-base">Bachelor of Computer Applications (BCA)</h4>
                <p className="text-xs text-slate-400 mt-1">G H Raisoni University, Amravati (2022 – 2025)</p>
                <p className="text-xs text-slate-300 mt-3">
                  Maintained consistent distinction across all 3 undergraduate years with specialized training in Python, Web Engineering, and Data Structures.
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
