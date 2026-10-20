import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiFolder, FiGithub, FiExternalLink, FiBookOpen, FiArrowRight, FiLayers, FiCpu } from 'react-icons/fi';
import { projectsData } from '../data/portfolioData';
import ProjectModal from './ProjectModal';
import { playHoverSound, playClickSound } from '../utils/soundEffects';

const filterCategories = [
  { id: 'all', label: 'All Projects' },
  { id: 'ai', label: 'AI Solutions' },
  { id: 'web', label: 'Full-Stack Apps' },
  { id: 'cv', label: 'Computer Vision' },
];

const Projects = ({ isDark }) => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredProjects = projectsData.filter((project) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'ai') return project.category.toLowerCase().includes('ai');
    if (activeFilter === 'web') return project.category.toLowerCase().includes('stack') || project.category.toLowerCase().includes('web');
    if (activeFilter === 'cv') return project.category.toLowerCase().includes('vision') || project.title.toLowerCase().includes('attendance');
    return true;
  });

  return (
    <section id="projects" className="py-28 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="ambient-glow top-1/4 right-10 w-[420px] h-[420px] bg-cyan-500/10 dark:bg-cyan-500/15" />
      <div className="ambient-glow bottom-1/4 left-10 w-[420px] h-[420px] bg-indigo-500/10 dark:bg-indigo-500/15" />

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
            <FiFolder className="w-3.5 h-3.5 text-cyan-500 dark:text-cyan-400" />
            <span className="text-cyan-600 dark:text-cyan-400 tracking-wider">03 // FEATURED WORK</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-display font-extrabold text-slate-900 dark:text-slate-100 tracking-tight"
          >
            Engineered Systems & <span className="gradient-text">Product Showcase</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-600 dark:text-slate-400 text-sm sm:text-base mt-4 max-w-2xl mx-auto"
          >
            Full-stack web applications, AI-integrated platforms, and computer vision systems built with modern stacks.
          </motion.p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filterCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                playClickSound();
                setActiveFilter(cat.id);
              }}
              onMouseEnter={() => playHoverSound()}
              data-cursor-text="FILTER"
              className={`px-5 py-2 rounded-2xl text-xs font-display font-bold transition-all duration-200 ${
                activeFilter === cat.id
                  ? 'bg-gradient-to-r from-cyan-400 via-sky-500 to-indigo-600 text-slate-950 shadow-glow-cyan scale-[1.03]'
                  : 'glass-card text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 hover:border-cyan-400/40'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => playHoverSound()}
              className="glass-card rounded-3xl overflow-hidden border border-slate-200/80 dark:border-white/10 hover:border-cyan-400/50 hover:shadow-glow-cyan transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Image Banner with Scanlines & Hover Zoom */}
                <div className="relative h-52 overflow-hidden bg-slate-900 scanlines">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                  
                  {/* Floating Category Badge */}
                  <span className="absolute top-4 left-4 text-[10px] font-mono font-bold uppercase tracking-wider text-cyan-300 bg-slate-950/80 backdrop-blur-md px-3 py-1 rounded-full border border-cyan-400/40 shadow-sm">
                    {project.badge}
                  </span>
                </div>

                {/* Body Content */}
                <div className="p-6 sm:p-7">
                  <h3 className="font-display font-extrabold text-slate-900 dark:text-slate-100 text-xl group-hover:text-cyan-500 dark:group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs font-mono font-semibold text-cyan-600 dark:text-cyan-400 mt-1 mb-3">
                    {project.tagline}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-3 mb-5">
                    {project.description}
                  </p>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] font-mono font-medium px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-900/80 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-white/5"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-6 pt-0 border-t border-slate-200/60 dark:border-white/5 mt-auto flex items-center justify-between gap-3">
                <button
                  onClick={() => {
                    playClickSound();
                    setSelectedProject(project);
                  }}
                  onMouseEnter={() => playHoverSound()}
                  data-cursor-text="EXPAND"
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-600 dark:text-cyan-400 border border-cyan-500/25 text-xs font-display font-bold transition-all duration-200"
                >
                  <FiBookOpen className="w-3.5 h-3.5" />
                  <span>Case Study</span>
                </button>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => playClickSound()}
                  onMouseEnter={() => playHoverSound()}
                  data-cursor-text="CODE"
                  aria-label={`View ${project.title} on GitHub`}
                  className="p-2.5 rounded-xl glass-card text-slate-600 dark:text-slate-300 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors"
                >
                  <FiGithub className="w-4 h-4" />
                </a>

                {project.liveDemo && (
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => playClickSound()}
                    onMouseEnter={() => playHoverSound()}
                    data-cursor-text="LIVE"
                    aria-label={`Open ${project.title} live demo`}
                    className="p-2.5 rounded-xl glass-card text-slate-600 dark:text-slate-300 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors"
                  >
                    <FiExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal deep dive */}
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
            isDark={isDark}
          />
        )}

      </div>
    </section>
  );
};

export default Projects;
