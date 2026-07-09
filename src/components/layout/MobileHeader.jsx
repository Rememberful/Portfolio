import { SidebarCard } from "./SidebarCard";
import { useUI } from "../../context/ThemeContext";

export function MobileHeader({ viewCount }) {
  const { T } = useUI();

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: "12px 16px",
        background: T.bg,
        transition: "background 0.35s ease",
      }}
    >
      <SidebarCard compact viewCount={viewCount} />
    </div>
  );
}
