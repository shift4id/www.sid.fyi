const typography = require("@tailwindcss/typography");
const colors = require("tailwindcss/colors");
const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        amber: colors.amber,
        blue: colors.blue,
        cyan: colors.cyan,
        emerald: colors.emerald,
        fuchsia: colors.fuchsia,
        gray: colors.trueGray,
        green: colors.green,
        indigo: colors.indigo,
        lightBlue: colors.lightBlue,
        lime: colors.lime,
        orange: colors.orange,
        pink: colors.pink,
        purple: colors.purple,
        red: colors.red,
        rose: colors.rose,
        teal: colors.teal,
        violet: colors.violet,
        yellow: colors.yellow,
      },
      fontFamily: {
        sans: ["Inter var", "Inter", ...fontFamily.sans],
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme("colors.gray.800"),
            a: {
              color: theme("colors.blue.500"),
              "&:hover": {
                "text-decoration": "none",
              },
            },
            "h2,h3,h4": {
              color: theme("colors.gray.900"),
            },
            ol: {
              li: {
                "&:before": { color: theme("colors.gray.500") },
              },
            },
            ul: {
              li: {
                "&:before": { backgroundColor: theme("colors.gray.500") },
              },
            },
          },
        },
        dark: {
          css: {
            color: theme("colors.gray.200"),
            "h2,h3,h4": {
              color: theme("colors.gray.100"),
            },
          },
        },
      }),
    },
  },
  variants: {
    extend: {},
  },
  extend: {},
  plugins: [typography],
};
