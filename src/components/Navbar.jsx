import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSun, FiMoon, FiMenu, FiX, FiCode, FiFileText } from 'react-icons/fi';
import { personalDetails } from '../data/portfolioData';

const navLinks = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience & Edu', href: '#experience' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = ({ isDark, setIsDark, onOpenResume }) => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // ScrollSpy for sections
      const sections = navLinks.map(link => link.href.substring(1));
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'glass-nav py-3 border-b border-slate-800/50 dark:border-slate-800/50 light:border-slate-200/80 shadow-md'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#hero"
          className="flex items-center gap-3 group focus:outline-none"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-indigo-600 p-[2px] shadow-glow-cyan group-hover:scale-105 transition-transform">
            <div className="w-full h-full bg-dark-bg dark:bg-dark-bg light:bg-white rounded-[10px] flex items-center justify-center">
              <span className="font-mono font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-500 text-lg">
                SK
              </span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-slate-100 dark:text-slate-100 light:text-slate-900 tracking-tight text-lg group-hover:text-cyan-400 transition-colors">
              {personalDetails.firstName}{' '}
              <span className="text-cyan-400 font-semibold">{personalDetails.lastName}</span>
            </span>
            <span className="text-[11px] font-mono text-cyan-400/90 dark:text-cyan-400/90 light:text-cyan-600">
              Full-Stack Dev
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 bg-slate-900/60 dark:bg-slate-900/60 light:bg-slate-100/80 backdrop-blur-md px-4 py-1.5 rounded-full border border-slate-800/60 dark:border-slate-800/60 light:border-slate-200">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                className={`relative px-3.5 py-1.5 text-xs font-semibold rounded-full transition-colors ${
                  isActive
                    ? 'text-cyan-400 dark:text-cyan-400 light:text-cyan-600 font-bold'
                    : 'text-slate-300 dark:text-slate-300 light:text-slate-600 hover:text-cyan-300 dark:hover:text-cyan-300 light:hover:text-cyan-600'
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeNavTab"
                    className="absolute inset-0 bg-cyan-500/10 dark:bg-cyan-500/15 light:bg-cyan-500/10 border border-cyan-500/30 rounded-full z-0"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.name}</span>
              </a>
            );
          })}
        </nav>

        {/* Action Controls */}
        <div className="hidden lg:flex items-center gap-3">
          <button
            onClick={() => setIsDark(!isDark)}
            aria-label="Toggle Theme"
            className="p-2.5 rounded-full bg-slate-800/80 dark:bg-slate-800/80 light:bg-slate-200/80 text-cyan-400 dark:text-cyan-400 light:text-slate-700 hover:scale-110 transition-transform border border-slate-700/50 dark:border-slate-700/50 light:border-slate-300"
          >
            {isDark ? <FiSun className="w-4 h-4 text-amber-400" /> : <FiMoon className="w-4 h-4 text-indigo-600" />}
          </button>

          <button
            onClick={onOpenResume}
            className="flex items-center gap-2 px-4 py-2 text-xs font-bold text-slate-900 bg-gradient-to-r from-cyan-400 to-cyan-300 hover:from-cyan-300 hover:to-cyan-200 rounded-full shadow-glow-cyan hover:scale-105 transition-all"
          >
            <FiFileText className="w-4 h-4" />
            Resume
          </button>
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={() => setIsDark(!isDark)}
            aria-label="Toggle Theme"
            className="p-2 rounded-lg bg-slate-800/80 dark:bg-slate-800/80 light:bg-slate-200/80 text-cyan-400"
          >
            {isDark ? <FiSun className="w-5 h-5 text-amber-400" /> : <FiMoon className="w-5 h-5 text-indigo-600" />}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Open Mobile Menu"
            className="p-2 rounded-lg bg-slate-800/80 text-slate-200 hover:text-cyan-400"
          >
            {mobileMenuOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden glass-nav border-b border-slate-800 overflow-hidden px-6 py-6"
          >
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-sm font-semibold py-2.5 px-4 rounded-xl transition-colors ${
                    activeSection === link.href.substring(1)
                      ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/30'
                      : 'text-slate-300 hover:bg-slate-800/50 hover:text-cyan-300'
                  }`}
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-2 border-t border-slate-800 flex flex-col gap-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenResume();
                  }}
                  className="w-full flex items-center justify-center gap-2 py-3 font-bold text-xs rounded-xl bg-gradient-to-r from-cyan-400 to-indigo-500 text-slate-950 shadow-glow-cyan"
                >
                  <FiFileText className="w-4 h-4" />
                  View & Download Resume
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
