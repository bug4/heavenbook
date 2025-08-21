/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'orbitron': ['Orbitron', 'sans-serif'],
        'quicksand': ['Quicksand', 'sans-serif'],
      },
      colors: {
        blue: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 3s infinite',
        'progress': 'progress 2s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in': 'fadeIn 0.5s ease-in',
      },
      keyframes: {
        float: {
          '0%, 100%': { 
            transform: 'translateY(0)'
          },
          '50%': { 
            transform: 'translateY(-20px)'
          },
        },
        progress: {
          '0%': { 
            transform: 'translateX(-100%)'
          },
          '50%': {
            transform: 'translateX(0%)'
          },
          '100%': { 
            transform: 'translateX(100%)'
          },
        },
        fadeIn: {
          '0%': { 
            opacity: '0'
          },
          '100%': { 
            opacity: '1'
          },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}