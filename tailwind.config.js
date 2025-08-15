/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class', // for toggling dark mode manually
  theme: {
    extend: {
      colors: {
        primary: '#3b82f6',
        secondary: '#2563eb',
        darkBg: '#121212',
        darkText: '#e0e0e0',
      },
      animation: {
        float: 'float 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
};
