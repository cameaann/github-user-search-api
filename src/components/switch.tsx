import Icon from "./Icon";
import { useDarkMode } from "../DarkModeContext";

export const Switch = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  return (
    <header className="app-header">
      <h2 className="app-header-title">devfinder</h2>
      <button className="btn" onClick={toggleDarkMode}>
        <span className="btn-word">
          {darkMode ? "Light" : "Dark"}
        </span>
        <Icon
          className= {darkMode ? "item-icon icon-sun" : "item-icon icon-moon"}
          icon= {darkMode ? "sun" : "moon"}
          size={16}
          color="#4b6a9b"
        ></Icon>
      </button>
    </header>
  );
};
