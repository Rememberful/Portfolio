import { memo } from "react";
import { Reveal } from "../common/Reveal";
import { SkillItem } from "./SkillItem";
import { skills } from "../../data/skills";
import { useUI } from "../../context/ThemeContext";
import { getSectionStyle, getBigTitleStyle } from "../../constants/theme";

function SkillsSectionBase() {
  const { T, isMobile } = useUI();
  const section = getSectionStyle(T, isMobile);
  const bigTitle = getBigTitleStyle(isMobile);

  return (
    <section id="skills" style={section}>
      <Reveal>
        <div style={bigTitle}>TECHNICAL</div>
        <div style={{ ...bigTitle, color: T.text, marginBottom: "32px" }}>SKILLS</div>
        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: "0" }}>
          {skills.map((s, i) => (
            <SkillItem key={s.label} skill={s} index={i} T={T} isMobile={isMobile} />
          ))}
        </div>
      </Reveal>
    </section>
  );
}

export const SkillsSection = memo(SkillsSectionBase);
