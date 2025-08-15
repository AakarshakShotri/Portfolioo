"use client";

import Section from "@/components/Section";
import dynamic from "next/dynamic";
import { useCallback, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const FrontendGrid = dynamic(() => import("@/components/skills/FrontendGrid"));
const BackendGrid = dynamic(() => import("@/components/skills/BackendGrid"));
const AIMLGrid = dynamic(() => import("@/components/skills/AIMLGrid"));
const DatabasesGrid = dynamic(() => import("@/components/skills/DatabasesGrid"));
const TestingGrid = dynamic(() => import("@/components/skills/TestingGrid"));
const DevOpsGrid = dynamic(() => import("@/components/skills/DevOpsGrid"));
const CloudGrid = dynamic(() => import("@/components/skills/CloudGrid"));
const DataGrid = dynamic(() => import("@/components/skills/DataOpsGrid"));

type TabId = "Frontend" | "Backend" | "Mobile" | "AI/ML" | "Databases" | "Testing" | "Data" | "DevOps" | "Cloud";

const tabs: { id: TabId; label: string }[] = [
    { id: "Frontend", label: "Frontend" },
    { id: "Backend", label: "Backend" },
    { id: "AI/ML", label: "AI/ML" },
    { id: "Databases", label: "Databases" },
    { id: "Testing", label: "Testing" },
    { id: "Data", label: "Data" },
    { id: "DevOps", label: "DevOps" },
    { id: "Cloud", label: "Cloud" },
];

export default function Skills() {
    const [active, setActive] = useState<TabId>("Frontend");
    const activeIndex = useMemo(() => tabs.findIndex((t) => t.id === active), [active]);

    const onKeyDown = useCallback((e: React.KeyboardEvent<HTMLDivElement>) => {
        if (e.key === "ArrowRight") {
            e.preventDefault();
            setActive(tabs[(activeIndex + 1) % tabs.length].id);
        }
        if (e.key === "ArrowLeft") {
            e.preventDefault();
            setActive(tabs[(activeIndex - 1 + tabs.length) % tabs.length].id);
        }
    }, [activeIndex]);

    return (
        <Section id="skills" title="Technical Skills & Tools" subtitle="My engineering toolkit">
            <div className="space-y-6">
                <div role="tablist" aria-label="Skills categories" className="flex flex-wrap gap-2" onKeyDown={onKeyDown}>
                    {tabs.map((t) => {
                        const isActive = t.id === active;
                        return (
                            <button
                                key={t.id}
                                role="tab"
                                aria-selected={isActive}
                                aria-controls={`panel-${t.id}`}
                                className={`px-3 py-1.5 text-sm rounded-md border transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-weak)] ${isActive ? "btn-accent border-transparent" : "bg-[var(--surface)] text-[var(--muted-text)] border-default hover:bg-[var(--accent-weak)]"}`}
                                onClick={() => setActive(t.id)}
                            >
                                {t.label}
                            </button>
                        );
                    })}
                </div>

                <div className="mt-4">
                    <AnimatePresence mode="wait">
                        <motion.div key={active} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.15 }} role="tabpanel" id={`panel-${active}`} aria-labelledby={active}>
                            {active === "Frontend" && <FrontendGrid />}
                            {active === "Backend" && <BackendGrid />}
                            {/* {active === "Mobile" && <MobileGrid />} */}
                            {active === "AI/ML" && <AIMLGrid />}
                            {active === "Databases" && <DatabasesGrid />}
                            {active === "Testing" && <TestingGrid />}
                            {active === "Data" && <DataGrid />}
                            {active === "DevOps" && <DevOpsGrid />}
                            {active === "Cloud" && <CloudGrid />}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </Section>
    );
}


