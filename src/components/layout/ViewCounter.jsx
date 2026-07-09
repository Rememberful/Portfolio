import { memo } from "react";
import { IconEye } from "../icons";

function ViewCounterBase({ viewCount, compact }) {
  if (viewCount === null) return null;

  return compact ? (
    <div style={{ display: "flex", alignItems: "center", gap: "4px", color: "#999", fontSize: "10px", marginTop: "3px" }}>
      <IconEye /> {viewCount.toLocaleString()} views
    </div>
  ) : (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "5px", color: "#999", fontSize: "11px", marginBottom: "14px" }}>
      <IconEye /> {viewCount.toLocaleString()} profile views
    </div>
  );
}

export const ViewCounter = memo(ViewCounterBase);
