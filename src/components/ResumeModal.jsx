import React, { useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiDownload, FiPrinter, FiCheckCircle, FiExternalLink, FiBriefcase, FiBookOpen, FiAward, FiCode } from 'react-icons/fi';
import { personalDetails, educationData, projectsData, skillsData, certificationsAndAchievements } from '../data/portfolioData';

const ResumeModal = ({ isOpen, onClose }) => {
  const modalContentRef = useRef(null);

  const handleDownloadPDF = () => {
    // Printable window / download trigger
    const printContent = modalContentRef.current;
    if (!printContent) return;

    const win = window.open('', '', 'width=900,height=1000');
    win.document.write(`
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
            ${personalDetails.location} | ${personalDetails.phone} | ${personalDetails.email}<br/>
            LinkedIn: ${personalDetails.linkedin} | GitHub: ${personalDetails.github}
          </div>

          <h2>Professional Summary</h2>
          <p>${personalDetails.bioLong}</p>

          <h2>Technical Skills</h2>
          <p><strong>Languages:</strong> Python, JavaScript, SQL, HTML5, CSS3</p>
          <p><strong>Frontend:</strong> React.js, Tailwind CSS, Bootstrap, Responsive Design, Modern UI/UX</p>
          <p><strong>Databases:</strong> PostgreSQL, MySQL, SQLite</p>
          <p><strong>Tools & AI:</strong> Git, GitHub, VS Code, ChatGPT, GitHub Copilot, Lovable AI</p>

          <h2>Projects</h2>
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
    }, 500);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-950/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-4xl bg-slate-900 dark:bg-slate-900 light:bg-white border border-slate-800 dark:border-slate-800 light:border-slate-200 rounded-3xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
        >
          {/* Modal Header */}
          <div className="px-6 py-4 bg-slate-800/80 dark:bg-slate-800/80 light:bg-slate-100 border-b border-slate-700/60 dark:border-slate-700/60 light:border-slate-200 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-400">
                <FiBriefcase className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-slate-100 dark:text-slate-100 light:text-slate-900 text-lg">
                  Saurabh Kumbhare's Resume
                </h3>
                <p className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-600">
                  ATS Optimized & Print Ready Document
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleDownloadPDF}
                className="flex items-center gap-2 px-4 py-2 text-xs font-bold bg-cyan-500 hover:bg-cyan-400 text-slate-950 rounded-xl transition-all shadow-glow-cyan"
              >
                <FiPrinter className="w-4 h-4" />
                Print / Export PDF
              </button>
              <button
                onClick={onClose}
                aria-label="Close modal"
                className="p-2 rounded-xl hover:bg-slate-700/60 text-slate-400 hover:text-white transition-colors"
              >
                <FiX className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Modal Body - Resume Document Preview */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-slate-300 dark:text-slate-300 light:text-slate-800" ref={modalContentRef}>
            {/* Header info */}
            <div className="border-b border-slate-800 dark:border-slate-800 light:border-slate-200 pb-6 text-center sm:text-left flex flex-col sm:flex-row justify-between items-start gap-4">
              <div>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-white dark:text-white light:text-slate-900 tracking-tight">
                  {personalDetails.name}
                </h1>
                <p className="text-cyan-400 font-semibold text-sm mt-1">
                  {personalDetails.title}
                </p>
                <p className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-600 mt-2">
                  {personalDetails.location} • {personalDetails.phone} • {personalDetails.email}
                </p>
              </div>
              <div className="flex flex-wrap gap-2 text-xs">
                <a
                  href={personalDetails.github}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-slate-800 dark:bg-slate-800 light:bg-slate-100 border border-slate-700 hover:text-cyan-400 flex items-center gap-1.5"
                >
                  GitHub <FiExternalLink className="w-3 h-3" />
                </a>
                <a
                  href={personalDetails.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-slate-800 dark:bg-slate-800 light:bg-slate-100 border border-slate-700 hover:text-cyan-400 flex items-center gap-1.5"
                >
                  LinkedIn <FiExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Summary */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold mb-2 flex items-center gap-2">
                <FiCheckCircle /> Professional Summary
              </h4>
              <p className="text-xs leading-relaxed text-slate-300 dark:text-slate-300 light:text-slate-700">
                {personalDetails.bioLong}
              </p>
            </div>

            {/* Technical Skills */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold mb-3 flex items-center gap-2">
                <FiCode /> Technical Skills
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-xl bg-slate-800/50 dark:bg-slate-800/50 light:bg-slate-50 border border-slate-800 dark:border-slate-800 light:border-slate-200">
                  <span className="font-semibold text-slate-200 dark:text-slate-200 light:text-slate-900 block mb-1">Languages:</span>
                  <span className="text-slate-400">Python, JavaScript, SQL, HTML5, CSS3</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-800/50 dark:bg-slate-800/50 light:bg-slate-50 border border-slate-800 dark:border-slate-800 light:border-slate-200">
                  <span className="font-semibold text-slate-200 dark:text-slate-200 light:text-slate-900 block mb-1">Frontend:</span>
                  <span className="text-slate-400">React.js, Tailwind CSS, Bootstrap, Responsive Design, Modern UI/UX</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-800/50 dark:bg-slate-800/50 light:bg-slate-50 border border-slate-800 dark:border-slate-800 light:border-slate-200">
                  <span className="font-semibold text-slate-200 dark:text-slate-200 light:text-slate-900 block mb-1">Databases:</span>
                  <span className="text-slate-400">PostgreSQL, MySQL, SQLite</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-800/50 dark:bg-slate-800/50 light:bg-slate-50 border border-slate-800 dark:border-slate-800 light:border-slate-200">
                  <span className="font-semibold text-slate-200 dark:text-slate-200 light:text-slate-900 block mb-1">Tools & AI:</span>
                  <span className="text-slate-400">Git, GitHub, VS Code, ChatGPT, GitHub Copilot, Lovable AI</span>
                </div>
              </div>
            </div>

            {/* Projects */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold mb-3 flex items-center gap-2">
                <FiBriefcase /> Key Projects
              </h4>
              <div className="space-y-4">
                {projectsData.map((project) => (
                  <div key={project.id} className="p-4 rounded-xl bg-slate-800/40 dark:bg-slate-800/40 light:bg-slate-50 border border-slate-800 dark:border-slate-800 light:border-slate-200">
                    <div className="flex justify-between items-start mb-1">
                      <h5 className="font-bold text-white dark:text-white light:text-slate-900 text-sm">
                        {project.title}
                      </h5>
                      <span className="text-[11px] font-mono text-cyan-400">{project.techStack.join(' • ')}</span>
                    </div>
                    <ul className="list-disc list-inside text-xs space-y-1 text-slate-300 dark:text-slate-300 light:text-slate-700">
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
              <h4 className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold mb-3 flex items-center gap-2">
                <FiBookOpen /> Education
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {educationData.map((edu) => (
                  <div key={edu.id} className="p-4 rounded-xl bg-slate-800/40 dark:bg-slate-800/40 light:bg-slate-50 border border-slate-800 dark:border-slate-800 light:border-slate-200">
                    <div className="flex justify-between items-start mb-1">
                      <h5 className="font-bold text-white dark:text-white light:text-slate-900 text-xs">{edu.degree}</h5>
                      <span className="text-[10px] font-mono bg-cyan-500/10 text-cyan-400 px-2 py-0.5 rounded-md">{edu.duration}</span>
                    </div>
                    <p className="text-xs text-slate-400">{edu.institution}</p>
                    <p className="text-xs font-semibold text-cyan-400 mt-2">CGPA: {edu.score}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold mb-2 flex items-center gap-2">
                <FiAward /> Certifications & Achievements
              </h4>
              <ul className="list-disc list-inside text-xs space-y-1 text-slate-300 dark:text-slate-300 light:text-slate-700">
                {certificationsAndAchievements.map((item, idx) => (
                  <li key={idx}>
                    <strong className="text-slate-200 dark:text-slate-200 light:text-slate-900">{item.title}:</strong> {item.description}
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
