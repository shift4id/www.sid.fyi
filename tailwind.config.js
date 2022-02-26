const defaultConfig = require("tailwindcss/defaultConfig");

/**
 * @type {import("tailwindcss/tailwind-config").TailwindConfig}
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
        sans: ["SuisseIntl", ...defaultConfig.theme.fontFamily.sans],
        serif: ["GrandSlang", ...defaultConfig.theme.fontFamily.serif],
      },
    },
  },
  plugins: [],
};
