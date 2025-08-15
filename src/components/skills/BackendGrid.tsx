"use client";

import GridBase from "@/components/skills/GridBase";
import { SiNodedotjs, SiSpringboot, SiDjango, SiExpress, SiFastapi, SiGraphql, SiGoland, SiElixir } from "react-icons/si";
import { TbApi, TbTopologyStar3, TbPlugConnected } from "react-icons/tb";

export default function BackendGrid() {
    return (
        <GridBase
            items={[
                { name: "Node.js", Icon: SiNodedotjs },
                { name: "Django", Icon: SiDjango },
                { name: "Golang", Icon: SiGoland },
                { name: "Elixir", Icon: SiElixir },
                { name: "Express.js", Icon: SiExpress },
                { name: "FastAPI", Icon: SiFastapi },
                { name: "GraphQL", Icon: SiGraphql },
                { name: "REST APIs", Icon: TbApi },
                { name: "Microservices", Icon: TbTopologyStar3 },
                { name: "WebSockets", Icon: TbPlugConnected },
            ]}
        />
    );
}




