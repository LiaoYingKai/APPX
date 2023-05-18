/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        black: '#11263C',
        'background-color': '#F2F2F7'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

