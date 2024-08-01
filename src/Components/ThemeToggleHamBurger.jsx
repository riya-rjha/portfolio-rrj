import React, { useState, useEffect } from "react";

const ThemeToggle = () => {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.remove("light");
      document.documentElement.classList.add("dark");
      console.log(theme);
    } else if (theme == "light") {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
      console.log(theme);
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
    console.log(theme);
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
