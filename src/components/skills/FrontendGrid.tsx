"use client";

import GridBase from "@/components/skills/GridBase";
import { SiReact, SiNextdotjs, SiTypescript, SiVuedotjs, SiAngular, SiTailwindcss, SiHtml5, SiCss3, SiJavascript, SiSass } from "react-icons/si";

export default function FrontendGrid() {
    return (
        <GridBase
            items={[
                { name: "React", Icon: SiReact },
                { name: "Next.js", Icon: SiNextdotjs },
                { name: "TypeScript", Icon: SiTypescript },
                { name: "Angular", Icon: SiAngular },
                { name: "Tailwind CSS", Icon: SiTailwindcss },
                { name: "HTML5", Icon: SiHtml5 },
                { name: "CSS3", Icon: SiCss3 },
                { name: "JavaScript", Icon: SiJavascript },
            ]}
        />
    );
}




