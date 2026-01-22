"use client";

import GridBase from "@/components/skills/GridBase";
import { SiSelenium, SiPostman, SiPytest, SiJest } from "react-icons/si";
import { TbTestPipe, TbChecks, TbBrowserCheck } from "react-icons/tb";

export default function TestingGrid() {
    return (
        <GridBase
            items={[
                { name: "Pytest", Icon: SiPytest },
                { name: "Jest", Icon: SiJest },
                { name: "Playwright", Icon: TbBrowserCheck },
                { name: "Selenium", Icon: SiSelenium },
                { name: "Postman", Icon: SiPostman },
                { name: "Unit Testing", Icon: TbTestPipe },
                { name: "E2E Testing", Icon: TbChecks },
            ]}
        />
    );
}
