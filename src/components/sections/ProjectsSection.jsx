import { memo } from "react";
import { Reveal } from "../common/Reveal";
import { ProjectCard } from "./ProjectCard";
import { projects } from "../../data/projects";
import { useUI } from "../../context/ThemeContext";
import { getSectionStyle, getBigTitleStyle } from "../../constants/theme";

function ProjectsSectionBase() {
  const { T, isMobile } = useUI();
  const section = getSectionStyle(T, isMobile);
  const bigTitle = getBigTitleStyle(isMobile);

  return (
    <section id="projects" style={section}>
      <Reveal>
        <div style={bigTitle}>RECENT</div>
        <div style={{ ...bigTitle, color: T.text, marginBottom: "32px" }}>PROJECTS</div>
      </Reveal>
      {projects.map((p, i) => (
        <ProjectCard key={p.name} project={p} index={i} T={T} isMobile={isMobile} />
      ))}
    </section>
  );
}

export const ProjectsSection = memo(ProjectsSectionBase);
