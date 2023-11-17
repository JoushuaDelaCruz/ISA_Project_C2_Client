/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "tyrian-purple": "#5F0F40",
        carmine: "#9A031E",
        "ut-orange": "#FB8B24",
        "spanish-orange": "#E36414",
        "midnight-green": "#0F4C5C",
      },
      fontFamily: {
        nunito: ["Nunito", "sans-serif"],
      },
    },
  },
  plugins: [],
};
