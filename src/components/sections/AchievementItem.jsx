import { memo } from "react";
import { ORANGE } from "../../constants/theme";

function AchievementItemBase({ achievement, T, isMobile }) {
  return (
    <div style={{ padding: "20px 0", borderBottom: `1px solid ${T.rowBorder}`, display: "flex", justifyContent: "space-between", gap: "16px" }}>
      <div>
        <div style={{ fontSize: isMobile ? "14px" : "17px", fontWeight: "700", marginBottom: "4px" }}>{achievement.title}</div>
        <div style={{ fontSize: "13px", color: T.textDim }}>{achievement.sub}</div>
      </div>
      <div style={{ color: ORANGE, fontSize: "16px", flexShrink: 0 }}>★</div>
    </div>
  );
}

export const AchievementItem = memo(AchievementItemBase);
