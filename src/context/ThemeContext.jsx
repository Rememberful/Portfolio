import { createContext, useContext, useState, useCallback, useMemo } from "react";
import { THEMES } from "../constants/theme";
import { useIsMobile } from "../hooks/useIsMobile";

const UIContext = createContext(null);

/**
 * Single provider for everything the whole tree needs to know about
 * "how should I currently look": the active theme's color object (T),
 * the theme name (for icon swap), a toggle function, and isMobile.
 *
 * Keeping isMobile here too (rather than a separate hook each component
 * calls independently) means there's exactly one `resize` listener for
 * the whole app instead of one per component that needs it.
 */
export function ThemeProvider({ children }) {
  const [themeName, setThemeName] = useState("light"); // default theme: light
  const isMobile = useIsMobile();

  const toggleTheme = useCallback(() => {
    setThemeName((t) => (t === "dark" ? "light" : "dark"));
  }, []);

  const value = useMemo(
    () => ({
      themeName,
      T: THEMES[themeName],
      toggleTheme,
      isMobile,
    }),
    [themeName, toggleTheme, isMobile]
  );

  return <UIContext.Provider value={value}>{children}</UIContext.Provider>;
}

export function useUI() {
  const ctx = useContext(UIContext);
  if (!ctx) throw new Error("useUI must be used within a ThemeProvider");
  return ctx;
}
