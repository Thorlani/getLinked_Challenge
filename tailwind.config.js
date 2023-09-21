const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "clash-display": ["Clash_Display", "sans-serif"],
        'montserrat': ["Montserrat", "Courier New"],
        'unica': ["Unica_One", "Helvetica"]
      },
      backgroundImage: {
        'hero-section': "url('/public/images/man-with-glasses(1).png')",
        'secured': "url('/public/images/secured.png')",
      },
      colors: {
        'white': '#fff',
        'dark-blue': "#150E28",
        'purple': "#903AFF",
        'strong-pink': "#D434FE",
        'pink': "#FF26B9"
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
