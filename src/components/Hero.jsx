import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiPhone, FiFileText, FiSend, FiArrowRight, FiCheckCircle, FiTerminal } from 'react-icons/fi';
import { personalDetails } from '../data/portfolioData';

const Hero = ({ onOpenResume }) => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const roles = personalDetails.roles;
    const fullText = roles[currentRoleIndex];

    const typeSpeed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting && currentText === fullText) {
        setTimeout(() => setIsDeleting(true), 1800);
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

  return (
    <section id="hero" className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden">
      {/* Glow Orbs background */}
      <div className="ambient-glow top-1/4 left-1/4 w-96 h-96 bg-cyan-500/15" />
      <div className="ambient-glow bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/15" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline & Intro */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 flex flex-col space-y-6 text-center lg:text-left"
          >
            {/* Status pill */}
            <div className="inline-flex items-center gap-2 self-center lg:self-start px-3.5 py-1.5 rounded-full bg-cyan-500/10 dark:bg-cyan-500/10 light:bg-cyan-100 border border-cyan-500/30 text-cyan-400 dark:text-cyan-400 light:text-cyan-700 text-xs font-semibold">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              <span>{personalDetails.availability}</span>
            </div>

            {/* Main Title */}
            <div>
              <h1 className="text-3xl sm:text-5xl xl:text-6xl font-extrabold text-slate-100 dark:text-slate-100 light:text-slate-900 tracking-tight leading-tight">
                Hi, I'm <span className="gradient-text">{personalDetails.name}</span>
              </h1>

              {/* Dynamic Typewriter */}
              <div className="h-12 mt-2 flex items-center justify-center lg:justify-start">
                <span className="text-lg sm:text-2xl font-mono text-cyan-400 font-semibold flex items-center gap-1">
                  <span className="text-slate-500">&gt;</span> {currentText}
                  <span className="w-2 h-6 bg-cyan-400 animate-pulse ml-0.5" />
                </span>
              </div>
            </div>

            {/* Bio Summary */}
            <p className="text-slate-300 dark:text-slate-300 light:text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {personalDetails.bioShort}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#contact"
                className="flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-cyan-500 via-cyan-400 to-indigo-500 hover:from-cyan-400 hover:to-indigo-400 text-slate-950 font-extrabold text-sm shadow-glow-cyan hover:scale-105 transition-all group"
              >
                <FiSend className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                Get In Touch
              </a>

              <button
                onClick={onOpenResume}
                className="flex items-center gap-2 px-6 py-3.5 rounded-2xl glass-card text-slate-100 dark:text-slate-100 light:text-slate-800 hover:text-cyan-400 dark:hover:text-cyan-400 hover:border-cyan-500/50 font-bold text-sm hover:scale-105 transition-all group"
              >
                <FiFileText className="w-4 h-4 text-cyan-400" />
                View Resume
                <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Social Media Links */}
            <div className="flex items-center justify-center lg:justify-start gap-3 pt-4">
              <span className="text-xs font-mono text-slate-400 dark:text-slate-400 light:text-slate-500 mr-2">
                Connect:
              </span>
              <a
                href={personalDetails.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub Profile"
                className="p-3 rounded-xl glass-card text-slate-300 hover:text-cyan-400 hover:scale-110 transition-all"
              >
                <FiGithub className="w-5 h-5" />
              </a>
              <a
                href={personalDetails.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn Profile"
                className="p-3 rounded-xl glass-card text-slate-300 hover:text-cyan-400 hover:scale-110 transition-all"
              >
                <FiLinkedin className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${personalDetails.email}`}
                aria-label="Email Address"
                className="p-3 rounded-xl glass-card text-slate-300 hover:text-cyan-400 hover:scale-110 transition-all"
              >
                <FiMail className="w-5 h-5" />
              </a>
              <a
                href={`tel:${personalDetails.phoneRaw}`}
                aria-label="Phone Call"
                className="p-3 rounded-xl glass-card text-slate-300 hover:text-cyan-400 hover:scale-110 transition-all"
              >
                <FiPhone className="w-5 h-5" />
              </a>
            </div>

            {/* Quick Stat Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-slate-800/80 dark:border-slate-800/80 light:border-slate-200">
              {personalDetails.stats.map((stat, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-slate-900/40 dark:bg-slate-900/40 light:bg-slate-100 border border-slate-800/60 dark:border-slate-800/60 light:border-slate-200 text-center lg:text-left">
                  <div className="text-xl font-extrabold text-cyan-400 font-mono">{stat.value}</div>
                  <div className="text-[11px] font-bold text-slate-200 dark:text-slate-200 light:text-slate-800 mt-0.5">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Interactive Graphic Card / Code Avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative w-full max-w-md">
              {/* Outer Glowing Gradient Ring */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-cyan-500 via-indigo-500 to-emerald-500 opacity-40 blur-xl animate-pulse-slow" />

              {/* Developer Code Terminal Card */}
              <div className="relative glass-card rounded-3xl p-6 border border-slate-700/60 dark:border-slate-700/60 light:border-slate-200 shadow-2xl overflow-hidden">
                
                {/* Terminal Header */}
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800 dark:border-slate-800 light:border-slate-200">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400">
                    <FiTerminal className="w-3.5 h-3.5 text-cyan-400" />
                    <span>developer_profile.py</span>
                  </div>
                  <span className="text-[10px] font-mono bg-cyan-500/10 text-cyan-400 px-2 py-0.5 rounded">
                    Python 3.12
                  </span>
                </div>

                {/* Code Snippet */}
                <div className="font-mono text-xs leading-relaxed space-y-2 text-slate-300 dark:text-slate-300 light:text-slate-700">
                  <p><span className="text-indigo-400 font-semibold">class</span> <span className="text-cyan-300 font-bold">FullStackDeveloper</span>:</p>
                  <p className="pl-4"><span className="text-indigo-400">def</span> <span className="text-emerald-400">__init__</span>(self):</p>
                  <p className="pl-8"><span className="text-cyan-400">self</span>.name = <span className="text-amber-300">"{personalDetails.name}"</span></p>
                  <p className="pl-8"><span className="text-cyan-400">self</span>.education = <span className="text-amber-300">"MCA & BCA (8.2 CGPA)"</span></p>
                  <p className="pl-8"><span className="text-cyan-400">self</span>.core_stack = [<span className="text-amber-300">"Python"</span>, <span className="text-amber-300">"React.js"</span>, <span className="text-amber-300">"FastAPI"</span>, <span className="text-amber-300">"OpenAI API"</span>]</p>
                  <p className="pl-8"><span className="text-cyan-400">self</span>.location = <span className="text-amber-300">"Nagpur, India"</span></p>
                  
                  <p className="pl-4 pt-2"><span className="text-indigo-400">def</span> <span className="text-emerald-400 font-bold">build_web_solutions</span>(self):</p>
                  <p className="pl-8"><span className="text-indigo-400">return</span> &#123;</p>
                  <p className="pl-12"><span className="text-amber-300">"status"</span>: <span className="text-emerald-400">"Deploying Production Applications"</span>,</p>
                  <p className="pl-12"><span className="text-amber-300">"quality"</span>: <span className="text-cyan-400">"ATS-Optimized & Accessible"</span></p>
                  <p className="pl-8">&#125;</p>
                </div>

                {/* Floating Skill Badges */}
                <div className="mt-6 pt-4 border-t border-slate-800 dark:border-slate-800 light:border-slate-200 flex flex-wrap gap-2">
                  <span className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
                    FastAPI
                  </span>
                  <span className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-indigo-500/10 text-indigo-400 border border-indigo-500/30">
                    React.js
                  </span>
                  <span className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                    OpenAI API
                  </span>
                  <span className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-amber-500/10 text-amber-400 border border-amber-500/30">
                    OpenCV
                  </span>
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
