"use client";

import Section from "@/components/Section";
import { projects } from "@/data/site";
import { useMemo, useState } from "react";
import { ExternalLink, Github } from "lucide-react";

const filters = ["All", "Web", "Mobile", "API", "System Design"] as const;

export default function Projects() {
    const [filter, setFilter] = useState<(typeof filters)[number]>("All");
    const filtered = useMemo(() => (filter === "All" ? projects : projects.filter((p) => p.category === filter)), [filter]);

    return (
        <Section id="projects" title="Featured Projects" subtitle="Selected case studies with impact">
            <div className="mb-6 flex flex-wrap gap-2">
                {filters.map((f) => (
                    <button key={f} onClick={() => setFilter(f)} className={`px-3 py-1.5 rounded-md text-sm border ${filter === f ? "btn-accent text-white border-transparent" : "border-default text-slate-700 hover:bg-[var(--sky)]/30"}`}>
                        {f}
                    </button>
                ))}
            </div>
            <div className="grid grid-cols-1 gap-6">
                {filtered.map((p) => (
                    <article key={p.id} className="rounded-xl border border-slate-200 bg-white p-5 flex flex-col gap-3">
                        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">{p.title}</h3>
                        <p className="text-sm text-slate-700">{p.summary}</p>
                        <div className="grid grid-cols-2 gap-3 text-sm">
                            <div>
                                <p className="font-medium text-slate-800 dark:text-slate-200">Problem</p>
                                <p className="text-slate-700">{p.problem}</p>
                            </div>
                            <div>
                                <p className="font-medium text-slate-800 dark:text-slate-200">Solution</p>
                                <p className="text-slate-700">{p.solution}</p>
                            </div>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {p.technologies.map((t) => (
                                <span key={t} className="px-2 py-1 rounded-md text-xs border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300">{t}</span>
                            ))}
                        </div>
                        <div className="mt-auto flex items-center gap-3">
                            {p.github ? (
                                <a href={p.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm text-slate-700 dark:text-slate-200 hover:text-blue-600">
                                    <Github size={16} /> Code
                                </a>
                            ) : null}
                            {p.live ? (
                                <a href={p.live} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm text-slate-700 dark:text-slate-200 hover:text-blue-600">
                                    <ExternalLink size={16} /> Live
                                </a>
                            ) : null}
                        </div>
                    </article>
                ))}
            </div>
        </Section>
    );
}


