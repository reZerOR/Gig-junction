/** @type {import('tailwindcss').Config} */
export default {
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        josefin: ['Josefin Sans', "sans-serif"]
      },
      colors: {
        1: "#0A4D68",
        2: '#088395',
        3: '#05BFDB',
        4: '#00FFCA'
      }
    },
  },
      daisyui: {
    themes: [],
  },
  plugins: [require("daisyui")],
};

