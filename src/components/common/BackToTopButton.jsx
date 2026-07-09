import { IconArrowUp } from "../icons";
import { ORANGE } from "../../constants/theme";

export function BackToTopButton({ visible, onClick }) {
  if (!visible) return null;

  return (
    <button
      className="no-print"
      onClick={onClick}
      aria-label="Back to top"
      style={{
        position: "fixed",
        bottom: "28px",
        right: "28px",
        zIndex: 200,
        width: "46px",
        height: "46px",
        borderRadius: "50%",
        background: ORANGE,
        color: "#fff",
        border: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 4px 20px rgba(240,90,40,0.5)",
        cursor: "pointer",
      }}
    >
      <IconArrowUp />
    </button>
  );
}
