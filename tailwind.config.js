/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");
const height = require("tailwindcss/lib/");

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      customgray: "#e0e0e0",
      customgrayy: "#252626",
      white: "#fff",
      whitee: "#f3f4f5",
      black: "#000000",
      skyblue: "#5ADAE8",
      ...colors,
    },
    extend: {
      fontFamily: {
        Pricedown: ["'Pricedown'", ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        gta: "url('../img/gta.jpg')",
      },
    },
  },
  plugins: [],
};
