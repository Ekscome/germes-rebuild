/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-roboto)", "sans-serif"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        border: "var(--border)",
        surface: "var(--surface)",
        "surface-strong": "var(--surface-strong)",
      },
      boxShadow: {
        card: "0 4px 20px rgba(0,0,0,0.08)",
      },
      spacing: {
        section: "5rem",
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
