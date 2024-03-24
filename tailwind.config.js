/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "selector",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FF6464",
        secondary: "#EDF7FA",
        darksecondary: "#1c2426",
      },
    },
  },
  plugins: [],
};
