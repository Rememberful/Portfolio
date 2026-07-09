import { memo } from "react";
import { IconExternalLink } from "../../icons";
import { ORANGE } from "../../../constants/theme";
import { MEDIUM_USERNAME } from "../../../data/mediumLists";

function ArticleListBase({ articles, status, T, isMobile }) {
  return (
    <div style={{ marginBottom: "36px" }}>
      <div style={{ fontSize: "12px", fontWeight: "700", color: ORANGE, letterSpacing: "0.5px", marginBottom: "14px" }}>
        RECENT ARTICLES
      </div>

      {status === "loading" && <div style={{ fontSize: "13px", color: T.textDim }}>Loading latest articles…</div>}

      {status === "error" && (
        <div style={{ fontSize: "13px", color: T.textDim }}>
          Couldn't load articles right now — visit the{" "}
          <a href={`https://medium.com/@${MEDIUM_USERNAME}`} target="_blank" rel="noreferrer" style={{ color: ORANGE, fontWeight: 600 }}>
            Medium profile
          </a>{" "}
          directly.
        </div>
      )}

      {status === "ready" &&
        articles.map((a, i) => (
          <a
            key={i}
            href={a.link}
            target="_blank"
            rel="noreferrer"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "12px",
              padding: "14px 0",
              borderBottom: `1px solid ${T.rowBorder}`,
              color: T.text,
            }}
          >
            <span style={{ fontSize: isMobile ? "13px" : "15px", fontWeight: "600" }}>{a.title}</span>
            <span style={{ color: ORANGE, flexShrink: 0 }}>
              <IconExternalLink />
            </span>
          </a>
        ))}
    </div>
  );
}

export const ArticleList = memo(ArticleListBase);
