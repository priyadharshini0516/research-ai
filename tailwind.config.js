/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",       // for App Router
    "./pages/**/*.{js,ts,jsx,tsx}",     // for pages folder (optional)
    "./components/**/*.{js,ts,jsx,tsx}" // all components
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
