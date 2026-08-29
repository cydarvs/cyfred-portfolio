import type { Project } from '../types/project'

/**
 * Add new portfolio projects here.
 *
 * Images live under public/projects/<project-id>/ and are referenced from the
 * site root, for example: /projects/my-project/cover.png
 *
 * No changes to App.tsx or the project components are required when adding a
 * normal project.
 */
export const projects: Project[] = [
  {
    id: 'ums-ai',
    title: 'Universal Monitoring System (UMS-AI)',
    kicker: 'Observability · Event Processing · AIOps',
    summary:
      'A vendor-neutral observability and AIOps platform that unifies database, infrastructure and application health across on-premises and cloud environments, with working Grafana dashboards for health, performance and client-workload analysis.',
    challenge:
      'Operational visibility is commonly fragmented across database tools, cloud consoles and server-specific monitoring. UMS-AI is being designed as one extensible platform that normalizes telemetry and creates a foundation for AI-assisted operational analysis.',
    contribution: [
      'Designed the platform architecture and resource model for organizations, environments, sites, servers and database instances.',
      'Built REST API services and PostgreSQL-backed configuration/metadata components.',
      'Integrated Kafka-based normalized event processing and containerized services with Docker Compose.',
      'Designed the observability direction around Prometheus/Grafana, centralized logs and AI-assisted incident analysis.',
      'Defined a deployment path from single-host containers toward Kubernetes-based operation.',
    ],
    outcome:
      'A working hybrid monitoring foundation with API, PostgreSQL, Kafka and Grafana components in active use, including database health scoring, MySQL performance telemetry and client-workload visibility. AI-assisted analysis and broader automation remain under active development.',
    tags: ['Docker', 'PostgreSQL', 'Kafka', 'Prometheus', 'Grafana', 'REST API', 'AIOps'],
    image: './projects/ums-ai/architecture.png',
    gallery: [
      './projects/ums-ai/architecture.png',
      './projects/ums-ai/database-health.webp',
      './projects/ums-ai/mysql-overview.webp',
      './projects/ums-ai/mysql-client-activity.webp',
    ],
    badge: 'Flagship Engineering Project',
    status: 'Active Development',
    metrics: ['Grafana health scoring', 'MySQL workload visibility', 'Client activity analysis', 'Dockerized services', 'Kafka event pipeline', 'AI-assisted analysis'],
    architecture: ['Data Sources', 'Collectors / Exporters', 'Prometheus + PostgreSQL', 'FastAPI Services', 'Grafana Observability', 'AI / Actions'],
    stages: [
      { title: 'Platform Foundation', description: 'Established the Linux/Docker foundation, PostgreSQL metadata store and API service structure.' },
      { title: 'Resource & CRUD APIs', description: 'Built resource models and APIs for organizations, environments, sites, servers and database instances.' },
      { title: 'Kafka Event Processing', description: 'Added normalized event streaming and worker services for decoupled processing.' },
      { title: 'Observability Pipeline', description: 'Extending collection, identity and health pipelines toward Prometheus/Grafana-oriented monitoring.' },
      { title: 'AI & Kubernetes Roadmap', description: 'Planned AI-assisted operational analysis and a migration path toward Kubernetes deployment.' },
    ],
    featured: true,
  },
  {
    id: 'cooperative-platform',
    title: 'Cooperative Mobile & Web Platform',
    kicker: 'Digital Cooperative Services · Financial Workflows',
    summary:
      'A member-facing cooperative platform providing digital access to membership, savings, deposits, loans, payments and cooperative information through mobile and web experiences.',
    challenge:
      'Members needed an accessible self-service channel for cooperative services that traditionally required branch interaction, while keeping authentication, financial data and transaction workflows controlled through secured application services.',
    contribution: [
      'Developed member onboarding flows including membership application, registration, OTP verification and approval status.',
      'Implemented deposit and savings inquiry with transaction-history filtering and account selection.',
      'Implemented loan inquiry, amortization visibility, calculator, application submission and application-status tracking.',
      'Supported loan and deposit payment workflows across available payment channels.',
      'Designed/integrated the application flow across client, authentication, API handlers and database services.',
    ],
    outcome:
      'Delivered an end-to-end member service experience covering onboarding, inquiry, loan servicing, deposits and payment workflows, with a reusable architecture for cooperative deployments.',
    tags: ['Mobile App', 'Web Portal', 'REST API', 'OTP', 'Loans', 'Deposits', 'Payments'],
    image: './projects/cooperative-platform/coop-mobile.png',
    gallery: [
      './projects/cooperative-platform/coop-mobile.png',
      './projects/cooperative-platform/coop-architecture.png',
    ],
    badge: 'Product Development',
    status: 'Completed',
    metrics: ['Mobile + web experience', 'OTP member onboarding', 'Loan workflows', 'Savings & deposits', 'Payment workflows', 'API-backed integration'],
    architecture: ['Mobile / Web Client', 'Cloud', 'Security Layer', 'Authentication', 'API Services', 'Cooperative Databases'],
    featured: false,
  },
  {
    id: 'diamonds-parfum',
    title: 'Diamond’s Parfum MLM Networking System',
    kicker: 'Membership · Genealogy · Commissions · Reporting',
    summary:
      'A web-based MLM/network marketing platform for perfume products with administrative operations, membership structures, earnings computation, withdrawals and reporting.',
    challenge:
      'The platform required coordinated management of members, package/rank structures, genealogy, commission-related values, withdrawal workflows and administrative controls in one operational portal.',
    contribution: [
      'Built administrative and member dashboard experiences for operational and earnings visibility.',
      'Implemented member management, genealogy structures, packages and ranking-related workflows.',
      'Supported Direct Sponsor Bonus, Sales Match Bonus, PV tracking and related earning summaries.',
      'Implemented withdrawal request/approval visibility and supporting reporting modules.',
      'Created administrative settings for branches, roles, users, sequencing and operational configuration.',
    ],
    outcome:
      'Delivered a functioning MLM operations platform that centralizes member-network administration, earnings visibility, withdrawal workflows and reporting for perfume product distribution.',
    tags: ['Web Platform', 'MLM', 'Genealogy', 'Commissions', 'Withdrawals', 'Reporting'],
    image: './projects/diamonds-parfum/mlm-member-dashboard.png',
    gallery: [
      './projects/diamonds-parfum/mlm-dashboard.png',
      './projects/diamonds-parfum/mlm-member-dashboard.png',
      './projects/diamonds-parfum/mlm-admin-expanded.png',
    ],
    href: 'https://member.diamondsparfum.com/',
    badge: 'Full Platform',
    status: 'Production',
    metrics: ['Member + admin portals', 'Genealogy', 'Package & rank logic', 'PV / bonus visibility', 'Withdrawals', 'Reports & settings'],
    featured: false,
  },
  {
    id: 'cloud-modernization',
    title: 'Enterprise Cloud & Application Modernization',
    kicker: 'AWS · Hybrid Infrastructure · Secure Delivery',
    summary:
      'Modernized and operated enterprise application infrastructure using AWS and hybrid platforms, supporting modern web/mobile workloads and secure production delivery.',
    challenge:
      'Business-critical applications required modernization without compromising availability, security, private connectivity, database access or operational continuity.',
    contribution: [
      'Administered EC2, RDS, S3, VPC, WAF, load balancing, IAM and monitoring services.',
      'Supported React/Laravel application delivery with Redis and containerized deployment practices.',
      'Designed secure private database access patterns and production network controls.',
      'Supported CI/CD, release operations, incident response and application/database integration.',
    ],
    outcome:
      'Improved repeatability, security and operational visibility for enterprise application delivery across cloud and on-premises environments.',
    tags: ['AWS', 'EC2', 'RDS', 'S3', 'VPC', 'WAF', 'Docker', 'CloudWatch'],
    status: 'Ongoing',
    metrics: ['AWS + hybrid', 'Secure private access', 'Containerized delivery', 'CI/CD', 'Monitoring', 'Production operations'],
  },
  {
    id: 'mysql-performance',
    title: 'Large-Scale MySQL Performance Engineering',
    kicker: '500GB+ · Production DBA · Reliability',
    summary:
      'Hands-on administration and performance engineering for large MySQL production environments serving hundreds of concurrent users and business-critical applications.',
    challenge:
      'High concurrency, connection spikes, memory growth and large datasets required careful configuration, workload analysis, backup planning and migration readiness.',
    contribution: [
      'Performed InnoDB, connection, memory and SQL performance analysis and tuning.',
      'Managed replication, storage planning, backup/recovery and operational troubleshooting.',
      'Implemented protection with Percona XtraBackup, binary logs, replicas and S3 off-site backup.',
      'Prepared workloads for AWS RDS migration and version-upgrade activities.',
    ],
    outcome:
      'Maintained production database continuity while improving troubleshooting depth, backup resilience and modernization readiness.',
    tags: ['MySQL 5.7/8.0', 'AWS RDS', 'InnoDB', 'Replication', 'XtraBackup', 'Performance'],
    status: 'Ongoing',
    metrics: ['500GB+ environments', 'Hundreds of concurrent users', 'Replication', 'Backup / PITR readiness', 'Performance tuning', 'RDS modernization'],
  },
  {
    id: 'kubernetes-operations',
    title: 'Kubernetes & Container Operations',
    kicker: 'k0s · Docker · Production Troubleshooting',
    summary:
      'Operation and troubleshooting of multi-node Kubernetes/k0s environments and Docker workloads supporting modern application deployments.',
    challenge:
      'Container platforms introduce failure modes across certificates, networking, storage, permissions, images, application configuration and cluster resources.',
    contribution: [
      'Operated controller and worker nodes in multi-node k0s/Kubernetes environments.',
      'Troubleshot pods, services, ingress/application connectivity, certificates and time-related incidents.',
      'Resolved storage permissions, image delivery and deployment configuration issues.',
      'Supported container registries and Git-based deployment workflows.',
    ],
    outcome:
      'Strengthened production troubleshooting and deployment reliability across containerized application environments.',
    tags: ['Kubernetes', 'k0s', 'Docker', 'Harbor', 'Linux', 'CI/CD'],
    status: 'Ongoing',
    metrics: ['Multi-node k0s', 'Controller + workers', 'Pod/service troubleshooting', 'Certificates', 'Storage & permissions', 'Image delivery'],
  },
]
