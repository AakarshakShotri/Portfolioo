"use client";

import { motion } from "framer-motion";
import { IconType } from "react-icons";

export type SkillItem = { name: string; Icon: IconType };

export default function GridBase({ items }: { items: SkillItem[] }) {
    return (
        <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.25 }} className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {items.map(({ name, Icon }) => (
                <motion.div key={name} initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.2 }} className="group rounded-xl border border-[var(--border)] bg-[var(--surface)] p-5 hover:bg-[var(--accent-weak)] transition-colors shadow-sm hover:shadow">
                    <div className="flex flex-col items-center">
                        <div className="h-10 w-10 text-[var(--text)] flex items-center justify-center">
                            <Icon className="h-10 w-10 transition-transform duration-200 group-hover:scale-110" aria-hidden="true" />
                        </div>
                        <p className="mt-3 text-center font-medium">{name}</p>
                    </div>
                </motion.div>
            ))}
        </motion.div>
    );
}


