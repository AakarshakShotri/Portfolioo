"use client";

import { siteMeta } from "@/data/site";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
    return (
        <section id="hero" className="pt-8 sm:pt-14">
            <div className="max-w-6xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
                    <div>
                        <motion.h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                            {siteMeta.name}
                        </motion.h1>
                        <p className="mt-2 text-lg text-slate-700">{siteMeta.valueProposition}</p>
                        <div className="mt-6 flex flex-wrap gap-4">
                            {siteMeta.metrics.map((m) => (
                                <div key={m.label} className="rounded-lg border border-slate-200 bg-white px-4 py-3">
                                    <p className="text-2xl font-semibold text-slate-900">{m.value}</p>
                                    <p className="text-sm text-slate-600">{m.label}</p>
                                </div>
                            ))}
                        </div>
                        <div className="mt-8 flex items-center gap-3">
                            <a href="#projects" className="inline-flex items-center justify-center px-5 py-3 rounded-md btn-accent">View Projects</a>
                        </div>
                    </div>
                    <div className="hidden md:flex justify-center md:justify-end">
                        <div className="relative w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-blue-100 dark:border-slate-700 shadow">
                            <Image src="/vercel.svg" alt="Headshot" fill className="object-contain p-8 dark:invert" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}


