/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      ringColor: {
        focus: "#3b82f6", // Blue focus ring for WCAG 2.4.7
      },
    },
  },
  plugins: [],
};
