import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiCpu, FiCheckCircle, FiCode, FiDatabase, FiLayers, FiTerminal, FiGlobe } from 'react-icons/fi';
import {
  SiPython,
  SiJavascript,
  SiPostgresql,
  SiHtml5,
  SiReact,
  SiTailwindcss,
  SiBootstrap,
  SiFastapi,
  SiMysql,
  SiSqlite,
  SiGithub,
  SiGit
} from 'react-icons/si';
import { skillsData } from '../data/portfolioData';

// Icon lookup resolver with fallbacks
const iconComponents = {
  SiPython: SiPython,
  SiJavascript: SiJavascript,
  SiPostgresql: SiPostgresql,
  SiHtml5: SiHtml5,
  SiReact: SiReact,
  SiTailwindcss: SiTailwindcss,
  SiBootstrap: SiBootstrap,
  SiFastapi: SiFastapi,
  SiMysql: SiMysql,
  SiSqlite: SiSqlite,
  SiGithub: SiGithub,
  SiGit: SiGit,
};

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredSkills = activeCategory === 'all'
    ? skillsData.items
    : skillsData.items.filter(item => item.category === activeCategory);

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-mono font-semibold mb-3 border border-cyan-500/20"
          >
            <FiCpu className="w-3.5 h-3.5" />
            <span>TECHNICAL CAPABILITIES</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-slate-100 dark:text-slate-100 light:text-slate-900 tracking-tight"
          >
            Skills & <span className="gradient-text">Technologies</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-400 dark:text-slate-400 light:text-slate-600 text-sm mt-3"
          >
            Organized across programming languages, web frameworks, database engines, and AI tooling.
          </motion.p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {skillsData.categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all relative ${
                activeCategory === cat.id
                  ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-glow-cyan scale-105'
                  : 'glass-card text-slate-400 dark:text-slate-400 light:text-slate-600 hover:text-slate-200 hover:border-cyan-500/30'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredSkills.map((skill, index) => {
              const IconComp = iconComponents[skill.icon] || FiCode;

              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: index * 0.03 }}
                  key={skill.name}
                  className="glass-card rounded-2xl p-5 border border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 hover:border-cyan-500/40 transition-all hover:scale-[1.02] group"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-xl bg-slate-800/80 dark:bg-slate-800/80 light:bg-slate-100 text-cyan-400 group-hover:scale-110 transition-transform">
                        <IconComp className="w-5 h-5" style={{ color: skill.color || '#06b6d4' }} />
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-100 dark:text-slate-100 light:text-slate-900 text-sm">
                          {skill.name}
                        </h3>
                        <span className="text-[10px] font-mono text-cyan-400">
                          {skill.tag}
                        </span>
                      </div>
                    </div>
                    <span className="text-xs font-mono font-bold text-slate-400">
                      {skill.level}%
                    </span>
                  </div>

                  {/* Animated Progress Bar */}
                  <div className="w-full h-2 rounded-full bg-slate-800/80 dark:bg-slate-800/80 light:bg-slate-200 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.1 }}
                      className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-indigo-500"
                    />
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};

export default Skills;
