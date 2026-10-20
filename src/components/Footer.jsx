import React from 'react';
import { FiGithub, FiLinkedin, FiMail, FiHeart, FiArrowUpRight, FiRadio } from 'react-icons/fi';
import { personalDetails } from '../data/portfolioData';
import { playClickSound, playHoverSound } from '../utils/soundEffects';

const Footer = ({ isDark }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-white/70 dark:bg-[#030610] text-slate-600 dark:text-slate-400 py-14 border-t border-slate-200/80 dark:border-white/10 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="ambient-glow bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-cyan-500/5 dark:bg-cyan-500/10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          
          {/* Brand & Tagline */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <a
              href="#hero"
              onClick={() => playClickSound()}
              onMouseEnter={() => playHoverSound()}
              className="flex items-center gap-2 mb-2 group"
            >
              <span className="font-display font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-sky-500 to-indigo-500 text-2xl tracking-tight">
                {personalDetails.name}
              </span>
            </a>
            <p className="text-xs text-slate-500 max-w-sm font-sans">
              Web Developer skilled in Python, React.js, FastAPI & AI-Driven Web Applications.
            </p>
            <div className="mt-3 flex items-center gap-2 text-[11px] font-mono text-emerald-600 dark:text-emerald-400 font-semibold">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Available for Hire // 2026 Developer Roles</span>
            </div>
          </div>

          {/* Quick Links Matrix */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-display font-semibold">
            {['Home', 'About', 'Skills', 'Projects', 'Journey', 'Credentials', 'Contact'].map((item) => {
              const href = item === 'Journey' ? '#experience' : item === 'Credentials' ? '#certifications' : `#${item.toLowerCase()}`;
              return (
                <a
                  key={item}
                  href={href}
                  onClick={() => playClickSound()}
                  onMouseEnter={() => playHoverSound()}
                  className="text-slate-600 dark:text-slate-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors"
                >
                  {item}
                </a>
              );
            })}
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-2.5">
            <a
              href={personalDetails.github}
              target="_blank"
              rel="noreferrer"
              onClick={() => playClickSound()}
              onMouseEnter={() => playHoverSound()}
              aria-label="GitHub Profile"
              className="p-3 rounded-2xl glass-card text-slate-600 dark:text-slate-300 hover:text-cyan-500 dark:hover:text-cyan-400 hover:scale-110 transition-all duration-200"
            >
              <FiGithub className="w-4 h-4" />
            </a>
            <a
              href={personalDetails.linkedin}
              target="_blank"
              rel="noreferrer"
              onClick={() => playClickSound()}
              onMouseEnter={() => playHoverSound()}
              aria-label="LinkedIn Profile"
              className="p-3 rounded-2xl glass-card text-slate-600 dark:text-slate-300 hover:text-cyan-500 dark:hover:text-cyan-400 hover:scale-110 transition-all duration-200"
            >
              <FiLinkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${personalDetails.email}`}
              onClick={() => playClickSound()}
              onMouseEnter={() => playHoverSound()}
              aria-label="Email Address"
              className="p-3 rounded-2xl glass-card text-slate-600 dark:text-slate-300 hover:text-cyan-500 dark:hover:text-cyan-400 hover:scale-110 transition-all duration-200"
            >
              <FiMail className="w-4 h-4" />
            </a>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-6 border-t border-slate-200/80 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-3">
          <p>© {currentYear} {personalDetails.name}. All rights reserved.</p>
          <p className="flex items-center gap-1.5 font-mono text-[11px]">
            Designed & Engineered by{' '}
            <span className="text-cyan-600 dark:text-cyan-400 font-bold">
              {personalDetails.firstName} {personalDetails.lastName}
            </span>
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
