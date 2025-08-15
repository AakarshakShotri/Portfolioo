import Section from "@/components/Section";
import { experience } from "@/data/site";
import Image from "next/image";

export default function Experience() {
    return (
        <Section id="experience" title="Experience" subtitle="Timeline of professional roles">
            <div className="grid grid-cols-1 gap-6">
                {experience.map((e, idx) => (
                    <article key={e.company + idx} className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6 flex flex-col gap-3">
                        <header className="flex items-start justify-between gap-3">
                            <div className="flex items-center gap-3">
                                {e.companyLogo ? (
                                    <div className="relative w-7 h-7 shrink-0">
                                        <Image src={e.companyLogo} alt="logo" fill className="object-contain" />
                                    </div>
                                ) : null}
                                <h3 className="text-base font-semibold">{e.role} • {e.company}</h3>
                            </div>
                            <p className="text-sm text-[var(--muted-text)]">{e.start} – {e.end}</p>
                        </header>
                        <ul className="ps-5 list-disc text-[var(--muted-text)] space-y-1">
                            {e.responsibilities.map((r, i) => (
                                <li key={i}>{r}</li>
                            ))}
                        </ul>
                        {e.technologies?.length ? (
                            <div className="mt-2 flex flex-wrap gap-2">
                                {e.technologies.map((t) => (
                                    <span key={t} className="px-2 py-0.5 rounded-md text-xs border border-[var(--border)] text-[var(--muted-text)]">{t}</span>
                                ))}
                            </div>
                        ) : null}
                    </article>
                ))}
            </div>
        </Section>
    );
}


