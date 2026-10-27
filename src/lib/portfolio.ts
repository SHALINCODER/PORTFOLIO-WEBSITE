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
  overview: string;
  details: string[];
  technologies: { category: string; items: string[] }[];
};

export const projects: Project[] = [
  {
    id: "ai-research-workspace",
    name: "AI Research and Productivity Workspace",
    overview:
      "An AI-assisted research workspace that lets users choose an AI provider, keep conversations searchable, and export responses for later use.",
    details: [
      "Connects to OpenAI API, Ollama, and OpenRouter so providers can be configured for different research workflows.",
      "Uses REST APIs and PostgreSQL persistence to support conversation history and searchable records, with SQLAlchemy and Alembic for data access and schema migrations.",
      "Checks text for sensitive information with Microsoft Presidio and spaCy, and uses PaddleOCR to extract text from documents and images.",
      "Packages the application and its services for deployment with Docker and Docker Compose.",
    ],
    technologies: [
      { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
      { category: "Backend", items: ["Python", "FastAPI", "REST APIs"] },
      { category: "Database", items: ["PostgreSQL"] },
      { category: "ORM & migrations", items: ["SQLAlchemy", "Alembic"] },
      { category: "AI integration", items: ["OpenAI API", "Ollama", "OpenRouter"] },
      { category: "Privacy & NLP", items: ["Microsoft Presidio", "spaCy"] },
      { category: "OCR", items: ["PaddleOCR"] },
      { category: "DevOps", items: ["Docker", "Docker Compose"] },
    ],
  },
  {
    id: "cloud-asset-inventory",
    name: "Cloud Infrastructure and Asset Inventory Platform",
    overview:
      "An inventory platform for keeping track of cloud resources, servers, software licenses, ownership, configuration changes, and resource lifecycles.",
    details: [
      "Provides REST APIs backed by normalized MySQL models, with SQLAlchemy for data access and Alembic for schema migrations.",
      "Uses JWT authentication and role-based access control to manage permissions, with audit logs for tracking inventory changes.",
      "Supports inventory search and scheduled reports, with input validation, automated API testing, and Docker-based deployment.",
    ],
    technologies: [
      { category: "Language", items: ["Python"] },
      { category: "Backend", items: ["FastAPI", "REST APIs"] },
      { category: "Database", items: ["MySQL"] },
      { category: "ORM & migrations", items: ["SQLAlchemy", "Alembic"] },
      { category: "Authentication", items: ["JWT", "Role-based access control"] },
      { category: "DevOps", items: ["Docker"] },
      { category: "Testing", items: ["Automated API testing"] },
    ],
  },
  {
    id: "event-registration-notifications",
    name: "Event Registration and Notification Platform",
    overview:
      "An event scheduling and registration platform for managing attendees, event capacity, registration status, and event reports.",
    details: [
      "Stores event and attendee records in PostgreSQL and exposes scheduling and registration workflows through REST APIs.",
      "Sends confirmation emails and reminders through Microsoft Graph API and SMTP, while preventing duplicate notifications and recording delivery logs.",
      "Adds input validation, automated tests, and Docker-based containerized deployment.",
    ],
    technologies: [
      { category: "Frontend", items: ["React", "JavaScript"] },
      { category: "Backend", items: ["Node.js", "Express.js"] },
      { category: "Database", items: ["PostgreSQL"] },
      { category: "API", items: ["REST APIs"] },
      { category: "Email integration", items: ["Microsoft Graph API", "SMTP"] },
      { category: "Deployment", items: ["Docker"] },
      { category: "Testing", items: ["Automated testing"] },
    ],
  },
  {
    id: "project-quality-dashboard",
    name: "Developer Project Quality Dashboard",
    overview:
      "A cross-repository dashboard that brings build status, automated test results, deployment history, and development activity into one view.",
    details: [
      "Provides REST APIs and PostgreSQL data models for build records, test summaries, project settings, and historical metrics.",
      "Presents project health through interactive status charts and filters, with report exports for sharing results.",
      "Uses Playwright for end-to-end testing and GitHub Actions workflows for continuous integration.",
    ],
    technologies: [
      { category: "Frontend", items: ["React", "TypeScript"] },
      { category: "Backend", items: ["Node.js", "Express.js"] },
      { category: "Database", items: ["PostgreSQL"] },
      { category: "API", items: ["REST APIs"] },
      { category: "End-to-end testing", items: ["Playwright"] },
      { category: "CI/CD", items: ["GitHub Actions"] },
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
