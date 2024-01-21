/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blu: "#175cd3",
        secondary: "#f2f4f7",
        border: "#d0d5dd",
        title: "#101828",
        content: "#667085",
      },
    },
  },
  plugins: [],
};

