import { useState, memo } from "react";

// Image with a pulsing skeleton behind it and a blur-up fade once loaded.
// loading="lazy" means off-screen images (e.g. lower project cards)
// don't fetch until they're about to enter the viewport.
function SmartImageBase({ src, alt, skeletonBase, skeletonShine, radius }) {
  const [loaded, setLoaded] = useState(false);
  return (
    <div style={{ position: "relative", width: "100%", height: "100%", overflow: "hidden", borderRadius: radius }}>
      {!loaded && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: `linear-gradient(90deg, ${skeletonBase} 25%, ${skeletonShine} 50%, ${skeletonBase} 75%)`,
            backgroundSize: "200% 100%",
            animation: "skeleton-shine 1.4s ease-in-out infinite",
          }}
        />
      )}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          opacity: loaded ? 1 : 0,
          filter: loaded ? "blur(0px)" : "blur(10px)",
          transform: loaded ? "scale(1)" : "scale(1.05)",
          transition: "opacity 0.5s ease, filter 0.5s ease, transform 0.5s ease",
        }}
      />
    </div>
  );
}

export const SmartImage = memo(SmartImageBase);
