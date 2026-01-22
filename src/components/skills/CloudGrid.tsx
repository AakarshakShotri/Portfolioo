"use client";

import GridBase from "@/components/skills/GridBase";
import { 
    SiAmazonwebservices, 
    SiGooglecloud, 
    SiVercel, 
    SiCloudflare,
    SiAwslambda,
    SiAmazoneks,
    SiAmazons3
} from "react-icons/si";

export default function CloudGrid() {
    return (
        <GridBase
            items={[
                { name: "AWS", Icon: SiAmazonwebservices },
                { name: "Google Cloud", Icon: SiGooglecloud },
                { name: "Lambda", Icon: SiAwslambda },
                { name: "EKS", Icon: SiAmazoneks },
                { name: "S3", Icon: SiAmazons3 },
                { name: "Cloudflare", Icon: SiCloudflare },
                { name: "Vercel", Icon: SiVercel },
            ]}
        />
    );
}


