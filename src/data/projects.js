import project1 from "../assets/project-1.png";
import project2 from "../assets/project-2.png";
import project3 from "../assets/project-3.png";
// project5 and project6 images are intentionally not wired up yet —
// keep these two lines commented until those files exist in /assets.
// import project5 from "../assets/project-5.png";
// import project6 from "../assets/project-6.png";
import project4 from "../assets/project-4.png";

export const projects = [
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
