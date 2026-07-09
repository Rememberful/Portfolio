import { lazy, Suspense, useRef } from "react";
import { ThemeProvider, useUI } from "./context/ThemeContext";
import { GlobalStyles } from "./styles/GlobalStyles";
import { ORANGE } from "./constants/theme";

import { useViewCounter } from "./hooks/useViewCounter";
import { usePageLoading } from "./hooks/usePageLoading";
import { useBackToTop } from "./hooks/useBackToTop";

import { FloatingBubbles } from "./components/common/FloatingBubbles";
import { LoadingSplash } from "./components/common/LoadingSplash";
import { BackToTopButton } from "./components/common/BackToTopButton";
import { MobileHeader } from "./components/layout/MobileHeader";
import { DesktopSidebar } from "./components/layout/DesktopSidebar";

import { HeroSection } from "./components/sections/HeroSection";
import { ProjectsSection } from "./components/sections/ProjectsSection";
import { ExperienceSection } from "./components/sections/ExperienceSection";
import { SkillsSection } from "./components/sections/SkillsSection";
import { AchievementsSection } from "./components/sections/AchievementsSection";

// Below-the-fold sections that also make their own network calls —
// code-split so they aren't part of the initial JS bundle.
const WritingSection = lazy(() => import("./components/sections/Writing"));
const ContactSection = lazy(() => import("./components/sections/Contact"));

// A near-invisible placeholder so Suspense's fallback doesn't cause a
// layout jump while the chunk loads (it's tiny and fast on a good
// connection, but this keeps things smooth on slower ones too).
function SectionFallback() {
  return <div style={{ minHeight: "40vh" }} />;
}

function PortfolioContent() {
  const { T, isMobile, themeName } = useUI();
  const bubbleColor = themeName === "dark" ? "#ffffff" : ORANGE;
  const mainRef = useRef(null);

  const viewCount = useViewCounter();
  const { pageLoading, splashMounted } = usePageLoading();
  const { showBackToTop, scrollToTop } = useBackToTop(mainRef, isMobile);

  return (
    <>
      <GlobalStyles T={T} />

      <LoadingSplash mounted={splashMounted} loading={pageLoading} T={T} />

      <div
        style={{
          display: "flex",
          height: isMobile ? "auto" : "100vh",
          minHeight: "100vh",
          alignItems: "flex-start",
          background: T.bg,
          overflow: isMobile ? "visible" : "hidden",
          transition: "background 0.35s ease",
        }}
      >
        <FloatingBubbles accent={bubbleColor} count={180} />

        {isMobile && <MobileHeader viewCount={viewCount} />}
        {!isMobile && <DesktopSidebar viewCount={viewCount} />}

        <main
          ref={mainRef}
          style={{
            flex: 1,
            minWidth: 0,
            height: isMobile ? "auto" : "100vh",
            overflowY: isMobile ? "visible" : "auto",
            padding: isMobile ? "96px 20px 40px" : "0 32px",
            scrollBehavior: "smooth",
            position: "relative",
            zIndex: 1,
          }}
        >
          <HeroSection />
          <ProjectsSection />
          <ExperienceSection />
          <SkillsSection />
          <AchievementsSection />

          <Suspense fallback={<SectionFallback />}>
            <WritingSection />
          </Suspense>

          <Suspense fallback={<SectionFallback />}>
            <ContactSection />
          </Suspense>
        </main>

        <BackToTopButton visible={showBackToTop} onClick={scrollToTop} />
      </div>
    </>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <PortfolioContent />
    </ThemeProvider>
  );
}
