/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "theme-gray": "#f1f5f9",
        "theme-primary": "#6366f1",
        "theme-primary-dark": "#5661b3",
      },
    },
    fontFamily: {
      sans: "Roboto, sans-serif",
    },
  },
  plugins: [],
};
