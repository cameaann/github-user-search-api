import Icon from "./Icon";
import { useTheme } from "./useTheme";

export const Switch = () => {
    const [theme, handleClick] = useTheme('light');

  return (
    <header className="app-header">
      <h2 className="app-header-title">devfinder</h2>
      <button className="btn" onClick ={handleClick}>
        <span className="btn-word">{ theme === "light" ? "Dark" : "Light" }</span>
        <Icon
          className={theme === 'light' ? "item-icon icon-moon" : "item-icon icon-sun"}
          icon={theme === 'light' ? "moon" : "sun"}
          size={16}
          color="#4b6a9b"
          fill="#4b6a9b"
        ></Icon>
      </button>
    </header>
  );
};
