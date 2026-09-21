export interface Project {
  title: string;
  tagline: string;
  description: string;
  category: 'SaaS Platform' | 'Infrastructure' | 'API Service' | 'Open Source';
  subdomainUrl?: string;
  githubUrl?: string;
  isLive: boolean;
  featured: boolean;
  techStack: string[];
}

export const projects: Project[] = [
  {
    title: 'Syntropy Engine',
    tagline: '5651-compliant high-throughput log management & captive portal',
    description:
      'Engineered a distributed log ingestion and compliance engine capable of processing tens of thousands of network events per second, featuring RFC 3161 digital timestamping and automated ClickHouse batching.',
    category: 'Infrastructure',
    subdomainUrl: 'https://syntropy.sercankara.dev',
    githubUrl: 'https://github.com/sercankara',
    isLive: true,
    featured: true,
    techStack: ['Go', 'ClickHouse', 'Docker', 'eBPF', 'Linux'],
  },
  {
    title: 'Carriertr Logistics API',
    tagline: 'High-availability unified shipping & freight tracking gateway',
    description:
      'RESTful aggregator and orchestration API abstracting heterogeneous national and international carrier protocols into a normalized, webhook-driven real-time tracking engine with sub-50ms latency.',
    category: 'API Service',
    subdomainUrl: 'https://carriertr.sercankara.dev',
    githubUrl: 'https://github.com/sercankara',
    isLive: true,
    featured: true,
    techStack: ['PHP 8.3', 'Swoole', 'PostgreSQL', 'Redis', 'RabbitMQ'],
  },
  {
    title: 'NexITSM Cloud',
    tagline: 'Multi-tenant enterprise IT service management & SLA engine',
    description:
      'Architected a cloud-native B2B ITSM platform supporting multi-tenant tenant isolation, dynamic workflow automation, asset tracking, and strict SLA breach warning telemetry.',
    category: 'SaaS Platform',
    subdomainUrl: 'https://nexistsm.sercankara.dev',
    isLive: true,
    featured: true,
    techStack: ['TypeScript', 'Node.js', 'Go', 'PostgreSQL', 'Redis'],
  },
  {
    title: 'FastHTTP & Swoole Benchmarks',
    tagline: 'Comparative concurrency & latency benchmark suite for backend runtimes',
    description:
      'An open-source profiling and benchmark suite evaluating thread models, epoll abstractions, memory footprints, and JSON serialization throughput between Go, PHP (Swoole/RoadRunner), and Rust.',
    category: 'Open Source',
    subdomainUrl: 'https://benchmarks.sercankara.dev',
    githubUrl: 'https://github.com/sercankara',
    isLive: true,
    featured: false,
    techStack: ['Go', 'PHP Swoole', 'Rust', 'Vegeta', 'Prometheus'],
  },
  {
    title: 'go-circuitbreaker',
    tagline: 'Zero-allocation adaptive circuit breaker library for Go services',
    description:
      'A lightweight, thread-safe circuit breaker with exponential backoff, jittered half-open probes, and zero-allocation metric emission designed for high-concurrency RPC clients.',
    category: 'Open Source',
    githubUrl: 'https://github.com/sercankara',
    isLive: true,
    featured: false,
    techStack: ['Go', 'Concurrency', 'Distributed Systems'],
  },
];
