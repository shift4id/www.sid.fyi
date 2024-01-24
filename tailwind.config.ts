import { Config } from "tailwindcss/types/config";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    transitionDuration: { DEFAULT: "300ms" },
    fontFamily: { serif: ["var(--font-serif)"] },
    colors: {
      black: "#000",
      gray: "#686868",
      lightGray: "#D8D8D8",
      white: "#FFF",
      pink: "#FF80FF",
      yellow: "#FF0",
    },
  },
};

export default config;
