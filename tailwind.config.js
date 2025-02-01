const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}', // Add this line to include the src directory
  ],
  theme: {
    extend: {
      fontFamily: {
        decorative: ['var(--font-decorative)', ...defaultTheme.fontFamily.serif],
        sans: ['var(--font-inter)', ...defaultTheme.fontFamily.sans],
        serif: ['var(--font-cormorant)', ...defaultTheme.fontFamily.serif],
      },
      colors: {
        ochre: {
          // Add your custom colors here
          50: '#fefce8',
          100: '#fff9c2',
          200: '#fff087',
          300: '#ffe144',
          400: '#fecb15',
          500: '#b7791f',
          600: '#b7791f',
          700: '#a16207',
          800: '#854d0e',
          900: '#713f12',
        },
        lapis: {
          50: '#eef2ff',
          100: '#e0e7ff',
          200: '#c7d2fe',
          300: '#a5b4fc',
          400: '#818cf8',
          500: '#4c6fff',
          600: '#4f46e5',
          700: '#4338ca',
          800: '#3730a3',
          900: '#312e81',
        },
        terracotta: {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#d97706',
          600: '#bc4c04',
          700: '#b91c1c',
          800: '#991b1b',
          900: '#7f1d1d',
        },
        sienna: {
          50: '#faf5f1',
          100: '#f5e6da',
          200: '#eaceb8',
          300: '#ddb08d',
          400: '#cc8758',
          500: '#c16a39',
          600: '#78350f',
          700: '#8c4516',
          800: '#753a19',
          900: '#78350f',
        },
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
      },
      keyframes: {
        glow: {
          '0%': { 'box-shadow': '0 0 5px #4c6fff, 0 0 10px #4c6fff, 0 0 15px #4c6fff' },
          '100%': { 'box-shadow': '0 0 10px #4c6fff, 0 0 20px #4c6fff, 0 0 30px #4c6fff' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
};