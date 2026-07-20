import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiGithub, FiExternalLink, FiLayers, FiCheckCircle, FiAlertCircle, FiCpu } from 'react-icons/fi';

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  const { caseStudy } = project;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-950/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-3xl bg-slate-900 dark:bg-slate-900 light:bg-white border border-slate-800 dark:border-slate-800 light:border-slate-200 rounded-3xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
        >
          {/* Header */}
          <div className="relative h-48 sm:h-56 overflow-hidden shrink-0">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent" />
            
            <button
              onClick={onClose}
              aria-label="Close modal"
              className="absolute top-4 right-4 p-2 rounded-full bg-slate-950/60 text-slate-300 hover:text-white backdrop-blur-md transition-colors"
            >
              <FiX className="w-6 h-6" />
            </button>

            <div className="absolute bottom-4 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-400 bg-cyan-500/10 px-2.5 py-1 rounded-md border border-cyan-500/30">
                  {project.badge}
                </span>
                <h3 className="text-2xl font-extrabold text-white mt-1">
                  {project.title}
                </h3>
              </div>

              <div className="flex gap-2">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-xs font-bold text-slate-200 transition-colors"
                >
                  <FiGithub className="w-3.5 h-3.5" /> Repository
                </a>
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-xs font-bold text-slate-950 transition-colors"
                >
                  <FiExternalLink className="w-3.5 h-3.5" /> Live Demo
                </a>
              </div>
            </div>
          </div>

          {/* Modal Body */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-slate-300 dark:text-slate-300 light:text-slate-800">
            {/* Tech Stack Pills */}
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="text-xs font-mono px-3 py-1 rounded-lg bg-slate-800 dark:bg-slate-800 light:bg-slate-100 text-cyan-400 dark:text-cyan-400 light:text-cyan-700 border border-slate-700/60 dark:border-slate-700/60 light:border-slate-300"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* System Overview */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold mb-2 flex items-center gap-2">
                <FiCpu /> Project Overview
              </h4>
              <p className="text-xs sm:text-sm leading-relaxed text-slate-300 dark:text-slate-300 light:text-slate-700">
                {caseStudy ? caseStudy.overview : project.description}
              </p>
            </div>

            {/* Architecture */}
            {caseStudy?.architecture && (
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold mb-2 flex items-center gap-2">
                  <FiLayers /> Architecture & Design
                </h4>
                <div className="p-4 rounded-2xl bg-slate-800/50 dark:bg-slate-800/50 light:bg-slate-50 border border-slate-800 dark:border-slate-800 light:border-slate-200 space-y-2">
                  {caseStudy.architecture.map((arch, idx) => (
                    <p key={idx} className="text-xs text-slate-300 dark:text-slate-300 light:text-slate-700 font-mono">
                      • {arch}
                    </p>
                  ))}
                </div>
              </div>
            )}

            {/* Key Features */}
            {caseStudy?.features && (
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold mb-2 flex items-center gap-2">
                  <FiCheckCircle /> Key Features
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {caseStudy.features.map((feat, idx) => (
                    <div key={idx} className="p-3 rounded-xl bg-slate-800/40 dark:bg-slate-800/40 light:bg-slate-50 border border-slate-800 dark:border-slate-800 light:border-slate-200 flex items-center gap-2">
                      <FiCheckCircle className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <span className="text-xs text-slate-200 dark:text-slate-200 light:text-slate-800 font-medium">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Engineering Challenges & Solutions */}
            {caseStudy?.challenges && (
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-amber-400 font-bold mb-2 flex items-center gap-2">
                  <FiAlertCircle /> Engineering Challenge & Solution
                </h4>
                <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 space-y-2">
                  {caseStudy.challenges.map((c, idx) => (
                    <p key={idx} className="text-xs text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed">
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
