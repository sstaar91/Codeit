/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        noto: ["Noto Sans KR"],
        dongle: ["Dongle"],
      },
      colors: {
        main: "#f3904f",
        disableMain: "#f7d4bc",
      },
    },
    screens: {
      sm: { max: "475px" },
      md: { min: "476px", max: "768px" },
      lg: { min: "769px" },
    },
  },
  plugins: [],
};
