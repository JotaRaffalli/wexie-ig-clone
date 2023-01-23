const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Proxima Nova", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        blue: "#1fb6ff",
      },
    },
  },
  plugins: [],
};
