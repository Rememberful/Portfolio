import { memo } from "react";
import adityaImage from "../../assets/Aditya-image - Copy.jpeg";
import { ORANGE } from "../../constants/theme";
import { SOCIAL_LINKS } from "../../data/profile";
import { SmartImage } from "../common/SmartImage";
import { SocialBtn } from "../common/SocialBtn";
import { ThemeToggleButton } from "./ThemeToggleButton";
import { ResumeButton } from "./ResumeButton";
import { SectionNav } from "./SectionNav";
import { ViewCounter } from "./ViewCounter";
import { IconLinkedIn, IconGithub, IconMedium, IconInstagram } from "../icons";

function SidebarCardBase({ compact, viewCount }) {
  return (
    <div
      style={{
        background: "#fff",
        borderRadius: compact ? "16px" : "20px",
        padding: compact ? "14px 16px" : "28px 24px 32px",
        textAlign: "center",
        width: "100%",
        position: "relative",
        boxShadow: "0 8px 40px rgba(0,0,0,0.5)",
      }}
    >
      {/* dashed border */}
      <div
        style={{
          position: "absolute",
          top: "-14px",
          left: "-14px",
          right: "-14px",
          bottom: "-14px",
          border: `2.5px dashed ${ORANGE}`,
          borderRadius: compact ? "22px" : "28px",
          opacity: 0.6,
          pointerEvents: "none",
        }}
      />

      {compact ? (
        <div style={{ display: "flex", alignItems: "center", gap: "12px", textAlign: "left" }}>
          <div
            style={{
              width: "52px",
              height: "52px",
              borderRadius: "10px",
              flexShrink: 0,
              background: "linear-gradient(135deg, #c0392b 40%, #e04010 100%)",
            }}
          >
            <SmartImage src={adityaImage} alt="Aditya Kumar" skeletonBase="rgba(0,0,0,0.08)" skeletonShine="rgba(0,0,0,0.16)" radius="10px" />
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ color: "#111", fontSize: "15px", fontWeight: "800" }}>Aditya Kumar</div>
            <div style={{ color: "#777", fontSize: "11px", marginTop: "2px" }}>SOC Analyst · Full-Stack Dev</div>
            <ViewCounter viewCount={viewCount} compact />
          </div>
          <div style={{ display: "flex", gap: "8px" }}>
            <ThemeToggleButton />
            <SocialBtn icon={<IconLinkedIn />} href={SOCIAL_LINKS.linkedin} />
            <SocialBtn icon={<IconGithub />} href={SOCIAL_LINKS.github} />
          </div>
        </div>
      ) : (
        <>
          <div
            style={{
              width: "100%",
              height: "220px",
              borderRadius: "12px",
              marginBottom: "20px",
              background: "linear-gradient(135deg, #c0392b 40%, #e04010 100%)",
            }}
          >
            <SmartImage src={adityaImage} alt="Aditya Kumar" skeletonBase="rgba(0,0,0,0.08)" skeletonShine="rgba(0,0,0,0.16)" radius="12px" />
          </div>
          <div style={{ color: "#111", fontSize: "30px", fontWeight: "800", marginBottom: "6px", letterSpacing: "-0.5px" }}>
            Aditya Kumar
          </div>
          <div style={{ color: "#888", fontSize: "10px", marginBottom: "14px" }}>
            B.Tech - IT (2026) · IEM Kolkata-CGPA 9.25
          </div>
          <ViewCounter viewCount={viewCount} compact={false} />
          <div style={{ color: "#555", fontSize: "13px", lineHeight: 1.6, marginBottom: "20px" }}>
            IT graduate skilled in cybersecurity, cloud computing & full-stack development.
          </div>

          <ResumeButton />
          <SectionNav />

          <div style={{ display: "flex", justifyContent: "center", gap: "12px" }}>
            <ThemeToggleButton />
            <SocialBtn icon={<IconLinkedIn />} href={SOCIAL_LINKS.linkedin} />
            <SocialBtn icon={<IconGithub />} href={SOCIAL_LINKS.github} />
            <SocialBtn icon={<IconMedium />} href={SOCIAL_LINKS.medium} />
            <SocialBtn icon={<IconInstagram />} href={SOCIAL_LINKS.instagram} />
          </div>
        </>
      )}
    </div>
  );
}

export const SidebarCard = memo(SidebarCardBase);
