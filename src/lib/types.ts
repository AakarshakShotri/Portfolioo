export type Skill = {
    name: string;
    level: number; // 1-5
    category: SkillCategory;
};

export type SkillCategory =
    | "Languages"
    | "Frontend"
    | "Backend"
    | "Databases"
    | "Cloud"
    | "DevOps"
    | "Testing"
    | "Mobile"
    | "AI/ML";

export type Project = {
    id: string;
    title: string;
    summary: string;
    problem: string;
    solution: string;
    technologies: string[];
    features: string[];
    images?: string[];
    github?: string;
    live?: string;
    category: "Frontend" | "Backend" | "AI/ML" | "Observability" | "Data" | "DevOps" ;
    challenges?: string[];
    impact?: string;
};

export type Experience = {
    company: string;
    companyLogo?: string;
    role: string;
    start: string; // e.g., "Jan 2022"
    end: string; // e.g., "Present"
    responsibilities: string[];
    technologies: string[];
    notableProjects?: string[];
};

export type Certification = {
    name: string;
    issuer: string;
    year: string;
    credentialUrl?: string;
};

export type Achievement = {
    title: string;
    description: string;
    year?: string;
};

export type SocialLink = {
    type: "GitHub" | "LinkedIn" | "Twitter" | "Email";
    url: string;
};

export type SiteMeta = {
    name: string;
    role: string;
    location: string;
    valueProposition: string;
    metrics: { label: string; value: string }[];
    about: string[]; // paragraphs
    yearsExperience: number;
    projectsDelivered: number;
    techMastered: number;
    socials: SocialLink[];
    resumeUrl?: string;
};




