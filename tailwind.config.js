import tailwindScrollbarHide from 'tailwind-scrollbar-hide';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      sans: ['DM Sans', 'sans-serif'],
      display: ['Syne', 'sans-serif'],
    },
    extend: {
      fontSize: {
        huge: ['8rem', { lineHeight: '0.9' }],
      },
      height: {
        screen: '100dvh',
      },
      animation: {
        pulseSlow: 'pulse 1.5s infinite',
      },
      backgroundImage: {
        hero: "url('background-gradient.png')",
      },
      colors: {
        primary: {
          50: '#EDF7FD',
          100: '#D6EFFB',
          200: '#C8E6F9',
          300: '#9FD4F4',
          400: '#6CBDEF',
          500: '#34AAEA',
          600: '#1479B8',
          700: '#0F5F90',
          800: '#0C496E',
          900: '#08324B',
          DEFAULT: '#34AAEA',
        },
      },
    },
  },
  plugins: [tailwindScrollbarHide],
};
