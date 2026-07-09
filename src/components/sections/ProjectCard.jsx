import { memo } from "react";
import { Reveal } from "../common/Reveal";
import { SmartImage } from "../common/SmartImage";
import { ORANGE } from "../../constants/theme";

function ProjectCardBase({ project, index, T, isMobile }) {
  const p = project;
  return (
    <Reveal delay={index * 60}>
      <div
        className="project-card"
        style={{
          display: "flex",
          alignItems: "flex-start",
          gap: "20px",
          borderBottom: `1px solid ${T.rowBorder}`,
          "--accent": p.color,
        }}
      >
        <div
          style={{
            width: isMobile ? "72px" : "170px",
            height: isMobile ? "50px" : "100px",
            borderRadius: "10px",
            flexShrink: 0,
            marginTop: "2px",
            background: p.color + "22",
            border: `1px solid ${p.color}55`,
          }}
        >
          {p.image ? (
            <SmartImage src={p.image} alt={p.name} skeletonBase={T.skeletonBase} skeletonShine={T.skeletonShine} radius="10px" />
          ) : (
            <div
              style={{
                width: "100%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: p.color,
                fontSize: "9px",
                fontWeight: 700,
                letterSpacing: "0.5px",
              }}
            >
              PREVIEW
            </div>
          )}
        </div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontSize: isMobile ? "14px" : "17px", fontWeight: "700", marginBottom: "4px" }}>{p.name}</div>
          <div style={{ fontSize: "12px", color: ORANGE, fontWeight: 600, marginBottom: "8px" }}>{p.sub}</div>
          <div style={{ fontSize: "13px", color: T.text, lineHeight: 1.7, marginBottom: "10px" }}>{p.desc}</div>
          <div style={{ display: "flex", gap: "12px" }}>
            {p.demo && (
              <a href={p.demo} target="_blank" rel="noreferrer" style={{ fontSize: "11px", color: ORANGE, fontWeight: 600 }}>
                Live Demo ↗
              </a>
            )}
            {p.github && (
              <a href={p.github} target="_blank" rel="noreferrer" style={{ fontSize: "11px", color: T.text }}>
                GitHub ↗
              </a>
            )}
          </div>
        </div>
      </div>
    </Reveal>
  );
}

export const ProjectCard = memo(ProjectCardBase);
