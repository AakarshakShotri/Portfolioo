import { siteMeta } from "@/data/site";
import Section from "@/components/Section";

export default function About() {
    return (
        <Section id="about" title="About Me" subtitle="Professional background">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-2 space-y-4 text-[var(--muted-text)]">
                    {siteMeta.about.map((p, i) => (
                        <p key={i}>{p}</p>
                    ))}
                </div>
                <div className="grid grid-cols-2 gap-8">
                    <div className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-4 text-center h-28 flex flex-col items-center justify-center">
                        <p className="text-2xl font-semibold">{siteMeta.yearsExperience}+</p>
                        <p className="text-sm text-[var(--muted-text)]">Years</p>
                    </div>
                    <div className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-4 text-center h-28 flex flex-col items-center justify-center">
                        <p className="text-2xl font-semibold">{siteMeta.techMastered}+</p>
                        <p className="text-sm text-[var(--muted-text)]">Technologies</p>
                    </div>
                </div>
            </div>
        </Section>
    );
}


