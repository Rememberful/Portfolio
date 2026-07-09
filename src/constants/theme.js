export const ORANGE = "#F05A28";

export const THEMES = {
  dark: {
    bg: "#111111",
    text: "#ffffff",
    textDim: "#8a8a8a",
    sectionBorder: "#2a2a2a",
    rowBorder: "#1e1e1e",
    heroSub: "#fbe5e5",
    inputBg: "#1a1a1a",
    inputBorder: "#2a2a2a",
    accentDate: "#e8d44d",
    skeletonBase: "rgba(255,255,255,0.06)",
    skeletonShine: "rgba(255,255,255,0.14)",
  },
  light: {
    bg: "#f6f4f1",
    text: "#161616",
    textDim: "#6b6b6b",
    sectionBorder: "#e2ded7",
    rowBorder: "#e9e5df",
    heroSub: "#5a3a34",
    inputBg: "#ffffff",
    inputBorder: "#dcd7cf",
    accentDate: "#a5760c",
    skeletonBase: "rgba(0,0,0,0.05)",
    skeletonShine: "rgba(0,0,0,0.10)",
  },
};

// Shared layout helpers that depend on isMobile — kept here so every
// section builds its "section" / "bigTitle" styles the same way.
export function getSectionStyle(T, isMobile) {
  return {
    minHeight: isMobile ? "auto" : "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    paddingTop: isMobile ? "48px" : "60px",
    paddingBottom: isMobile ? "48px" : "60px",
    borderBottom: `1px solid ${T.sectionBorder}`,
  };
}

export function getBigTitleStyle(isMobile) {
  return {
    fontSize: isMobile ? "clamp(34px, 9vw, 52px)" : "clamp(40px, 4.5vw, 76px)",
    fontWeight: "900",
    lineHeight: 1,
    letterSpacing: "-2px",
    textTransform: "uppercase",
    marginBottom: "0",
  };
}

export function getInputStyle(T) {
  return {
    background: T.inputBg,
    border: `1px solid ${T.inputBorder}`,
    borderRadius: "8px",
    color: T.text,
    padding: "12px 14px",
    fontSize: "14px",
    outline: "none",
    width: "100%",
    boxSizing: "border-box",
  };
}
