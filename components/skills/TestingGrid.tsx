"use client";

import GridBase from "@/components/skills/GridBase";
import { SiJest, SiCypress, SiSelenium, SiPostman } from "react-icons/si";
import { TbTestPipe, TbGitCompare, TbTimelineEvent } from "react-icons/tb";

export default function TestingGrid() {
    return (
        <GridBase
            items={[
                { name: "Jest", Icon: SiJest },
                { name: "Cypress", Icon: SiCypress },
                { name: "Selenium", Icon: SiSelenium },
                { name: "Unit Testing", Icon: TbTestPipe },
                { name: "Integration Testing", Icon: TbGitCompare },
                { name: "E2E Testing", Icon: TbTimelineEvent },
                { name: "Postman", Icon: SiPostman },
            ]}
        />
    );
}




