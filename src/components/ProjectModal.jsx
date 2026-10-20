import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiGithub, FiExternalLink, FiLayers, FiCheckCircle, FiAlertCircle, FiCpu } from 'react-icons/fi';
import { playClickSound, playHoverSound } from '../utils/soundEffects';

const ProjectModal = ({ project, onClose, isDark }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  const { caseStudy } = project;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-950/80 backdrop-blur-md">
        
        {/* Backdrop click dismiss */}
        <div
          className="fixed inset-0"
          onClick={() => {
            playClickSound();
            onClose();
          }}
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 350 }}
          className="relative w-full max-w-3xl bg-white dark:bg-[#0a0f1d] border border-slate-200 dark:border-white/10 rounded-3xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col z-10"
        >
          {/* Header Image Banner */}
          <div className="relative h-48 sm:h-60 overflow-hidden shrink-0 bg-slate-950">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1d] dark:from-[#0a0f1d] via-slate-950/60 to-transparent" />
            
            {/* Close Button */}
            <button
              onClick={() => {
                playClickSound();
                onClose();
              }}
              onMouseEnter={() => playHoverSound()}
              aria-label="Close modal"
              className="absolute top-4 right-4 p-2.5 rounded-full bg-slate-950/70 text-slate-300 hover:text-white backdrop-blur-md transition-colors border border-white/10"
            >
              <FiX className="w-5 h-5" />
            </button>

            {/* Title & Quick Actions */}
            <div className="absolute bottom-4 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-3">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-400 bg-cyan-500/20 px-3 py-1 rounded-full border border-cyan-400/30">
                  {project.badge}
                </span>
                <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-white mt-1.5">
                  {project.title}
                </h3>
              </div>

              <div className="flex gap-2">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => playClickSound()}
                  onMouseEnter={() => playHoverSound()}
                  className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-800/90 hover:bg-slate-700 text-xs font-display font-bold text-slate-100 transition-colors border border-white/10"
                >
                  <FiGithub className="w-3.5 h-3.5" /> Repository
                </a>
                {project.liveDemo && (
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => playClickSound()}
                    onMouseEnter={() => playHoverSound()}
                    className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-gradient-to-r from-cyan-400 to-sky-500 text-xs font-display font-bold text-slate-950 transition-colors shadow-glow-cyan"
                  >
                    <FiExternalLink className="w-3.5 h-3.5" /> Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Modal Body */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-slate-700 dark:text-slate-300">
            
            {/* Tech Stack Pills */}
            <div className="flex flex-wrap gap-1.5">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="text-xs font-mono px-3 py-1 rounded-xl bg-slate-100 dark:bg-slate-900 text-cyan-600 dark:text-cyan-400 border border-slate-200 dark:border-white/10 font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* System Overview */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-600 dark:text-cyan-400 font-bold mb-2 flex items-center gap-2">
                <FiCpu className="w-4 h-4 text-cyan-500" /> Project Overview
              </h4>
              <p className="text-xs sm:text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                {caseStudy ? caseStudy.overview : project.description}
              </p>
            </div>

            {/* Architecture */}
            {caseStudy?.architecture && (
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-600 dark:text-cyan-400 font-bold mb-2 flex items-center gap-2">
                  <FiLayers className="w-4 h-4 text-cyan-500" /> Architecture & Implementation
                </h4>
                <div className="p-4 rounded-2xl bg-slate-100 dark:bg-slate-900/60 border border-slate-200 dark:border-white/10 space-y-2">
                  {caseStudy.architecture.map((arch, idx) => (
                    <p key={idx} className="text-xs text-slate-700 dark:text-slate-300 font-mono">
                      • {arch}
                    </p>
                  ))}
                </div>
              </div>
            )}

            {/* Key Features */}
            {caseStudy?.features && (
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-600 dark:text-cyan-400 font-bold mb-2 flex items-center gap-2">
                  <FiCheckCircle className="w-4 h-4 text-cyan-500" /> Key Engineered Capabilities
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {caseStudy.features.map((feat, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-2xl bg-slate-100 dark:bg-slate-900/40 border border-slate-200 dark:border-white/5 flex items-center gap-2.5"
                    >
                      <FiCheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span className="text-xs text-slate-800 dark:text-slate-200 font-medium">
                        {feat}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Engineering Challenges & Solutions */}
            {caseStudy?.challenges && (
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-amber-500 font-bold mb-2 flex items-center gap-2">
                  <FiAlertCircle className="w-4 h-4 text-amber-500" /> Challenges & Solutions
                </h4>
                <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 space-y-2">
                  {caseStudy.challenges.map((c, idx) => (
                    <p key={idx} className="text-xs text-slate-800 dark:text-slate-200 leading-relaxed">
                      {c}
                    </p>
                  ))}
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ProjectModal;
