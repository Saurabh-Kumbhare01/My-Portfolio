import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiPhone,
  FiFileText,
  FiSend,
  FiArrowRight,
  FiTerminal,
  FiCheck,
  FiCopy,
  FiLayers,
  FiAward,
  FiCpu
} from 'react-icons/fi';
import { personalDetails } from '../data/portfolioData';
import { playHoverSound, playClickSound } from '../utils/soundEffects';

const Hero = ({ onOpenResume, isDark }) => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [copiedSnippet, setCopiedSnippet] = useState(false);

  // 3D card tilt state
  const cardRef = useRef(null);
  const [cardTransform, setCardTransform] = useState({ rotateX: 0, rotateY: 0 });

  // Typewriter effect
  useEffect(() => {
    const roles = personalDetails.roles;
    const fullText = roles[currentRoleIndex];
    const typeSpeed = isDeleting ? 35 : 75;

    const timer = setTimeout(() => {
      if (!isDeleting && currentText === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
      } else {
        setCurrentText(
          isDeleting
            ? fullText.substring(0, currentText.length - 1)
            : fullText.substring(0, currentText.length + 1)
        );
      }
    }, typeSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentRoleIndex]);

  // Handle 3D Tilt on Hover
  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;
    setCardTransform({ rotateX, rotateY });
  };

  const handleMouseLeave = () => {
    setCardTransform({ rotateX: 0, rotateY: 0 });
  };

  const codeSnippet = `const developer = {
  name: "Saurabh Kumbhare",
  education: "BCA (8.2 CGPA)",
  stack: ["Python", "FastAPI", "React", "AI"],
  status: "Available for high-impact roles"
};`;

  const copyCode = () => {
    playClickSound();
    navigator.clipboard.writeText(codeSnippet);
    setCopiedSnippet(true);
    setTimeout(() => setCopiedSnippet(false), 2000);
  };

  return (
    <section id="hero" className="relative min-h-[95vh] pt-32 pb-20 flex items-center justify-center overflow-hidden">
      {/* Ambient background glows */}
      <div className="ambient-glow top-20 left-10 w-[420px] h-[420px] bg-cyan-500/10 dark:bg-cyan-500/15" />
      <div className="ambient-glow bottom-20 right-10 w-[480px] h-[480px] bg-indigo-500/10 dark:bg-indigo-500/15" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Typewriter, CTA, Quick Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col space-y-6 text-center lg:text-left"
          >
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 self-center lg:self-start px-4 py-1.5 rounded-full hologram-pill text-xs font-mono font-semibold">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500"></span>
              </span>
              <span className="text-cyan-600 dark:text-cyan-400 font-bold tracking-wider">
                {personalDetails.availability}
              </span>
            </div>

            {/* Main Headline */}
            <div>
              <h1 className="text-4xl sm:text-6xl xl:text-7xl font-display font-extrabold tracking-tight leading-[1.08] text-slate-900 dark:text-slate-100">
                Hi, I'm{' '}
                <span className="gradient-text drop-shadow-sm">
                  {personalDetails.name}
                </span>
              </h1>

              {/* Dynamic Typewriter */}
              <div className="h-14 mt-3 flex items-center justify-center lg:justify-start">
                <div className="inline-flex items-center gap-2 font-mono text-xl sm:text-2xl font-bold text-cyan-600 dark:text-cyan-400 bg-cyan-500/5 dark:bg-cyan-500/10 px-4 py-1.5 rounded-xl border border-cyan-500/20">
                  <span className="text-slate-400 select-none">&gt;</span>
                  <span>{currentText}</span>
                  <span className="w-2.5 h-6 bg-cyan-500 dark:bg-cyan-400 animate-pulse ml-0.5 rounded-sm" />
                </div>
              </div>
            </div>

            {/* Bio Description */}
            <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
              {personalDetails.bioShort}
            </p>

            {/* CTA Buttons with Magnetic Sound Effects */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#contact"
                onClick={() => playClickSound()}
                onMouseEnter={() => playHoverSound()}
                data-cursor-text="CONNECT"
                className="relative group overflow-hidden px-7 py-3.5 rounded-2xl bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-500 text-slate-950 font-display font-extrabold text-sm tracking-wide shadow-glow-cyan hover:shadow-cyan-400/50 hover:scale-[1.03] active:scale-95 transition-all duration-200 flex items-center gap-2.5"
              >
                <FiSend className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                <span>Get In Touch</span>
              </a>

              <button
                onClick={() => {
                  playClickSound();
                  onOpenResume();
                }}
                onMouseEnter={() => playHoverSound()}
                data-cursor-text="RESUME"
                className="px-6 py-3.5 rounded-2xl glass-card font-display font-bold text-sm text-slate-800 dark:text-slate-100 hover:text-cyan-600 dark:hover:text-cyan-400 hover:border-cyan-400/50 hover:scale-[1.03] active:scale-95 transition-all duration-200 flex items-center gap-2.5"
              >
                <FiFileText className="w-4 h-4 text-cyan-500 dark:text-cyan-400" />
                <span>View Resume</span>
                <FiArrowRight className="w-4 h-4 opacity-70 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Key Stats Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-slate-200/80 dark:border-white/10">
              {personalDetails.stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-2xl bg-white/40 dark:bg-slate-900/40 border border-slate-200/60 dark:border-white/5 backdrop-blur-sm"
                >
                  <div className="font-display font-black text-lg sm:text-xl text-slate-900 dark:text-slate-100">
                    {stat.value}
                  </div>
                  <div className="text-[11px] font-mono text-cyan-600 dark:text-cyan-400 font-semibold tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Media Link Pills */}
            <div className="flex items-center justify-center lg:justify-start gap-3 pt-1">
              <span className="text-xs font-mono text-slate-500 uppercase tracking-widest hidden sm:inline">
                CONNECT:
              </span>
              <a
                href={personalDetails.github}
                target="_blank"
                rel="noreferrer"
                onClick={() => playClickSound()}
                onMouseEnter={() => playHoverSound()}
                data-cursor-text="GITHUB"
                aria-label="GitHub Profile"
                className="p-3 rounded-xl glass-card text-slate-600 dark:text-slate-300 hover:text-cyan-500 dark:hover:text-cyan-400 hover:scale-110 transition-all duration-200"
              >
                <FiGithub className="w-4 h-4" />
              </a>
              <a
                href={personalDetails.linkedin}
                target="_blank"
                rel="noreferrer"
                onClick={() => playClickSound()}
                onMouseEnter={() => playHoverSound()}
                data-cursor-text="LINKEDIN"
                aria-label="LinkedIn Profile"
                className="p-3 rounded-xl glass-card text-slate-600 dark:text-slate-300 hover:text-cyan-500 dark:hover:text-cyan-400 hover:scale-110 transition-all duration-200"
              >
                <FiLinkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personalDetails.email}`}
                onClick={() => playClickSound()}
                onMouseEnter={() => playHoverSound()}
                data-cursor-text="EMAIL"
                aria-label="Email Me"
                className="p-3 rounded-xl glass-card text-slate-600 dark:text-slate-300 hover:text-cyan-500 dark:hover:text-cyan-400 hover:scale-110 transition-all duration-200"
              >
                <FiMail className="w-4 h-4" />
              </a>
              <a
                href={`tel:${personalDetails.phoneRaw}`}
                onClick={() => playClickSound()}
                onMouseEnter={() => playHoverSound()}
                data-cursor-text="CALL"
                aria-label="Call Me"
                className="p-3 rounded-xl glass-card text-slate-600 dark:text-slate-300 hover:text-cyan-500 dark:hover:text-cyan-400 hover:scale-110 transition-all duration-200"
              >
                <FiPhone className="w-4 h-4" />
              </a>
            </div>

          </motion.div>

          {/* Right Column: 3D Holographic Code Terminal & Interactive Floating Chips */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="lg:col-span-5 flex justify-center relative"
          >
            {/* Outer Holographic Glow Aura */}
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-indigo-500/20 rounded-3xl blur-2xl transform scale-95 pointer-events-none" />

            {/* 3D Tilt Container */}
            <div
              ref={cardRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                perspective: 1000,
                transform: `rotateX(${cardTransform.rotateX}deg) rotateY(${cardTransform.rotateY}deg)`,
                transition: 'transform 0.15s ease-out',
              }}
              className="relative w-full max-w-lg glass-card rounded-3xl overflow-hidden border border-slate-200/80 dark:border-white/10 shadow-2xl p-6"
            >
              {/* Terminal Window Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-200/80 dark:border-white/10">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 font-mono text-xs text-slate-500 flex items-center gap-1.5">
                    <FiTerminal className="w-3 h-3 text-cyan-500" />
                    saurabh@dev-machine:~
                  </span>
                </div>

                <button
                  onClick={copyCode}
                  title="Copy code snippet"
                  className="p-1.5 rounded-lg text-slate-400 hover:text-cyan-400 transition-colors"
                >
                  {copiedSnippet ? <FiCheck className="w-4 h-4 text-emerald-400" /> : <FiCopy className="w-4 h-4" />}
                </button>
              </div>

              {/* Terminal Code Body */}
              <div className="mt-4 font-mono text-xs leading-relaxed overflow-x-auto text-slate-800 dark:text-slate-200">
                <div className="text-slate-400 dark:text-slate-500 italic">// Full-Stack & AI Systems Architect</div>
                <div className="mt-1">
                  <span className="text-indigo-600 dark:text-indigo-400 font-semibold">const</span>{' '}
                  <span className="text-cyan-600 dark:text-cyan-400 font-bold">developer</span>{' '}
                  <span className="text-slate-500">=</span> {'{'}
                </div>
                <div className="pl-4">
                  <span className="text-slate-600 dark:text-slate-300">name:</span>{' '}
                  <span className="text-amber-600 dark:text-amber-300">"Saurabh Kumbhare"</span>,
                </div>
                <div className="pl-4">
                  <span className="text-slate-600 dark:text-slate-300">degree:</span>{' '}
                  <span className="text-emerald-600 dark:text-emerald-300">"BCA Distinction (8.2 CGPA)"</span>,
                </div>
                <div className="pl-4">
                  <span className="text-slate-600 dark:text-slate-300">focus:</span>{' '}
                  <span className="text-amber-600 dark:text-amber-300">"Python, FastAPI, React, AI Web"</span>,
                </div>
                <div className="pl-4">
                  <span className="text-slate-600 dark:text-slate-300">status:</span>{' '}
                  <span className="text-cyan-600 dark:text-cyan-300 font-semibold">"Ready for 2026 Roles"</span>,
                </div>
                <div className="pl-4">
                  <span className="text-slate-600 dark:text-slate-300">codeQuality:</span>{' '}
                  <span className="text-purple-600 dark:text-purple-400 font-bold">100%</span>
                </div>
                <div>{'};'}</div>
              </div>

              {/* Interactive Floating Hologram Badges */}
              <div className="mt-6 pt-4 border-t border-slate-200/80 dark:border-white/10 flex flex-col gap-2.5">
                <div className="flex items-center gap-3 p-3 rounded-2xl bg-cyan-500/10 dark:bg-cyan-500/15 border border-cyan-500/20">
                  <div className="p-2 rounded-xl bg-cyan-500/20 text-cyan-600 dark:text-cyan-400">
                    <FiCpu className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900 dark:text-slate-100">
                      AI & Web Systems
                    </div>
                    <div className="text-[11px] text-slate-500 dark:text-slate-400">
                      OpenAI API, LLM Workflows, FastAPI & PostgreSQL
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-2xl bg-indigo-500/10 dark:bg-indigo-500/15 border border-indigo-500/20">
                  <div className="p-2 rounded-xl bg-indigo-500/20 text-indigo-600 dark:text-indigo-400">
                    <FiLayers className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900 dark:text-slate-100">
                      Clean & Scalable Code
                    </div>
                    <div className="text-[11px] text-slate-500 dark:text-slate-400">
                      Modular MVC, REST APIs, Git & Modern UI/UX
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
