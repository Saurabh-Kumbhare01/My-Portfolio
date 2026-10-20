import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSun, FiMoon, FiMenu, FiX, FiFileText, FiVolume2, FiVolumeX, FiRadio } from 'react-icons/fi';
import { personalDetails } from '../data/portfolioData';
import { playHoverSound, playClickSound } from '../utils/soundEffects';

const navLinks = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Journey', href: '#experience' },
  { name: 'Credentials', href: '#certifications' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = ({ isDark, onToggleTheme, soundOn, onToggleSound, onOpenResume }) => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25);

      // Dynamic ScrollSpy
      const sections = [
        'hero',
        'about',
        'skills',
        'projects',
        'experience',
        'certifications',
        'contact',
      ];
      const scrollPosition = window.scrollY + 140;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    playClickSound();
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'py-3.5 glass-nav border-b shadow-lg'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Holographic Logo */}
        <a
          href="#hero"
          onClick={() => playClickSound()}
          onMouseEnter={() => playHoverSound()}
          data-cursor-text="HOME"
          className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-2xl"
        >
          <div className="relative">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-400 via-sky-500 to-indigo-600 p-[2px] shadow-glow-cyan group-hover:scale-105 group-hover:rotate-3 transition-transform duration-300">
              <div className="w-full h-full bg-[#040711] dark:bg-[#040711] light:bg-white rounded-[10px] flex items-center justify-center">
                <span className="font-display font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400 text-lg">
                  SK
                </span>
              </div>
            </div>
            {/* Live radar status dot */}
            <span className="absolute -top-1 -right-1 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500 border-2 border-[#040711]"></span>
            </span>
          </div>

          <div className="flex flex-col">
            <span className="font-display font-extrabold tracking-tight text-lg text-slate-900 dark:text-slate-100 group-hover:text-cyan-400 transition-colors">
              {personalDetails.firstName}{' '}
              <span className="text-cyan-500 dark:text-cyan-400 font-semibold">{personalDetails.lastName}</span>
            </span>
            <span className="text-[11px] font-mono text-cyan-600 dark:text-cyan-400/90 font-medium tracking-wider flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              WEB DEVELOPER // 2026
            </span>
          </div>
        </a>

        {/* Desktop Navigation Floating Pill */}
        <nav className="hidden lg:flex items-center gap-1 bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl px-4 py-1.5 rounded-full border border-slate-200/80 dark:border-white/10 shadow-sm dark:shadow-glass-dark">
          {navLinks.map((link) => {
            const sectionId = link.href.substring(1);
            const isActive = activeSection === sectionId;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                onMouseEnter={() => playHoverSound()}
                data-cursor-text="VISIT"
                className={`relative px-4 py-1.5 text-xs font-semibold rounded-full transition-all duration-200 ${
                  isActive
                    ? 'text-cyan-600 dark:text-cyan-400 font-bold'
                    : 'text-slate-600 dark:text-slate-300 hover:text-cyan-500 dark:hover:text-cyan-300'
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeNavTab"
                    className="absolute inset-0 bg-cyan-500/10 dark:bg-cyan-400/15 border border-cyan-500/30 dark:border-cyan-400/30 rounded-full z-0 shadow-sm"
                    transition={{ type: 'spring', stiffness: 420, damping: 32 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-1.5">
                  {link.name}
                </span>
              </a>
            );
          })}
        </nav>

        {/* Action Controls: Sound FX, Dark/Light Mode, Resume Button */}
        <div className="hidden lg:flex items-center gap-2.5">
          {/* Audio Synthesizer Toggle */}
          <button
            onClick={() => {
              playClickSound();
              onToggleSound();
            }}
            onMouseEnter={() => playHoverSound()}
            title={soundOn ? 'Mute Sci-Fi Audio FX' : 'Enable Sci-Fi Audio FX'}
            aria-label="Toggle Sound Effects"
            data-cursor-text={soundOn ? 'MUTE' : 'AUDIO'}
            className={`p-2.5 rounded-full transition-all duration-300 border ${
              soundOn
                ? 'bg-cyan-500/15 border-cyan-400/40 text-cyan-500 dark:text-cyan-400 shadow-glow-cyan'
                : 'bg-slate-100 dark:bg-slate-900/80 border-slate-200 dark:border-slate-800 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200'
            }`}
          >
            {soundOn ? <FiVolume2 className="w-4 h-4" /> : <FiVolumeX className="w-4 h-4" />}
          </button>

          {/* Theme Switcher Toggle */}
          <button
            onClick={() => {
              playClickSound();
              onToggleTheme();
            }}
            onMouseEnter={() => playHoverSound()}
            aria-label="Toggle Light and Dark Mode"
            title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            data-cursor-text="THEME"
            className="p-2.5 rounded-full bg-slate-100 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:scale-105 active:scale-95 transition-all duration-200 shadow-sm hover:border-cyan-400/50"
          >
            <motion.div
              initial={false}
              animate={{ rotate: isDark ? 0 : 180 }}
              transition={{ duration: 0.4 }}
            >
              {isDark ? (
                <FiSun className="w-4 h-4 text-amber-400 hover:text-amber-300" />
              ) : (
                <FiMoon className="w-4 h-4 text-indigo-600 hover:text-indigo-500" />
              )}
            </motion.div>
          </button>

          {/* Futuristic Resume Button */}
          <button
            onClick={() => {
              playClickSound();
              onOpenResume();
            }}
            onMouseEnter={() => playHoverSound()}
            data-cursor-text="RESUME"
            className="relative group overflow-hidden px-4 py-2 rounded-full font-display font-bold text-xs tracking-wide bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-500 text-slate-950 shadow-glow-cyan hover:shadow-cyan-400/50 hover:scale-[1.03] active:scale-95 transition-all duration-200 flex items-center gap-2"
          >
            <span className="absolute inset-0 w-full h-full bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            <FiFileText className="w-3.5 h-3.5" />
            <span>Resume</span>
          </button>
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={() => {
              playClickSound();
              onToggleSound();
            }}
            aria-label="Toggle Sound"
            className={`p-2 rounded-xl border ${
              soundOn
                ? 'bg-cyan-500/10 border-cyan-400/40 text-cyan-400'
                : 'bg-slate-100 dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-400'
            }`}
          >
            {soundOn ? <FiVolume2 className="w-4 h-4" /> : <FiVolumeX className="w-4 h-4" />}
          </button>

          <button
            onClick={() => {
              playClickSound();
              onToggleTheme();
            }}
            aria-label="Toggle Theme"
            className="p-2 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800"
          >
            {isDark ? <FiSun className="w-5 h-5 text-amber-400" /> : <FiMoon className="w-5 h-5 text-indigo-600" />}
          </button>

          <button
            onClick={() => {
              playClickSound();
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            aria-label="Toggle Navigation Menu"
            className="p-2 rounded-xl bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-800"
          >
            {mobileMenuOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden glass-nav border-b border-slate-200/80 dark:border-white/10 px-6 py-5 shadow-2xl"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => {
                const sectionId = link.href.substring(1);
                const isActive = activeSection === sectionId;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`text-sm font-semibold py-2.5 px-4 rounded-xl transition-all ${
                      isActive
                        ? 'bg-cyan-500/15 text-cyan-600 dark:text-cyan-400 border border-cyan-500/30'
                        : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/60'
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
              <div className="pt-3 mt-2 border-t border-slate-200 dark:border-slate-800">
                <button
                  onClick={() => {
                    playClickSound();
                    setMobileMenuOpen(false);
                    onOpenResume();
                  }}
                  className="w-full flex items-center justify-center gap-2 py-3 font-display font-bold text-xs rounded-xl bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-500 text-slate-950 shadow-glow-cyan"
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
