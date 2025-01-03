/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "green" : "#16e021",
        "red" : "#FF6868",
        "secondary" : "#555",
        "primary" : "#FCFCFC"
      }
      // fontFamily: {
      //   "primary" : ["Inter", 'sans-serif']
      // }
    },
  },
  plugins: [require("daisyui")],
}

