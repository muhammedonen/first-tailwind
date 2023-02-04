/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        quicsand: ["Quicksand", "sans-serif"],
        sansPro: ["Source Sans Pro", "sans-serif"],
      },
      colors: {
        mainTheme: "#E3F6FF",
        mainBtn1: "#1E3163",
        mainBtn2: "#1B262C",
        mainBorder: "#F4F4F4",
        mainTheme: "#E3F6FF",
        btnText: "#DADADA",
        mainLight: "#F6F6F6",
        hoverText: "#EB596E",
      },
    },
  },
  plugins: [],
};
