/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "map_bg": "url('./src/assets/images/png/map_bg.png')"
      }
    },
  },
  plugins: [],
}
// import map_bg from './src/assets/images/png/map_bg.png'