/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      blue: {
        light: "#85d7ff",
        DEFAULT: "#102542",
        dark: "#009eeb",
      },
      red: {
        sweet: "#F87060",
        DEFAULT: "#F52109",
      },
      platinum: {
        DEFAULT: "#CDD7D6",
      },
      khaki: {
        DEFAULT: "#B3A394",
      },
      white: {
        DEFAULT: "#FFFFFF",
      },
    },
    extend: {},
  },
  plugins: [],
};
