/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#EFEBFF',
          100: '#DFD8FF',
          200: '#C5B8FF',
          300: '#AB97FF',
          400: '#917CFF',
          500: '#7B61FF', // Main primary color
          600: '#624ECC',
          700: '#4A3A99',
          800: '#312766',
          900: '#191333',
        },
        secondary: {
          50: '#E6F8FF',
          100: '#CCF2FF',
          200: '#99E5FF',
          300: '#66D9FF',
          400: '#33CBFF',
          500: '#00C2FF', // Main secondary color
          600: '#009BCC',
          700: '#007499',
          800: '#004D66',
          900: '#002733',
        },
        accent: {
          50: '#FFEDED',
          100: '#FFDBDB',
          200: '#FFB7B7',
          300: '#FF9494',
          400: '#FF7575',
          500: '#FF5757', // Main accent color
          600: '#CC4545',
          700: '#993434',
          800: '#662323',
          900: '#331111',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      backgroundImage: {
        'gradient-brand': 'linear-gradient(to right, #7B61FF, #00C2FF)',
      },
      boxShadow: {
        'brand': '0 4px 14px 0 rgba(123, 97, 255, 0.2)',
      },
    },
  },
  plugins: [],
}