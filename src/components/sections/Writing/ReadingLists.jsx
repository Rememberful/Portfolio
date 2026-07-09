import { memo } from "react";
import { IconExternalLink } from "../../icons";
import { ORANGE } from "../../../constants/theme";
import { mediumLists } from "../../../data/mediumLists";

function ReadingListsBase({ T, isMobile }) {
  return (
    <div>
      <div style={{ fontSize: "12px", fontWeight: "700", color: ORANGE, letterSpacing: "0.5px", marginBottom: "14px" }}>
        READING LISTS
      </div>
      <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: "10px" }}>
        {mediumLists.map((l, i) => (
          <a
            key={i}
            href={l.url}
            target="_blank"
            rel="noreferrer"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "10px",
              padding: "12px 14px",
              borderRadius: "10px",
              border: `1px solid ${T.rowBorder}`,
              color: T.text,
              fontSize: "13px",
              fontWeight: "600",
            }}
          >
            <span>{l.title}</span>
            <span style={{ color: ORANGE, flexShrink: 0 }}>
              <IconExternalLink />
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}

export const ReadingLists = memo(ReadingListsBase);
