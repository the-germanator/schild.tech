/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'phone': { 'max': '1000px'},
    },
    extend: {},
  },
  plugins: [],
}
