"use client";

import GridBase from "@/components/skills/GridBase";
import { 
    SiDocker, 
    SiKubernetes, 
    SiJenkins, 
    SiGithubactions, 
    SiTerraform, 
    SiNginx, 
    SiArgo, 
    SiBitbucket 
} from "react-icons/si";
import { TbArrowsRightLeft, TbLock } from "react-icons/tb";

export default function DevOpsGrid() {
    return (
        <GridBase
            items={[
                { name: "Docker", Icon: SiDocker },
                { name: "Kubernetes", Icon: SiKubernetes },
                { name: "Jenkins", Icon: SiJenkins },
                { name: "GitHub Actions", Icon: SiGithubactions },
                { name: "Argo CD", Icon: SiArgo }, // added
                { name: "Bitbucket", Icon: SiBitbucket }, // added
                { name: "Terraform", Icon: SiTerraform },
                { name: "Nginx", Icon: SiNginx },
                { name: "Traefik", Icon: TbArrowsRightLeft }, // fallback since no official icon
                { name: "Vault", Icon: TbLock }, // secret mgmt
                { name: "CI/CD", Icon: TbArrowsRightLeft },
            ]}
        />
    );
}
