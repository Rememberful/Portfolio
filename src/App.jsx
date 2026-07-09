import { useState, useEffect, useRef, useMemo } from "react";
import adityaImage from "./assets/Aditya-image - Copy.jpeg";
import project1 from "./assets/project-1.png";
import project2 from "./assets/project-2.png";
import project3 from "./assets/project-3.png";
import project4 from "./assets/project-4.png";
import project5 from "./assets/project-5.png";
import project6 from "./assets/project-6.png";

const ORANGE = "#F05A28";

const THEMES = {
  dark: {
    bg: "#111111",
    text: "#ffffff",
    textDim: "#8a8a8a",
    sectionBorder: "#2a2a2a",
    rowBorder: "#1e1e1e",
    heroSub: "#fbe5e5",
    inputBg: "#1a1a1a",
    inputBorder: "#2a2a2a",
    accentDate: "#e8d44d",
    skeletonBase: "rgba(255,255,255,0.06)",
    skeletonShine: "rgba(255,255,255,0.14)",
  },
  light: {
    bg: "#f6f4f1",
    text: "#161616",
    textDim: "#6b6b6b",
    sectionBorder: "#e2ded7",
    rowBorder: "#e9e5df",
    heroSub: "#5a3a34",
    inputBg: "#ffffff",
    inputBorder: "#dcd7cf",
    accentDate: "#a5760c",
    skeletonBase: "rgba(0,0,0,0.05)",
    skeletonShine: "rgba(0,0,0,0.10)",
  },
};

const projects = [
  {
    name: "Steganalysis-Based Malware Detection",
    sub: "ReactJS · NodeJS · Python · Tailwind CSS",
    desc: "Developed a Python-based tool to detect hidden malware in PNG/JPG images by analyzing file structure, entropy, and cryptographic hashes without altering the original files. Automated threat scoring, payload extraction, and VirusTotal integration — designed for scalable use in SOC environments and future compatibility with SIEM/EDR systems.",
    color: "#6c3fc5",
    demo: "https://stegoanalyzer-frontend.onrender.com/",
    github: "#",
    image: project1,
  },
  {
    name: "E2EE-Net – Zero-Knowledge Secure Note Vault",
    sub: "React · Tailwind CSS · Node.js · Python",
    desc: "Built a secure note-sharing web app using client-side AES-256-GCM encryption, keeping keys hidden in URL hash fragments so the server remains completely blind to the message content. Designed a split-flow API to stop chat-bot previews from accidentally burning notes, backed by native Redis TTL self-destruction and un-trackable delivery receipts.",
    color: "#1a6e4a",
    demo: "https://e2ee-net.onrender.com/",
    github: "#",
    image: project2,
  },
  {
    name: "AuthNote System",
    sub: "Python · React · JavaScript · OWASP Security",
    desc: "Developed a secure full-stack notes platform with JWT + Google authentication, full OWASP-based security controls, and cloud-ready architecture. Built rich text editor, full-text search, tagging system, and media upload pipeline with optimized Postgres-based storage and retrieval.",
    color: "#b83030",
    demo: "https://notes-frontend-j8qo.onrender.com/login",
    github: "#",
    image: project3,
  },
  {
    name: "ThreatScore API",
    sub: "Python · FastAPI · PostgreSQL · Redis · Machine Learning",
    desc: "Engineered a high-performance threat intelligence and IP reputation API leveraging an ML pipeline to evaluate real-time network traffic anomalies. Implemented async PostgreSQL data persistence, a dynamic blocklist/allowlist engine to instantly bypass ML compute overhead for static list hits, and context-aware middleware SDKs for seamless edge integration.",
    color: "#c47a00",
    demo: "https://threatscore-dashboard.onrender.com/",
    github: "#",
    image: project4,
  },
  {
    name: "ScrapeSentinel",
    sub: "Python · Flask · LightGBM · RandomForest",
    desc: "Built a LightGBM–Random Forest ensemble for tiered bot detection (T1–T3) using behavioural and TLS-based features. Developed a content protection pipeline with honeytrap tokens, SimHash fingerprinting, and real-time Flask-based attack monitoring.",
    color: "#1a5a8a",
    demo: null,
    github: "#",
    // image: project5,
  },
  {
    name: "Serverless Rekognition Image Labeller",
    sub: "AWS Lambda · Rekognition · S3 · DynamoDB",
    desc: "Architected a fully serverless image recognition pipeline using AWS Lambda and Amazon Rekognition to automate AI-driven object and scene labelling upon S3 uploads. Engineered an asynchronous processing workflow via API Gateway with strict IAM least-privilege security controls.",
    color: "#2a6e5a",
    demo: null,
    github: "#",
    // image: project6,
  },
];

const experiences = [
  {
    company: "Noida Power Company Limited",
    role: "SOC Analyst Intern · On-site",
    desc: "Used SIEM tools and performed vulnerability assessments for threat detection and incident response. Tested 40+ MDM use cases for policy enforcement, compliance, and remote security management.",
    date: "June 2025 – August 2025",
  },
  {
    company: "NirveonX",
    role: "AI/ML & Cybersecurity Intern · Remote",
    desc: "Led quality-testing initiatives for AI/ML systems, ensuring model accuracy, robustness, and performance. Supported security compliance by identifying control gaps and aligning with ISO 27001 and NIST.",
    date: "May 2025 – June 2025",
  },
];

const skills = [
  { label: "Penetration Testing", items: "Nmap · Metasploit · Burp Suite · Hydra · Privilege Escalation" },
  { label: "VA & EDR Tools", items: "Nessus · CrowdStrike Falcon · Wireshark" },
  { label: "Security Concepts", items: "OWASP Top 10 · API Security Top 10 · MITRE ATT&CK" },
  { label: "Cloud", items: "AWS (EC2, S3, VPC, IAM, Lambda, RDS) · Azure · GCP" },
  { label: "Languages", items: "Python · C/C++ · Java · JavaScript" },
  { label: "Web & Dev", items: "React · Node.js · HTML/CSS · Spring Boot · MySQL · Git" },
  { label: "ML", items: "TensorFlow · Scikit-learn · LightGBM" },
  { label: "OS", items: "Kali Linux · Ubuntu · Parrot OS · Windows" },
];

const achievements = [
  { title: "Ranked 3rd in IT Department", sub: "IEM Kolkata · 2022–2023" },
  { title: "Ranked 5th in IT Department", sub: "IEM Kolkata · 2024–2025" },
  { title: "79th Position – ISCP 2.0 Flipkart CTF", sub: "October 2025" },
  { title: "Published at ICCAES Conference", sub: "Presented and published an abstract · 2022" },
  { title: "Ethical Hacking & Cyber Security Masterclass", sub: "Udemy Certification" },
  { title: "Foundations of Cybersecurity", sub: "Coursera Certification" },
  { title: "NPTEL: Ethical Hacking, Python, OS Fundamentals", sub: "NPTEL Certifications" },
];

// Curated Medium reading lists. To add a new one later, just add another
// { title, url } entry below — nothing else needs to change.
const mediumLists = [
  { title: "Web Application Security — Web Application Hacker's Handbook", url: "https://medium.com/@adii.utsav/list/web-application-security-web-application-hackers-handbook-25faf6f5df08" },
  { title: "Cloud Computing — AWS", url: "https://medium.com/@adii.utsav/list/cloud-computing-aws-cc578bd162c1" },
  { title: "Cloud Security — AWS", url: "https://medium.com/@adii.utsav/list/cloud-security-aws-4ed8b54489a5" },
  { title: "MERN Full-Stack Web Development", url: "https://medium.com/@adii.utsav/list/mernfull-stack-web-development-80a733e6a268" },
  { title: "CEH v12", url: "https://medium.com/@adii.utsav/list/cehv12-d016ac6b3bf6" },
  { title: "Python", url: "https://medium.com/@adii.utsav/list/python-c2feccc03498" },
  { title: "JavaScript", url: "https://medium.com/@adii.utsav/list/javascript-f7fbb8b10afe" },
  { title: "Git & GitHub", url: "https://medium.com/@adii.utsav/list/git-github-5e6f7765ba6e" },
];

// The Medium profile whose latest posts should auto-appear in "Latest Articles".
const MEDIUM_USERNAME = "adii.utsav";

const navItems = [
  ["hero", "Home"],
  ["projects", "Projects"],
  ["experience", "Experience"],
  ["skills", "Skills"],
  ["achievements", "Achievements"],
  ["writing", "Writing"],
  ["contact", "Contact"],
];

function IconLinkedIn() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}
function IconGithub() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}
function IconInstagram() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}
function IconMedium() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zm7.42 0c0 3.54-1.51 6.42-3.38 6.42S14.2 15.54 14.2 12s1.51-6.42 3.38-6.42S20.96 8.46 20.96 12zM24 12c0 3.17-.53 5.75-1.19 5.75S21.62 15.17 21.62 12s.53-5.75 1.19-5.75S24 8.83 24 12z" />
    </svg>
  );
}
function IconDownload() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 3v12" />
      <path d="M7 10l5 5 5-5" />
      <path d="M4 21h16" />
    </svg>
  );
}
function IconArrowUp() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
      <path d="M12 19V5" />
      <path d="M5 12l7-7 7 7" />
    </svg>
  );
}
function IconSun() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="4.5" />
      <path d="M12 2v2.5M12 19.5V22M4.2 4.2l1.8 1.8M18 18l1.8 1.8M2 12h2.5M19.5 12H22M4.2 19.8L6 18M18 6l1.8-1.8" />
    </svg>
  );
}
function IconMoon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M20 14.5A8.5 8.5 0 019.5 4a8.5 8.5 0 1010.5 10.5z" />
    </svg>
  );
}
function IconExternalLink() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
      <path d="M7 17L17 7" />
      <path d="M8 7h9v9" />
    </svg>
  );
}
function IconEye() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M1.5 12S5 5 12 5s10.5 7 10.5 7-3.5 7-10.5 7S1.5 12 1.5 12z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function SocialBtn({ icon, href, T }) {
  return (
    <a href={href || "#"} target="_blank" rel="noreferrer" style={{
      width: "34px", height: "34px",
      border: "1.5px solid #ddd", borderRadius: "8px",
      display: "flex", alignItems: "center", justifyContent: "center",
      cursor: "pointer", color: "#444", textDecoration: "none",
    }}>{icon}</a>
  );
}

// Fades + slides content in the first time it scrolls into view.
function Reveal({ children, delay = 0, style }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
        ...style,
      }}
    >
      {children}
    </div>
  );
}

// Image with a pulsing skeleton behind it and a blur-up fade once loaded.
function SmartImage({ src, alt, skeletonBase, skeletonShine, radius }) {
  const [loaded, setLoaded] = useState(false);
  return (
    <div style={{ position: "relative", width: "100%", height: "100%", overflow: "hidden", borderRadius: radius }}>
      {!loaded && (
        <div style={{
          position: "absolute", inset: 0,
          background: `linear-gradient(90deg, ${skeletonBase} 25%, ${skeletonShine} 50%, ${skeletonBase} 75%)`,
          backgroundSize: "200% 100%",
          animation: "skeleton-shine 1.4s ease-in-out infinite",
        }} />
      )}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        style={{
          width: "100%", height: "100%", objectFit: "cover",
          opacity: loaded ? 1 : 0,
          filter: loaded ? "blur(0px)" : "blur(10px)",
          transform: loaded ? "scale(1)" : "scale(1.05)",
          transition: "opacity 0.5s ease, filter 0.5s ease, transform 0.5s ease",
        }}
      />
    </div>
  );
}

// Small translucent circles that drift slowly upward in the background.
function FloatingBubbles({ accent }) {
  const bubbles = useMemo(() => {
    return Array.from({ length: 180 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: 6 + Math.random() * 30,
      duration: 16 + Math.random() * 18,
      delay: Math.random() * -30,
      opacity: 0.1 + Math.random() * 0.22,
      driftX: (Math.random() - 0.5) * 140,
    }));
  }, []);

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

export default function Portfolio() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [sendStatus, setSendStatus] = useState("idle"); // idle | sending | sent | error
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [themeName, setThemeName] = useState("light");
  const [viewCount, setViewCount] = useState(null);
  const [pageLoading, setPageLoading] = useState(true);
  const [splashMounted, setSplashMounted] = useState(true);
  const [articles, setArticles] = useState([]);
  const [articlesStatus, setArticlesStatus] = useState("loading"); // loading | ready | error
  const mainRef = useRef(null);
  const T = THEMES[themeName];

  useEffect(() => {
    const handler = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

  // ── Branded loading splash: wait for fonts + a short minimum time so it
  // never feels like an abrupt/unstyled flash of content. ──
  useEffect(() => {
    Promise.all([
      document.fonts && document.fonts.ready ? document.fonts.ready : Promise.resolve(),
      new Promise((resolve) => setTimeout(resolve, 700)),
    ]).then(() => setPageLoading(false));
  }, []);

  useEffect(() => {
    if (!pageLoading) {
      const t = setTimeout(() => setSplashMounted(false), 550);
      return () => clearTimeout(t);
    }
  }, [pageLoading]);

  // ── Profile view counter, via the free CountAPI hit-counter service. ──
  // No backend of our own is needed, but the counter is only as reliable
  // as that third-party service — it silently hides itself if the call fails.
  useEffect(() => {
    fetch("https://api.countapi.xyz/hit/aditya-kumar-portfolio/profile-views")
      .then((res) => res.json())
      .then((data) => setViewCount(data.value))
      .catch(() => setViewCount(null));
  }, []);

  // ── Latest Medium articles, fetched client-side via an RSS-to-JSON proxy
  // (Medium's RSS feed itself doesn't send CORS headers for browser fetches). ──
  useEffect(() => {
    const feedUrl = `https://medium.com/feed/@${MEDIUM_USERNAME}`;
    const proxyUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(feedUrl)}`;
    fetch(proxyUrl)
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "ok" && Array.isArray(data.items)) {
          setArticles(data.items.slice(0, 3).map((item) => ({
            title: item.title,
            link: item.link,
            date: item.pubDate,
          })));
          setArticlesStatus("ready");
        } else {
          setArticlesStatus("error");
        }
      })
      .catch(() => setArticlesStatus("error"));
  }, []);

  // Show/hide the back-to-top button depending on scroll position.
  // On desktop the <main> element itself scrolls; on mobile the whole window scrolls.
  useEffect(() => {
    function handleScroll() {
      const scrollTop = isMobile ? window.scrollY : mainRef.current?.scrollTop || 0;
      setShowBackToTop(scrollTop > 400);
    }
    const target = isMobile ? window : mainRef.current;
    target?.addEventListener("scroll", handleScroll);
    return () => target?.removeEventListener("scroll", handleScroll);
  }, [isMobile]);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function scrollToSection(id) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function scrollToTop() {
    scrollToSection("hero");
  }

  function toggleTheme() {
    setThemeName((t) => (t === "dark" ? "light" : "dark"));
  }

  // ── Contact form: opens the visitor's own email app (mailto) ──
  const CONTACT_EMAIL = "adii.utsav@gmail.com";

  const subjectLabels = {
    job: "Job Opportunity",
    collab: "Collaboration",
    project: "Project Inquiry",
    other: "Other",
  };

  function handleSendMessage() {
    if (!form.name || !form.email || !form.message) {
      setSendStatus("error");
      return;
    }

    const subjectText = subjectLabels[form.subject] || "Portfolio Contact";
    const mailSubject = `${subjectText} — from ${form.name}`;
    const mailBody =
      `Name: ${form.name}\n` +
      `Email: ${form.email}\n` +
      (form.subject ? `Subject: ${subjectText}\n` : "") +
      `\n${form.message}`;

    const mailtoUrl = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(mailSubject)}&body=${encodeURIComponent(mailBody)}`;
    window.location.href = mailtoUrl;

    setSendStatus("sent");
  }

  const SidebarCard = ({ compact }) => (
    <div style={{
      background: "#fff", borderRadius: compact ? "16px" : "20px",
      padding: compact ? "14px 16px" : "28px 24px 32px",
      textAlign: "center", width: "100%", position: "relative",
      boxShadow: "0 8px 40px rgba(0,0,0,0.5)",
    }}>
      {/* dashed border*/}
      <div style={{
        position: "absolute", top: "-14px", left: "-14px", right: "-14px", bottom: "-14px",
        border: `2.5px dashed ${ORANGE}`, borderRadius: compact ? "22px" : "28px",
        opacity: 0.6, pointerEvents: "none",
      }} />

      {compact ? (
        <div style={{ display: "flex", alignItems: "center", gap: "12px", textAlign: "left" }}>
          <div style={{
            width: "52px", height: "52px", borderRadius: "10px", flexShrink: 0,
            background: "linear-gradient(135deg, #c0392b 40%, #e04010 100%)",
          }}>
            <SmartImage src={adityaImage} alt="Aditya Kumar" skeletonBase="rgba(0,0,0,0.08)" skeletonShine="rgba(0,0,0,0.16)" radius="10px" />
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ color: "#111", fontSize: "15px", fontWeight: "800" }}>Aditya Kumar</div>
            <div style={{ color: "#777", fontSize: "11px", marginTop: "2px" }}>SOC Analyst · Full-Stack Dev</div>
            {viewCount !== null && (
              <div style={{ display: "flex", alignItems: "center", gap: "4px", color: "#999", fontSize: "10px", marginTop: "3px" }}>
                <IconEye /> {viewCount.toLocaleString()} views
              </div>
            )}
          </div>
          <div style={{ display: "flex", gap: "8px" }}>
            <button
              className="no-print"
              onClick={toggleTheme}
              aria-label="Toggle theme"
              style={{
                width: "34px", height: "34px", border: "1.5px solid #ddd", borderRadius: "8px",
                display: "flex", alignItems: "center", justifyContent: "center",
                background: "none", cursor: "pointer", color: "#444",
              }}
            >
              {themeName === "dark" ? <IconSun /> : <IconMoon />}
            </button>
            <SocialBtn icon={<IconLinkedIn />} href="https://www.linkedin.com/in/aditya-kumar-3241b6286/" />
            <SocialBtn icon={<IconGithub />} href="https://github.com/Rememberful" />
          </div>
        </div>
      ) : (
        <>
          <div style={{
            width: "100%", height: "220px", borderRadius: "12px",
            marginBottom: "20px", background: "linear-gradient(135deg, #c0392b 40%, #e04010 100%)",
          }}>
            <SmartImage src={adityaImage} alt="Aditya Kumar" skeletonBase="rgba(0,0,0,0.08)" skeletonShine="rgba(0,0,0,0.16)" radius="12px" />
          </div>
          <div style={{ color: "#111", fontSize: "30px", fontWeight: "800", marginBottom: "6px", letterSpacing: "-0.5px" }}>
            Aditya Kumar
          </div>
          <div style={{ color: "#888", fontSize: "10px", marginBottom: "14px" }}>
            IT Graduate (2026) · IEM Kolkata-CGPA 9.25
          </div>
          {viewCount !== null && (
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "5px", color: "#999", fontSize: "11px", marginBottom: "14px" }}>
              <IconEye /> {viewCount.toLocaleString()} profile views
            </div>
          )}
         <div style={{ color: "#555", fontSize: "13px", lineHeight: 1.6, marginBottom: "20px" }}>
            IT graduate skilled in cybersecurity, cloud computing & full-stack development.
          </div>

          {/* Resume download button */}
          <a
            className="no-print"
            href="/resume.pdf"
            download
            style={{
              display: "flex", alignItems: "center", justifyContent: "center", gap: "8px",
              width: "100%", background: ORANGE, color: "#fff", fontWeight: "700",
              fontSize: "13px", padding: "12px", borderRadius: "8px", marginBottom: "20px",
              letterSpacing: "0.3px",
            }}
          >
            <IconDownload /> Download Resume
          </a>

          {/* Section navigation */}
          <nav className="no-print" style={{
            display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "8px",
            marginBottom: "20px",
          }}>
            {navItems.map(([id, label]) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={(e) => { e.preventDefault(); scrollToSection(id); }}
                style={{
                  fontSize: "11px", color: "#555", fontWeight: 600,
                  padding: "6px 10px", borderRadius: "6px", border: "1px solid #e2e2e2",
                }}
              >
                {label}
              </a>
            ))}
          </nav>

          <div style={{ display: "flex", justifyContent: "center", gap: "12px" }}>
            <button
              className="no-print"
              onClick={toggleTheme}
              aria-label="Toggle theme"
              style={{
                width: "34px", height: "34px", border: "1.5px solid #ddd", borderRadius: "8px",
                display: "flex", alignItems: "center", justifyContent: "center",
                background: "none", cursor: "pointer", color: "#444",
              }}
            >
              {themeName === "dark" ? <IconSun /> : <IconMoon />}
            </button>
            <SocialBtn icon={<IconLinkedIn />} href="https://www.linkedin.com/in/aditya-kumar-3241b6286/" />
            <SocialBtn icon={<IconGithub />} href="https://github.com/Rememberful" />
            <SocialBtn icon={<IconMedium />} href="https://medium.com/@adii.utsav" />
            <SocialBtn icon={<IconInstagram />} href="https://www.instagram.com/notaditya.exe/" />
          </div>
        </>
      )}
    </div>
  );

  const section = {
    minHeight: isMobile ? "auto" : "100vh",
    display: "flex", flexDirection: "column", justifyContent: "center",
    paddingTop: isMobile ? "48px" : "60px",
    paddingBottom: isMobile ? "48px" : "60px",
    borderBottom: `1px solid ${T.sectionBorder}`,
  };

  const bigTitle = {
    fontSize: isMobile ? "clamp(34px, 9vw, 52px)" : "clamp(40px, 4.5vw, 76px)",
    fontWeight: "900", lineHeight: 1, letterSpacing: "-2px",
    textTransform: "uppercase", marginBottom: "0",
  };

  const inp = {
    background: T.inputBg, border: `1px solid ${T.inputBorder}`, borderRadius: "8px",
    color: T.text, padding: "12px 14px", fontSize: "14px",
    outline: "none", width: "100%", boxSizing: "border-box",
  };

  return (
    <>
      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html, body, #root { overflow-x: hidden; background: ${T.bg}; width: 100%; transition: background 0.35s ease; }
        body { font-family: 'Inter','Helvetica Neue',Arial,sans-serif; color:${T.text}; scroll-behavior: smooth; transition: color 0.35s ease; }
        input::placeholder, textarea::placeholder { color:#8a8a8a; }
        a { text-decoration: none; }

        @keyframes skeleton-shine {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }

        @keyframes float-up {
          0% { transform: translate(0, 0); opacity: 0; }
          8% { opacity: var(--op); }
          92% { opacity: var(--op); }
          100% { transform: translate(var(--drift), -115vh); opacity: 0; }
        }

        .project-card {
          border: 1px solid transparent;
          border-radius: 14px;
          padding: 22px 14px !important;
          margin: 0 -14px;
          transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease, background 0.25s ease;
        }
        .project-card:hover {
          transform: translateY(-4px);
          border-color: var(--accent);
          box-shadow: 0 10px 30px -8px var(--accent);
          background: rgba(127,127,127,0.05);
        }

        @keyframes splash-pulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.08); opacity: 0.75; }
        }

        @media print {
          .no-print { display: none !important; }
          .print-only { display: block !important; }
          html, body, #root { background: #ffffff !important; }
          body { color: #000000 !important; }
          main { height: auto !important; overflow: visible !important; padding: 0 24px !important; }
          aside { position: static !important; height: auto !important; }
          section { min-height: auto !important; page-break-inside: avoid; border-bottom-color: #ddd !important; }
        }
      `}</style>

      {splashMounted && (
        <div
          className="no-print"
          style={{
            position: "fixed", inset: 0, zIndex: 999,
            display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
            gap: "16px", background: T.bg,
            opacity: pageLoading ? 1 : 0,
            pointerEvents: pageLoading ? "auto" : "none",
            transition: "opacity 0.55s ease",
          }}
        >
          <div style={{
            width: "64px", height: "64px", borderRadius: "16px",
            border: `2.5px solid ${ORANGE}`,
            display: "flex", alignItems: "center", justifyContent: "center",
            color: ORANGE, fontWeight: 900, fontSize: "22px", letterSpacing: "1px",
            animation: "splash-pulse 1.2s ease-in-out infinite",
          }}>
            AK
          </div>
          <div style={{ color: T.textDim, fontSize: "11px", letterSpacing: "2px", textTransform: "uppercase" }}>
            Loading Portfolio
          </div>
        </div>
      )}

      <div style={{ display: "flex", height: isMobile ? "auto" : "100vh", minHeight: "100vh", alignItems: "flex-start", background: T.bg, overflow: isMobile ? "visible" : "hidden", transition: "background 0.35s ease" }}>

        <FloatingBubbles accent={ORANGE} />

        {/* Mobile sticky header */}
        {isMobile && (
          <div style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, padding: "12px 16px", background: T.bg, transition: "background 0.35s ease" }}>
            <SidebarCard compact={true} />
          </div>
        )}

        {/* Desktop sticky sidebar */}
        {!isMobile && (
          <aside style={{
            width: "320px", minWidth: "320px", flexShrink: 0,
            height: "100vh", padding: "24px 16px 24px 20px",
            display: "flex", alignItems: "center", justifyContent: "center",
            position: "sticky", top: 0, overflowY: "visible",
            zIndex: 1,
          }}>
            <SidebarCard compact={false} />
          </aside>
        )}

        {/* Main scrolls */}
        <main
          ref={mainRef}
          style={{
            flex: 1, minWidth: 0, height: isMobile ? "auto" : "100vh",
            overflowY: isMobile ? "visible" : "auto",
            padding: isMobile ? "96px 20px 40px" : "0 32px",
            scrollBehavior: "smooth",
            position: "relative",
            zIndex: 1,
          }}
        >

          {/* ── Hero ── */}
          <section id="hero" style={{ ...section, paddingLeft: isMobile ? "12px" : "40px", paddingRight: isMobile ? "12px" : "40px" }}>
            <Reveal>
              <div style={bigTitle}>Security Software </div>
              <div style={{ ...bigTitle, color: T.text }}>Engineer</div>
              <p style={{ color: T.heroSub, fontSize: isMobile ? "14px" : "15px", lineHeight: 1.7, maxWidth: "520px", marginTop: "24px", marginBottom: "40px" }}>
                Software Engineer focused on building, securing, and deploying scalable applications
                <br/>
                <br/>
                IT graduate from IEM Kolkata (CGPA 9.25) specializing in cybersecurity, cloud security,
                and full-stack development. Experienced in Security Operations and Backend Development.
                <br/>
                React out to me:  <br/>
                <strong>Email: adii.utsav@gmail.com <br/>
                Mobile: +91 7079487671</strong>
              </p>
              <div style={{ display: "flex", gap: isMobile ? "24px" : "48px", flexWrap: "nowrap" }}>
                {[["0", "YEARS OF\nEXPERIENCE"], ["6", "PROJECTS\nBUILT"], ["2", "INTERNSHIPS\nCOMPLETED"]].map(([num, label], i) => (
                  <div key={i}>
                    <div style={{ fontSize: isMobile ? "34px" : "52px", fontWeight: "900" }}>+{num}</div>
                    <div style={{ fontSize: "10px", color: T.textDim, letterSpacing: "1.5px", marginTop: "4px", whiteSpace: "pre-line", lineHeight: 1.5 }}>{label}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </section>

          {/* ── Projects ── */}
          <section id="projects" style={section}>
            <Reveal>
              <div style={bigTitle}>RECENT</div>
              <div style={{ ...bigTitle, color: T.text, marginBottom: "32px" }}>PROJECTS</div>
            </Reveal>
            {projects.map((p, i) => (
              <Reveal key={i} delay={i * 60}>
                <div
                  className="project-card"
                  style={{
                    display: "flex", alignItems: "flex-start", gap: "20px",
                    borderBottom: `1px solid ${T.rowBorder}`,
                    "--accent": p.color,
                  }}
                >
                  <div style={{
                    width: isMobile ? "72px" : "170px", height: isMobile ? "50px" : "100px",
                    borderRadius: "10px", flexShrink: 0, marginTop: "2px",
                    background: p.color + "22", border: `1px solid ${p.color}55`,
                  }}>
                    {p.image ? (
                      <SmartImage src={p.image} alt={p.name} skeletonBase={T.skeletonBase} skeletonShine={T.skeletonShine} radius="10px" />
                    ) : (
                      <div style={{
                        width: "100%", height: "100%",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        color: p.color, fontSize: "9px", fontWeight: 700, letterSpacing: "0.5px",
                      }}>PREVIEW</div>
                    )}
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: isMobile ? "14px" : "17px", fontWeight: "700", marginBottom: "4px" }}>{p.name}</div>
                    <div style={{ fontSize: "12px", color: ORANGE, fontWeight: 600, marginBottom: "8px" }}>{p.sub}</div>
                    <div style={{ fontSize: "13px", color: T.text, lineHeight: 1.7, marginBottom: "10px" }}>{p.desc}</div>
                    <div style={{ display: "flex", gap: "12px" }}>
                      {p.demo && <a href={p.demo} target="_blank" rel="noreferrer" style={{ fontSize: "11px", color: ORANGE, fontWeight: 600 }}>Live Demo ↗</a>}
                      {p.github && <a href={p.github} target="_blank" rel="noreferrer" style={{ fontSize: "11px", color: T.text }}>GitHub ↗</a>}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </section>

          {/* ── Experience ── */}
          <section id="experience" style={section}>
            <Reveal>
              <div style={bigTitle}>WORK</div>
              <div style={{ ...bigTitle, color: T.text, marginBottom: "32px" }}>EXPERIENCE</div>
              {experiences.map((e, i) => (
                <div key={i} style={{
                  padding: "24px 0", borderBottom: `1px solid ${T.rowBorder}`,
                  display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "16px",
                }}>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: isMobile ? "15px" : "19px", fontWeight: "700", marginBottom: "4px" }}>{e.company}</div>
                    <div style={{ fontSize: "12px", color: ORANGE, fontWeight: 600, marginBottom: "10px" }}>{e.role}</div>
                    <div style={{ fontSize: "13px", color: T.text, lineHeight: 1.7 }}>{e.desc}</div>
                    <div style={{ fontSize: "12px", color: T.accentDate, marginTop: "10px" }}>{e.date}</div>
                  </div>
                  <div style={{ color: ORANGE, fontSize: "18px", flexShrink: 0 }}>↗</div>
                </div>
              ))}
            </Reveal>
          </section>

          {/* ── Skills ── */}
          <section id="skills" style={section}>
            <Reveal>
              <div style={bigTitle}>TECHNICAL</div>
              <div style={{ ...bigTitle, color: T.text, marginBottom: "32px" }}>SKILLS</div>
              <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: "0" }}>
                {skills.map((s, i) => (
                  <div key={i} style={{
                    padding: "20px 0",
                    borderBottom: `1px solid ${T.rowBorder}`,
                    paddingRight: !isMobile && i % 2 === 0 ? "40px" : "0",
                    borderRight: !isMobile && i % 2 === 0 ? `1px solid ${T.rowBorder}` : "none",
                    paddingLeft: !isMobile && i % 2 === 1 ? "40px" : "0",
                  }}>
                    <div style={{ fontSize: "13px", fontWeight: "700", color: ORANGE, marginBottom: "6px", letterSpacing: "0.5px" }}>{s.label}</div>
                    <div style={{ fontSize: "13px", color: T.text, lineHeight: 1.6 }}>{s.items}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </section>

          {/* ── Achievements & Certs ── */}
          <section id="achievements" style={section}>
            <Reveal>
              <div style={bigTitle}>ACHIEVEMENTS</div>
              <div style={{ ...bigTitle, color: T.text, marginBottom: "32px" }}>&amp; CERTS</div>
              {achievements.map((a, i) => (
                <div key={i} style={{ padding: "20px 0", borderBottom: `1px solid ${T.rowBorder}`, display: "flex", justifyContent: "space-between", gap: "16px" }}>
                  <div>
                    <div style={{ fontSize: isMobile ? "14px" : "17px", fontWeight: "700", marginBottom: "4px" }}>{a.title}</div>
                    <div style={{ fontSize: "13px", color: T.textDim }}>{a.sub}</div>
                  </div>
                  <div style={{ color: ORANGE, fontSize: "16px", flexShrink: 0 }}>★</div>
                </div>
              ))}
            </Reveal>
          </section>

          {/* ── Writing (Medium) ── */}
          <section id="writing" style={section}>
            <Reveal>
              <div style={bigTitle}>LATEST</div>
              <div style={{ ...bigTitle, color: T.text, marginBottom: "28px" }}>WRITING</div>

              {/* Auto-pulled from the Medium RSS feed — no manual updates needed */}
              <div style={{ marginBottom: "36px" }}>
                <div style={{ fontSize: "12px", fontWeight: "700", color: ORANGE, letterSpacing: "0.5px", marginBottom: "14px" }}>
                  RECENT ARTICLES
                </div>
                {articlesStatus === "loading" && (
                  <div style={{ fontSize: "13px", color: T.textDim }}>Loading latest articles…</div>
                )}
                {articlesStatus === "error" && (
                  <div style={{ fontSize: "13px", color: T.textDim }}>
                    Couldn't load articles right now — visit the{" "}
                    <a href={`https://medium.com/@${MEDIUM_USERNAME}`} target="_blank" rel="noreferrer" style={{ color: ORANGE, fontWeight: 600 }}>
                      Medium profile
                    </a>{" "}
                    directly.
                  </div>
                )}
                {articlesStatus === "ready" && articles.map((a, i) => (
                  <a
                    key={i}
                    href={a.link}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      display: "flex", justifyContent: "space-between", alignItems: "center", gap: "12px",
                      padding: "14px 0", borderBottom: `1px solid ${T.rowBorder}`, color: T.text,
                    }}
                  >
                    <span style={{ fontSize: isMobile ? "13px" : "15px", fontWeight: "600" }}>{a.title}</span>
                    <span style={{ color: ORANGE, flexShrink: 0 }}><IconExternalLink /></span>
                  </a>
                ))}
              </div>

              {/* Curated reading lists — flexible: add more entries to mediumLists anytime */}
              <div>
                <div style={{ fontSize: "12px", fontWeight: "700", color: ORANGE, letterSpacing: "0.5px", marginBottom: "14px" }}>
                  READING LISTS
                </div>
                <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: "10px" }}>
                  {mediumLists.map((l, i) => (
                    <a
                      key={i}
                      href={l.url}
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        display: "flex", justifyContent: "space-between", alignItems: "center", gap: "10px",
                        padding: "12px 14px", borderRadius: "10px",
                        border: `1px solid ${T.rowBorder}`, color: T.text,
                        fontSize: "13px", fontWeight: "600",
                      }}
                    >
                      <span>{l.title}</span>
                      <span style={{ color: ORANGE, flexShrink: 0 }}><IconExternalLink /></span>
                    </a>
                  ))}
                </div>
              </div>
            </Reveal>
          </section>

          {/* ── Contact ── */}
          <section id="contact" style={{ ...section, borderBottom: "none" }}>
            <Reveal>
              <div style={bigTitle}>CONTACT</div>
              <div style={{ ...bigTitle, color: T.text, marginBottom: "32px" }}>ME</div>
              <div className="print-only" style={{ display: "none", fontSize: "13px", color: T.text, marginBottom: "16px" }}>
                Reach out via email: {CONTACT_EMAIL}
              </div>
              <div className="no-print">
                <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: "14px", marginBottom: "14px" }}>
                  <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                    <label style={{ fontSize: "12px", color: T.text }}>Name</label>
                    <input name="name" value={form.name} onChange={handleChange} placeholder="Your Name" style={inp} />
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                    <label style={{ fontSize: "12px", color: T.text }}>Email</label>
                    <input name="email" value={form.email} onChange={handleChange} placeholder="your@email.com" style={inp} />
                  </div>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "6px", marginBottom: "14px" }}>
                  <label style={{ fontSize: "12px", color: T.text }}>Subject</label>
                  <select name="subject" value={form.subject} onChange={handleChange} style={{ ...inp, appearance: "none" }}>
                    <option value="">Select a topic...</option>
                    <option value="job">Job Opportunity</option>
                    <option value="collab">Collaboration</option>
                    <option value="project">Project Inquiry</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "6px", marginBottom: "16px" }}>
                  <label style={{ fontSize: "12px", color: T.text }}>Message</label>
                  <textarea name="message" value={form.message} onChange={handleChange} placeholder="Tell me about the opportunity..." style={{ ...inp, minHeight: "140px", resize: "vertical" }} />
                </div>
                <button
                  onClick={handleSendMessage}
                  style={{
                    width: "100%", background: ORANGE, border: "none", borderRadius: "10px",
                    color: "#fff", fontWeight: "700", fontSize: "15px", padding: "16px",
                    cursor: "pointer", letterSpacing: "0.5px",
                  }}
                >
                  Send Message
                </button>
                {sendStatus === "sent" && (
                  <p style={{ color: "#4ade80", fontSize: "13px", marginTop: "12px" }}>
                    Opening your email app to send this message...
                  </p>
                )}
                {sendStatus === "error" && (
                  <p style={{ color: "#f87171", fontSize: "13px", marginTop: "12px" }}>
                    Please fill in your name, email, and message first.
                  </p>
                )}
              </div>
            </Reveal>
          </section>

        </main>

        {/* Back to top button */}
        {showBackToTop && (
          <button
            className="no-print"
            onClick={scrollToTop}
            aria-label="Back to top"
            style={{
              position: "fixed", bottom: "28px", right: "28px", zIndex: 200,
              width: "46px", height: "46px", borderRadius: "50%",
              background: ORANGE, color: "#fff", border: "none",
              display: "flex", alignItems: "center", justifyContent: "center",
              boxShadow: "0 4px 20px rgba(240,90,40,0.5)", cursor: "pointer",
            }}
          >
            <IconArrowUp />
          </button>
        )}
      </div>
    </>
  );
}