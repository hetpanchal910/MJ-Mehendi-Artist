/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pista: {
          50: '#F5F9F6',
          100: '#EEF5F0',
          150: '#E7F2EB',
          200: '#E3EFE7',
          300: '#C8DECF',
          400: '#A4C6AF',
          500: '#7A9E86',
          600: '#5C836B',
          700: '#43634F',
          800: '#2F4537',
          900: '#1E2D24',
          950: '#121C16',
        },
        cardBg: '#FAFDFB',
        accentGold: '#C59A5A',
        accentGoldDark: '#A67D3E',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Outfit"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 8px 30px rgba(92, 131, 107, 0.08)',
        'soft-hover': '0 16px 36px rgba(92, 131, 107, 0.16)',
        'modal': '0 25px 60px -15px rgba(30, 45, 36, 0.25)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-10px) rotate(3deg)' },
        },
        pulseSlow: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.85' },
        },
        spinSlow: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        }
      },
      animation: {
        'float-slow': 'float 7s ease-in-out infinite',
        'float-reverse': 'float 8s ease-in-out infinite reverse',
        'pulse-slow': 'pulseSlow 4s ease-in-out infinite',
        'spin-mandala': 'spinSlow 60s linear infinite',
      }
    },
  },
  plugins: [],
}
