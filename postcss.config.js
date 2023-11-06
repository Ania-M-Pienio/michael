const tailwindcss = require('tailwindcss');
module.exports = {
  plugins: [
    require('postcss-import'),
    require('tailwindcss/nesting')(require('postcss-nesting')),
    require('tailwindcss'),
    require('autoprefixer'),
    'postcss-preset-env',
    tailwindcss
  ],
};