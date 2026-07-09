import { memo } from "react";
import { Reveal } from "../common/Reveal";
import { ExperienceItem } from "./ExperienceItem";
import { experiences } from "../../data/experiences";
import { useUI } from "../../context/ThemeContext";
import { getSectionStyle, getBigTitleStyle } from "../../constants/theme";

function ExperienceSectionBase() {
  const { T, isMobile } = useUI();
  const section = getSectionStyle(T, isMobile);
  const bigTitle = getBigTitleStyle(isMobile);

  return (
    <section id="experience" style={section}>
      <Reveal>
        <div style={bigTitle}>WORK</div>
        <div style={{ ...bigTitle, color: T.text, marginBottom: "32px" }}>EXPERIENCE</div>
        {experiences.map((e, i) => (
          <ExperienceItem key={i} exp={e} T={T} isMobile={isMobile} />
        ))}
      </Reveal>
    </section>
  );
}

export const ExperienceSection = memo(ExperienceSectionBase);
