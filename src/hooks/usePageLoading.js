import { useState, useEffect } from "react";

/**
 * Drives the branded loading splash. Returns:
 *  - pageLoading: true until fonts are ready AND a minimum time has passed
 *  - splashMounted: stays true a little longer than pageLoading so the
 *    fade-out transition can finish before the overlay unmounts
 */
export function usePageLoading(minDisplayMs = 700, fadeOutMs = 550) {
  const [pageLoading, setPageLoading] = useState(true);
  const [splashMounted, setSplashMounted] = useState(true);

  useEffect(() => {
    Promise.all([
      document.fonts && document.fonts.ready ? document.fonts.ready : Promise.resolve(),
      new Promise((resolve) => setTimeout(resolve, minDisplayMs)),
    ]).then(() => setPageLoading(false));
  }, [minDisplayMs]);

  useEffect(() => {
    if (!pageLoading) {
      const t = setTimeout(() => setSplashMounted(false), fadeOutMs);
      return () => clearTimeout(t);
    }
  }, [pageLoading, fadeOutMs]);

  return { pageLoading, splashMounted };
}
