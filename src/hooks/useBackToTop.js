import { useState, useEffect, useCallback } from "react";

export function scrollToSection(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

/**
 * Tracks scroll position to decide when to show the back-to-top button.
 * On desktop the <main> element itself scrolls; on mobile the whole
 * window scrolls — mainRef lets us listen to the right target either way.
 */
export function useBackToTop(mainRef, isMobile, threshold = 400) {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const scrollTop = isMobile ? window.scrollY : mainRef.current?.scrollTop || 0;
      setShowBackToTop(scrollTop > threshold);
    }
    const target = isMobile ? window : mainRef.current;
    target?.addEventListener("scroll", handleScroll);
    return () => target?.removeEventListener("scroll", handleScroll);
  }, [isMobile, mainRef, threshold]);

  const scrollToTop = useCallback(() => scrollToSection("hero"), []);

  return { showBackToTop, scrollToTop };
}
