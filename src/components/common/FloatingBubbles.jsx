import { useMemo, memo } from "react";

// Small translucent circles that drift slowly upward in the background.
function FloatingBubblesBase({ accent, count = 180 }) {
  const bubbles = useMemo(() => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: 6 + Math.random() * 30,
      duration: 16 + Math.random() * 18,
      delay: Math.random() * -30,
      opacity: 0.1 + Math.random() * 0.33,
      driftX: (Math.random() - 0.5) * 140,
    }));
  }, [count]);

  return (
    <div className="no-print" style={{ position: "fixed", inset: 0, overflow: "hidden", pointerEvents: "none", zIndex: 0 }}>
      {bubbles.map((b) => (
        <span
          key={b.id}
          style={{
            position: "absolute",
            bottom: "-60px",
            left: `${b.left}%`,
            width: `${b.size}px`,
            height: `${b.size}px`,
            borderRadius: "50%",
            background: `radial-gradient(circle at 30% 30%, ${accent}66, ${accent}1a 70%, transparent 75%)`,
            border: `1px solid ${accent}33`,
            "--drift": `${b.driftX}px`,
            "--op": b.opacity,
            animation: `float-up ${b.duration}s linear infinite`,
            animationDelay: `${b.delay}s`,
          }}
        />
      ))}
    </div>
  );
}

export const FloatingBubbles = memo(FloatingBubblesBase);
