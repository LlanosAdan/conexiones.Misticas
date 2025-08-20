/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "green-primary": "#20533a",
        "green-secondary": "#6fa38a",
        "dorado": "#bf930d",
      },
       fontFamily: {
        general: ["MoreSugar", "sans-serif"],
        titulo: ["PlaylistScript", "cursive"],
        principal: ["OpenSans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
