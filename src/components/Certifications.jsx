import React from 'react';
import { motion } from 'framer-motion';
import { FiAward, FiCheckCircle, FiCalendar, FiExternalLink } from 'react-icons/fi';
import { certificationsAndAchievements } from '../data/portfolioData';

const Certifications = () => {
  return (
    <section id="certifications" className="py-24 relative overflow-hidden">
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
            <FiAward className="w-3.5 h-3.5" />
            <span>HONORS & CREDENTIALS</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-slate-100 dark:text-slate-100 light:text-slate-900 tracking-tight"
          >
            Certifications & <span className="gradient-text">Achievements</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-400 dark:text-slate-400 light:text-slate-600 text-sm mt-3"
          >
            Verified technical training, open-source project publications, and academic milestones.
          </motion.p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certificationsAndAchievements.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="glass-card rounded-3xl p-6 border border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 hover:border-cyan-500/40 transition-all hover:scale-[1.01] group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/30">
                    {item.badge}
                  </span>
                  <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
                    <FiCalendar className="w-3.5 h-3.5 text-cyan-400" /> {item.date}
                  </span>
                </div>

                <h3 className="font-extrabold text-slate-100 dark:text-slate-100 light:text-slate-900 text-lg group-hover:text-cyan-400 transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs font-semibold text-slate-400 dark:text-slate-400 light:text-slate-600 mt-1">
                  Issuing Entity: {item.issuer}
                </p>

                <p className="text-xs text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed mt-3">
                  {item.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800/60 dark:border-slate-800/60 light:border-slate-200 flex items-center justify-between">
                <span className="text-[11px] font-mono text-cyan-400 flex items-center gap-1">
                  <FiCheckCircle className="w-3.5 h-3.5" /> Verified Credential
                </span>
                <span className="text-[10px] font-mono text-slate-500">
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
