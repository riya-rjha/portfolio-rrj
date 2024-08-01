import React, { useState, useEffect } from "react";
import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";

const ThemeToggle = () => {
  const [theme, setTheme] = useState("dark");
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const toggleTheme = () => {
    setAnimate(true);
    setTheme(theme === "light" ? "dark" : "light");
    setTimeout(() => setAnimate(false), 500); 
  };

  return (
    <>
      {theme === "light" ? (
        <MdDarkMode
          onClick={toggleTheme}
          className={`w-7 h-7 relative bottom-[3px] rounded cursor-pointer bg-black icon ${animate ? 'animate' : ''}`}
        />
      ) : (
        <CiLight
          onClick={toggleTheme}
          className={`w-7 h-7 relative bottom-[3px] rounded cursor-pointer bg-black icon ${animate ? 'animate' : ''}`}
        />
      )}
    </>
  );
};

export default ThemeToggle;
