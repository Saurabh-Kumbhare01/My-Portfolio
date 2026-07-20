import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiFolder, FiGithub, FiExternalLink, FiBookOpen, FiArrowRight } from 'react-icons/fi';
import { projectsData } from '../data/portfolioData';
import ProjectModal from './ProjectModal';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
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
            <FiFolder className="w-3.5 h-3.5" />
            <span>FEATURED WORK</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-slate-100 dark:text-slate-100 light:text-slate-900 tracking-tight"
          >
            Projects & <span className="gradient-text">Product Highlights</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-400 dark:text-slate-400 light:text-slate-600 text-sm mt-3"
          >
            Full-stack web applications, AI-powered tools, and computer vision systems built with modern stacks.
          </motion.p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card rounded-3xl overflow-hidden border border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Image Banner */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
                  
                  <span className="absolute top-3 left-3 text-[10px] font-mono font-bold uppercase tracking-wider text-cyan-400 bg-slate-950/80 backdrop-blur-md px-3 py-1 rounded-full border border-cyan-500/30">
                    {project.badge}
                  </span>
                </div>

                {/* Body Content */}
                <div className="p-6">
                  <h3 className="font-extrabold text-slate-100 dark:text-slate-100 light:text-slate-900 text-xl group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs font-mono text-cyan-400 mt-1 mb-3">
                    {project.tagline}
                  </p>
                  <p className="text-xs text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed line-clamp-3 mb-4">
                    {project.description}
                  </p>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] font-mono px-2.5 py-1 rounded-md bg-slate-800/80 dark:bg-slate-800/80 light:bg-slate-100 text-slate-300 dark:text-slate-300 light:text-slate-700 border border-slate-700/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Footer Buttons */}
              <div className="px-6 pb-6 pt-2 border-t border-slate-800/50 dark:border-slate-800/50 light:border-slate-200 flex items-center justify-between gap-2">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="flex items-center gap-1.5 text-xs font-bold text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  <FiBookOpen className="w-3.5 h-3.5" /> Case Study
                </button>

                <div className="flex items-center gap-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHub Repository"
                    className="p-2 rounded-xl bg-slate-800/60 dark:bg-slate-800/60 light:bg-slate-100 text-slate-300 hover:text-cyan-400 transition-colors"
                  >
                    <FiGithub className="w-4 h-4" />
                  </a>
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Live Demo"
                    className="p-2 rounded-xl bg-cyan-500 text-slate-950 hover:bg-cyan-400 font-bold transition-colors"
                  >
                    <FiExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

        {/* Modal Viewer */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />

      </div>
    </section>
  );
};

export default Projects;
