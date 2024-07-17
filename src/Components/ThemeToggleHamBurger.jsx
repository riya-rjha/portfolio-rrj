import React, { useState, useEffect } from "react";
import { MdDarkMode } from "react-icons/md";

const ThemeToggle = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      document.body.classList.add("dark-theme");
    } else {
      document.documentElement.classList.remove("dark");
      document.body.classList.remove("dark-theme");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <h2
      onClick={toggleTheme}
      src="https://cdn-icons-png.freepik.com/256/4997/4997695.png?ga=GA1.1.448448890.1721050418&semt=ais_hybrid"
      className="text-2xl relative left-4 rounded cursor-pointer"
    >
        Toggle Theme
    </h2>
  );
};

export default ThemeToggle;
