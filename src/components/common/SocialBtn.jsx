import { memo } from "react";

function SocialBtnBase({ icon, href }) {
  return (
    <a
      href={href || "#"}
      target="_blank"
      rel="noreferrer"
      style={{
        width: "34px",
        height: "34px",
        border: "1.5px solid #ddd",
        borderRadius: "8px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        color: "#444",
        textDecoration: "none",
      }}
    >
      {icon}
    </a>
  );
}

export const SocialBtn = memo(SocialBtnBase);
