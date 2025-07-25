/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Urbanist', 'sans-serif'],
        body: ['Josefin Sans', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#f5f2f8',
          100: '#cdc2dd',
          200: '#a691c2',
          300: '#7e61a6',
          400: '#57308b',
          500: '#2f0070', // Main primary color
          600: '#26005b',
          700: '#1d0045',
          800: '#140030',
          900: '#020006',
        },
        secondary: {
          50: '#f9f5ff',
          100: '#e4d1ff',
          200: '#cfacff',
          300: '#ba88ff',
          400: '#a563ff',
          500: '#903fff', // Main secondary color
          600: '#7533cf',
          700: '#59279e',
          800: '#3e1b6e',
          900: '#230f3d',
        },
        accent: {
          50: '#fef5f5',
          100: '#fcd0d0',
          200: '#f9acac',
          300: '#ffcfbe', // powder puff pink
          400: '#f46262',
          500: '#f23d3d', // Main accent color
          600: '#c43131',
          700: '#962626',
          800: '#681a1a',
          900: '#3a0f0f',
        },
        color: {
          light: "#FFCFBE",
          dark: "#2f0070"
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
        'gradient-brand': 'linear-gradient(to right, #2f0070, #903FFF)',
      },
      boxShadow: {
        'brand': '0 4px 14px 0 rgba(51, 0, 102, 0.2)',
      },
    },
  },
  plugins: [],
}