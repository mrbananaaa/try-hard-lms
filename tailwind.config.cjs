/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        epilogue: "Epilogue",
        inter: "Inter",
      },
      colors: {
        default: {
          primary: "#DFECF1",
          secondary: "#D0E1E9",
        },
      },
      animation: {
        "spin-slow": "spin 3s infinite linear",
      },
    },
  },
  plugins: [],
};
