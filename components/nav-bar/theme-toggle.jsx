import { useTheme } from "next-themes";
import { Monitor, Moon, Sun } from "react-feather";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  const updateTheme = () => {
    if (theme === "system") setTheme("light");
    if (theme === "light") setTheme("dark");
    if (theme === "dark") setTheme("system");
  };

  const getIcon = () => {
    if (theme === "light") return <Sun />;
    if (theme === "dark") return <Moon />;
    if (theme === "system") return <Monitor />;
    return <></>;
  };

  return (
    <button
      type="button"
      onClick={updateTheme}
      className="z-50 p-2 bg-gray-200 rounded-md dark:bg-gray-800 focus:outline-none"
    >
      {getIcon()}
      <span className="sr-only">Change Theme</span>
    </button>
  );
};

export default ThemeToggle;
