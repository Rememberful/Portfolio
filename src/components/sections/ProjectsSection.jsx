import { memo, useState, useMemo, useCallback } from "react";
import { Reveal } from "../common/Reveal";
import { ProjectCard } from "./ProjectCard";
import { projects } from "../../data/projects";
import { projectCategories } from "../../data/projectCategories";
import { useUI } from "../../context/ThemeContext";
import { ORANGE, getSectionStyle, getBigTitleStyle } from "../../constants/theme";

function ProjectsSectionBase() {
  const { T, isMobile } = useUI();
  const section = getSectionStyle(T, isMobile);
  const bigTitle = getBigTitleStyle(isMobile);

  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects = useMemo(() => {
    if (activeCategory === "all") return projects;
    return projects.filter((p) => p.categories?.includes(activeCategory));
  }, [activeCategory]);

  const handleSelect = useCallback((id) => setActiveCategory(id), []);

  return (
    <section id="projects" style={section}>
      <Reveal>
        <div style={bigTitle}>RECENT</div>
        <div style={{ ...bigTitle, color: T.text, marginBottom: "24px" }}>PROJECTS</div>

        {/* Category filter pills */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "28px" }}>
          {projectCategories.map((cat) => {
            const active = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => handleSelect(cat.id)}
                style={{
                  fontSize: "12px",
                  fontWeight: 600,
                  padding: "7px 14px",
                  borderRadius: "20px",
                  border: `1px solid ${active ? ORANGE : T.rowBorder}`,
                  background: active ? ORANGE : "transparent",
                  color: active ? "#fff" : T.text,
                  cursor: "pointer",
                  transition: "background 0.2s ease, border-color 0.2s ease, color 0.2s ease",
                }}
              >
                {cat.label}
              </button>
            );
          })}
        </div>
      </Reveal>

      {filteredProjects.length === 0 ? (
        <div style={{ fontSize: "13px", color: T.textDim, padding: "20px 0" }}>
          No projects in this category yet.
        </div>
      ) : (
        filteredProjects.map((p, i) => (
          <ProjectCard key={p.name} project={p} index={i} T={T} isMobile={isMobile} />
        ))
      )}
    </section>
  );
}

export const ProjectsSection = memo(ProjectsSectionBase);