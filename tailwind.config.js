/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'reed': '#FF4D4D',
      },  
    },
  },
  plugins: [],
  prefix: 'tw-',
}

