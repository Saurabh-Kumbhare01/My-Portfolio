import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiCpu, FiSearch, FiCode, FiLayers, FiDatabase, FiTerminal, FiGlobe, FiCheckCircle } from 'react-icons/fi';
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
import { playHoverSound, playClickSound } from '../utils/soundEffects';

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
  FiCpu: FiCpu,
  FiCode: FiCode,
  FiGlobe: FiGlobe,
  FiCheckCircle: FiCheckCircle,
};

const Skills = ({ isDark }) => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredSkills = useMemo(() => {
    return skillsData.items.filter((item) => {
      const matchesCategory =
        activeCategory === 'all' || item.category === activeCategory;
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.tag.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <section id="skills" className="py-28 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="ambient-glow top-1/2 left-1/4 w-96 h-96 bg-cyan-500/10 dark:bg-cyan-500/15" />
      <div className="ambient-glow bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/10 dark:bg-indigo-500/15" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full hologram-pill text-xs font-mono font-semibold mb-4"
          >
            <FiCpu className="w-3.5 h-3.5 text-cyan-500 dark:text-cyan-400" />
            <span className="text-cyan-600 dark:text-cyan-400 tracking-wider">02 // TECHNICAL CAPABILITIES</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-display font-extrabold text-slate-900 dark:text-slate-100 tracking-tight"
          >
            Core Arsenal & <span className="gradient-text">Modern Tech Stack</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-600 dark:text-slate-400 text-sm sm:text-base mt-4 max-w-2xl mx-auto"
          >
            Modern languages, scalable backend engines, reactive web architectures, and next-generation AI integrations.
          </motion.p>
        </div>

        {/* Search & Filter Bar Controls */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {skillsData.categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => {
                    playClickSound();
                    setActiveCategory(cat.id);
                  }}
                  onMouseEnter={() => playHoverSound()}
                  data-cursor-text="FILTER"
                  className={`relative px-4 py-2 rounded-2xl text-xs font-display font-bold transition-all duration-200 ${
                    isActive
                      ? 'bg-gradient-to-r from-cyan-400 via-sky-500 to-indigo-600 text-slate-950 shadow-glow-cyan scale-[1.03]'
                      : 'glass-card text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 hover:border-cyan-400/40'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Interactive Live Search Box */}
          <div className="relative w-full md:w-64">
            <FiSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search technologies..."
              className="w-full pl-10 pr-4 py-2.5 rounded-2xl glass-card text-xs font-mono text-slate-800 dark:text-slate-200 placeholder-slate-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-cyan-400"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Skills Cards Grid */}
        <motion.div
          layout
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
        >
          <AnimatePresence>
            {filteredSkills.map((skill, index) => {
              const IconComp = iconComponents[skill.icon] || FiCode;
              return (
                <motion.div
                  layout
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.25, delay: index * 0.02 }}
                  onMouseEnter={() => playHoverSound()}
                  className="glass-card rounded-3xl p-5 border border-slate-200/80 dark:border-white/10 hover:border-cyan-400/50 hover:shadow-glow-cyan hover:-translate-y-1 transition-all duration-300 group flex flex-col justify-between"
                >
                  <div className="flex items-center justify-between mb-4">
                    {/* Glowing Tech Icon */}
                    <div
                      className="p-3 rounded-2xl bg-slate-100 dark:bg-slate-900/80 border border-slate-200/60 dark:border-white/10 group-hover:scale-110 transition-transform duration-300"
                      style={{ color: skill.color }}
                    >
                      <IconComp className="w-6 h-6" />
                    </div>

                    <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-900/40 px-2 py-0.5 rounded-md">
                      {skill.tag}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-display font-bold text-slate-900 dark:text-slate-100 text-sm group-hover:text-cyan-500 dark:group-hover:text-cyan-400 transition-colors">
                      {skill.name}
                    </h3>
                    
                    {/* Subtle Futuristic Meter */}
                    <div className="mt-3 w-full h-1.5 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: '85%' }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="h-full rounded-full"
                        style={{
                          background: `linear-gradient(90deg, ${skill.color}, #00f5d4)`,
                        }}
                      />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {filteredSkills.length === 0 && (
          <div className="text-center py-12 glass-card rounded-3xl border border-slate-200 dark:border-white/10">
            <FiSearch className="w-8 h-8 mx-auto text-slate-400 mb-2 animate-bounce" />
            <p className="text-sm font-semibold text-slate-600 dark:text-slate-300">
              No matching technologies found for "{searchQuery}"
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('all');
              }}
              className="mt-3 text-xs font-mono font-bold text-cyan-500 hover:underline"
            >
              Reset filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
};

export default Skills;
