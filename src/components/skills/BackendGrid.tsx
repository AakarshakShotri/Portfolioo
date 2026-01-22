"use client";

import GridBase from "@/components/skills/GridBase";
import { SiNodedotjs, SiDjango, SiExpress, SiFastapi, SiGraphql, SiGo, SiElixir, SiCelery } from "react-icons/si";
import { TbApi, TbHexagons, TbWebhook } from "react-icons/tb";

export default function BackendGrid() {
    return (
        <GridBase
            items={[
                { name: "Node.js", Icon: SiNodedotjs },
                { name: "Django", Icon: SiDjango },
                { name: "Go", Icon: SiGo },
                { name: "Elixir", Icon: SiElixir },
                { name: "Express.js", Icon: SiExpress },
                { name: "FastAPI", Icon: SiFastapi },
                { name: "Celery", Icon: SiCelery },
                { name: "GraphQL", Icon: SiGraphql },
                { name: "REST APIs", Icon: TbApi },
                { name: "Microservices", Icon: TbHexagons },
                { name: "WebSockets", Icon: TbWebhook },
            ]}
        />
    );
}




