/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js",
    "./node_modules/flowbite/**/*.js"

  ],
  theme: {
    animation: {
      slideIn: 'slideIn 0.7s forwards',
    },
    extend: {
    },
  },
  plugins: [require('tailwindcss-neumorphism'),  require('flowbite/plugin')],
}