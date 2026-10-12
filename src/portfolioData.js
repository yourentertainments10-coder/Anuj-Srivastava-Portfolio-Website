export const profile = {
  name: "Anuj Srivastava",
  handle: "anuj",
  role: "Backend & Applied AI Developer",
  location: "Delhi, India",
  positioning:
    "I build practical software systems with Python, backend engineering, AI/ML, workflow automation, and data analytics — from messy input data to tested, useful tools.",
  availability: "Open to software roles & internships",
  degreeLine: "BCA '26",
  email: "anujxsrivastava@gmail.com",
  resumeUrl: "/Anuj_Resume.pdf",
  // Portrait shown in the hero. Use it EITHER here or in `about.photo`
  // below -- never both, or the same face appears twice on one page.
  photo: "/assets/anuj.jpeg",
  photoAlt: "Anuj Srivastava",
  githubUrl: "https://github.com/yourentertainments10-coder",
  linkedinUrl: "https://www.linkedin.com/in/anuj-srivastava-20a5b229a/",
};

export const navItems = ["Projects", "Skills", "Experience", "About", "Contact"];


/*
 * PROJECTS
 * ────────────────────────────────────────────────────────────────────────
 * `featured: true`  → full card, always visible (keep this to 3).
 * `featured: false` → compact row, hidden until the visitor clicks
 *                     "Show all projects". Add as many as you like.
 *
 * MEDIA SLOTS — see README.md § "Adding your photos and videos".
 *   media: { type: "image", src: "/assets/procurehub.png" }
 *   media: { type: "video", src: "/assets/procurehub-demo.mp4" }
 * Leave `media: null` and the card shows a clean titled panel instead.
 */
export const projects = [
  {
    featured: true,
    title: "ResearchFlow",
    tag: "Sports Research & Analytics",
    note: null,
    oneLiner:
      "Competition-agnostic sports research platform for ingesting, validating, and analysing historical results.",
    story:
      "ResearchFlow turns fragmented sports records into a queryable analytical dataset. I worked on the ingestion and normalization pipeline, strict validation, relational database design, and reporting workflow so event, sport, and placing records can be reconciled consistently. Its current Asian Games dataset contains 1,568 placings across 469 distinct events and 49 sports.",
    metrics: [
      { value: "1,568", label: "placings in dataset" },
      { value: "469", label: "distinct events" },
      { value: "49", label: "sports represented" },
    ],
    stack: ["Python", "FastAPI", "PostgreSQL", "React", "Pytest"],
    media: { type: "image", src: "/assets/researchflow.svg" },
    repoUrl: "https://github.com/yourentertainments10-coder/ResearchFlow",
    liveUrl: "https://researchflow.yourentertainments10.workers.dev/",
  },
  {
    featured: true,
    title: "ProcureHub",
    tag: "Workflow Automation",
    note: "Company project — code private",
    oneLiner:
      "WhatsApp- and email-driven procurement workflow for vendor stock, customer orders, and purchase processing.",
    story:
      "Built and integrated procurement workflows for vendor stock updates, customer order intake, OCR-assisted photo-order processing, vendor responses, and purchase-order preparation. The implemented procurement and vendor-order workflows are used daily by the company through a PostgreSQL-backed backend; automated vendor bidding is in testing.",
    stack: ["Python", "FastAPI", "React", "PostgreSQL", "WhatsApp API", "Gmail API", "OCR"],
    media: { type: "image", src: "/assets/procurehub.svg" },
    repoUrl: null,
    liveUrl: null,
  },
  {
    featured: true,
    title: "Beat Flash",
    tag: "Audio / Video POC",
    note: null,
    oneLiner:
      "Beat-aligned short-video generation proof of concept built with Python, librosa, and FFmpeg.",
    story:
      "Beat Flash analyses an audio track for beat and onset timing, maps those timestamps to source footage, and uses FFmpeg to render a sequence of timed cuts. I built the Python pipeline and explored its behaviour on different audio and video inputs. It is a proof of concept: beat detection and rendering work for tested inputs, while complex rhythms and production-grade editing controls remain limitations.",
    stack: ["Python", "librosa", "FFmpeg", "NumPy"],
    media: { type: "image", src: "/assets/beat-flash.svg" },
    repoUrl: "https://github.com/yourentertainments10-coder/Video-Editor",
    liveUrl: null,
  },

  /* ── Everything below is hidden behind "Show all projects" ───────────── */

  {
    featured: false,
    title: "AI Smart Classroom",
    tag: "Computer Vision",
    note: null,
    oneLiner:
      "Face-based attendance, engagement monitoring, and classroom analytics from a camera feed.",
    stack: ["Python", "OpenCV", "YOLOv8", "MediaPipe", "Flask", "MySQL"],
    media: { type: "image", src: "/assets/smart classroom.png" },
    repoUrl:
      "https://github.com/yourentertainments10-coder/smart-attendance-system",
  },
  {
    featured: false,
    title: "Chess Game / Chess Engine",
    tag: "Game Logic",
    note: null,
    oneLiner:
      "Browser chess interface with move validation and game-state logic implemented from scratch, without a chess library.",
    stack: ["React", "JavaScript", "CSS"],
    repoUrl: "https://github.com/yourentertainments10-coder/Chess",
  },
  {
    featured: false,
    title: "OpsFlow",
    tag: "Internal Platform",
    note: "Company project — code private",
    oneLiner:
      "Sales pipeline and workflow automation platform for an auto-accessories retailer.",
    story:
      "Leads lived in personal WhatsApp chats, tasks were verbal, and nothing was tracked. OpsFlow gives six roles a single system: a kanban lead pipeline with round-robin auto-assignment, recurring tasks and reminders, a notice board, and a form builder whose public share links turn a customer submission straight into an assigned lead and a follow-up task.",
    stack: ["Python", "Django REST", "React", "PostgreSQL", "JWT", "Claude API"],
    media: { type: "image", src: "/assets/opsflow.svg" },
    repoUrl: null,
    liveUrl: null,
  },
  {
    featured: false,
    title: "WhatsApp Group Access Audit",
    tag: "Security Tooling",
    note: "Company project — code private",
    oneLiner:
      "Read-only bot that cross-checks company WhatsApp group members against the employee roster and flags who shouldn't be there.",
    stack: ["Python", "Node.js", "Google Sheets API", "OAuth"],
    repoUrl: null,
  },
  {
    featured: false,
    title: "AI Process Discovery Bot",
    tag: "Applied AI",
    note: "Company project — code private",
    oneLiner:
      "Chatbot that interviews employees like a business consultant, then generates SOPs, process maps, and risk reports from their answers.",
    stack: ["Django", "React", "Claude API", "PostgreSQL"],
    repoUrl: null,
  },
  {
    featured: false,
    title: "Student Faculty Management System",
    tag: "Web App",
    note: null,
    oneLiner:
      "Role-based portal with separate student and faculty dashboards, records, and attendance workflows.",
    stack: ["Python", "Flask", "MySQL"],
    repoUrl:
      "https://github.com/yourentertainments10-coder/Student_Faculty_System",
  },
  {
    featured: false,
    title: "Fake Job Posting Detection",
    tag: "Machine Learning",
    note: null,
    oneLiner:
      "NLP classifier that flags fraudulent job listings from posting text.",
    stack: ["Python", "Scikit-learn", "Pandas"],
    repoUrl: null,
  },
];

export const skillGroups = [
  {
    title: "Languages",
    items: ["Python", "JavaScript", "SQL"],
  },
  {
    title: "Backend",
    items: [
      "Node.js",
      "Express.js",
      "FastAPI",
      "Flask",
      "Django",
      "REST APIs",
    ],
  },
  {
    title: "AI / ML",
    items: [
      "OpenCV",
      "YOLOv8",
      "MediaPipe",
      "face-recognition",
      "Scikit-learn",
    ],
  },
  {
    title: "Data",
    items: [
      "Pandas",
      "NumPy",
      "PostgreSQL",
      "MySQL",
      "SQLite",
      "Alembic",
    ],
  },
  {
    title: "Frontend",
    items: ["React", "HTML", "CSS", "Vite"],
  },
  {
    title: "Tools / DevOps",
    items: [
      "Git",
      "GitHub",
      "Docker",
      "Docker Compose",
      "Vercel",
      "WhatsApp Business Cloud API",
      "FFmpeg",
      "librosa",
    ],
  },
];

export const experience = [
  {
    role: "Full Stack Developer",
    company: "CarTrends, Delhi",
    period: "July 2026 – August 2026",
    details: [
      "Built and tested internal automation across company portals and operational workflows, including backend integrations and database-backed processes.",
      "Developed ProcureHub/AutoFlow workflows for WhatsApp stock updates, customer order intake, OCR-assisted photo extraction, vendor responses, purchase orders, and PostgreSQL integration.",
      "Tested, debugged, and supported deployment of the implemented workflows; automated vendor bidding remained in testing.",
    ],
  },
  {
    role: "Co-founder & Tutor",
    company: "Champions' World Academy",
    period: "2022 — Present",
    details: [
      "Co-founded a local tuition academy; teach programming fundamentals and problem-solving to school students.",
    ],
  },
  {
    role: "Vice-President",
    company: "Foto-Grafica — university photography society",
    period: "2025 — 2026",
    details: [
      "Led event planning and cross-team coordination for workshops and competitions.",
    ],
  },
];

export const education = {
  degree: "Bachelor of Computer Applications",
  institution: "Delhi Skill & Entrepreneurship University, Dwarka",
  period: "2023 — 2026",
};

export const certifications = [
  {
    name: "Data Visualisation",
    issuer: "Tata",
    credentialUrl: null,
  },
  {
    name: "Data Analytics Job Simulation",
    issuer: "Deloitte",
    credentialUrl:
      "https://www.linkedin.com/in/anuj-srivastava-20a5b229a/overlay/Certifications/633218790/treasury/?profileId=ACoAAEhY5aoBtDH5YTaNKA8lNokb9cKlPJKWp7g",
  },
  {
    name: "Foundations in Generative AI",
    issuer: "IBM",
    credentialUrl:
      "https://www.linkedin.com/in/anuj-srivastava-20a5b229a/overlay/Certifications/633372708/treasury/?profileId=ACoAAEhY5aoBtDH5YTaNKA8lNokb9cKlPJKWp7g",
  },
  {
    name: "GenAI Powered Data Analytics Job Simulation",
    issuer: "Forage",
    credentialUrl:
      "https://www.linkedin.com/in/anuj-srivastava-20a5b229a/overlay/Certifications/633032426/treasury/?profileId=ACoAAEhY5aoBtDH5YTaNKA8lNokb9cKlPJKWp7g",
  },
];

/*
 * PHOTO SLOT — see README.md § "Adding your photos and videos".
 * Set `photo: "/assets/anuj.jpg"` once the file is in public/assets/.
 */
export const about = {
  heading: "About",
  // Null on purpose: the portrait is in the hero. Set a path here only if
  // you remove profile.photo, otherwise the same photo appears twice.
  photo: null,
  photoAlt: "Anuj Srivastava",
  content: [
    "I'm a software developer focused on building practical software systems, AI-powered applications, and data-driven tools. My work spans backend development, Python, workflow automation, computer vision, and analytics.",
    "I enjoy taking a problem from research and system design through implementation, testing, and deployment. Projects such as ResearchFlow, ProcureHub, Beat Flash, and AI Smart Classroom have helped me explore reliable data pipelines, useful automation, and clear data insights.",
    "Outside of code, I shoot photos, served as vice-president of my university's photography society, tutor school students at an academy I co-founded, and build chess software to deepen my understanding of game logic.",
  ],
  // Compact fact row under the About text. Keep to 3-4 items.
  facts: [
    { label: "Based in", value: "Delhi, India" },
    { label: "Off-screen", value: "Photography, chess, teaching" },
    { label: "Learning now", value: "System design & scalable backends" },
  ],
};

// Single personal line in the footer — the Contact section above already
// carries the links, so the footer stays human rather than duplicating them.
export const footerNote = "Designed and built in Delhi with React, Vite, and a lot of chai.";
