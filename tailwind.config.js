const colors = require("tailwindcss/colors");
const { theme } = require("tailwindcss/defaultConfig");

/*
 * @type {import("tailwindcss").Config}
 */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    colors: { white: colors.white, black: colors.black, gray: colors.neutral, primary: colors.yellow },
    fontFamily: {
      sans: ["var(--font-sans)", ...theme.fontFamily.sans],
      serif: ["var(--font-serif)", ...theme.fontFamily.serif],
    },
  },
};
