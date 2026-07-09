import { memo } from "react";
import { IconCopy, IconCheck } from "../../icons";
import { CONTACT_EMAIL } from "../../../data/profile";
import { useCopyToClipboard } from "../../../hooks/useCopyToClipboard";

function EmailCopyRowBase({ T }) {
  const { copied, copy } = useCopyToClipboard();

  return (
    <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px", fontSize: "14px", color: T.text }}>
      <span>{CONTACT_EMAIL}</span>
      <button
        onClick={() => copy(CONTACT_EMAIL)}
        aria-label="Copy email address"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "5px",
          background: "none",
          border: `1px solid ${T.rowBorder}`,
          borderRadius: "6px",
          color: copied ? "#4ade80" : T.textDim,
          fontSize: "11px",
          fontWeight: 600,
          padding: "5px 9px",
          cursor: "pointer",
        }}
      >
        {copied ? <IconCheck /> : <IconCopy />}
        {copied ? "Copied!" : "Copy"}
      </button>
    </div>
  );
}

export const EmailCopyRow = memo(EmailCopyRowBase);
