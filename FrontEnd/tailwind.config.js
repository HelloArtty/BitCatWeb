/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      body : ['Inter', 'sans-serif'],
      inter : ['Inter', 'sans-serif'],
    },
    extend: {
      colors: {
        blue: {
          1000 : '#1a202c',
        }
      },
    },
  },
  plugins: [],
}