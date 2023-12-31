import { Config } from "tailwindcss/types/config";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    transitionDuration: { DEFAULT: "300ms" },
    fontFamily: { sans: ["var(--font-sans)"], serif: ["var(--font-serif)"] },
    colors: {
      black: "#000",
      gray: "#686868",
      lightGray: "#D0D0D0",
      white: "#FFF",
      pink: "#FF80FF",
      yellow: "#FF0",
    },
  },
};

export default config;
