import { ORANGE } from "../../constants/theme";

export function LoadingSplash({ mounted, loading, T }) {
  if (!mounted) return null;

  return (
    <div
      className="no-print"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 999,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "16px",
        background: T.bg,
        opacity: loading ? 1 : 0,
        pointerEvents: loading ? "auto" : "none",
        transition: "opacity 0.55s ease",
      }}
    >
      <div
        style={{
          width: "64px",
          height: "64px",
          borderRadius: "16px",
          border: `2.5px solid ${ORANGE}`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: ORANGE,
          fontWeight: 900,
          fontSize: "22px",
          letterSpacing: "1px",
          animation: "splash-pulse 1.2s ease-in-out infinite",
        }}
      >
        AK
      </div>
      <div style={{ color: T.textDim, fontSize: "11px", letterSpacing: "2px", textTransform: "uppercase" }}>
        Loading Portfolio
      </div>
    </div>
  );
}
