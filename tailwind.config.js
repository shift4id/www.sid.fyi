const defaultConfig = require("tailwindcss/defaultConfig");

/*
 * @type {import("tailwindcss").Config}
 */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        gray: {
          100: "#e6e6e6",
          200: "#ccc",
          300: "#b3b3b3",
          400: "#999",
          500: "#808080",
          600: "#666",
          700: "#4d4d4d",
          800: "#333",
          900: "#1a1a1a",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...defaultConfig.theme.fontFamily.sans],
        serif: ["var(--font-serif)", ...defaultConfig.theme.fontFamily.serif],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
