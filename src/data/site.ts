import { Achievement, Certification, Experience, Project, SiteMeta, Skill } from "@/lib/types";

export const siteMeta: SiteMeta = {
    name: "Your Name",
    role: "SDE2 | Full-Stack Developer",
    location: "City, State",
    valueProposition: "SDE2 | Full-Stack Developer | 5+ Years Building Scalable Solutions",
    metrics: [
        { label: "Projects Led", value: "10+" },
        { label: "Uptime", value: "99.9%" },
        { label: "Cost Savings", value: "$2M+" }
    ],
    about: [
        "I am a Software Development Engineer specializing in building reliable, scalable, and user-centric products across the stack.",
        "My technical philosophy emphasizes simplicity, observability, and ownership. I favor well-defined interfaces, clear contracts, and measurable impact.",
        "I have led cross-functional teams to deliver high-availability platforms and data-driven features at scale.",
        "When not shipping software, I explore system design, performance tuning, and mentoring engineers."
    ],
    yearsExperience: 5,
    projectsDelivered: 25,
    techMastered: 40,
    socials: [
        { type: "GitHub", url: "https://github.com/yourhandle" },
        { type: "LinkedIn", url: "https://www.linkedin.com/in/yourhandle" },
        { type: "Twitter", url: "https://twitter.com/yourhandle" }
    ],
    resumeUrl: "/resume.pdf"
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
    { name: "Jest", level: 4, category: "Testing" }
];

export const projects: Project[] = [
    {
        id: "realtime-analytics",
        title: "Realtime Analytics Platform",
        summary: "High-throughput streaming analytics with sub-second dashboards.",
        problem: "Fragmented event pipelines caused slow insights and operational toil.",
        solution: "Built Kafka + Flink pipeline, OLAP store, and Next.js dashboards.",
        technologies: ["Next.js", "TypeScript", "Kafka", "Flink", "ClickHouse", "AWS"],
        features: ["Exactly-once processing", "Backpressure handling", "Role-based dashboards"],
        images: [],
        github: "https://github.com/yourhandle/realtime-analytics",
        live: "https://analytics.example.com",
        category: "Web",
        challenges: ["Hot partition skew", "Schema evolution"],
        impact: "Cut insight latency by 95%, saving $1M/year in ops."
    },
    {
        id: "smart-scheduler",
        title: "Smart Job Scheduler API",
        summary: "Resilient distributed scheduling with SLA guarantees.",
        problem: "Batch workflows missed deadlines and lacked isolation.",
        solution: "Designed rate-limited, priority queues with circuit breakers.",
        technologies: ["Node.js", "PostgreSQL", "Redis", "Kubernetes"],
        features: ["Dead-letter queues", "Cron + ad-hoc triggers", "Audit logs"],
        category: "API",
        github: "https://github.com/yourhandle/smart-scheduler",
        impact: "99.95% on-time execution; eliminated 3 on-call pages/week."
    },
    {
        id: "mobile-insights",
        title: "Mobile Product Insights",
        summary: "Cross-platform app surfacing cohort analytics and churn signals.",
        problem: "Mobile PMs lacked unified insights across iOS/Android.",
        solution: "React Native app with offline-first sync and visualizations.",
        technologies: ["React Native", "TypeScript", "SQLite"],
        features: ["Offline sync", "Push notifications", "Cohort charts"],
        category: "Mobile",
        github: "https://github.com/yourhandle/mobile-insights"
    }
];

export const experience: Experience[] = [
    {
        company: "Acme Corp",
        // companyLogo: "/vercel.svg",
        role: "Software Development Engineer II",
        start: "May 2022",
        end: "Present",
        responsibilities: [
            "Led end-to-end delivery of analytics platform serving 50k DAU.",
            "Drove observability adoption (SLOs, tracing) reducing MTTR by 60%.",
            "Mentored 4 engineers; instituted design docs and ADRs."
        ],
        technologies: ["Next.js", "Kafka", "ClickHouse", "AWS", "Grafana"],
        notableProjects: ["Realtime Analytics Platform"]
    },
    {
        company: "Beta Systems",
        role: "Software Engineer",
        start: "Jun 2019",
        end: "Apr 2022",
        responsibilities: [
            "Built APIs and microservices handling 100M+ requests/day.",
            "Collaborated with product/design in agile squads to ship features.",
            "Improved CI/CD pipelines; cut build times by 40%."
        ],
        technologies: ["Node.js", "PostgreSQL", "Redis", "Docker"],
        notableProjects: ["Smart Job Scheduler API"]
    }
];

export const certifications: Certification[] = [
    { name: "AWS Certified Solutions Architect – Associate", issuer: "Amazon", year: "2023" },
    { name: "CKA: Certified Kubernetes Administrator", issuer: "CNCF", year: "2022" }
];

export const achievements: Achievement[] = [
    { title: "Hackathon Winner", description: "1st place internal hackathon out of 40 teams.", year: "2021" },
    { title: "Open Source Maintainer", description: "Maintainer of popular OSS library with 3k+ stars." }
];


