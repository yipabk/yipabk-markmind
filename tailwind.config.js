/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["DM Serif Display"],
      },
      colors: {
        lightgrey: "#DAD9D9",
        grey: "#A9A9A9",
        orange: "#E78C3F",
        blue: "#6CB4BE",
        brown: "#C46823",
        paleblue: "#5493b4",
      },
    },
  },
  plugins: [],
};
