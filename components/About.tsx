import { siteMeta } from "@/data/site";
import Section from "@/components/Section";

export default function About() {
    return (
        <Section id="about" title="About Me" subtitle="Professional background and philosophy">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-2 space-y-4 text-slate-600 dark:text-slate-300">
                    {siteMeta.about.map((p, i) => (
                        <p key={i}>{p}</p>
                    ))}
                </div>
                <div className="grid grid-cols-3 gap-4">
                    <div className="rounded-lg border border-slate-200 bg-white p-4 text-center h-28 flex flex-col items-center justify-center">
                        <p className="text-2xl font-semibold text-slate-900 dark:text-slate-100">{siteMeta.yearsExperience}+</p>
                        <p className="text-sm text-slate-500">Years</p>
                    </div>
                    <div className="rounded-lg border border-slate-200 bg-white p-4 text-center h-28 flex flex-col items-center justify-center">
                        <p className="text-2xl font-semibold text-slate-900 dark:text-slate-100">{siteMeta.projectsDelivered}+</p>
                        <p className="text-sm text-slate-500">Projects</p>
                    </div>
                    <div className="rounded-lg border border-slate-200 bg-white p-4 text-center h-28 flex flex-col items-center justify-center">
                        <p className="text-2xl font-semibold text-slate-900 dark:text-slate-100">{siteMeta.techMastered}+</p>
                        <p className="text-sm text-slate-500">Technologies</p>
                    </div>
                </div>
            </div>
        </Section>
    );
}


