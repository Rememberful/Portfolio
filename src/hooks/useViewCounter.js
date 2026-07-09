import { useState, useEffect } from "react";

/**
 * Profile view counter via the free CountAPI hit-counter service.
 * No backend of our own is needed, but the counter is only as reliable
 * as that third-party service — it silently returns null (hides itself)
 * if the call fails, rather than showing a broken state.
 */
export function useViewCounter(namespace = "aditya-kumar-portfolio", key = "profile-views") {
  const [viewCount, setViewCount] = useState(null);

  useEffect(() => {
    fetch(`https://api.countapi.xyz/hit/${namespace}/${key}`)
      .then((res) => res.json())
      .then((data) => setViewCount(data.value))
      .catch(() => setViewCount(null));
  }, [namespace, key]);

  return viewCount;
}
