"use client";

import GridBase from "@/components/skills/GridBase";
import { SiDocker, SiKubernetes, SiJenkins, SiGithubactions, SiTerraform, SiNginx } from "react-icons/si";
import { TbArrowsRightLeft } from "react-icons/tb";

export default function DevOpsGrid() {
    return (
        <GridBase
            items={[
                { name: "Docker", Icon: SiDocker },
                { name: "Kubernetes", Icon: SiKubernetes },
                { name: "Jenkins", Icon: SiJenkins },
                { name: "GitHub Actions", Icon: SiGithubactions },
                { name: "Terraform", Icon: SiTerraform },
                { name: "Nginx", Icon: SiNginx },
                { name: "CI/CD", Icon: TbArrowsRightLeft },
            ]}
        />
    );
}


