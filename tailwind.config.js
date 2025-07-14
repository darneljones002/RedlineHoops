/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        redline: "#d61920",
        charcoal: "#1e1e1e",
      },
      fontFamily: {
        sans: ['"Open Sans"', "sans-serif"],
        heading: ['"Bebas Neue"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
