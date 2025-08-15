import type {
  Achievement,
  Certification,
  Experience,
  Project,
  SiteMeta,
  Skill,
} from "@/lib/types";

export const siteMeta: SiteMeta = {
  name: "Aakarshak Shotri",
  role: "SDE2",
  location: "",
  valueProposition:
    "SDE-2 | Staff Data Infrastructure Engineer| Data & DevOps | AWS & GCP | Python | AI Streaming & Pipelines",
  metrics: [
    { label: "Projects Led", value: "10+" },
    { label: "Uptime", value: "99.9%" },
    { label: "Cost Savings", value: "$2M+" },
  ],
  about: [
    "I’m Aakarshak Shotri, a software engineer who enjoys solving tough engineering problems by combining data infrastructure, DevOps practices, and AI systems.",
    "Over the last few years, I’ve designed AI streaming agents, large-scale data pipelines, and cloud-native microservices that power real-time insights and business-critical applications. From migrating high-traffic monoliths into async microservices to automating deployments with modern CI/CD, I enjoy tackling challenges that push both performance and reliability to the next level",
    "I'm really passionate about backend engineering, data platforms, and AI. Whether I'm working on cloud stuff with AWS/GCP, setting up data pipelines with Airflow and Spark, or playing around with LLMs and streaming agents, I get excited about building systems that actually work well and the ones that can handle growth, stay flexible, and make a real difference.",
    "Beyond just the tech stuff, I really enjoy taking full ownership: figuring out what the business actually needs, planning out the system design, and building solutions that are both innovative and reliable.",
  ],
  yearsExperience: 3,
  projectsDelivered: 25,
  techMastered: 40,
  socials: [
    { type: "GitHub", url: "https://github.com/yourhandle" },
    { type: "LinkedIn", url: "https://www.linkedin.com/in/yourhandle" },
    { type: "Twitter", url: "https://twitter.com/yourhandle" },
  ],
  resumeUrl: "/resume.pdf",
};

export const skills: Skill[] = [
  { name: "Java", level: 5, category: "Languages" },
  { name: "Python", level: 5, category: "Languages" },
  { name: "TypeScript", level: 5, category: "Languages" },
  { name: "Go", level: 3, category: "Languages" },
  { name: "C++", level: 3, category: "Languages" },
  { name: "React", level: 5, category: "Frontend" },
  { name: "Next.js", level: 5, category: "Frontend" },
  { name: "Tailwind CSS", level: 5, category: "Frontend" },
  { name: "Angular", level: 3, category: "Frontend" },
  { name: "Vue.js", level: 3, category: "Frontend" },
  { name: "Node.js", level: 5, category: "Backend" },
  { name: "Spring Boot", level: 4, category: "Backend" },
  { name: "Django", level: 3, category: "Backend" },
  { name: "Express.js", level: 5, category: "Backend" },
  { name: "PostgreSQL", level: 5, category: "Databases" },
  { name: "MongoDB", level: 4, category: "Databases" },
  { name: "Redis", level: 4, category: "Databases" },
  { name: "MySQL", level: 4, category: "Databases" },
  { name: "AWS", level: 4, category: "Cloud" },
  { name: "Azure", level: 3, category: "Cloud" },
  { name: "GCP", level: 3, category: "Cloud" },
  { name: "Docker", level: 5, category: "Cloud" },
  { name: "Kubernetes", level: 3, category: "Cloud" },
  { name: "Git", level: 5, category: "DevOps" },
  { name: "Jenkins", level: 4, category: "DevOps" },
  { name: "JIRA", level: 4, category: "DevOps" },
  { name: "Jest", level: 4, category: "Testing" },
];

export const projects: Project[] = [
  // Data
  {
    id: "realtime-analytics",
    title: "Realtime Analytics Pipeline",
    summary:
      "High-throughput streaming platform with sub-second insights and resilient data pipelines.",
    problem:
      "Existing event pipelines were fragmented across teams, leading to high latency, duplicate processing, and operational overhead. Business stakeholders had to wait minutes or hours for critical insights.",
    solution:
      "Designed and deployed a fault-tolerant real-time analytics platform on AWS. The pipeline ingests high-volume client events through ALB → Kinesis streams → Lambda processors, applies real-time transformations with Kinesis Analytics / Flink, and persists results into Cassandra and Snowflake for both OLTP and OLAP use cases. Firehose connectors stream processed data to S3 for long-term storage. Downstream dashboards (Next.js) provide sub-second visibility into key metrics.",
    technologies: [
      "AWS Kinesis",
      "AWS Lambda",
      "S3",
      "Kinesis Firehose",
      "Kinesis Analytics",
      "Cassandra",
      "Snowflake",
      "Flink",
      "Kafka",
      "Next.js",
      "TypeScript",
      "Nginx",
      "Fluentd",
    ],
    features: [
      "Exactly-once processing and deduplication",
      "Sub-second latency from ingest to dashboard",
      "Backpressure handling with Flink + Kinesis",
      "Multi-sink writes (Cassandra, Snowflake, S3)",
      "Role-based dashboards for teams and operations",
      "Auto-scaling Lambda and Firehose connectors",
    ],
    images: ["/projects/hyperdrive.png"], // the architecture diagram you shared
    category: "Data",
    challenges: [
      "Hot partition skew in Kinesis streams",
      "Schema evolution across services",
      "Coordinating OLTP (Cassandra) vs OLAP (Snowflake) sinks",
      "Ensuring fault-tolerance during backfills",
    ],
    impact:
      "Reduced data-to-insight latency by 95%, enabling true real-time decision-making. Cut $1M+/year in operational costs by consolidating fragmented pipelines into a single resilient platform. Improved developer velocity with standardized schemas and automated monitoring.",
  },
  {
    id: "analytics-warehouse-modernization",
    title: "Analytics Pipeline Migration",
    summary:
      "Transformed legacy data warehouse stack into a modern Snowflake + DBT analytics platform running on EKS.",
    problem:
      "Analytics workloads were slow and costly on a legacy PySpark + Hadoop stack, with batch jobs often failing to deliver timely insights. Initial migration to Snowflake improved querying but lacked flexibility and infra-level reliability.",
    solution:
      "Led a full modernization of the analytics stack by migrating workloads from PySpark/Hadoop to Snowflake + DBT for transformations. Designed modular DBT models with clear lineage, reducing complexity. Worked on the infrastructure layer to move workloads from basic Snowflake-managed services to an EKS cluster for containerized execution and better cost/performance control.",
    technologies: [
      "Snowflake",
      "DBT",
      "PySpark",
      "Hadoop",
      "AWS EKS",
      "Terraform",
    ],
    features: [
      "DBT-based modular SQL transformations with lineage tracking",
      "Optimized Snowflake warehouses for cost efficiency",
      "Containerized execution of workloads on Kubernetes (EKS)",
      "Automated deployment via Terraform and CI/CD pipelines",
    ],
    category: "Data",
    challenges: [
      "Migrating schemas and transformations from PySpark/Hadoop",
      "Balancing infra costs between Snowflake compute and EKS",
      "Ensuring reproducibility across environments",
    ],
    impact:
      "Cut query runtime by 70% and lowered analytics infra costs by ~40%. Enabled faster experimentation, reliable analytics pipelines, and consistent environments across dev/staging/prod.",
  },
  {
    id: "workflow-automation-airflow",
    title: "Workflow Automation with Airflow",
    summary:
      "Migrated fragile ETL pipelines into modern Airflow DAGs, improving reliability and scalability.",
    problem:
      "Legacy ETL jobs built with Informatica were brittle, hard to monitor, and required frequent manual intervention. Failures often caused delayed router activations and policy updates, impacting operations.",
    solution:
      "Re-architected legacy pipelines into modular Airflow DAGs with built-in retries, monitoring, and alerting. Automated router activation and policy updates, while adding observability hooks into Grafana and Sentry for proactive alerts. The new workflows were containerized and deployed on Kubernetes, ensuring scalable and reliable execution.",
    technologies: [
      "Apache Airflow",
      "PySpark",
      "Hadoop",
      "Kubernetes (EKS)",
      "Grafana",
      "Sentry",
    ],
    features: [
      "Automated router activation and policy updates",
      "Retry policies with error handling",
      "End-to-end monitoring and alerting",
      "Containerized DAG execution on Kubernetes",
    ],
    challenges: [
      "Refactoring monolithic PySpark jobs into smaller DAG tasks",
      "Managing schema drift during migration",
      "Ensuring zero downtime during cutover",
    ],
    category: "Data",
    impact:
      "Reduced pipeline failures by 80% and eliminated manual interventions. Enabled operations teams to rely on fully automated, observable workflows that scale with traffic.",
  },

  // Devops
  {
    id: "ci-cd-automation",
    title: "CI/CD Workflow Automation",
    summary:
      "Reduced deployment time and improved release stability with GitOps pipelines.",
    problem:
      "Manual deployments caused inconsistent releases and slowed down development velocity. Rollbacks were painful, and deployment visibility was limited.",
    solution:
      "Designed and implemented CI/CD pipelines using Jenkins and GitHub Actions integrated with ArgoCD. Shifted to a GitOps model with declarative manifests and Terraform-based infra provisioning. Added chat-based release alerts for visibility.",
    technologies: [
      "Jenkins",
      "GitHub Actions",
      "ArgoCD",
      "Terraform",
      "Bitbucket",
      "Slack Alerts",
    ],
    features: [
      "Automated build-test-deploy cycle",
      "GitOps with declarative manifests",
      "Chat-based release visibility",
      "Rollback automation",
    ],
    challenges: [
      "Coordinating infra across multiple environments",
      "Ensuring zero-downtime deployments",
      "Standardizing manifests for microservices",
    ],
    impact:
      "Cut deployment time by 60% and improved release stability. Developers gained full visibility of deployments, reducing production errors.",
    category: "DevOps",
  },
  {
    id: "infra-as-code",
    title: "Infrastructure as Code & On-Prem Deployments",
    summary:
      "Led infra automation with Terraform and Kubernetes, improving reliability and recovery.",
    problem:
      "On-prem deployments were manual, fragile, and lacked consistency across environments. Recovery from failures was slow and error-prone.",
    solution:
      "Introduced Terraform for provisioning infra and Helm/Kubernetes manifests for deployments. Containerized critical services and deployed them to EKS and on-prem clusters. Improved disaster recovery with automated failover scripts and Vault-based secret management.",
    technologies: [
      "Terraform",
      "Kubernetes",
      "Helm",
      "Docker",
      "Vault",
      "Nginx",
      "Traefik",
    ],
    features: [
      "Infrastructure as Code (IaC) with Terraform",
      "Hybrid deployment: On-Prem + EKS",
      "Automated recovery and failover",
      "Centralized secret management with Vault",
    ],
    challenges: [
      "Migrating legacy workloads without downtime",
      "Balancing infra across on-prem and cloud",
      "Maintaining compliance during migration",
    ],
    impact:
      "Improved infra reliability and cut recovery times by 50%. Enabled consistent deployments across on-prem and cloud environments.",
    category: "DevOps",
  },

  // Backend
  {
    id: "async-microservices",
    title: "Async Microservices Migration",
    summary:
      "Scaled backend throughput by migrating a high-traffic monolith into async microservices.",
    problem:
      "A high-traffic monolith was unable to handle growing workloads, leading to latency spikes and scaling issues.",
    solution:
      "Refactored the monolith into async Python microservices (FastAPI + Celery) with WebSocket support for real-time features. Containerized services and deployed on Kubernetes. Introduced Redis for caching and message brokering to improve throughput.",
    technologies: [
      "FastAPI",
      "Celery",
      "WebSockets",
      "Redis",
      "Kubernetes",
      "Docker",
      "SQLAlchemy",
    ],
    features: [
      "Async microservices for scalability",
      "Background job execution with Celery",
      "Real-time updates via WebSockets",
      "Optimized database queries with SQLAlchemy",
    ],
    challenges: [
      "Breaking down tightly coupled monolith",
      "Ensuring backwards compatibility",
      "Managing async workflows with consistency",
    ],
    impact:
      "Improved throughput by 3x and reduced request latency by 40%. Backend became more resilient and scalable under peak load.",
    category: "Backend",
  },
  {
    id: "chatbot-microservice",
    title: "Chatbot Latency Optimization",
    summary:
      "Migrated chatbot messaging into a socket-based microservice, reducing response latency.",
    problem:
      "Legacy chatbot messaging was tightly coupled with the main backend, causing high latency and poor scalability.",
    solution:
      "Separated chatbot messaging into a standalone socket-based microservice. Used async I/O for faster handling of concurrent connections. Added monitoring and alerting for message delivery metrics.",
    technologies: [
      "Python (asyncio)",
      "WebSockets",
      "FastAPI",
      "Docker",
      "Kubernetes",
      "Prometheus",
      "Grafana",
    ],
    features: [
      "Socket-based messaging microservice",
      "Low-latency async communication",
      "Real-time monitoring dashboards",
      "Scalable containerized deployment",
    ],
    challenges: [
      "Decoupling chatbot logic from legacy system",
      "Managing high concurrent connections",
      "Ensuring message delivery guarantees",
    ],
    impact:
      "Reduced chatbot response latency by 65%, improved scalability, and delivered smoother user experiences.",
    category: "Backend",
  },

  // AI/ML
  {
    id: "ai-streaming-agent",
    title: "AI Streaming Agent",
    summary:
      "Designed a real-time AI agent pipeline for low-latency conversational intelligence.",
    problem:
      "Traditional AI agent responses were batch-based, leading to slow, delayed interactions that failed to meet real-time business needs.",
    solution:
      "Developed a streaming AI agent pipeline using Pipecat, LangChain, and async event-driven services. Integrated LLMs with speech-to-text (STT) and text-to-speech (TTS) pipelines to enable natural, low-latency interactions. Deployed the agent on Kubernetes with observability hooks for monitoring.",
    technologies: [
      "Pipecat",
      "LangChain",
      "LLMs",
      "FastAPI",
      "WebSockets",
      "TTS/STT Pipelines",
      "Kubernetes",
      "Prometheus",
      "Grafana",
    ],
    features: [
      "Real-time LLM response streaming",
      "Low-latency STT/TTS pipelines",
      "Scalable event-driven backend",
      "Observability with metrics and traces",
    ],
    challenges: [
      "Managing jitter and response synchronization",
      "Scaling real-time workloads across distributed services",
      "Ensuring voice/text alignment during streaming",
    ],
    impact:
      "Reduced conversational latency to sub-second levels, enabling seamless real-time AI interactions for high-traffic use cases.",
    category: "AI/ML",
  },
  {
    id: "rag-contextual-ai",
    title: "RAG-based Contextual AI System",
    summary:
      "Implemented Retrieval-Augmented Generation pipelines for context-aware AI responses.",
    problem:
      "LLMs alone produced hallucinations and lacked contextual awareness of company-specific knowledge.",
    solution:
      "Designed a Retrieval-Augmented Generation (RAG) system using vector databases (Vectara + Redis) and LangGraph. Indexed internal knowledge sources and built pipelines that augment LLM queries with relevant documents before generation. Containerized services and deployed on EKS with automated retraining workflows.",
    technologies: [
      "LangChain",
      "LangGraph",
      "Vectara",
      "Redis",
      "OpenAI API",
      "FastAPI",
      "Kubernetes (EKS)",
    ],
    features: [
      "Context injection into LLM prompts",
      "Vector search across company knowledge",
      "Automated retraining workflows",
      "Scalable RAG microservices on EKS",
    ],
    challenges: [
      "Balancing relevance vs. speed in vector retrieval",
      "Handling schema evolution in knowledge base",
      "Ensuring accuracy under high query load",
    ],
    impact:
      "Improved response accuracy by 75% and reduced hallucinations, enabling domain-specific conversational AI across multiple teams.",
    category: "AI/ML",
  },
  {
    id: "voice-ai-pipelines",
    title: "Voice AI Pipelines (TTS/STT)",
    summary:
      "Built low-latency pipelines for speech-to-text and text-to-speech in production AI systems.",
    problem:
      "Voice interactions suffered from latency and poor synchronization between transcriptions and generated speech.",
    solution:
      "Engineered real-time voice pipelines by integrating STT engines with LLM backends and TTS models. Implemented buffering, early-response streaming, and URL handling optimizations. Deployed on Kubernetes with monitoring for throughput and jitter.",
    technologies: [
      "Speech-to-Text (STT)",
      "Text-to-Speech (TTS)",
      "FastAPI",
      "Pipecat",
      "Python (asyncio)",
      "Kubernetes",
      "Prometheus",
      "Grafana",
    ],
    features: [
      "Streaming speech-to-text transcription",
      "Low-latency text-to-speech synthesis",
      "Buffering and early-response handling",
      "Production-grade monitoring",
    ],
    challenges: [
      "Minimizing first-sentence delay",
      "Maintaining subtitle/audio alignment",
      "Scaling concurrent voice sessions",
    ],
    impact:
      "Enabled natural voice-driven interactions with sub-second response time, powering conversational AI products at scale.",
    category: "AI/ML",
  },

  // Frontend
  {
    id: "realtime-dashboards",
    title: "Realtime Analytics Dashboards",
    summary:
      "Built role-based, sub-second dashboards for high-throughput data streams.",
    problem:
      "Business teams had fragmented dashboards with delays of minutes, making real-time decision-making impossible.",
    solution:
      "Developed dashboards in Next.js and TypeScript that consume Kafka/Flink pipeline outputs via APIs. Integrated WebSockets for live updates and role-based access control for different user groups. Optimized rendering performance with React hooks and memoization.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "WebSockets",
      "Redux",
      "Zustand",
      "TailwindCSS",
    ],
    features: [
      "Sub-second live data updates",
      "Role-based dashboards",
      "Optimized state management",
      "Responsive design for all devices",
    ],
    challenges: [
      "Efficiently rendering large streaming datasets",
      "Securing role-based data views",
      "Synchronizing backend streams with frontend views",
    ],
    impact:
      "Cut decision latency from minutes to seconds. Improved adoption across business teams by providing clean, interactive dashboards.",
    category: "Frontend",
  },

  {
    id: "component-ui-system",
    title: "Component-driven UI System",
    summary:
      "Created reusable React components with predictable state flows and robust testing.",
    problem:
      "Frontend applications were inconsistent and lacked a unified design system. Bugs often reappeared due to weak testing.",
    solution:
      "Developed a reusable UI library with React, Zustand for predictable state flows, and TailwindCSS for styling. Wrote unit and component tests with Jest and React Testing Library, enforcing coverage thresholds.",
    technologies: [
      "React",
      "Zustand",
      "Redux",
      "TailwindCSS",
      "Jest",
      "React Testing Library",
    ],
    features: [
      "Reusable component library",
      "Predictable global state flows",
      "Test coverage enforcement",
      "Lightweight, responsive design",
    ],
    challenges: [
      "Aligning component designs across teams",
      "Avoiding prop-drilling with shared state",
      "Maintaining test coverage with CI/CD",
    ],
    impact:
      "Increased frontend development speed by 40% and reduced UI bugs by 60%. Established a scalable UI foundation for future apps.",
    category: "Frontend",
  },

  // Observability
  {
    id: "observability-systems",
    title: "Observability for Distributed Systems",
    summary:
      "Deployed full monitoring and alerting stack for microservices and data pipelines.",
    problem:
      "Teams lacked visibility into distributed services, leading to long mean time to recovery (MTTR) during incidents.",
    solution:
      "Integrated Prometheus, Grafana, and New Relic for metrics and traces. Used OpenTelemetry (OTLP) for standardized tracing across microservices. Built Grafana dashboards for latency, throughput, and error rates, enabling proactive monitoring.",
    technologies: [
      "Prometheus",
      "Grafana",
      "New Relic",
      "OpenTelemetry (OTLP)",
      "ELK",
      "Kubernetes Dashboards",
    ],
    features: [
      "Centralized logging and metrics",
      "Custom Grafana dashboards per service",
      "Standardized OTLP tracing",
      "Real-time incident detection",
    ],
    challenges: [
      "Instrumenting legacy services",
      "Scaling observability across microservices",
      "Balancing logging volume vs. cost",
    ],
    impact:
      "Reduced MTTR by 45% and enabled proactive incident detection. Improved developer confidence in deployments and system reliability.",
    category: "Observability",
  },
  {
    id: "error-alerting",
    title: "Error Alerting & Chat Based Tools Integration",
    summary:
      "Integrated error alerts with team communication tools for faster response times.",
    problem:
      "Errors in production often went unnoticed until end-users reported them, slowing recovery.",
    solution:
      "Connected Sentry and release alerts directly into chat-based tools (Slack). Configured severity-based escalation policies and automated release notifications. Linked alerts with incident tracking workflows.",
    technologies: [
      "Sentry",
      "Slack API",
      "Prometheus Alerts",
      "Bitbucket Pipelines",
    ],
    features: [
      "Real-time error notifications in Slack",
      "Release alerts with build info",
      "Severity-based escalation",
      "Integration with CI/CD pipelines",
    ],
    challenges: [
      "Reducing false-positive alerts",
      "Training teams to respond via ChatOps",
      "Ensuring alert routing across time zones",
    ],
    impact:
      "Reduced average incident response time by 50% and increased team collaboration through ChatOps-driven workflows.",
    category: "Observability",
  },
];

export const experience: Experience[] = [
  {
    company: "Teleperformance",
    role: "Software Development Engineer II",
    start: "Aug 2024",
    end: "Present",
    responsibilities: [
      "Designed and deployed AI streaming agents aligned with business goals.",
      "Built real-time and near real-time analytics pipelines enabling faster insights.",
      "Migrated high-traffic monolith into async microservices, improving throughput and latency.",
      "Enhanced CI/CD workflows, reducing deployment time and improving release stability.",
      "Improved distributed system architecture for scalability and reliability.",
    ],
    technologies: [
      "FastAPI",
      "Celery",
      "Kafka",
      "Flink",
      "Snowflake",
      "DBT",
      "AWS",
      "Kubernetes",
      "Grafana",
    ],
    notableProjects: [
      "AI Streaming Agent",
      "Realtime Analytics Platform",
      "Async Microservices Migration",
    ],
  },
  {
    company: "Syncrope",
    role: "Associate Software Engineer",
    start: "Jun 2022",
    end: "Aug 2024",
    responsibilities: [
      "Led on-prem platform deployments and ops, improving reliability and recovery.",
      "Implemented a custom API gateway unifying routing for internal microservices.",
      "Migrated chatbot messaging into a socket-based microservice, reducing latency.",
      "Integrated SSO and chat-based error/release alerts for deployment visibility.",
      "Automated router activation and policy updates by migrating legacy ETL to Airflow DAGs.",
    ],
    technologies: [
      "Python",
      "FastAPI",
      "LangChain",
      "Airflow",
      "PostgreSQL",
      "Docker",
      "Terraform",
      "Vault",
      "Nginx",
    ],
    notableProjects: [
      "Workflow Automation with Airflow",
      "Chatbot Latency Optimization",
      "Infrastructure as Code & On-Prem Deployments",
    ],
  },
  {
    company: "Syncrope",
    role: "Software Engineer Trainee",
    start: "Jan 2022",
    end: "Jun 2022",
    responsibilities: [
      "Developed component-driven UIs with typed interfaces and predictable state flows.",
      "Implemented RESTful endpoints, async pub/sub, and event-triggered functions.",
      "Containerized services and deployed them to staging clusters with Kubernetes manifests.",
      "Designed database schemas across SQL/NoSQL with migrations and query optimizations.",
      "Wrote unit and component tests with mocks, catching regressions early.",
    ],
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Redux",
      "SQLAlchemy",
      "Docker",
      "Kubernetes",
    ],
    notableProjects: ["Component-driven UI System"],
  },
];

export const certifications: Certification[] = [
  {
    name: "AWS Certified Solutions Architect – Associate",
    issuer: "Amazon",
    year: "2023",
  },
  {
    name: "CKA: Certified Kubernetes Administrator",
    issuer: "CNCF",
    year: "2022",
  },
];

export const achievements: Achievement[] = [
  {
    title: "Hackathon Winner",
    description: "1st place internal hackathon out of 40 teams.",
    year: "2021",
  },
  {
    title: "Open Source Maintainer",
    description: "Maintainer of popular OSS library with 3k+ stars.",
  },
];
