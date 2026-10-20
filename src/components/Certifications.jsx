import React from 'react';
import { motion } from 'framer-motion';
import { FiAward, FiCheckCircle, FiCalendar, FiExternalLink, FiShield } from 'react-icons/fi';
import { certificationsAndAchievements } from '../data/portfolioData';
import { playHoverSound } from '../utils/soundEffects';

const Certifications = ({ isDark }) => {
  return (
    <section id="certifications" className="py-28 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="ambient-glow top-1/3 right-10 w-96 h-96 bg-cyan-500/10 dark:bg-cyan-500/15" />
      <div className="ambient-glow bottom-10 left-10 w-96 h-96 bg-indigo-500/10 dark:bg-indigo-500/15" />

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
            <FiAward className="w-3.5 h-3.5 text-cyan-500 dark:text-cyan-400" />
            <span className="text-cyan-600 dark:text-cyan-400 tracking-wider">05 // HONORS & CREDENTIALS</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-display font-extrabold text-slate-900 dark:text-slate-100 tracking-tight"
          >
            Verified Credentials & <span className="gradient-text">Achievements</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-600 dark:text-slate-400 text-sm sm:text-base mt-4 max-w-2xl mx-auto"
          >
            Technical specializations, academic distinctions, and software project milestones.
          </motion.p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certificationsAndAchievements.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              onMouseEnter={() => playHoverSound()}
              className="glass-card rounded-3xl p-7 border border-slate-200/80 dark:border-white/10 hover:border-cyan-400/50 hover:shadow-glow-cyan hover:-translate-y-1 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-cyan-700 dark:text-cyan-400 bg-cyan-500/15 px-3 py-1 rounded-full border border-cyan-500/30">
                    {item.badge}
                  </span>
                  <span className="text-xs font-mono text-slate-500 flex items-center gap-1.5">
                    <FiCalendar className="w-3.5 h-3.5 text-cyan-500" /> {item.date}
                  </span>
                </div>

                <h3 className="font-display font-extrabold text-slate-900 dark:text-slate-100 text-xl group-hover:text-cyan-500 dark:group-hover:text-cyan-400 transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 mt-1">
                  Issued By: <span className="text-slate-700 dark:text-slate-300">{item.issuer}</span>
                </p>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mt-4">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200/60 dark:border-white/5 flex items-center justify-between">
                <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5 font-semibold">
                  <FiShield className="w-4 h-4" /> Verified Credential
                </span>
                <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider">
                  {item.category}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Certifications;
