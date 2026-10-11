/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#09090b',
        surface: {
          50: '#18181b',
          100: '#1f1f23',
          200: '#27272a',
          300: '#3f3f46',
        },
        brand: {
          DEFAULT: '#f97316', // Orange-500
          light: '#fb923c',   // Orange-400
          dark: '#ea580c',    // Orange-600
          glow: 'rgba(249, 115, 22, 0.25)',
        },
        accent: {
          gold: '#eab308',
          amber: '#f59e0b',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 4s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotateX(12deg) rotateY(-14deg)' },
          '50%': { transform: 'translateY(-14px) rotateX(10deg) rotateY(-11deg)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.85' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        }
      },
      boxShadow: {
        'glow-orange': '0 0 50px -10px rgba(249, 115, 22, 0.35)',
        'glow-orange-lg': '0 0 80px -15px rgba(249, 115, 22, 0.45)',
        '3d-mockup': '0 30px 60px -12px rgba(0, 0, 0, 0.8), 0 18px 36px -18px rgba(249, 115, 22, 0.25)',
      }
    },
  },
  plugins: [],
}
