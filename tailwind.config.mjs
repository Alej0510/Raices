/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: '#f5f1e9',
          dark: '#ece6da',
          border: '#e2dcd0',
        },
        green: {
          cafe: '#556b2f',
        },
        stone: {
          cafe: '#292524',
          mid: '#44403c',
        },
        warm: '#f3ede7',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        body: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '1.2px',
      },
    },
  },
  plugins: [],
};
