import { memo, useCallback } from "react";
import { navItems } from "../../data/navItems";
import { scrollToSection } from "../../hooks/useBackToTop";

function SectionNavBase() {
  const handleClick = useCallback((e, id) => {
    e.preventDefault();
    scrollToSection(id);
  }, []);

  return (
    <nav className="no-print" style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "8px", marginBottom: "20px" }}>
      {navItems.map(([id, label]) => (
        <a
          key={id}
          href={`#${id}`}
          onClick={(e) => handleClick(e, id)}
          style={{
            fontSize: "11px",
            color: "#555",
            fontWeight: 600,
            padding: "6px 10px",
            borderRadius: "6px",
            border: "1px solid #e2e2e2",
          }}
        >
          {label}
        </a>
      ))}
    </nav>
  );
}

export const SectionNav = memo(SectionNavBase);
