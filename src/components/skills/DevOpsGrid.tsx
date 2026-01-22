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
    SiBitbucket,
    SiTraefikproxy,
    SiVault,
    SiHelm
} from "react-icons/si";
import { TbGitMerge } from "react-icons/tb";

export default function DevOpsGrid() {
    return (
        <GridBase
            items={[
                { name: "Docker", Icon: SiDocker },
                { name: "Kubernetes", Icon: SiKubernetes },
                { name: "Helm", Icon: SiHelm },
                { name: "Jenkins", Icon: SiJenkins },
                { name: "GitHub Actions", Icon: SiGithubactions },
                { name: "Argo CD", Icon: SiArgo },
                { name: "Bitbucket", Icon: SiBitbucket },
                { name: "Terraform", Icon: SiTerraform },
                { name: "Nginx", Icon: SiNginx },
                { name: "Traefik", Icon: SiTraefikproxy },
                { name: "Vault", Icon: SiVault },
                { name: "CI/CD", Icon: TbGitMerge },
            ]}
        />
    );
}
