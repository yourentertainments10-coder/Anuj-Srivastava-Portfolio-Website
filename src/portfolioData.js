export const profile = {
  name: "Anuj Srivastava",
  handle: "anuj",
  role: "Full-Stack Developer",
  location: "Delhi, India",
  positioning:
    "I build the software a business actually runs on — procurement automation, internal operations platforms, and applied AI — with Python and React.",
  availability: "Open to software roles & internships",
  degreeLine: "BCA '26",
  email: "anujxsrivastava@gmail.com",
  resumeUrl: "/Anuj_Resume.pdf",
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
    title: "ProcureHub",
    tag: "Production System",
    note: "Company project — code private",
    oneLiner:
      "Vendor-inventory and order-fulfillment automation for an auto-parts trading business.",
    story:
      "Vendor stock lists, customer orders, and invoices all arrived as unstructured files over WhatsApp and Gmail, and were reconciled by hand in spreadsheets. ProcureHub classifies every incoming document, imports it into one shared database, and allocates each order across every vendor's live remaining stock automatically — then generates the purchase orders, verifies invoices against the allocations, and scores vendor reliability.",
    metrics: [
      { value: "48", label: "API endpoints" },
      { value: "24", label: "database tables" },
      { value: "Live", label: "in daily use" },
    ],
    stack: ["Python", "FastAPI", "React", "PostgreSQL", "WhatsApp API", "Gmail API"],
    media: null,
    repoUrl: null,
    liveUrl: null,
  },
  {
    featured: true,
    title: "OpsFlow",
    tag: "Internal Platform",
    note: "Company project — code private",
    oneLiner:
      "Sales pipeline and workflow automation platform for an auto-accessories retailer.",
    story:
      "Leads lived in personal WhatsApp chats, tasks were verbal, and nothing was tracked. OpsFlow gives six roles a single system: a kanban lead pipeline with round-robin auto-assignment, recurring tasks and reminders, a notice board, and a form builder whose public share links turn a customer submission straight into an assigned lead and a follow-up task.",
    metrics: [
      { value: "133", label: "API tests passing" },
      { value: "6", label: "permission roles" },
      { value: "9", label: "feature modules" },
    ],
    stack: ["Python", "Django REST", "React", "PostgreSQL", "JWT", "Claude API"],
    media: null,
    repoUrl: null,
    liveUrl: null,
  },
  {
    featured: true,
    title: "AI Smart Classroom",
    tag: "Computer Vision",
    note: null,
    oneLiner:
      "Face-recognition attendance and live engagement monitoring from a single camera feed.",
    story:
      "Manual attendance wastes class time and says nothing about attention. This combines YOLOv8 detection with face recognition to mark attendance automatically and track several students' engagement at once, feeding a live analytics dashboard. The hard part was keeping identities stable frame to frame when students overlap, turn away, or leave and re-enter the frame.",
    metrics: [
      { value: "Real-time", label: "multi-student tracking" },
      { value: "1", label: "camera, no hardware" },
    ],
    stack: ["Python", "OpenCV", "YOLOv8", "Flask", "MySQL"],
    media: { type: "image", src: "/assets/smart classroom.png" },
    repoUrl:
      "https://github.com/yourentertainments10-coder/smart-attendance-system",
    liveUrl: null,
  },

  /* ── Everything below is hidden behind "Show all projects" ───────────── */

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
    title: "Chess",
    tag: "React",
    note: null,
    oneLiner:
      "Browser chess with full move validation and game-state logic written from scratch — no chess library.",
    stack: ["React", "JavaScript", "CSS"],
    repoUrl: "https://github.com/yourentertainments10-coder/Chess",
  },
  {
    featured: false,
    title: "E-Commerce Store",
    tag: "Web App",
    note: null,
    oneLiner:
      "Full-stack store with authentication, product catalog, cart, and order management.",
    stack: ["Python", "Django", "SQLite"],
    repoUrl: "https://github.com/yourentertainments10-coder/E-commerce",
  },
  {
    featured: false,
    title: "Movie Recommendation System",
    tag: "Machine Learning",
    note: null,
    oneLiner:
      "Content-based recommender that surfaces similar films from a vectorised feature set.",
    stack: ["Python", "Scikit-learn", "Streamlit"],
    repoUrl: "https://github.com/yourentertainments10-coder/movie-recommender",
  },
  {
    featured: false,
    title: "Fake Job Posting Detection",
    tag: "Machine Learning",
    note: null,
    oneLiner:
      "NLP classifier that flags fraudulent job listings from posting text.",
    stack: ["Python", "Scikit-learn", "Pandas"],
    repoUrl: "https://github.com/yourentertainments10-coder/fake-job-dataset",
  },
  {
    featured: false,
    title: "Spam Email Classifier",
    tag: "Machine Learning",
    note: null,
    oneLiner: "Text-classification model separating spam from legitimate mail.",
    stack: ["Python", "Scikit-learn"],
    repoUrl: "https://github.com/yourentertainments10-coder/Spam-Classifier",
  },
];

export const skillGroups = [
  {
    title: "Languages",
    items: ["Python", "JavaScript", "SQL", "HTML & CSS"],
  },
  {
    title: "Frameworks",
    items: ["React", "FastAPI", "Django REST", "Flask", "Node.js / Express"],
  },
  {
    title: "Data & Infra",
    items: ["PostgreSQL", "MySQL", "SQLite", "Render", "Vercel", "Neon"],
  },
  {
    title: "Tools & APIs",
    items: [
      "Git & GitHub",
      "WhatsApp Cloud API",
      "Gmail API",
      "Claude API",
      "Pandas",
      "Scikit-learn",
      "Power BI",
    ],
  },
];

export const experience = [
  {
    role: "Full Stack Developer",
    company: "CarTrends, Delhi",
    period: "2026 — Present",
    details: [
      "Sole developer of the company's internal software: a procurement-automation system and a sales-and-operations platform, both in daily production use by the operations team.",
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
  photo: null,
  photoAlt: "Anuj Srivastava",
  content: [
    "I'm a BCA graduate from Delhi who learned to build software by shipping it for a real business. The procurement system and operations platform in my projects run a live company's daily work, which taught me more about edge cases, dirty data, and what users actually do than any tutorial could.",
    "I like the unglamorous parts — reconciling a vendor file that arrived as a photo of a spreadsheet, or working out why a round-robin assignment skipped someone. Most of what I know about databases and error handling came from something breaking in front of a real user.",
    "Outside of code: I shoot photos and served as vice-president of my university's photography society, I've spent four years tutoring school kids at an academy I co-founded, and I play chess badly enough that I built my own chess engine to practise against.",
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
