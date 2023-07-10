/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        secondary: "#1C3568",
        primary: "#437EF7",
        accent: "#0000FF",
        primary600: "#3d73e1",
        primary700: "#3059af",
        primary800: "#254588",
        primary900: "#1c3568",
      },
    },
  },
  plugins: [],
};
