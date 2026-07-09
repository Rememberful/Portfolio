import { memo } from "react";
import { Reveal } from "../common/Reveal";
import { AchievementItem } from "./AchievementItem";
import { achievements } from "../../data/achievements";
import { useUI } from "../../context/ThemeContext";
import { getSectionStyle, getBigTitleStyle } from "../../constants/theme";

function AchievementsSectionBase() {
  const { T, isMobile } = useUI();
  const section = getSectionStyle(T, isMobile);
  const bigTitle = getBigTitleStyle(isMobile);

  return (
    <section id="achievements" style={section}>
      <Reveal>
        <div style={bigTitle}>ACHIEVEMENTS</div>
        <div style={{ ...bigTitle, color: T.text, marginBottom: "32px" }}>&amp; CERTS</div>
        {achievements.map((a, i) => (
          <AchievementItem key={i} achievement={a} T={T} isMobile={isMobile} />
        ))}
      </Reveal>
    </section>
  );
}

export const AchievementsSection = memo(AchievementsSectionBase);
