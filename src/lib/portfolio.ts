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
  resume: "/Shalin_Sunil_Kumar_Resume.pdf",
  resumeFileName: "Shalin_Sunil_Kumar_Resume.pdf",
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
  subtitle: string;
  status: string;
  summary: string;
  problem: string;
  /** Set when the product belongs to a company, so personal work is not confused with it. */
  productNote?: string;
  contribution: string[];
  architecture?: { layer: string; items: string[] }[];
  decisions?: string[];
  stack: string[];
  link?: { label: string; href: string };
};

export const projects: Project[] = [
  {
    id: "privacy-ai",
    name: "Privacy-First Enterprise AI",
    subtitle: "Privacy-first enterprise AI platform",
    status: "Internal enterprise project · source code not public",
    summary:
      "A self-hosted, ChatGPT-style AI platform for organizational use, with sensitive-data masking before any request reaches an external AI provider, access controls, usage limits, and multi-provider AI integration.",
    problem:
      "Teams want ChatGPT-style assistance, but sending personal data and secrets to external AI providers is a privacy risk.",
    contribution: [
      "Built and deployed the platform for internal employee use, integrating OpenAI, Ollama Cloud, and OpenRouter, with web search, image generation and editing, interactive visual responses, and document generation in 10 formats.",
      "Implemented a privacy gateway that masks personal data and secrets before external AI calls.",
      "Improved detection of Indian person and organization names using custom lists and fuzzy matching.",
      "Added OCR-based image redaction with verification and fail-closed handling.",
      "Implemented organization/team RBAC, encrypted provider credentials, PostgreSQL chat history, usage limits, rate limiting, and audit logs.",
      "Containerized the frontend, backend, privacy service, and database with Docker Compose.",
    ],
    architecture: [
      { layer: "Frontend", items: ["React", "TypeScript"] },
      { layer: "API", items: ["FastAPI"] },
      { layer: "Data", items: ["PostgreSQL", "SQLAlchemy"] },
      {
        layer: "Privacy gateway",
        items: [
          "Microsoft Presidio",
          "spaCy",
          "PaddleOCR",
          "Custom entity detection",
        ],
      },
      { layer: "AI providers", items: ["OpenAI", "Ollama Cloud", "OpenRouter"] },
      {
        layer: "Deployment",
        items: ["Docker Compose: frontend, backend, privacy service, database"],
      },
    ],
    decisions: [
      "Personal data and secrets are masked before any call to an external AI provider.",
      "Indian person and organization name detection was improved with custom lists and fuzzy matching.",
      "OCR-based image redaction includes verification and fail-closed handling.",
      "Provider credentials are stored encrypted, and usage is limited, rate limited, and audit logged.",
    ],
    stack: [
      "React",
      "TypeScript",
      "FastAPI",
      "PostgreSQL",
      "SQLAlchemy",
      "Microsoft Presidio",
      "spaCy",
      "PaddleOCR",
      "Docker Compose",
    ],
  },
  {
    id: "enterprise-data-itsm",
    name: "Enterprise Data and ITSM Platform",
    subtitle: "Data management, ITSM and compliance platform",
    status: "Internal company platform · source code not public",
    summary:
      "An internal enterprise platform for managing organizational data, IT assets, software licenses, IT service tickets, and compliance workflows.",
    problem:
      "Organizations need one controlled place to manage IT assets, software licenses, service tickets, and compliance evidence, with access control and approvals.",
    contribution: [
      "Built organization-wide data management for employee records, hardware/software and license inventories, cloud/network assets, access reviews, and compliance evidence, on a 57-table MySQL database.",
      "Developed an ITSM ticketing tool for service requests, incidents, problems, and change requests, with SLA tracking, comments/attachments, and CISO approval workflows.",
      "Implemented JWT-based access control across five roles.",
      "Created reusable CRUD/API components across 30+ data modules, with cross-table synchronization.",
      "Implemented Microsoft Graph/SMTP email notifications with deduplication, retries, and delivery logs.",
      "Added full-system backup and restore with SHA-256 integrity checks.",
    ],
    architecture: [
      { layer: "Backend", items: ["Python", "REST APIs", "JWT access control"] },
      { layer: "Database", items: ["MySQL (57 tables)"] },
      { layer: "Frontend", items: ["JavaScript"] },
      { layer: "Notifications", items: ["Microsoft Graph API", "SMTP"] },
      { layer: "Deployment", items: ["Docker Compose"] },
    ],
    decisions: [
      "Reusable CRUD/API components are shared across 30+ data modules, with cross-table synchronization.",
      "Email notifications are deduplicated, retried, and written to delivery logs.",
      "Backups and restores are verified with SHA-256 integrity checks.",
      "Access is role-based across five roles, and the ticketing tool includes SLA tracking and CISO approval workflows.",
    ],
    stack: [
      "Python",
      "MySQL",
      "JavaScript",
      "REST APIs",
      "JWT",
      "Docker Compose",
      "Microsoft Graph API",
      "SMTP",
    ],
  },
  {
    id: "security-awareness",
    name: "Security Awareness Platform",
    subtitle: "Phishing simulation and security awareness",
    status: "Company product",
    summary:
      "A phishing simulation and security-awareness platform that helps organizations evaluate phishing susceptibility and deliver follow-up awareness training.",
    problem:
      "Organizations need to measure how susceptible their employees are to phishing, and follow up with training.",
    productNote:
      "This is a company product. This card describes only my contribution.",
    contribution: [
      "Helped build PACT (Phishing Awareness Campaign Training), which automates follow-up training for employees who click simulated phishing emails, using Microsoft Graph API and SMTP.",
      "Contributed to the sign-in experience.",
      "Contributed to simulation UI concepts for email, SMS, voice, Microsoft Teams, QR-code, and deepfake scenarios.",
    ],
    stack: ["Microsoft Graph API", "SMTP", "Email automation"],
    link: { label: "Visit the company website", href: "https://phishprep.com/" },
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
