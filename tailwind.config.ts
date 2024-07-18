import { Config } from "tailwindcss/types/config";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    transitionDuration: { DEFAULT: "250ms" },
    fontFamily: { sans: ["var(--font-sans)"], serif: ["var(--font-serif)"] },
    colors: {
      background: "hsl(var(--background))",
      foreground: "hsl(var(--foreground))",

      accent: "hsl(var(--accent))",

      muted: "hsl(var(--muted))",
      subtle: "hsl(var(--subtle))",

      highlight: "hsl(var(--highlight))",
    },
  },
};

export default config;
