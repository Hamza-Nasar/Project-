/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ["'Plus Jakarta Sans'", "sans-serif"],
        secondary: ["'Space Grotesk'", "sans-serif"],
      },
      colors: {
        // Your custom colors here
      },
    },
  },
  plugins: [],
}
