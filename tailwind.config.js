/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['"Inter"', ...defaultTheme.fontFamily.sans],
        pop: ['"Poppins"', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'primary-color': '#AF0101',
        'productBg': '#FFECD0',
        'blackColor': '#151515',
        'whiteColor': '#ffffff',
        'headingColor': '#4E2020',
        'secondaryColor': '#EBADAD',
        'lightPink': '#AD5B5B',  
      },
    },
  },
  plugins: [],
}

