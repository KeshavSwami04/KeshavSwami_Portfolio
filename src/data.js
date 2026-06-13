// ============================================================
//  data.js — EDIT THIS FILE TO UPDATE YOUR PORTFOLIO
// ============================================================

export const personal = {
  name: "Keshav Swami",
  nameShort: "KS",
  title: "Software Engineer",
  taglines: [
    "Building intelligent systems from silicon to software",
    "Hardware security · AI pipelines · Full-stack dev",
    "RAG · RTL · React — yes, all three",
    "EE student · IIT Jodhpur · Class of 2028",
  ],
  about: `I'm a third-year Electrical Engineering student at IIT Jodhpur who enjoys building software and figuring out how things work under the hood.

Most of my time goes into developing projects, learning new technologies, and strengthening my foundations in computer science. I'm particularly interested in full-stack development, AI, and systems, and I enjoy taking an idea from a rough concept to a working product.

What excites me most about software engineering is the constant learning. Whether it's building applications, solving algorithmic problems, or exploring a new framework, I like challenges that push me to think differently and improve as an engineer.

Outside of academics and coding, I mentor juniors, contribute to student communities, and enjoy working with people who are passionate about building meaningful things.`,
  email: "swamikeshav04@gmail.com",
  github: "https://github.com/KeshavSwami04",
  linkedin: "https://www.linkedin.com/in/keshav-swami-42593b319/",
  phone: "+91 93529 02531",
  resumeUrl: "#",
};

export const education = [
  {
    degree: "B.Tech, Electrical Engineering",
    institution: "Indian Institute of Technology Jodhpur",
    period: "Aug 2024 – Present",
    cgpa: "7.57 / 10",
    highlights: [
      "JEE Advanced 2024: AIR 5572 (General Category)",
      "CBSE Class XII: 96.6%",
      "DSA · ML · Digital Design · Signals & Systems · Linear Algebra",
    ],
  },
];

export const stats = [
  { value: "6+",    label: "Projects Shipped" },
  { value: "7.57",  label: "CGPA / 10" },
  { value: "AIR 5572", label: "JEE Advanced" },
  { value: "96.6%", label: "Class XII" },
];

export const skills = [
  {
    category: "Languages",
    items: ["C", "C++", "Python", "JavaScript", "TypeScript", "SQL", "Verilog"],
  },
  {
    category: "Frameworks & Libraries",
    items: ["React", "Flask", "Streamlit", "Tailwind CSS", "NetworkX", "Sentence Transformers", "Raylib"],
  },
  {
    category: "Databases",
    items: ["MySQL", "PostgreSQL", "ChromaDB"],
  },
  {
    category: "Tools & Platforms",
    items: ["Git", "Docker", "Linux", "n8n", "Vercel", "Render", "Postman", "Gunicorn"],
  },
  {
    category: "Concepts",
    items: ["RAG", "Machine Learning", "Graph Algorithms", "REST APIs", "Database Design", "Auth & Authorization", "Semantic Search", "Hardware Security"],
  },
];

export const projects = [
  {
    id: "01",
    name: "Drishti",
    subtitle: "Repository Code Understanding System",
    stack: ["Python", "ChromaDB", "Streamlit", "RAG", "NetworkX"],
    description: "AI-powered codebase Q&A tool that answers natural-language questions about unfamiliar repositories with source attribution. Built a 3-stage retrieval pipeline: AST-based semantic chunking into function/class units, vector retrieval via ChromaDB with all-MiniLM-L6-v2 embeddings, and CrossEncoder reranking for precision.",
    highlights: [
      "3-stage AST → vector → rerank retrieval pipeline",
      "Static call graph engine using Python's ast module",
      "LLaMA 3.3 70B responses grounded in retrieved context",
    ],
    github: "https://github.com/KeshavSwami04/Drishti",
    demo: "https://askdrishti.streamlit.app",
  },
  {
    id: "02",
    name: "FixPoint",
    subtitle: "Workflow-Based Maintenance Management Platform",
    stack: ["React", "Flask", "MySQL", "JWT", "Docker"],
    description: "Full-stack complaint management platform built solo. React/Vite/Tailwind frontend, Flask REST API, and an 8-table MySQL schema handling complaints, escalations, bookings, notifications, and audit logs. Features a 6-state complaint lifecycle with student-driven resolution verification.",
    highlights: [
      "6-state complaint lifecycle with auto-escalation",
      "Background service that auto-flags stale complaints",
      "Full production deployment: Vercel + Render + Clever Cloud",
    ],
    github: "https://github.com/KeshavSwami04/FixPoint",
    demo: "https://fixpoint-roan.vercel.app",
  },
  {
    id: "03",
    name: "Treasure Hunt — IITJ Edition",
    subtitle: "Campus-Based 2D Adventure Game",
    stack: ["C", "C++", "Raylib", "RayMob"],
    description: "A campus-based 2D treasure hunt adventure game built with the RayMob framework on top of Raylib. Players explore an interactive IIT Jodhpur campus map, solve clue-based puzzles across real campus locations (Library, Sports Complex, Labs, Mess, and more), collect coins and diamonds, and progress through multiple levels of increasing difficulty.",
    highlights: [
      "Interactive campus map with 10+ real IITJ locations",
      "Dynamic clue generation system with reward/penalty mechanics",
      "Mobile joystick controls, pinch zoom, camera pan + save/load progress",
      "Compiled to Android APK via RayMob framework",
    ],
    github: "https://github.com/KeshavSwami04/Treasure_Hunt_IITJ_Edition",
    demo: null,
  },
  {
    id: "04",
    name: "Power Distribution Simulator",
    subtitle: "Interactive Grid Simulation",
    stack: ["C++", "Raylib", "Graph Algorithms"],
    description: "Interactive power grid simulator modeling a 3-tier hierarchical network of power plants, substations, and consumer nodes with real-time visualization. Implements a widest-path rerouting algorithm that redirects load through alternate paths on overload.",
    highlights: [
      "3-tier hierarchical network simulation",
      "Widest-path rerouting algorithm on overload",
      "Proportional throttling when no sufficient path exists",
    ],
    github: "https://github.com/parv2031/PowerDistributionSimulator",
    demo: null,
  },
  {
    id: "05",
    name: "Chess (C + GTK3)",
    subtitle: "Desktop Chess Engine",
    stack: ["C", "GTK3"],
    description: "A fully functional chess game built from scratch in C with a GTK3 graphical interface. Implements all standard chess rules including castling, en passant, and pawn promotion.",
    highlights: [
      "Full chess ruleset implemented from scratch in C",
      "GTK3 graphical interface",
    ],
    github: "https://github.com/KeshavSwami04/chess-c-gtk3",
    demo: null,
  },
  // ── ADD MORE PROJECTS BELOW ──
  // {
  //   id: "06",
  //   name: "Your Next Project",
  //   subtitle: "Short tagline",
  //   stack: ["React", "Node.js"],
  //   description: "Description here.",
  //   highlights: ["Key feature 1", "Key feature 2"],
  //   github: "https://github.com/...",
  //   demo: null,
  // },
];

export const research = [
  {
    title: "Verilog Fault Injection & Auto-Hardening Workflow",
    period: "Jan 2026 – Apr 2026",
    supervisor: "Prof. Arpit Khandelwal",
    institution: "IIT Jodhpur",
    description: "Engineered a fully automated hardware security pipeline in n8n that injects single-bit faults into Verilog RTL modules, runs up to 4 trials per campaign, and classifies each outcome as Critical, High, or Masked. Integrated Gemini 2.5 Flash to auto-generate fault-injection testbenches, produce TMR-hardened RTL with majority-voter logic and illegal-state recovery. Automated end-to-end security disclosure report generation eliminating all manual reporting effort.",
    tags: ["n8n", "Verilog", "Gemini 2.5", "Hardware Security", "TMR"],
    github: "https://github.com/KeshavSwami04/Fault-Injection-Security-Framework",
  },
];

export const experience = [
  {
    role: "Student Guide",
    org: "IIT Jodhpur",
    period: "Jul 2025 – May 2026",
    description: "Selected among 50 Student Guides from 360+ applicants. Mentored 14 incoming students through academic and campus transition. Guided 50+ freshmen across academics, onboarding, and student life.",
  },
  {
    role: "Assistant Head, Public Relations",
    org: "Prometeo · IIT Jodhpur",
    period: "Sep 2025 – Jan 2026",
    description: "Led 12 volunteers on outreach driving 1500+ registrations and 600+ accommodation bookings. Engagement initiatives generated over ₹10 lakh in combined revenue.",
  },
  {
    role: "Assistant Head, Logistics",
    org: "TEDx IIT Jodhpur",
    period: "Feb 2026 – Mar 2026",
    description: "Coordinated end-to-end logistics and operations for TEDx IIT Jodhpur with 12 invited speakers. Managed speaker coordination and ensured on-schedule execution across all sessions.",
  },
];
