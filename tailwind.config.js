/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
}


// tailwind.config.cjs
// const path = require('path');
// module.exports = {
//   content: [
//     './src/**/*.{html,js,ts,jsx,tsx}',
//     // Other paths...
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// };
