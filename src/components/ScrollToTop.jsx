import React, { useState, useEffect } from 'react';
import { FiArrowUp } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import { playClickSound, playHoverSound } from '../utils/soundEffects';

const ScrollToTop = ({ isDark }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      
      if (totalScroll > 0) {
        setScrollProgress((currentScroll / totalScroll) * 100);
      }

      if (currentScroll > 260) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    playClickSound();
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const radius = 18;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.7 }}
          transition={{ duration: 0.2 }}
          onClick={scrollToTop}
          onMouseEnter={() => playHoverSound()}
          data-cursor-text="TOP"
          aria-label="Scroll back to top"
          className="fixed bottom-6 right-6 z-40 p-2.5 rounded-full glass-card text-cyan-600 dark:text-cyan-400 hover:text-cyan-500 shadow-glow-cyan hover:scale-110 active:scale-95 transition-all duration-200 group flex items-center justify-center"
        >
          <svg className="w-11 h-11 transform -rotate-90 pointer-events-none" viewBox="0 0 50 50">
            <circle
              cx="25"
              cy="25"
              r={radius}
              className="text-slate-300 dark:text-slate-800 stroke-current opacity-40"
              strokeWidth="3"
              fill="transparent"
            />
            <circle
              cx="25"
              cy="25"
              r={radius}
              className="text-cyan-500 stroke-current transition-all duration-150"
              strokeWidth="3"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              fill="transparent"
            />
          </svg>
          <FiArrowUp className="w-4 h-4 absolute text-cyan-600 dark:text-cyan-400 group-hover:-translate-y-1 transition-transform" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;
