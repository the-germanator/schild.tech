/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          "DEFAULT": '#fa6e16'
        }
      },
      fontSize: {
        'adapt-ascii-big': '0.8vw',
        'adapt-ascii-phone': '1.25vw',
        'adapt-ascii-mega': '0.5vw'
      }
    },
    screens: {
      'phone': { 'max': '1000px'},
      'widescreen': { 'min': '2000px' }
    },
  },
  plugins: [],
}

////////////////////////////////////////////

// const colors = {
//   ...defaultColors,
//   ...{
//       "custom-yellow": {
//           "500": "#EDAE0A",
//       },
//   },
// }

// module.exports = {
//   "theme": {
//       "colors": colors,
//   }
// };





// #fa6e16