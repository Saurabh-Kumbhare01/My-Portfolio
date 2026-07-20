import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
import ScrollToTop from './components/ScrollToTop';

function App() {
  const [isDark, setIsDark] = useState(true);
  const [resumeModalOpen, setResumeModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  // Initial Preloader effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  // Update theme class on HTML element
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    }
  }, [isDark]);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDark ? 'bg-dark-bg text-slate-100' : 'bg-light-bg text-slate-900'}`}>
      {/* Loading Screen */}
      <AnimatePresence>
        {loading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-dark-bg text-slate-100"
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-cyan-500 to-indigo-600 p-[2px] animate-spin-slow shadow-glow-cyan">
              <div className="w-full h-full bg-dark-bg rounded-[14px] flex items-center justify-center font-mono font-bold text-cyan-400 text-xl">
                SK
              </div>
            </div>
            <p className="mt-4 font-mono text-xs text-cyan-400 tracking-widest uppercase animate-pulse">
              Initializing Portfolio...
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Background Particles Canvas */}
      <BackgroundCanvas isDark={isDark} />

      {/* Main Page Layout */}
      <div className="relative z-10">
        <Navbar
          isDark={isDark}
          setIsDark={setIsDark}
          onOpenResume={() => setResumeModalOpen(true)}
        />

        <main>
          <Hero onOpenResume={() => setResumeModalOpen(true)} />
          <About />
          <Skills />
          <Projects />
          <ExperienceEducation />
          <Certifications />
          <Contact />
        </main>

        <Footer />

        <ScrollToTop />

        <ResumeModal
          isOpen={resumeModalOpen}
          onClose={() => setResumeModalOpen(false)}
        />
      </div>
    </div>
  );
}

export default App;
