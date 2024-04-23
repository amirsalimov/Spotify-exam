/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm' :'500px',
      'md' : '900px',
      "lg" : "1100px",
      "xl" : "1300px"


    },
    extend: {},
  },
  plugins: [
  ]
}

