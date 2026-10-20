import React, { useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiPrinter, FiCheckCircle, FiExternalLink, FiBriefcase, FiBookOpen, FiAward, FiCode } from 'react-icons/fi';
import { personalDetails, educationData, projectsData, certificationsAndAchievements, resumeSkills } from '../data/portfolioData';
import { playClickSound, playHoverSound } from '../utils/soundEffects';

const ResumeModal = ({ isOpen, onClose, isDark }) => {
  const modalContentRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const handleDownloadPDF = () => {
    playClickSound();
    const printContent = modalContentRef.current;
    if (!printContent) return;

    const win = window.open('', '', 'width=900,height=1000');
    win.document.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>${personalDetails.name} - Resume</title>
          <style>
            body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; margin: 30px; color: #1e293b; line-height: 1.5; }
            h1 { font-size: 24px; margin-bottom: 4px; color: #0f172a; text-transform: uppercase; letter-spacing: 0.5px; }
            .subtitle { font-size: 14px; font-weight: 600; color: #0284c7; margin-bottom: 8px; }
            .contact { font-size: 12px; color: #64748b; margin-bottom: 20px; border-bottom: 2px solid #e2e8f0; padding-bottom: 12px; }
            h2 { font-size: 14px; text-transform: uppercase; letter-spacing: 1px; color: #0f172a; border-bottom: 1px solid #cbd5e1; padding-bottom: 4px; margin-top: 18px; margin-bottom: 10px; }
            p, li { font-size: 12px; }
            ul { margin-top: 4px; padding-left: 18px; }
            li { margin-bottom: 4px; }
            .item-header { display: flex; justify-content: space-between; font-weight: bold; font-size: 13px; margin-top: 8px; }
            .item-sub { font-style: italic; color: #475569; font-size: 12px; margin-bottom: 4px; }
          </style>
        </head>
        <body>
          <h1>${personalDetails.name}</h1>
          <div class="subtitle">${personalDetails.title}</div>
          <div class="contact">
            ${personalDetails.location} | ${personalDetails.phone} | <a href="mailto:${personalDetails.email}" style="color: #0284c7; text-decoration: none;">${personalDetails.email}</a><br/>
            <a href="${personalDetails.linkedin}" target="_blank" style="color: #0284c7; text-decoration: none;">LinkedIn: ${personalDetails.linkedin}</a> | <a href="${personalDetails.github}" target="_blank" style="color: #0284c7; text-decoration: none;">GitHub: ${personalDetails.github}</a>
          </div>

          <h2>Professional Summary</h2>
          <p>${personalDetails.bioLong}</p>

          <h2>Technical Skills</h2>
          <p><strong>Languages:</strong> JavaScript, Python, SQL</p>
          <p><strong>Frontend:</strong> HTML5, CSS3, React.js, Tailwind CSS</p>
          <p><strong>Backend & API:</strong> FastAPI, REST APIs, JWT Authentication</p>
          <p><strong>Database:</strong> PostgreSQL, MySQL, SQLite</p>
          <p><strong>Tools & Concepts:</strong> Git, GitHub, VS Code</p>
          <p><strong>AI:</strong> OpenAI API, GenAI/LLMs, AI Agents, NLP Basics</p>

          <h2>Key Projects</h2>
          ${projectsData.map(p => `
            <div class="item-header">
              <span>${p.title}</span>
              <span>[GitHub]</span>
            </div>
            <div class="item-sub">${p.techStack.join(' · ')}</div>
            <ul>
              ${p.highlights.map(h => `<li>${h}</li>`).join('')}
            </ul>
          `).join('')}

          <h2>Education</h2>
          ${educationData.map(e => `
            <div class="item-header">
              <span>${e.degree} — ${e.institution}</span>
              <span>${e.duration}</span>
            </div>
            <div class="item-sub">CGPA: ${e.score}</div>
          `).join('')}

          <h2>Certifications & Achievements</h2>
          <ul>
            ${certificationsAndAchievements.map(c => `<li><strong>${c.title}</strong> (${c.issuer}): ${c.description}</li>`).join('')}
          </ul>

          <h2>Languages</h2>
          <p>English (Professional) • Hindi (Native) • Marathi (Native)</p>
        </body>
      </html>
    `);
    win.document.close();
    win.focus();
    setTimeout(() => {
      win.print();
    }, 450);
  };

  if (!isOpen) return null;

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
          className="relative w-full max-w-4xl bg-white dark:bg-[#0a0f1d] border border-slate-200 dark:border-white/10 rounded-3xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col z-10"
        >
          {/* Modal Header */}
          <div className="px-6 py-4 bg-slate-100 dark:bg-slate-900/90 border-b border-slate-200 dark:border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-cyan-500/15 text-cyan-600 dark:text-cyan-400">
                <FiBriefcase className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-display font-extrabold text-slate-900 dark:text-slate-100 text-lg">
                  Saurabh Kumbhare's Resume
                </h3>
                <p className="text-xs font-mono text-slate-500 dark:text-slate-400">
                  ATS-Optimized & Print-Ready Format
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleDownloadPDF}
                onMouseEnter={() => playHoverSound()}
                className="flex items-center gap-2 px-4 py-2 text-xs font-display font-bold bg-gradient-to-r from-cyan-400 to-sky-500 text-slate-950 rounded-xl transition-all shadow-glow-cyan hover:scale-[1.02] active:scale-95"
              >
                <FiPrinter className="w-4 h-4" />
                Print / Export PDF
              </button>
              <button
                onClick={() => {
                  playClickSound();
                  onClose();
                }}
                onMouseEnter={() => playHoverSound()}
                aria-label="Close modal"
                className="p-2 rounded-xl text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                <FiX className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Modal Body - Resume Document Preview */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-slate-700 dark:text-slate-300" ref={modalContentRef}>
            {/* Header info */}
            <div className="border-b border-slate-200 dark:border-white/10 pb-6 text-center sm:text-left flex flex-col sm:flex-row justify-between items-start gap-4">
              <div>
                <h1 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight">
                  {personalDetails.name}
                </h1>
                <p className="text-cyan-600 dark:text-cyan-400 font-semibold text-sm mt-1">
                  {personalDetails.title}
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">
                  {personalDetails.location} • {personalDetails.phone} • {personalDetails.email}
                </p>
              </div>
              <div className="flex flex-wrap gap-2 text-xs">
                <a
                  href={personalDetails.github}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3.5 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-white/10 hover:text-cyan-500 flex items-center gap-1.5 font-medium"
                >
                  GitHub <FiExternalLink className="w-3 h-3" />
                </a>
                <a
                  href={personalDetails.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3.5 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-white/10 hover:text-cyan-500 flex items-center gap-1.5 font-medium"
                >
                  LinkedIn <FiExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Summary */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-widest text-cyan-600 dark:text-cyan-400 font-bold mb-2 flex items-center gap-2">
                <FiCheckCircle /> Professional Summary
              </h4>
              <p className="text-xs sm:text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                {personalDetails.bioLong}
              </p>
            </div>

            {/* Technical Skills */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-widest text-cyan-600 dark:text-cyan-400 font-bold mb-3 flex items-center gap-2">
                <FiCode /> Technical Skills
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-xs">
                {resumeSkills.map((item, idx) => (
                  <div key={idx} className="p-3 rounded-2xl bg-slate-100 dark:bg-slate-900/60 border border-slate-200 dark:border-white/5">
                    <span className="font-bold text-slate-900 dark:text-slate-100 block mb-1">{item.category}:</span>
                    <span className="text-slate-600 dark:text-slate-400">{item.skills}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Projects */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-widest text-cyan-600 dark:text-cyan-400 font-bold mb-3 flex items-center gap-2">
                <FiBriefcase /> Key Projects
              </h4>
              <div className="space-y-3.5">
                {projectsData.map((project) => (
                  <div key={project.id} className="p-4 rounded-2xl bg-slate-100 dark:bg-slate-900/50 border border-slate-200 dark:border-white/5">
                    <div className="flex justify-between items-start mb-1.5">
                      <h5 className="font-display font-bold text-slate-900 dark:text-white text-sm">
                        {project.title}
                      </h5>
                      <span className="text-[10px] font-mono text-cyan-600 dark:text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded-md font-semibold">
                        {project.techStack.join(' • ')}
                      </span>
                    </div>
                    <ul className="list-disc list-inside text-xs space-y-1 text-slate-700 dark:text-slate-300">
                      {project.highlights.map((h, i) => (
                        <li key={i}>{h}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-widest text-cyan-600 dark:text-cyan-400 font-bold mb-3 flex items-center gap-2">
                <FiBookOpen /> Education
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {educationData.map((edu) => (
                  <div key={edu.id} className="p-4 rounded-2xl bg-slate-100 dark:bg-slate-900/50 border border-slate-200 dark:border-white/5">
                    <div className="flex justify-between items-start mb-1">
                      <h5 className="font-display font-bold text-slate-900 dark:text-white text-xs">{edu.degree}</h5>
                      <span className="text-[10px] font-mono bg-cyan-500/15 text-cyan-700 dark:text-cyan-400 px-2 py-0.5 rounded-md font-bold">{edu.duration}</span>
                    </div>
                    <p className="text-xs text-slate-500 dark:text-slate-400">{edu.institution}</p>
                    <p className="text-xs font-semibold text-cyan-600 dark:text-cyan-400 mt-2">CGPA: {edu.score}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-widest text-cyan-600 dark:text-cyan-400 font-bold mb-2 flex items-center gap-2">
                <FiAward /> Certifications & Achievements
              </h4>
              <ul className="list-disc list-inside text-xs space-y-1 text-slate-700 dark:text-slate-300">
                {certificationsAndAchievements.map((item, idx) => (
                  <li key={idx}>
                    <strong className="text-slate-900 dark:text-slate-100">{item.title}:</strong> {item.description}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ResumeModal;
