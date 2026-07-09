import { memo } from "react";
import { IconDownload } from "../icons";
import { ORANGE } from "../../constants/theme";

function ResumeButtonBase() {
  return (
    <a
      className="no-print"
      href="/resume.pdf"
      download
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "8px",
        width: "100%",
        background: ORANGE,
        color: "#fff",
        fontWeight: "700",
        fontSize: "13px",
        padding: "12px",
        borderRadius: "8px",
        marginBottom: "20px",
        letterSpacing: "0.3px",
      }}
    >
      <IconDownload /> Download Resume
    </a>
  );
}

export const ResumeButton = memo(ResumeButtonBase);
