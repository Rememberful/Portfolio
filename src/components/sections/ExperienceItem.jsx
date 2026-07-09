import { memo } from "react";
import { ORANGE } from "../../constants/theme";

function ExperienceItemBase({ exp, T, isMobile }) {
  return (
    <div
      style={{
        padding: "24px 0",
        borderBottom: `1px solid ${T.rowBorder}`,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        gap: "16px",
      }}
    >
      <div style={{ flex: 1 }}>
        <div style={{ fontSize: isMobile ? "15px" : "19px", fontWeight: "700", marginBottom: "4px" }}>{exp.company}</div>
        <div style={{ fontSize: "12px", color: ORANGE, fontWeight: 600, marginBottom: "10px" }}>{exp.role}</div>
        <div style={{ fontSize: "13px", color: T.text, lineHeight: 1.7 }}>{exp.desc}</div>
        <div style={{ fontSize: "12px", color: T.accentDate, marginTop: "10px" }}>{exp.date}</div>
      </div>
      <div style={{ color: ORANGE, fontSize: "18px", flexShrink: 0 }}>↗</div>
    </div>
  );
}

export const ExperienceItem = memo(ExperienceItemBase);
