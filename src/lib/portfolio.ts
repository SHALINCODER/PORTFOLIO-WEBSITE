// Single source of truth for the portfolio. Components only render what is here,
// so content can change without touching layout. Facts come from the owner's spec and resume.

export const site = {
  name: "Shalin Sunil Kumar",
  title: "Software Engineer",
  location: "Chennai, Tamil Nadu, India",
  locationShort: "Chennai, India",
  url: "https://shalinsunil.vercel.app",
  email: "shalinsunil1@gmail.com",
  github: "https://github.com/shalincoder",
  linkedin: "https://www.linkedin.com/in/shalin-sunil-kumar-395491264/",
  resume: "/SHALIN_S_K_RESUME.pdf",
  resumeFileName: "SHALIN_S_K_RESUME.pdf",
  portrait: "/SHALIN_S_K_IMAGE.png",
  tagline:
    "I build enterprise web applications, backend systems, and privacy-focused AI products.",
  headline: "I build software that solves real problems.",
  intro:
    "Software Engineer focused on enterprise applications, backend systems, and privacy-first AI products.",
  description:
    "Shalin Sunil Kumar is a Software Engineer in Chennai, India, building enterprise web applications, backend systems, and privacy-focused AI products.",
} as const;

export const navItems = [
  { id: "home", label: "Home" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
] as const;

export type SocialKey = "github" | "linkedin" | "email";

export const socialLinks: {
  key: SocialKey;
  label: string;
  ariaLabel: string;
  href: string;
  external: boolean;
}[] = [
  {
    key: "github",
    label: "GitHub",
    ariaLabel: "GitHub profile (opens in a new tab)",
    href: site.github,
    external: true,
  },
  {
    key: "linkedin",
    label: "LinkedIn",
    ariaLabel: "LinkedIn profile (opens in a new tab)",
    href: site.linkedin,
    external: true,
  },
  {
    key: "email",
    label: "Email",
    ariaLabel: `Email ${site.email}`,
    href: `mailto:${site.email}?subject=${encodeURIComponent("Getting in touch")}`,
    external: false,
  },
];

export type Project = {
  id: string;
  name: string;
  stack: string[];
  highlights: string[];
};

export const projects: Project[] = [
  {
    id: "ai-research-workspace",
    name: "AI Research and Productivity Workspace",
    stack: [
      "React",
      "TypeScript",
      "Next.js",
      "Tailwind CSS",
      "FastAPI",
      "PostgreSQL",
      "SQLAlchemy",
      "Alembic",
      "Docker",
    ],
    highlights: [
      "Build an AI research workspace with configurable providers, searchable conversation history, and exportable responses using OpenAI API, Ollama, and OpenRouter.",
      "Integrate REST APIs and PostgreSQL persistence with sensitive-data detection using Microsoft Presidio and spaCy, plus OCR text extraction using PaddleOCR.",
    ],
  },
  {
    id: "cloud-asset-inventory",
    name: "Cloud Infrastructure and Asset Inventory Platform",
    stack: [
      "Python",
      "FastAPI",
      "MySQL",
      "SQLAlchemy",
      "Alembic",
      "JWT",
      "Docker",
    ],
    highlights: [
      "Develop an inventory system for tracking cloud resources, servers, software licenses, ownership, configuration changes, and resource lifecycles.",
      "Implement REST APIs, normalized MySQL models, JWT authentication, role-based permissions, audit logs, inventory search, and scheduled reports.",
      "Add data validation, schema migrations with Alembic, automated API tests, and Docker-based deployment.",
    ],
  },
  {
    id: "event-registration-notifications",
    name: "Event Registration and Notification Platform",
    stack: [
      "JavaScript",
      "React",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "REST APIs",
      "Microsoft Graph API",
      "SMTP",
    ],
    highlights: [
      "Build event scheduling and registration with attendee records, capacity limits, registration status, and reports.",
      "Develop REST APIs and PostgreSQL data models; automate confirmation emails and reminders using Microsoft Graph API and SMTP.",
      "Add input validation, duplicate-notification prevention, delivery logs, automated tests, and containerized deployment.",
    ],
  },
  {
    id: "project-quality-dashboard",
    name: "Developer Project Quality Dashboard",
    stack: [
      "React",
      "TypeScript",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Playwright",
      "GitHub Actions",
    ],
    highlights: [
      "Develop a dashboard to track project build status, automated test results, deployment history, and development activity across repositories.",
      "Create REST APIs and PostgreSQL data models for build records, test summaries, project settings, and historical metrics.",
      "Add interactive status charts, filtering, report exports, Playwright end-to-end tests, and GitHub Actions workflows for continuous integration.",
    ],
  },
];

export const skillGroups: { group: string; items: string[] }[] = [
  {
    group: "Frontend",
    items: ["JavaScript (ES6+)", "TypeScript", "React", "Next.js", "Tailwind CSS"],
  },
  {
    group: "Backend",
    items: [
      "Python",
      "FastAPI",
      "Node.js",
      "Express.js",
      "REST APIs",
      "JWT authentication",
      "SQLAlchemy",
      "Alembic",
      "Microsoft Graph API",
      "SMTP",
    ],
  },
  { group: "Databases", items: ["SQL", "PostgreSQL", "MySQL", "MongoDB"] },
  {
    group: "DevOps & Testing",
    items: [
      "Docker",
      "Docker Compose",
      "Git",
      "GitHub Actions",
      "Jenkins",
      "CI/CD",
      "AWS",
      "Postman",
      "Playwright",
    ],
  },
  {
    group: "AI & Privacy",
    items: [
      "OpenAI API",
      "Ollama",
      "OpenRouter",
      "Microsoft Presidio",
      "spaCy",
      "PaddleOCR",
    ],
  },
];

export const experience: {
  id: string;
  role: string;
  company: string;
  period: string;
  highlights: string[];
}[] = [
  {
    id: "iarm",
    role: "Software Developer",
    company: "IARM Information Security",
    period: "Apr 2026 – Present",
    highlights: [
      "Maintain internal business applications used across the organization.",
      "Develop data-management and ticketing functionality, and automate email notifications.",
      "Troubleshoot backend and database issues, Docker builds, deployment scripts, and company-network connectivity.",
    ],
  },
  {
    id: "nordic",
    role: "Full Stack Developer Intern",
    company: "Nordic Solutions",
    period: "Jun 2023 – Nov 2023",
    highlights: [
      "Contributed to two full-stack applications by developing Python services, data-processing workflows, and backend integrations.",
      "Worked with Node.js/Express, REST APIs, and MongoDB schemas.",
      "Supported testing, deployment tasks, and integration troubleshooting.",
    ],
  },
];

export const about = {
  paragraphs: [
    "I'm a Software Engineer based in Chennai, India. I build enterprise web applications, backend systems, and privacy-focused AI products. My main tools are Python, TypeScript and React, FastAPI, SQL, and Docker.",
    "At IARM Information Security I maintain internal business applications used across the organization. I develop data-management and ticketing features, automate email notifications, and troubleshoot backend and database issues, Docker builds, deployment scripts, and network connectivity.",
    "Across the systems I've built, I've implemented role-based access control, audit logs, encrypted credentials, and masking of sensitive data before it reaches external services.",
  ],
  facts: [
    { label: "Based in", value: site.location },
    { label: "Role", value: site.title },
    {
      label: "Focus",
      value: "Enterprise applications, backend systems, privacy-first AI",
    },
  ],
};

export const education = {
  school: "Vellore Institute of Technology (VIT), Chennai",
  degree: "B.Tech in Computer Science Engineering",
  graduated: "Graduated 2025",
  cgpa: "CGPA 8.10 / 10",
};

export const certification = {
  name: "The Complete 2024 Web Development Bootcamp",
  by: "Dr. Angela Yu",
  date: "Jan 2025",
};
