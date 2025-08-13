"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

type Props = {
    id: string;
    title?: string;
    subtitle?: string;
    children: ReactNode;
};

export default function Section({ id, title, subtitle, children }: Props) {
    return (
        <section id={id} className="scroll-mt-24 py-16 sm:py-24">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                {title ? (
                    <div className="mb-10">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-slate-800 dark:text-slate-100">
                            {title}
                        </h2>
                        {subtitle ? (
                            <p className="mt-2 text-slate-600 dark:text-slate-400">{subtitle}</p>
                        ) : null}
                    </div>
                ) : null}
                <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5 }}>
                    {children}
                </motion.div>
            </div>
        </section>
    );
}




