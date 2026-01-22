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
    "Software Engineer focused on Data Infrastructure, DevOps, and AI Systems",
  metrics: [
    { label: "Projects Led", value: "10+" },
    { label: "Uptime", value: "99.9%" },
    { label: "Cost Savings", value: "$2M+" },
  ],
  about: [
    "Hi, I am Aakarshak. I work as a software engineer and I really enjoy building things that solve real problems. My main areas are data infrastructure, cloud systems, and AI.",
    "Over the past four years, I have worked on a variety of projects. I have built streaming pipelines that process data in real time, moved legacy systems to modern microservices, and set up deployment workflows that teams can rely on. Most of my work involves Python, AWS, and Kubernetes.",
    "What I find most interesting is taking a messy problem and turning it into something clean and functional. I like working with data pipelines using tools like Airflow and Spark. I have also spent time building AI systems, including voice agents and retrieval systems that connect language models to company knowledge.",
    "I care about writing code that is easy to understand and maintain. I prefer simple solutions over clever ones, and I always try to think about how my work will affect the people using it.",
  ],
  yearsExperience: 4,
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
      "A streaming platform I built to give teams instant visibility into business metrics instead of waiting hours for batch jobs.",
    problem:
      "Different teams had their own event pipelines that did not talk to each other. Data was often duplicated, delayed, or just missing. People had to wait a long time before they could see what was happening.",
    solution:
      "I built a real time analytics system on AWS. Events flow from our load balancer into Kinesis, get processed by Lambda functions, and then Flink handles the transformations. The data ends up in Cassandra for fast lookups and Snowflake for analytics. I also built dashboards in Next.js so teams can see metrics updating live.",
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
      "Each event is processed exactly once",
      "Metrics show up in dashboards within a second",
      "Handles traffic spikes without dropping data",
      "Writes to multiple databases at the same time",
      "Different views for different teams",
      "Scales automatically based on load",
    ],
    images: ["/projects/hyperdrive.png"],
    category: "Data",
    challenges: [
      "Some partitions got way more traffic than others",
      "Keeping schemas consistent across services",
      "Making sure both fast and slow storage stayed in sync",
      "Backfilling data without breaking the live system",
    ],
    impact:
      "Teams now get insights in seconds instead of hours. We also consolidated several separate pipelines into one, which saved money and made things easier to maintain.",
  },
  {
    id: "analytics-warehouse-modernization",
    title: "Analytics Pipeline Migration",
    summary:
      "Moved our analytics from an old Hadoop setup to Snowflake and DBT, making queries faster and the whole system easier to work with.",
    problem:
      "Our old analytics ran on PySpark and Hadoop. Jobs were slow and expensive, and when something broke it was hard to debug. We tried Snowflake first but the initial setup was not flexible enough.",
    solution:
      "I led the migration to Snowflake with DBT for transformations. I set up modular DBT models so you can trace where data comes from. I also moved the workloads to run on Kubernetes so we have more control over costs and can scale as needed.",
    technologies: [
      "Snowflake",
      "DBT",
      "PySpark",
      "Hadoop",
      "AWS EKS",
      "Terraform",
    ],
    features: [
      "Modular SQL transformations you can trace end to end",
      "Snowflake warehouses tuned for cost",
      "Jobs run in containers on Kubernetes",
      "Everything deploys automatically through CI/CD",
    ],
    category: "Data",
    challenges: [
      "Translating old PySpark logic into SQL",
      "Keeping costs reasonable between Snowflake and Kubernetes",
      "Making sure dev, staging, and prod all behave the same",
    ],
    impact:
      "Queries run much faster now and costs went down significantly. Analysts can experiment more freely because the system is reliable.",
  },
  {
    id: "workflow-automation-airflow",
    title: "Workflow Automation with Airflow",
    summary:
      "Replaced our old ETL jobs with Airflow workflows that actually work reliably and are easy to monitor.",
    problem:
      "We had legacy Informatica jobs that broke all the time. When they failed, someone had to manually fix them, and that often delayed important updates like router activations.",
    solution:
      "I rewrote these pipelines as Airflow DAGs. Each job is now modular with automatic retries. I added Grafana dashboards and Sentry alerts so we know right away when something goes wrong. Everything runs in containers on Kubernetes.",
    technologies: [
      "Apache Airflow",
      "PySpark",
      "Hadoop",
      "Kubernetes (EKS)",
      "Grafana",
      "Sentry",
    ],
    features: [
      "Router activations and policy updates happen automatically",
      "Jobs retry on failure with proper error handling",
      "Dashboards show pipeline health in real time",
      "Runs in containers so it scales easily",
    ],
    challenges: [
      "Breaking big PySpark jobs into smaller pieces",
      "Handling schema changes during the migration",
      "Switching over without any downtime",
    ],
    category: "Data",
    impact:
      "Pipelines fail much less often now, and when issues come up the team gets alerted immediately. No more manual interventions.",
  },

  // Devops
  {
    id: "ci-cd-automation",
    title: "CI/CD Workflow Automation",
    summary:
      "Set up automated deployment pipelines so the team could ship faster without worrying about breaking things.",
    problem:
      "Deployments were manual and error prone. Every release was stressful, rollbacks were a pain, and nobody really knew what was deployed where.",
    solution:
      "I built CI/CD pipelines with Jenkins and GitHub Actions, connected to ArgoCD for deployments. Everything is defined in code with Terraform and Kubernetes manifests. I also added Slack notifications so the team knows when releases go out.",
    technologies: [
      "Jenkins",
      "GitHub Actions",
      "ArgoCD",
      "Terraform",
      "Bitbucket",
      "Slack Alerts",
    ],
    features: [
      "Code gets built, tested, and deployed automatically",
      "All infrastructure is defined in Git",
      "Release notifications go to Slack",
      "Rolling back is just a Git revert away",
    ],
    challenges: [
      "Keeping multiple environments in sync",
      "Making sure deployments do not cause downtime",
      "Getting everyone to use the same manifest format",
    ],
    impact:
      "Deployments are much faster and more reliable now. The team can see exactly what is running where, and rolling back is simple.",
    category: "DevOps",
  },
  {
    id: "infra-as-code",
    title: "Infrastructure as Code and On Prem Deployments",
    summary:
      "Moved our infrastructure to code so we can spin up and recover environments quickly and consistently.",
    problem:
      "Our on prem deployments were done by hand and each environment was slightly different. When things broke, recovery took forever because nobody remembered exactly how things were set up.",
    solution:
      "I introduced Terraform for provisioning and Helm charts for Kubernetes deployments. Services run in containers on both EKS and our on prem clusters. I also set up Vault for managing secrets and wrote failover scripts for disaster recovery.",
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
      "All infrastructure is defined in Terraform",
      "Works on both cloud and on prem",
      "Automated failover when things go wrong",
      "Secrets stored securely in Vault",
    ],
    challenges: [
      "Moving legacy apps without breaking them",
      "Managing resources across cloud and on prem",
      "Keeping everything compliant during the migration",
    ],
    impact:
      "We can now recover from failures quickly and spin up new environments in minutes. Everything is consistent and reproducible.",
    category: "DevOps",
  },

  // Backend
  {
    id: "async-microservices",
    title: "Async Microservices Migration",
    summary:
      "Broke up a slow monolith into separate services that can handle more traffic and respond faster.",
    problem:
      "We had one big application trying to do everything. As traffic grew, response times got worse and the system struggled to keep up.",
    solution:
      "I split the monolith into async microservices using FastAPI and Celery. Added WebSocket support for real time features. Everything runs in containers on Kubernetes with Redis handling caching and message passing.",
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
      "Services handle requests without blocking",
      "Background jobs run through Celery",
      "Real time updates over WebSockets",
      "Database queries are optimized",
    ],
    challenges: [
      "Untangling code that was tightly coupled",
      "Making sure old clients still work",
      "Keeping data consistent across services",
    ],
    impact:
      "The system handles much more traffic now and responses are faster. It also scales better during peak times.",
    category: "Backend",
  },
  {
    id: "chatbot-microservice",
    title: "Chatbot Latency Optimization",
    summary:
      "Built a dedicated messaging service for our chatbot so responses come back faster.",
    problem:
      "The chatbot was part of the main backend, which made it slow. When traffic spiked, messages took too long to send and receive.",
    solution:
      "I pulled the chatbot messaging into its own service using WebSockets and async Python. It runs independently now and can handle many connections at once. I added Grafana dashboards to monitor message delivery.",
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
      "Dedicated service just for messaging",
      "Async handling of connections",
      "Live dashboards showing message metrics",
      "Scales horizontally in Kubernetes",
    ],
    challenges: [
      "Extracting chatbot code from the old system",
      "Handling thousands of connections at once",
      "Making sure no messages get lost",
    ],
    impact:
      "Chat responses are noticeably faster now and the experience feels much smoother for users.",
    category: "Backend",
  },

  // AI/ML
  {
    id: "ai-streaming-agent",
    title: "AI Streaming Agent",
    summary:
      "Built a voice AI agent that responds in real time, so conversations feel natural instead of waiting for batch responses.",
    problem:
      "Our AI agent worked in batches, which meant users had to wait several seconds for each response. It felt clunky and did not work for real conversations.",
    solution:
      "I built a streaming pipeline using Pipecat and LangChain. The system transcribes speech, sends it to an LLM, and speaks the response back, all happening continuously instead of in chunks. It runs on Kubernetes with monitoring to catch any issues.",
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
      "LLM responses stream as they are generated",
      "Voice transcription and synthesis run with minimal delay",
      "Handles many concurrent conversations",
      "Full monitoring and tracing",
    ],
    challenges: [
      "Keeping audio and text in sync",
      "Running real time workloads at scale",
      "Dealing with network jitter",
    ],
    impact:
      "Conversations now feel responsive and natural. Users do not have to wait awkwardly for the AI to respond.",
    category: "AI/ML",
  },
  {
    id: "rag-contextual-ai",
    title: "RAG based Contextual AI System",
    summary:
      "Built a system that connects our LLM to company knowledge so it gives accurate, relevant answers instead of making things up.",
    problem:
      "When we used language models directly, they would sometimes give wrong information or make up facts. They had no idea about our company specific data.",
    solution:
      "I built a retrieval system that searches our internal documents and feeds relevant context to the LLM before it generates a response. Used Vectara for vector search and LangGraph to orchestrate the workflow. The whole thing runs on Kubernetes.",
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
      "Pulls relevant documents before generating answers",
      "Searches company knowledge using vectors",
      "Updates automatically as knowledge changes",
      "Scales to handle many queries",
    ],
    challenges: [
      "Finding the right balance between search quality and speed",
      "Keeping the knowledge base up to date",
      "Maintaining accuracy when traffic is high",
    ],
    impact:
      "Answers are much more accurate now and grounded in actual company information. Teams trust the AI responses more.",
    category: "AI/ML",
  },
  {
    id: "voice-ai-pipelines",
    title: "Voice AI Pipelines",
    summary:
      "Built the speech recognition and voice synthesis parts of our AI system to make voice conversations feel natural.",
    problem:
      "Voice features were slow and the audio often got out of sync with the text. Users noticed the delay and it hurt the experience.",
    solution:
      "I built pipelines that handle speech to text and text to speech in real time. Added buffering to start responding before the full input is processed. Runs on Kubernetes with monitoring to track latency and catch problems.",
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
      "Transcription happens as you speak",
      "Voice responses start immediately",
      "Smart buffering for smooth playback",
      "Metrics for latency and throughput",
    ],
    challenges: [
      "Getting the first words out quickly",
      "Keeping audio and text in sync",
      "Handling many voice sessions at once",
    ],
    impact:
      "Voice interactions feel responsive now. The delay is barely noticeable and conversations flow naturally.",
    category: "AI/ML",
  },
  {
    id: "kdb-trade-ai-agent",
    title: "AI Trade Query Agent with KDB+",
    summary:
      "Built an AI agent that lets users ask questions about trade data in plain language, powered by KDB+ for fast tick data queries.",
    problem:
      "Traders and analysts needed quick answers about market data but querying KDB+ directly required knowing q syntax. Non technical users had to wait for someone to run queries for them.",
    solution:
      "I built an AI streaming agent that understands natural language trade queries. The agent translates questions into q queries, runs them against our KDB+ tick database, and streams back results with context. Users just ask things like 'show me the top trades for AAPL in the last hour' and get instant answers.",
    technologies: [
      "KDB+",
      "q",
      "Pipecat",
      "LangChain",
      "FastAPI",
      "WebSockets",
      "Python",
      "Kubernetes",
    ],
    features: [
      "Natural language to q query translation",
      "Real time streaming responses",
      "Access to tick level trade data",
      "Conversational follow up questions",
      "Results formatted for easy reading",
    ],
    challenges: [
      "Mapping natural language to correct q syntax",
      "Handling ambiguous trade queries",
      "Keeping response times low with large datasets",
      "Making financial data understandable to non experts",
    ],
    impact:
      "Analysts can now get trade insights in seconds without knowing q. The agent handles thousands of queries daily and has become the go to tool for quick market data lookups.",
    category: "AI/ML",
  },

  // Frontend
  {
    id: "realtime-dashboards",
    title: "Realtime Analytics Dashboards",
    summary:
      "Built dashboards that update live so teams can see what is happening right now instead of waiting for reports.",
    problem:
      "Different teams had their own dashboards and data was often minutes old. By the time you saw a problem, it was too late to do anything.",
    solution:
      "I built dashboards in Next.js that pull data from our streaming pipelines through WebSockets. Each team sees the metrics relevant to them. I optimized the rendering so it stays smooth even with lots of data coming in.",
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
      "Data updates within a second",
      "Different views for different roles",
      "Smooth performance even with lots of data",
      "Works on desktop and mobile",
    ],
    challenges: [
      "Rendering fast when data is streaming in",
      "Making sure people only see what they should",
      "Keeping frontend in sync with backend streams",
    ],
    impact:
      "Teams can now react to things as they happen. The dashboards are actually used because they show current information.",
    category: "Frontend",
  },

  {
    id: "component-ui-system",
    title: "Component driven UI System",
    summary:
      "Built a library of reusable UI components so the team can build features faster without reinventing the wheel.",
    problem:
      "Every project looked a bit different and bugs kept coming back. There was no shared library, so people built the same things over and over.",
    solution:
      "I created a component library in React with Zustand for state management and TailwindCSS for styling. Every component has tests, and we enforce coverage in CI. Teams can just grab components and use them.",
    technologies: [
      "React",
      "Zustand",
      "Redux",
      "TailwindCSS",
      "Jest",
      "React Testing Library",
    ],
    features: [
      "Ready to use components",
      "State management that makes sense",
      "Tests catch bugs before they ship",
      "Works on any screen size",
    ],
    challenges: [
      "Getting teams to agree on designs",
      "Sharing state without passing props everywhere",
      "Keeping test coverage high as we add features",
    ],
    impact:
      "Building new features is faster now and the UI is consistent across apps. Fewer bugs make it to production.",
    category: "Frontend",
  },

  // Observability
  {
    id: "observability-systems",
    title: "Observability for Distributed Systems",
    summary:
      "Set up monitoring and alerting so we can see what is happening across all our services and fix issues quickly.",
    problem:
      "When something broke, it took forever to figure out what went wrong. We had no visibility into our distributed services.",
    solution:
      "I set up Prometheus and Grafana for metrics, with New Relic for additional tracing. Used OpenTelemetry to trace requests across services. Built dashboards that show latency, errors, and throughput so teams can spot problems early.",
    technologies: [
      "Prometheus",
      "Grafana",
      "New Relic",
      "OpenTelemetry (OTLP)",
      "ELK",
      "Kubernetes Dashboards",
    ],
    features: [
      "All logs and metrics in one place",
      "Dashboards tailored for each service",
      "Traces that follow requests across services",
      "Alerts that catch issues before users notice",
    ],
    challenges: [
      "Adding monitoring to old services",
      "Keeping costs reasonable as we add more services",
      "Not logging so much that it becomes expensive",
    ],
    impact:
      "We find and fix problems much faster now. Developers feel more confident shipping because they can see what is happening.",
    category: "Observability",
  },
  {
    id: "error-alerting",
    title: "Error Alerting and Slack Integration",
    summary:
      "Connected our error tracking to Slack so the team finds out about problems right away instead of from users.",
    problem:
      "Bugs in production would go unnoticed for hours. We only found out when customers complained.",
    solution:
      "I hooked Sentry up to Slack so errors show up in the right channels immediately. Set up escalation rules based on severity. Release notifications also go to Slack so everyone knows when new code goes out.",
    technologies: [
      "Sentry",
      "Slack API",
      "Prometheus Alerts",
      "Bitbucket Pipelines",
    ],
    features: [
      "Errors pop up in Slack right away",
      "Release info posted to team channels",
      "Critical errors page the on call person",
      "Ties into our CI/CD pipeline",
    ],
    challenges: [
      "Filtering out noise so people pay attention",
      "Getting the team used to responding in Slack",
      "Routing alerts correctly across time zones",
    ],
    impact:
      "We catch issues much faster now and the team collaborates better because everything is visible in Slack.",
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
      "Building AI voice agents that respond in real time using streaming pipelines",
      "Working on analytics systems that process data as it comes in so teams get insights quickly",
      "Broke apart a large monolith into smaller async services that handle more traffic",
      "Set up deployment pipelines that make releases faster and more reliable",
      "Improving how our distributed systems are designed so they scale better",
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
      "Handled on prem deployments and made our infrastructure more reliable",
      "Built an API gateway to manage routing across our internal services",
      "Pulled out chatbot messaging into its own service to make responses faster",
      "Added SSO and set up Slack alerts so the team knows about errors and releases",
      "Rewrote old ETL jobs as Airflow workflows for router and policy updates",
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
      "Infrastructure as Code and On Prem Deployments",
    ],
  },
  {
    company: "Syncrope",
    role: "Software Engineer Trainee",
    start: "Jan 2022",
    end: "Jun 2022",
    responsibilities: [
      "Built frontend components in React with TypeScript and managed state with Redux",
      "Created REST APIs and worked with message queues for async processing",
      "Learned to containerize apps and deploy them to Kubernetes",
      "Designed database schemas and wrote migrations for both SQL and NoSQL databases",
      "Wrote tests to catch bugs before they reached production",
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
    notableProjects: ["Component driven UI System"],
  },
];

export const certifications: Certification[] = [
  {
    name: "AWS Certified Solutions Architect Associate",
    issuer: "Amazon",
    year: "2023",
  },
  {
    name: "CKA: Certified Kubernetes Administrator",
    issuer: "CNCF",
    year: "2022",
  },
  {
    name: "Q Developer Level 2",
    issuer: "KX Systems",
    year: "2024",
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
