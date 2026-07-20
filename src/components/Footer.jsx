import React from 'react';
import { FiGithub, FiLinkedin, FiMail, FiHeart } from 'react-icons/fi';
import { personalDetails } from '../data/portfolioData';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-slate-950 dark:bg-slate-950 light:bg-slate-900 text-slate-400 py-12 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand & Tagline */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <a href="#hero" className="flex items-center gap-2 mb-2">
              <span className="font-mono font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-500 text-xl">
                {personalDetails.name}
              </span>
            </a>
            <p className="text-xs text-slate-500 max-w-sm">
              Full-Stack Developer skilled in Python, React.js, FastAPI & AI-Driven Web Applications.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-semibold">
            <a href="#hero" className="hover:text-cyan-400 transition-colors">Home</a>
            <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
            <a href="#skills" className="hover:text-cyan-400 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a>
            <a href="#experience" className="hover:text-cyan-400 transition-colors">Experience</a>
            <a href="#certifications" className="hover:text-cyan-400 transition-colors">Certifications</a>
            <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <a
              href={personalDetails.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub Profile"
              className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-cyan-400 transition-all border border-slate-800"
            >
              <FiGithub className="w-4 h-4" />
            </a>
            <a
              href={personalDetails.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-cyan-400 transition-all border border-slate-800"
            >
              <FiLinkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${personalDetails.email}`}
              aria-label="Email Address"
              className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-cyan-400 transition-all border border-slate-800"
            >
              <FiMail className="w-4 h-4" />
            </a>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-3">
          <p>© {currentYear} Saurabh Premkumar Kumbhare. All rights reserved.</p>
          <p className="flex items-center gap-1.5 font-mono text-[11px]">
            Made with <FiHeart className="w-3.5 h-3.5 text-red-500 fill-current animate-pulse" /> by <span className="text-cyan-400 font-bold">Saurabh Kumbhare</span>
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
