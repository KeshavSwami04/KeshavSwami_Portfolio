// ============================================================
//  data.js — EDIT THIS FILE TO UPDATE YOUR PORTFOLIO
// ============================================================

export const personal = {
  name: "Keshav Swami",
  nameShort: "KS",
  title: "Software Engineer",
  taglines: [
    "I solemnly swear that I am up to no good.",
    "Building scalable systems and elegant software",
    "Systems design · Full-stack dev · Problem solving",
    "Mischief Managed.",
  ],
  about: `I'm a third-year Electrical Engineering student at IIT Jodhpur who enjoys building software and figuring out how things work under the hood.

Most of my time goes into developing projects, learning new technologies, and strengthening my foundations in computer science. I'm particularly interested in full-stack development, AI, and systems, and I enjoy taking an idea from a rough concept to a working product.

What excites me most about software engineering is the constant learning. Whether it's building applications, solving algorithmic problems, or exploring a new framework, I like challenges that push me to think differently and improve as an engineer.

Outside of academics and coding, I mentor juniors, contribute to student communities, and enjoy working with people who are passionate about building meaningful things.`,
  email: "swamikeshav04@gmail.com",
  github: "https://github.com/KeshavSwami04",
  linkedin: "https://www.linkedin.com/in/keshav-swami-42593b319/",
  phone: "+91 93529 02531",
  resumeUrl: "https://drive.google.com/file/d/1w_RFA5A84IFXm7V_SI9PnGoHFxn758X8/view?usp=sharing",
};

export const education = [
  {
    degree: "B.Tech, Electrical Engineering",
    institution: "Indian Institute of Technology Jodhpur",
    period: "Aug 2024 – Present",
    cgpa: "7.57 / 10",
    highlights: [
      "JEE Advanced 2024: AIR 5572 (General Category)",
      "CBSE Class XII: 95.6%",
      "Relevant Coursework: Data Structures & Algorithms, Pattern Recognition & Machine Learning, Digital Design, Signals & Systems, Probability, Statistics & Stochastic Processes, Introduction to Computer Science, Foundation of Quantum Information, Maths-I (Calculus), Maths-II (Linear Algebra)",
    ],
  },
];

export const stats = [
  { value: "7+",    label: "Projects Shipped" },
  { value: "7.57",  label: "CGPA / 10" },
  { value: "AIR 5572", label: "JEE Advanced" },
  { value: "95.6%", label: "Class XII" },
];

export const skills = [
  {
    category: "Languages",
    items: ["C", "C++", "Python", "JavaScript", "TypeScript", "SQL", "Verilog"],
  },
  {
    category: "Frameworks & Libraries",
    items: ["React", "Next.js", "FastAPI", "Flask", "Streamlit", "Tailwind CSS", "NetworkX", "Sentence Transformers"],
  },
  {
    category: "Databases",
    items: ["PostgreSQL", "MySQL", "Redis", "ChromaDB", "Supabase"],
  },
  {
    category: "Developer Tools",
    items: ["Git", "GitHub", "Docker", "Postman", "Linux", "AWS EC2", "Nginx", "RabbitMQ", "n8n", "Prometheus", "Grafana", "Gunicorn"],
  },
  {
    category: "Concepts",
    items: ["System Design", "Distributed Systems", "Operating Systems", "Computer Networks", "DBMS", "Object-Oriented Programming", "RESTful APIs", "Role-Based Access Control (RBAC)", "Retrieval-Augmented Generation"],
  },
];

export const projects = [
  {
    id: "01",
    name: "Interview OS",
    subtitle: "AI Technical Mock Interview Platform",
    stack: ["Next.js", "Supabase", "OpenRouter API", "Edge Runtime", "Monaco Editor", "Tailwind CSS"],
    description: "An interactive, low-latency mock interview platform that dynamically generates customized coding and system design sessions in a Monaco editor workspace using candidate profiles, resumes, and target roles.",
    highlights: [
      "Architected a low-latency mock interview platform utilizing candidate resumes and target roles to dynamically generate customized coding and design sessions",
      "Built a custom Edge runtime stream reader decoupling LLM response streaming from Supabase DB logs to eliminate UI lockups and close connections immediately",
      "Developed four specialized mock tracks (Live PR Critique, CS Fundamentals, DSA Sandbox, Resume Grill) aligned to target roles (SDE, Frontend, Backend, Data)",
      "Engineered an automatic session retention limit to purge oldest interviews and cascading transcript messages when exceeding 5 sessions",
      "Implemented calibrated scorecard evaluations using pre-computed participation metrics (word count, code submissions) against rubrics to prevent score inflation",
    ],
    github: "https://github.com/KeshavSwami04/Interview-OS",
    demo: "https://interview-os-brown.vercel.app",
  },
  {
    id: "02",
    name: "CacheFlow",
    subtitle: "Scalable URL Shortener & Link Infrastructure",
    stack: ["FastAPI", "PostgreSQL", "Redis", "RabbitMQ", "Docker", "AWS EC2"],
    description: "A production-grade, horizontally scalable URL shortener and link infrastructure live on AWS EC2. Features Nginx load balancing, primary-replica streaming replication, cache-aside reads, event-driven analytics, and token rate limiting.",
    highlights: [
      "Architected a horizontally scalable URL shortener live on AWS EC2, with Nginx round-robin across 2 stateless FastAPI instances",
      "PostgreSQL primary-replica streaming replication and Redis cache-aside delivering sub-millisecond redirect latency (p99 < 1.5ms)",
      "Implemented collision-free 7-character short codes via PostgreSQL sequence with a custom bijective 64-bit Feistel cipher",
      "Built async analytics pipeline: fire-and-forget publish to RabbitMQ (competing consumers, exponential backoff, DLQ after 3 failures)",
      "Enforced rate limiting via Redis sliding-window Lua script for atomic, thread-safe execution",
    ],
    github: "https://github.com/KeshavSwami04/CacheFlow",
    demo: "http://13.49.57.61.nip.io:3000",
  },
  {
    id: "03",
    name: "FixPoint",
    subtitle: "Workflow-Based Maintenance Management Platform",
    stack: ["React", "Flask", "MySQL", "JWT", "Docker"],
    description: "Full-stack grievance management platform built solo, live on Vercel and Render. Features a complex complaint lifecycle with student resolution verification and background SLA breach auto-escalations.",
    highlights: [
      "Engineered full-stack platform: React/Vite/Tailwind frontend, Flask RESTful API (19 endpoints), and 8-table MySQL schema",
      "Modeled a 6-state complaint lifecycle with student-driven resolution verification and background auto-escalation service",
      "Secured with JWT + RBAC across 4 user roles and all endpoints documented in Postman",
    ],
    github: "https://github.com/KeshavSwami04/FixPoint",
    demo: "https://fixpoint-roan.vercel.app",
  },
  {
    id: "04",
    name: "Drishti",
    subtitle: "Repository Code Understanding System",
    stack: ["Python", "ChromaDB", "LLaMA 3.3 70B", "RAG", "Streamlit"],
    description: "AI-powered codebase Q&A system deployed on Streamlit Cloud that answers natural-language queries about codebases with source attribution using AST-based semantic chunking.",
    highlights: [
      "Answers natural-language queries with source attribution using AST-based semantic chunking into function/class units across 1,500+ lines in 7 modules",
      "Implemented 3-stage retrieval pipeline: ChromaDB vector search (all-MiniLM-L6-v2 embeddings) and CrossEncoder reranking (ms-marco-MiniLM)",
      "Grounded LLaMA 3.3 70B responses in retrieved context with static call graph analysis via NetworkX",
    ],
    github: "https://github.com/KeshavSwami04/Drishti",
    demo: "https://askdrishti.streamlit.app",
  },
  {
    id: "05",
    name: "Power Distribution Simulator",
    subtitle: "Interactive Grid Simulation",
    stack: ["C++", "Raylib", "Graph Algorithms"],
    description: "Interactive power grid simulator modeling a 3-tier hierarchical network of power plants, substations, and consumer nodes with real-time visualization and load routing optimization.",
    highlights: [
      "Co-developed C++ power grid simulator with 9,000+ consumers, 100+ substations, and 10,000+ edges in a 3-tier hierarchy sustaining ~60 FPS via Raylib",
      "Optimised load distribution via a modified Dijkstra widest-path algorithm (O((V + E) log V)) that reroutes edges at >=75% utilisation",
      "Reroutes load to below 70% with proportional throttling as fallback when no sufficient path exists",
    ],
    github: "https://github.com/parv2031/PowerDistributionSimulator",
    demo: null,
  },
  {
    id: "06",
    name: "Treasure Hunt — IITJ Edition",
    subtitle: "Campus-Based 2D Adventure Game",
    stack: ["C", "C++", "Raylib", "RayMob"],
    description: "A campus-based 2D treasure hunt adventure game built with the RayMob framework on top of Raylib. Players explore an interactive IIT Jodhpur campus map, solve clue-based puzzles, collect rewards, and progress through multiple levels.",
    highlights: [
      "Interactive campus map with 10+ real IITJ locations and dynamic clue generation with reward/penalty mechanics",
      "Mobile joystick controls, pinch zoom, camera pan + save/load progress",
      "Compiled to Android APK via RayMob framework",
    ],
    github: "https://github.com/KeshavSwami04/Treasure_Hunt_IITJ_Edition",
    demo: null,
  },
  {
    id: "07",
    name: "Chess (C + GTK3)",
    subtitle: "Desktop Chess Engine",
    stack: ["C", "GTK3"],
    description: "A fully functional chess game built from scratch in C with a GTK3 graphical interface. Implements all standard chess rules including castling, en passant, and pawn promotion.",
    highlights: [
      "Full chess ruleset in C: castling, en passant, pawn promotion",
      "GTK3 GUI with legal move highlighting and board rendering",
      "Move validation engine with board state tracking",
    ],
    github: "https://github.com/KeshavSwami04/chess-c-gtk3",
    demo: null,
  },
];

export const research = [
  {
    title: "Verilog Fault Injection & Auto-Hardening Workflow",
    period: "Jan 2026 – Apr 2026",
    supervisor: "Prof. Arpit Khandelwal",
    institution: "IIT Jodhpur",
    description: "Engineered a 28-node n8n hardware security pipeline performing automated single-bit fault injection into any Verilog RTL module, running 4 trials per campaign and classifying outcomes as Critical, High, or Masked (module-agnostic by design). Integrated 4 Gemini 2.5 Flash nodes to auto-generate testbenches, produce TMR-hardened RTL with majority-voter logic, watchdog logic, and alignment enforcement, and retry hardening up to 4 times on validation failure. Auto-generated executive-level security disclosure reports; full pipeline completes in 2–5 minutes end-to-end with zero manual intervention.",
    tags: ["n8n", "Verilog", "Gemini 2.5", "Hardware Security", "TMR"],
    github: "https://github.com/KeshavSwami04/Fault-Injection-Security-Framework",
  },
];

export const experience = [
  {
    role: "Student Guide",
    org: "IIT Jodhpur",
    period: "Jul 2025 – May 2026",
    description: "Selected among 50 Student Guides from 360+ applicants; mentored 14 incoming students and supported 50+ freshmen through academic onboarding and campus life.",
  },
  {
    role: "Assistant Head, Logistics",
    org: "TEDx IIT Jodhpur",
    period: "Feb 2026 – Mar 2026",
    description: "Coordinated end-to-end logistics for TEDx IIT Jodhpur with 12 invited speakers; managed speaker coordination and ensured on-schedule execution across all sessions.",
  },
  {
    role: "Assistant Head, Public Relations",
    org: "Prometeo · IIT Jodhpur",
    period: "Sep 2025 – Jan 2026",
    description: "Led 12 volunteers on outreach driving 1500+ registrations and 600+ accommodation bookings; generated over Rs. 10 lakh in combined revenue.",
  },
];
