"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, FileDown } from "lucide-react";
import clsx from "clsx";

const sections = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
];

export default function Navbar({ resumeUrl }: { resumeUrl?: string }) {
    const [active, setActive] = useState<string>("hero");
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                for (const entry of entries) {
                    if (entry.isIntersecting) {
                        setActive(entry.target.id);
                    }
                }
            },
            { rootMargin: "-40% 0px -55% 0px", threshold: [0, 0.25, 0.5, 1] }
        );
        sections.forEach((s) => {
            const el = document.getElementById(s.id);
            if (el) observer.observe(el);
        });
        return () => observer.disconnect();
    }, []);

    return (
        <nav className="sticky top-0 z-40 border-b border-[var(--border)] bg-[var(--surface)]/90 backdrop-blur">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
                {/* Desktop links */}
                <div className="hidden md:flex items-center gap-1">
                    {sections.map((s) => (
                        <a key={s.id} href={`#${s.id}`} className={clsx("px-3 py-2 text-sm rounded-md transition-colors", active === s.id ? "text-[var(--accent)]" : "text-[var(--muted-text)] hover:text-[var(--accent)]")}>{s.label}</a>
                    ))}
                </div>
                <div className="flex items-center gap-2">
                    {/* Always visible Resume button on all screens */}
                    <a href="/api/resume" download="resume.pdf" className="inline-flex items-center gap-1 px-3 py-2 text-sm rounded-md btn-accent">
                        <FileDown size={16} /> Resume
                    </a>
                    {/* Mobile hamburger (hides links into drawer) */}
                    <button className="md:hidden inline-flex items-center justify-center w-9 h-9 rounded-md border border-[var(--border)] bg-[var(--surface)]/70" onClick={() => setOpen((v) => !v)} aria-label="Open menu">
                        <Menu size={18} />
                    </button>
                </div>
            </div>
            {open ? (
                <div className="md:hidden border-t border-[var(--border)] bg-[var(--surface)]">
                    <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col gap-1">
                        {sections.map((s) => (
                            <a key={s.id} href={`#${s.id}`} onClick={() => setOpen(false)} className={clsx("px-3 py-2 text-sm rounded-md", active === s.id ? "text-[var(--accent)]" : "text-[var(--muted-text)] hover:text-[var(--accent)]")}>{s.label}</a>
                        ))}
                    </div>
                </div>
            ) : null}
        </nav>
    );
}




