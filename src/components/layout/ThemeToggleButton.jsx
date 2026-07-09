import { memo } from "react";
import { IconSun, IconMoon } from "../icons";
import { useUI } from "../../context/ThemeContext";

function ThemeToggleButtonBase() {
  const { themeName, toggleTheme } = useUI();

  return (
    <button
      className="no-print"
      onClick={toggleTheme}
      aria-label="Toggle theme"
      style={{
        width: "34px",
        height: "34px",
        border: "1.5px solid #ddd",
        borderRadius: "8px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "none",
        cursor: "pointer",
        color: "#444",
      }}
    >
      {themeName === "dark" ? <IconSun /> : <IconMoon />}
    </button>
  );
}

export const ThemeToggleButton = memo(ThemeToggleButtonBase);
