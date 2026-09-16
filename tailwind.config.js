/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#14284e',
          navyDark: '#0b1933',
          navyLight: '#0f4a85',
          gold: '#ffb703',
          goldDark: '#e09f00',
          goldLight: '#ffc83b',
          surface: '#f8fafc',
          muted: '#64748b',
        }
      },
      fontFamily: {
        sans: ['Rubik', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'subtle': '0 2px 10px rgba(0, 0, 0, 0.04)',
        'premium': '0 10px 30px -5px rgba(35, 57, 76, 0.12), 0 4px 12px rgba(0, 0, 0, 0.05)',
        'glow': '0 0 20px rgba(49, 166, 73, 0.25)',
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in': 'fadeIn 0.3s ease-out forwards',
        'slide-up': 'slideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
}
