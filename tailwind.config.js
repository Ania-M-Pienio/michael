/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: ['./src/*.{html, js}'],
  theme: {
    extend: {
      fontFamily: {
        sans: [ 'Sans', 'sans-serif'],
        brand: ['Brand', 'sans-serif'],
      },
      aspectRatio: {
        video: '16 / 9',
        square: '1 / 1',
        portrait: '3 / 5',
        'short-portrait': '4 / 5',
        landscape: '4 / 1.85',
        'tall-landscape': '5 / 3.2',
      },
      colors: {
        'gs': colors.zinc,
        'primary': colors.indigo, 
        'secondary': colors.cyan,
        'accent': colors.sky,
      },
      screens: {
        '3xl': '1690px',
        '<lg': { 'max': '1024px'},
      },
      transitionProperty: {
        'border': 'border',
      }
    },
  },
  plugins: [],
}

