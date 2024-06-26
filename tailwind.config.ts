import { Config } from "tailwindcss/types/config";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    transitionDuration: { DEFAULT: "500ms" },
    fontFamily: { sans: ["var(--font-sans)"], serif: ["var(--font-serif)"] },
    colors: {
      black: "#000",
      gray: "#707070",
      lightGray: "#D8D8D8",
      white: "#FFF",
      pink: "#FF80FF",
      yellow: "#FF0",
    },
  },
};

export default config;
