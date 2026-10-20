/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#14b8a6',
          600: '#0d9488',
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a',
          950: '#042f2e',
        },
        cyber: {
          cyan: '#00f5d4',
          blue: '#38bdf8',
          purple: '#a855f7',
          pink: '#f43f5e',
          amber: '#fbbf24',
          emerald: '#10b981',
        },
        dark: {
          bg: '#040711',
          void: '#02040a',
          card: '#0a0f1d',
          cardHover: '#11182c',
          border: 'rgba(255, 255, 255, 0.08)',
          borderHover: 'rgba(0, 245, 212, 0.3)',
          muted: '#94a3b8',
        },
        light: {
          bg: '#f8fafc',
          surface: '#ffffff',
          card: '#ffffff',
          cardHover: '#f1f5f9',
          border: 'rgba(15, 23, 42, 0.08)',
          borderHover: 'rgba(14, 165, 233, 0.4)',
          muted: '#64748b',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        display: ['Outfit', 'Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'gradient-x': 'gradient-x 8s ease infinite',
        'spin-slow': 'spin 18s linear infinite',
        'shimmer': 'shimmer 2.5s infinite linear',
        'scanline': 'scanline 8s linear infinite',
        'radar': 'radar 3s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          }
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(1000%)' },
        },
        radar: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        }
      },
      boxShadow: {
        'glow-cyan': '0 0 25px -4px rgba(0, 245, 212, 0.45)',
        'glow-indigo': '0 0 25px -4px rgba(99, 102, 241, 0.45)',
        'glow-purple': '0 0 25px -4px rgba(168, 85, 247, 0.45)',
        'glass-dark': '0 8px 32px 0 rgba(0, 0, 0, 0.45)',
        'glass-light': '0 12px 30px -10px rgba(15, 23, 42, 0.08)',
        'neon-card': '0 0 20px rgba(6, 182, 212, 0.15)',
      }
    },
  },
  plugins: [],
}
