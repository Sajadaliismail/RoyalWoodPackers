"use client";
import { useState, useEffect } from "react";

function ThemeToggle() {
  const storedTheme =
    typeof window !== "undefined" ? localStorage.getItem("theme") : null;
  const [theme, setTheme] = useState<string>(storedTheme || "light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <button
      onClick={toggleTheme}
      className="bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-2 rounded"
    >
      {theme}
    </button>
  );
}

export default ThemeToggle;
