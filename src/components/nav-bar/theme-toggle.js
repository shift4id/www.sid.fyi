import { useTheme } from "next-themes";
import { useCallback } from "react";
import { Moon, Sun } from "react-feather";

export default function ThemeToggle() {
  const { resolvedTheme: theme, setTheme } = useTheme();

  const updateTheme = useCallback(() => setTheme(theme === "light" ? "dark" : "light"), [setTheme, theme]);

  return (
    <button
      type="button"
      onClick={updateTheme}
      className={`ml-auto transition-transform transform focus:outline-none ${theme === "light" && "rotate-[360deg]"}`}
    >
      {theme === "light" ? <Moon /> : <Sun />}
      <span className="sr-only">Change Theme</span>
    </button>
  );
}
