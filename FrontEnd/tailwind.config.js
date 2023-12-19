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
      backgroundImage: {
        'cat': "url('/src/assets/cat4.png')",
        'cat2': "url('/src/assets/cat2.png')",
      },
      colors: {
        blue: {
          1000 : '#1a202c',
          1001 : '#2D3648',
        },
        slate: {
          1000 : '#EDF0F7',
        }
      },
    },
  },
  plugins: [],
}