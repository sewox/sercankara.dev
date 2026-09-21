export interface Project {
  title: string;
  tagline: string;
  description: string;
  category: 'Security Platform' | 'Infrastructure' | 'API Service' | 'SaaS Platform' | 'Open Source';
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
    description: "Enterprise SecOps platform featuring high-throughput log ingestion, Law 5651 cryptographic timestamping, automated SOAR playbooks, and multi-tenancy with a dedicated Platform Ops self-observability tenant.",
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
    tagline: "Unified logistics & carrier integration API gateway",
    description: "High-availability multi-carrier freight management and tracking API engine, streamlining zero-downtime shipping operations and dispatching.",
    category: "API Service",
    subdomainUrl: "https://carriertr.io",
    image: "/images/projects/carriertr.webp",
    isLive: true,
    featured: true,
    techStack: ["PHP 8.3", "Go", "PostgreSQL", "Redis", "REST API", "Docker"]
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
