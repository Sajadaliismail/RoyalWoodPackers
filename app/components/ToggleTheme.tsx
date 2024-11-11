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
    <div className="flex items-center justify-center ">
      <button
        className={`w-8 h-5 flex items-center rounded-full p-1 cursor-pointer ${
          theme == "dark" ? "bg-neutral-700" : "bg-gray-300"
        }`}
        onClick={toggleTheme}
      >
        <span
          className={`bg-white w-3 h-3 rounded-full shadow-md transform transition-transform duration-300 ease-in-out ${
            theme == "dark" ? "translate-x-3" : ""
          }`}
        ></span>
      </button>
    </div>
  );
}

export default ThemeToggle;
