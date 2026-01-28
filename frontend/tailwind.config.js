/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#7C3AED',
          hover: '#6D28D9',
          foreground: '#FFFFFF'
        },
        secondary: {
          DEFAULT: '#4C1D95',
          foreground: '#E9D5FF'
        },
        accent: {
          DEFAULT: '#A78BFA',
          foreground: '#1E1B4B'
        },
        dark: {
          DEFAULT: '#0A0A0A',
          card: '#171717',
          border: '#262626'
        },
        light: {
          DEFAULT: '#F8FAFC',
          card: '#FFFFFF',
          border: '#E2E8F0'
        }
      },
      fontFamily: {
        heading: ['Manrope', 'sans-serif'],
        body: ['Inter', 'sans-serif']
      },
      backgroundImage: {
        'hero-glow': 'radial-gradient(circle at center, rgba(124, 58, 237, 0.15) 0%, rgba(10, 10, 10, 0) 70%)',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(124, 58, 237, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(124, 58, 237, 0.5)' }
        }
      }
    },
  },
  plugins: [],
}
