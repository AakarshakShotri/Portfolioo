"use client";

import GridBase from "@/components/skills/GridBase";
import { SiSelenium, SiPostman, SiPytest } from "react-icons/si";
import { TbTestPipe, TbPlugConnected, TbArrowsJoin } from "react-icons/tb";

export default function TestingGrid() {
    return (
        <GridBase
            items={[
                { name: "Selenium", Icon: SiSelenium },
                { name: "Unit Testing", Icon: TbTestPipe },
                { name: "Integration Testing", Icon: TbPlugConnected },
                { name: "E2E Testing", Icon: TbArrowsJoin },
                { name: "Postman", Icon: SiPostman },
                { name: "Pytest", Icon: SiPytest },
            ]}
        />
    );
}
