import { Reveal } from "../../common/Reveal";
import { ArticleList } from "./ArticleList";
import { ReadingLists } from "./ReadingLists";
import { useUI } from "../../../context/ThemeContext";
import { useMediumArticles } from "../../../hooks/useMediumArticles";
import { MEDIUM_USERNAME } from "../../../data/mediumLists";
import { getSectionStyle, getBigTitleStyle } from "../../../constants/theme";

// Default export so this whole section (plus its two child components)
// can be code-split via React.lazy in App.jsx — it's below the fold and
// makes its own network calls, so there's no reason to ship it in the
// initial bundle.
export default function WritingSection() {
  const { T, isMobile } = useUI();
  const { articles, status } = useMediumArticles(MEDIUM_USERNAME, 3);
  const section = getSectionStyle(T, isMobile);
  const bigTitle = getBigTitleStyle(isMobile);

  return (
    <section id="writing" style={section}>
      <Reveal>
        <div style={bigTitle}>PROOF OF</div>
        <div style={{ ...bigTitle, color: T.text, marginBottom: "28px" }}>WORK</div>

        <ArticleList articles={articles} status={status} T={T} isMobile={isMobile} />
        <ReadingLists T={T} isMobile={isMobile} />
      </Reveal>
    </section>
  );
}
