import { useState, useEffect } from "react";

/**
 * Fetches the latest posts from a Medium profile's RSS feed, client-side,
 * via an RSS-to-JSON proxy (Medium's own feed doesn't send CORS headers
 * for direct browser fetches).
 */
export function useMediumArticles(username, limit = 3) {
  const [articles, setArticles] = useState([]);
  const [status, setStatus] = useState("loading"); // loading | ready | error

  useEffect(() => {
    const feedUrl = `https://medium.com/feed/@${username}`;
    const proxyUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(feedUrl)}`;

    fetch(proxyUrl)
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "ok" && Array.isArray(data.items)) {
          setArticles(
            data.items.slice(0, limit).map((item) => ({
              title: item.title,
              link: item.link,
              date: item.pubDate,
            }))
          );
          setStatus("ready");
        } else {
          setStatus("error");
        }
      })
      .catch(() => setStatus("error"));
  }, [username, limit]);

  return { articles, status };
}
