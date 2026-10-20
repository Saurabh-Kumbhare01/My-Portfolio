import React, { useEffect, useState, useRef } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

const CustomCursor = ({ isDark }) => {
  const [isPointer, setIsPointer] = useState(false);
  const [cursorText, setCursorText] = useState('');
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  // Smooth springs for high-framerate lag-free movement
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 350, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const trailX = useSpring(mouseX, { damping: 18, stiffness: 180, mass: 0.8 });
  const trailY = useSpring(mouseY, { damping: 18, stiffness: 180, mass: 0.8 });

  useEffect(() => {
    // Check if device supports hover (mouse/pointer)
    if (window.matchMedia('(hover: none) and (pointer: coarse)').matches) {
      setIsTouchDevice(true);
      return;
    }

    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);

      // Check hovered element
      const target = e.target;
      const interactiveEl = target.closest('a, button, input, textarea, select, [data-cursor], .interactive-hover');
      
      if (interactiveEl) {
        setIsPointer(true);
        const text = interactiveEl.getAttribute('data-cursor-text');
        setCursorText(text || '');
      } else {
        setIsPointer(false);
        setCursorText('');
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible, mouseX, mouseY]);

  if (isTouchDevice || !isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden transition-opacity duration-300">
      {/* Outer fluid trailing ring / aura */}
      <motion.div
        style={{
          x: trailX,
          y: trailY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isClicking ? 0.75 : isPointer ? 1.6 : 1,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ type: 'spring', damping: 20, stiffness: 300 }}
        className={`fixed top-0 left-0 rounded-full flex items-center justify-center transition-colors duration-200 ${
          isPointer
            ? isDark
              ? 'w-12 h-12 border-2 border-cyan-400 bg-cyan-400/10 shadow-glow-cyan backdrop-blur-[2px]'
              : 'w-12 h-12 border-2 border-sky-600 bg-sky-500/10 shadow-glow-cyan'
            : isDark
            ? 'w-8 h-8 border border-cyan-400/40 bg-cyan-500/5'
            : 'w-8 h-8 border border-sky-500/40 bg-sky-500/5'
        }`}
      >
        {cursorText && (
          <span className="text-[9px] font-mono font-black tracking-widest text-cyan-400 dark:text-cyan-400 uppercase">
            {cursorText}
          </span>
        )}
      </motion.div>

      {/* Center precision cyber dot */}
      <motion.div
        style={{
          x: smoothX,
          y: smoothY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isClicking ? 1.5 : isPointer ? 0.4 : 1,
          opacity: isVisible ? 1 : 0,
        }}
        className={`fixed top-0 left-0 w-2 h-2 rounded-full transition-colors duration-200 ${
          isDark
            ? 'bg-cyan-400 shadow-[0_0_10px_#00f5d4]'
            : 'bg-sky-600 shadow-[0_0_8px_#0284c7]'
        }`}
      />
    </div>
  );
};

export default CustomCursor;
