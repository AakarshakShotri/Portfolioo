import Section from "@/components/Section";
import { achievements, certifications } from "@/data/site";

export default function Achievements() {
    return (
        <Section id="achievements" title="Achievements & Certifications" subtitle="Trust indicators and recognition">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <h3 className="text-sm font-semibold text-slate-500 mb-3">Achievements</h3>
                    <ul className="space-y-3">
                        {achievements.map((a, i) => (
                            <li key={i} className="rounded-lg border border-slate-200 bg-white p-4">
                                <p className="font-medium text-slate-800 dark:text-slate-100">{a.title}</p>
                                <p className="text-sm text-slate-600 dark:text-slate-300">{a.description}</p>
                                {a.year ? <p className="text-xs text-slate-500 mt-1">{a.year}</p> : null}
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h3 className="text-sm font-semibold text-slate-500 mb-3">Certifications</h3>
                    <ul className="space-y-3">
                        {certifications.map((c, i) => (
                            <li key={i} className="rounded-lg border border-slate-200 bg-white p-4">
                                <p className="font-medium text-slate-800 dark:text-slate-100">{c.name}</p>
                                <p className="text-sm text-slate-600 dark:text-slate-300">{c.issuer} • {c.year}</p>
                                {c.credentialUrl ? (
                                    <a href={c.credentialUrl} target="_blank" rel="noopener noreferrer" className="text-xs text-blue-600 hover:underline">Verify credential</a>
                                ) : null}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </Section>
    );
}


