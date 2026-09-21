export type ProjectCategory =
  | 'Security Platform'
  | 'Infrastructure'
  | 'API Service'
  | 'SaaS Platform'
  | 'Open Source';

export interface Project {
  title: string;
  tagline: string;
  description: string;
  originStory?: string; // Personal "Why I Built This" narrative
  category: ProjectCategory | ProjectCategory[];
  subdomainUrl?: string;
  githubUrl?: string;
  image?: string;
  isLive: boolean;
  featured: boolean;
  techStack: string[];
}

export const projects: Project[] = [
  {
    title: "Syntropy SecOps Platform",
    tagline: "5651-compliant Next-Gen SIEM & automated SOAR platform",
    description: "Enterprise security operations platform featuring high-throughput log ingestion, Law 5651 cryptographic timestamping, automated SOAR playbooks, and multi-tenancy with a dedicated Platform Ops self-observability tenant.",
    category: "Security Platform",
    subdomainUrl: "https://app-staging.sercankara.dev",
    image: "/images/projects/syntropy-secops.webp",
    isLive: true,
    featured: true,
    techStack: ["Go", "ClickHouse", "Docker", "PostgreSQL", "Law 5651", "Redis"]
  },
  {
    title: "Syntropy B2B Portal & ITSM",
    tagline: "Multi-tenant B2B customer support & SLA management platform",
    description: "Enterprise customer service management and ticketing portal featuring multi-tenant company isolation, subscription tier handling, asset tracking, and comprehensive audit logging.",
    category: "SaaS Platform",
    subdomainUrl: "https://system.sercankara.dev/login",
    image: "/images/projects/syntropy-portal.webp",
    isLive: true,
    featured: true,
    techStack: ["PHP", "Laravel", "PostgreSQL", "TailwindCSS", "Docker"]
  },
  {
    title: "Carriertr.io",
    tagline: "Unified logistics SaaS platform & carrier integration API gateway",
    description: "High-availability multi-carrier freight management and tracking API engine, streamlining zero-downtime shipping operations, dispatcher workflows, and rate calculation.",
    category: ["API Service", "SaaS Platform"],
    subdomainUrl: "https://carriertr.io",
    image: "/images/projects/carriertr.webp",
    isLive: true,
    featured: true,
    techStack: ["PHP 8.3", "Go", "PostgreSQL", "Redis", "REST API", "Docker"]
  },
  {
    title: "Agent Lounge OS",
    tagline: "Event-driven autonomous AI agent operating system & orchestrator kernel",
    description: "High-performance multi-agent coordination kernel built with Rust and NATS message streaming. Features event-driven task dispatching, Model Context Protocol (MCP) bridges, and multi-LLM quota management.",
    originStory: "While building EchoMind, I found myself constantly context-switching between different AI tools—asking Claude to implement a feature, then manually switching over to instruct Grok to run tests against the code. As tasks piled up, this manual handoff became a major productivity bottleneck. I created Agent Lounge OS to solve this at the root: an environment where local AI agents communicate directly, hand off tasks to one another, and maintain a shared Knowledge Base documenting solutions and architectural reasoning. I am open-sourcing this platform so fellow engineers can orchestrate their multi-agent workflows without the friction of manual coordination.",
    category: "Open Source",
    githubUrl: "https://github.com/sewox/agent-lounge-os",
    isLive: true,
    featured: true,
    techStack: ["Rust", "NATS", "MCP", "Distributed Systems", "AI Agents", "Ollama"]
  },
  {
    title: "EchoMind",
    tagline: "Private meeting intelligence & semantic codebase memory engine",
    description: "Local-first meeting transcription, semantic summarization, and AST-aware codebase memory engine built to eliminate meeting fatigue without compromising privacy.",
    originStory: "Two common frustrations many of us deal with daily are meeting fatigue and the privacy concerns surrounding invasive third-party meeting bots. Endless calls easily cause attention fatigue, and it is all too common to miss crucial context during lengthy discussions. I originally built EchoMind as a private, local-first tool for myself and my wife, Serra, to regain our focus. Once the system proved its reliability, I decided to open-source it so anyone facing similar frustrations can benefit. Contributions, feedback, and feature requests are warmly welcomed via GitHub issues or email.",
    category: "Open Source",
    githubUrl: "https://github.com/sewox/echomind",
    isLive: true,
    featured: true,
    techStack: ["Python", "TypeScript", "Vector Embeddings", "AST", "MCP", "SQLite"]
  },
  {
    title: "golangGlobalDataSanitizationService",
    tagline: "Security-focused zero-allocation data sanitization library for Go",
    description: "High-performance input sanitization and cleansing library designed for Go backend microservices to prevent injection vulnerabilities in sensitive environments.",
    category: "Open Source",
    githubUrl: "https://github.com/sewox/golangGlobalDataSanitizationService",
    isLive: true,
    featured: true,
    techStack: ["Go", "Security", "Microservices", "Input Cleansing"]
  },
  {
    title: "phpGlobalDataSanitizationService",
    tagline: "Defensive input sanitization and anti-injection package for PHP",
    description: "Robust data filtering and sanitization package protecting PHP applications against XSS, SQL injection, and malicious input vectors.",
    category: "Open Source",
    githubUrl: "https://github.com/sewox/phpGlobalDataSanitizationService",
    isLive: true,
    featured: true,
    techStack: ["PHP", "Security", "Web Application Firewall", "Composer"]
  }
];
