"use client";

import Section from "@/components/Section";
import { projects } from "@/data/site";
import { useMemo, useState } from "react";
import { ExternalLink, Github } from "lucide-react";

const filters = ["All", "Frontend", "Backend", "Observability", "AI/ML", "Data", "DevOps"] as const;

export default function Projects() {
    const [filter, setFilter] = useState<(typeof filters)[number]>("All");
    const filtered = useMemo(() => (filter === "All" ? projects : projects.filter((p) => p.category === filter)), [filter]);

    return (
        <Section id="projects" title="Featured Projects" subtitle="">
            <div className="mb-6 flex flex-wrap gap-2">
                {filters.map((f) => (
                    <button key={f} onClick={() => setFilter(f)} className={`px-3 py-1.5 rounded-md text-sm border ${filter === f ? "btn-accent border-transparent" : "border-default text-[var(--muted-text)] hover:bg-[var(--accent-weak)]"}`}>
                        {f}
                    </button>
                ))}
            </div>
            <div className="grid grid-cols-1 gap-6">
                {filtered.map((p) => (
                    <article key={p.id} className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-5 flex flex-col gap-3">
                        <h3 className="text-lg font-semibold">{p.title}</h3>
                        <p className="text-sm text-[var(--muted-text)]">{p.summary}</p>
                        <div className="grid grid-cols-2 gap-3 text-sm">
                            <div>
                                <p className="font-medium">Problem</p>
                                <p className="text-[var(--muted-text)]">{p.problem}</p>
                            </div>
                            <div>
                                <p className="font-medium">Solution</p>
                                <p className="text-[var(--muted-text)]">{p.solution}</p>
                            </div>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {p.technologies.map((t) => (
                                <span key={t} className="px-2 py-1 rounded-md text-xs border border-[var(--border)] text-[var(--muted-text)]">{t}</span>
                            ))}
                        </div>
                    </article>
                ))}
            </div>
        </Section>
    );
}


