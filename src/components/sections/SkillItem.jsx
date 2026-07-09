import { memo } from "react";
import { ORANGE } from "../../constants/theme";

function SkillItemBase({ skill, index, T, isMobile }) {
  return (
    <div
      style={{
        padding: "20px 0",
        borderBottom: `1px solid ${T.rowBorder}`,
        paddingRight: !isMobile && index % 2 === 0 ? "40px" : "0",
        borderRight: !isMobile && index % 2 === 0 ? `1px solid ${T.rowBorder}` : "none",
        paddingLeft: !isMobile && index % 2 === 1 ? "40px" : "0",
      }}
    >
      <div style={{ fontSize: "13px", fontWeight: "700", color: ORANGE, marginBottom: "6px", letterSpacing: "0.5px" }}>{skill.label}</div>
      <div style={{ fontSize: "13px", color: T.text, lineHeight: 1.6 }}>{skill.items}</div>
    </div>
  );
}

export const SkillItem = memo(SkillItemBase);
