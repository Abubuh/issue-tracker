/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '128': '54rem',
      }
    },
  },
  plugins: [],
}
