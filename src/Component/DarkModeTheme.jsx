import React, { useState } from "react";
import "./App.css";
const DarkModeTheme = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? `dark-theme` : `light=theme`}>
      <div className={"textAlign:center"}>
        <h1>🌗Dark-Mode-Toggle</h1>
        <button
          onClick={toggleTheme}
          className={darkMode ? `btn-Light` : `btn-Dark`}
        >
          {darkMode ? "Enable Light Mode" : "Enable Dark Mode"}
        </button>
      </div>
    </div>
  );
};
export default DarkModeTheme;
