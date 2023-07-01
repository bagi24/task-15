import "./App.css";
import React, { useEffect } from "react";
import useLocalStorage from "./hooks/useLocalStorage";
import useWindowSize from "./hooks/useWindowSize";

const App = () => {
  const [theme, setTheme] = useLocalStorage("theme", "light");
  const windowSize = useWindowSize();

  const isDesktop = windowSize.width >= 768;

  const toggleTheme = () => {
    if (windowSize.width < 768) return;

    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    const root = document.documentElement;

    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [theme]);

  return (
    <div className={`App ${isDesktop ? theme : "light"}`}>
      {isDesktop && (
        <button onClick={toggleTheme} disabled={!isDesktop}>
          Toggle Theme
        </button>
      )}
      <h1>My App</h1>
    </div>
  );
};

export default App;
