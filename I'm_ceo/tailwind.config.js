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
      mobile: { max: "425px" },
      sm: { max: "475px" },
      mainNotice: { min: "426px", max: "600px" },
      md: { min: "476px", max: "768px" },
      lg: { min: "769px" },
    },
  },
  plugins: [],
};
