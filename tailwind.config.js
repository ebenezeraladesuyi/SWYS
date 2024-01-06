/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mont : ['Montserrat', 'sans-serif']
      },
      backgroundImage: {
        'hero-img' : "url('/src/assets/images/DSC_5350.jpg')",
        'reg-bg' : "url('/src/assets/images/DSC_5221.jpg')",
        'donate-bg' : "url('/src/assets/images/DSC_5299.jpg')"
      }
    },
  },
  plugins: [],
}