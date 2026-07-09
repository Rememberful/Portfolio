import { SidebarCard } from "./SidebarCard";

export function DesktopSidebar({ viewCount }) {
  return (
    <aside
      style={{
        width: "320px",
        minWidth: "320px",
        flexShrink: 0,
        height: "100vh",
        padding: "24px 16px 24px 20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "sticky",
        top: 0,
        overflowY: "visible",
        zIndex: 1,
      }}
    >
      <SidebarCard compact={false} viewCount={viewCount} />
    </aside>
  );
}
