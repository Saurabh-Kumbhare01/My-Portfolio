import React, { useEffect, useRef } from 'react';

const BackgroundCanvas = ({ isDark = true }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Track smoothed mouse for fluid lighting response
    let mouse = {
      x: width / 2,
      y: height / 3,
      targetX: width / 2,
      targetY: height / 3,
      radius: 180,
      active: false,
    };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    const handleMouseMove = (e) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
      mouse.active = true;
    };

    const handleTouchMove = (e) => {
      if (e.touches.length > 0) {
        mouse.targetX = e.touches[0].clientX;
        mouse.targetY = e.touches[0].clientY;
        mouse.active = true;
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });

    // Adaptive particle count based on screen size (high performance on mobile)
    const isMobile = width < 768;
    const particleCount = isMobile ? 35 : Math.min(Math.floor(width / 24), 75);
    const particles = [];

    const palette = isDark
      ? [
          { r: 0, g: 245, b: 212 },   // Neon Cyan
          { r: 56, g: 189, b: 248 },  // Electric Sky
          { r: 139, g: 92, b: 246 },  // Hyper Violet
          { r: 99, g: 102, b: 241 },  // Indigo
        ]
      : [
          { r: 2, g: 132, b: 199 },   // Deep Sky Blue
          { r: 79, g: 70, b: 229 },   // Electric Indigo
          { r: 13, g: 148, b: 136 },  // Teal
        ];

    for (let i = 0; i < particleCount; i++) {
      const color = palette[Math.floor(Math.random() * palette.length)];
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        originX: Math.random() * width,
        originY: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        radius: Math.random() * 1.8 + 0.8,
        color: `${color.r}, ${color.g}, ${color.b}`,
        alpha: Math.random() * 0.6 + 0.2,
        pulseSpeed: 0.02 + Math.random() * 0.02,
        pulseAngle: Math.random() * Math.PI * 2,
      });
    }

    let time = 0;

    const render = () => {
      time += 0.015;

      // Smooth mouse interpolation (spring feel)
      mouse.x += (mouse.targetX - mouse.x) * 0.08;
      mouse.y += (mouse.targetY - mouse.y) * 0.08;

      ctx.clearRect(0, 0, width, height);

      // 1. Draw Interactive Radial Spotlight / Volumetric Lighting Beam
      if (mouse.active) {
        const spotRadius = isMobile ? 220 : 380;
        const spotGlow = ctx.createRadialGradient(
          mouse.x,
          mouse.y,
          0,
          mouse.x,
          mouse.y,
          spotRadius
        );

        if (isDark) {
          spotGlow.addColorStop(0, 'rgba(0, 245, 212, 0.07)');
          spotGlow.addColorStop(0.35, 'rgba(99, 102, 241, 0.04)');
          spotGlow.addColorStop(0.7, 'rgba(168, 85, 247, 0.015)');
          spotGlow.addColorStop(1, 'rgba(0, 0, 0, 0)');
        } else {
          spotGlow.addColorStop(0, 'rgba(14, 165, 233, 0.08)');
          spotGlow.addColorStop(0.4, 'rgba(99, 102, 241, 0.04)');
          spotGlow.addColorStop(1, 'rgba(255, 255, 255, 0)');
        }

        ctx.fillStyle = spotGlow;
        ctx.fillRect(0, 0, width, height);
      }

      // 2. Draw Subtle Fluid Ambient Wave Ribbon
      ctx.beginPath();
      const waveY = height * 0.45;
      ctx.moveTo(0, waveY);
      for (let x = 0; x < width; x += 30) {
        const mouseDist = Math.abs(x - mouse.x);
        const mouseInfluence = Math.max(0, 1 - mouseDist / 300) * 20;
        const y =
          waveY +
          Math.sin(x * 0.003 + time) * 15 +
          Math.cos(x * 0.002 - time * 0.8) * 12 +
          (mouse.y > waveY ? mouseInfluence : -mouseInfluence);
        ctx.lineTo(x, y);
      }
      ctx.strokeStyle = isDark
        ? 'rgba(0, 245, 212, 0.035)'
        : 'rgba(14, 165, 233, 0.035)';
      ctx.lineWidth = 2;
      ctx.stroke();

      // 3. Draw & Connect Interactive Particles
      particles.forEach((p, idx) => {
        p.pulseAngle += p.pulseSpeed;
        const currentRadius = p.radius + Math.sin(p.pulseAngle) * 0.4;

        p.x += p.vx;
        p.y += p.vy;

        // Wrap around borders
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;
        if (p.y < -10) p.y = height + 10;
        if (p.y > height + 10) p.y = -10;

        // Cursor magnetic interaction
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < mouse.radius) {
          const force = (1 - dist / mouse.radius) * 1.5;
          p.x -= (dx / dist) * force;
          p.y -= (dy / dist) * force;
        }

        // Draw particle node
        ctx.beginPath();
        ctx.arc(p.x, p.y, Math.max(0.5, currentRadius), 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.color}, ${p.alpha})`;
        ctx.fill();

        // Connect nearby particles with subtle light links
        const maxConnectDist = isMobile ? 85 : 120;
        for (let j = idx + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const cdx = p.x - p2.x;
          const cdy = p.y - p2.y;
          const cdist = Math.sqrt(cdx * cdx + cdy * cdy);

          if (cdist < maxConnectDist) {
            const lineAlpha = (1 - cdist / maxConnectDist) * (isDark ? 0.16 : 0.12);
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(${p.color}, ${lineAlpha})`;
            ctx.lineWidth = 0.75;
            ctx.stroke();
          }
        }

        // Interactive light beam connection from particle to cursor
        if (dist < 150) {
          const beamAlpha = (1 - dist / 150) * (isDark ? 0.28 : 0.2);
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = `rgba(${p.color}, ${beamAlpha})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    // Only animate if tab is visible to save GPU and battery
    const handleVisibilityChange = () => {
      if (document.hidden) {
        cancelAnimationFrame(animationFrameId);
      } else {
        animationFrameId = requestAnimationFrame(render);
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isDark]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 transition-opacity duration-700"
      aria-hidden="true"
    />
  );
};

export default BackgroundCanvas;
