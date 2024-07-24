import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  darkMode: "media",
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
