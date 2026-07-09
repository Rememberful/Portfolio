import { memo } from "react";
import { Reveal } from "../common/Reveal";
import { useUI } from "../../context/ThemeContext";
import { getSectionStyle, getBigTitleStyle } from "../../constants/theme";

const STATS = [
  ["0", "YEARS OF\nEXPERIENCE"],
  ["6", "PROJECTS\nBUILT"],
  ["2", "INTERNSHIPS\nCOMPLETED"],
];

function HeroSectionBase() {
  const { T, isMobile } = useUI();
  const section = getSectionStyle(T, isMobile);
  const bigTitle = getBigTitleStyle(isMobile);

  return (
    <section
      id="hero"
      style={{ ...section, paddingLeft: isMobile ? "12px" : "40px", paddingRight: isMobile ? "12px" : "40px" }}
    >
      <Reveal>
        <div style={bigTitle}>Security Software </div>
        <div style={{ ...bigTitle, color: T.text }}>Engineer</div>
        <p style={{ color: T.heroSub, fontSize: isMobile ? "14px" : "15px", lineHeight: 1.7, maxWidth: "520px", marginTop: "24px", marginBottom: "40px" }}>
          Software Engineer focused on building, securing, and deploying scalable applications
          <br />
          <br />
          IT graduate from IEM Kolkata (CGPA 9.25) specializing in cybersecurity, cloud security,
          and full-stack development. Experienced in Security Operations and Backend Development.
          <br />
          React out to me: <br/>
          <br />
          <strong>
            Email: adii.utsav@gmail.com <br />
            Mobile: +91 7079487671
          </strong>
        </p>
        <div style={{ display: "flex", gap: isMobile ? "24px" : "48px", flexWrap: "nowrap" }}>
          {STATS.map(([num, label], i) => (
            <div key={i}>
              <div style={{ fontSize: isMobile ? "34px" : "52px", fontWeight: "900" }}>+{num}</div>
              <div style={{ fontSize: "10px", color: T.textDim, letterSpacing: "1.5px", marginTop: "4px", whiteSpace: "pre-line", lineHeight: 1.5 }}>
                {label}
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

export const HeroSection = memo(HeroSectionBase);
