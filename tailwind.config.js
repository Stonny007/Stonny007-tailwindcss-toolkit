/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"], // make Tailwind scan your html files
  theme: {
    extend: {
      colors: {
        dark: "#0a0a0a",       // black background
        accent: "#FFD700",     // dark yellow / golden
        accentHover: "#E6C200" // darker shade for hover
      },
    },
  },
  plugins: [],
};
