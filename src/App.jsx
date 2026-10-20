import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ExperienceEducation from './components/ExperienceEducation';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';
import BackgroundCanvas from './components/BackgroundCanvas';
import CustomCursor from './components/CustomCursor';
import ScrollToTop from './components/ScrollToTop';
import { setSoundEnabled, playModeSwitchSound } from './utils/soundEffects';

function App() {
  // Theme state with localStorage persistence
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('sk_portfolio_theme');
      if (saved) return saved === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return true;
  });

  // Sound effects state
  const [soundOn, setSoundOn] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('sk_portfolio_sound') === 'true';
    }
    return false;
  });

  const [resumeModalOpen, setResumeModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  // Top scroll reading progress
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Initial Preloader sequence
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1100);
    return () => clearTimeout(timer);
  }, []);

  // Update theme class on HTML element & localStorage
  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      root.classList.remove('light');
      localStorage.setItem('sk_portfolio_theme', 'dark');
    } else {
      root.classList.remove('dark');
      root.classList.add('light');
      localStorage.setItem('sk_portfolio_theme', 'light');
    }
  }, [isDark]);

  // Sync sound setting
  useEffect(() => {
    setSoundEnabled(soundOn);
    localStorage.setItem('sk_portfolio_sound', soundOn ? 'true' : 'false');
  }, [soundOn]);

  const toggleTheme = () => {
    const nextDark = !isDark;
    setIsDark(nextDark);
    playModeSwitchSound(nextDark);
  };

  const toggleSound = () => {
    setSoundOn((prev) => !prev);
  };

  return (
    <div className={`min-h-screen relative font-sans transition-colors duration-300 ${isDark ? 'bg-dark-bg text-slate-100' : 'bg-light-bg text-slate-900'}`}>
      {/* Scroll Reading Progress Bar at very top */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-500 z-50 origin-left"
        style={{ scaleX }}
      />

      {/* Futuristic Custom Cursor */}
      <CustomCursor isDark={isDark} />

      {/* Futuristic Preloader Screen */}
      <AnimatePresence>
        {loading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.04 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#040711] text-slate-100"
          >
            <div className="relative flex items-center justify-center">
              {/* Outer rotating pulse aura */}
              <div className="absolute w-24 h-24 rounded-3xl bg-cyan-500/20 blur-xl animate-pulse" />
              
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-cyan-400 via-sky-500 to-indigo-600 p-[2px] animate-spin-slow shadow-glow-cyan">
                <div className="w-full h-full bg-[#040711] rounded-[14px] flex items-center justify-center font-display font-extrabold text-cyan-400 text-2xl tracking-tighter">
                  SK
                </div>
              </div>
            </div>

            <div className="mt-6 flex flex-col items-center space-y-2">
              <span className="font-mono text-xs text-cyan-400 tracking-[0.25em] uppercase font-bold animate-pulse">
                INITIALIZING PORTFOLIO
              </span>
              <div className="w-32 h-[2px] bg-slate-800 rounded-full overflow-hidden">
                <motion.div
                  initial={{ x: '-100%' }}
                  animate={{ x: '100%' }}
                  transition={{ repeat: Infinity, duration: 1, ease: 'easeInOut' }}
                  className="w-full h-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
                />
              </div>
              <span className="font-mono text-[10px] text-slate-500">
                AI & FULL-STACK SYSTEMS // 2026
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Interactive Background Particle & Lighting Canvas */}
      <BackgroundCanvas isDark={isDark} />

      {/* Main Page Layout */}
      <div className="relative z-10">
        <Navbar
          isDark={isDark}
          onToggleTheme={toggleTheme}
          soundOn={soundOn}
          onToggleSound={toggleSound}
          onOpenResume={() => setResumeModalOpen(true)}
        />

        <main>
          <Hero onOpenResume={() => setResumeModalOpen(true)} isDark={isDark} />
          <About isDark={isDark} />
          <Skills isDark={isDark} />
          <Projects isDark={isDark} />
          <ExperienceEducation isDark={isDark} />
          <Certifications isDark={isDark} />
          <Contact isDark={isDark} />
        </main>

        <Footer isDark={isDark} />

        <ScrollToTop isDark={isDark} />

        <ResumeModal
          isOpen={resumeModalOpen}
          onClose={() => setResumeModalOpen(false)}
          isDark={isDark}
        />
      </div>
    </div>
  );
}

export default App;
