"use client";

import GridBase from "@/components/skills/GridBase";
import { TbBrandAws, TbBrandAzure, TbBrandGoogle, TbBrandVercel, TbBrandCloudflare, TbLambda, TbFunction } from "react-icons/tb";

export default function CloudGrid() {
    return (
        <GridBase
            items={[
                { name: "AWS", Icon: TbBrandAws },
                { name: "Google Cloud", Icon: TbBrandGoogle },
                { name: "Serverless", Icon: TbLambda },
                { name: "Cloud Functions", Icon: TbFunction },
                { name: "CDN", Icon: TbBrandCloudflare },
                { name: "Vercel", Icon: TbBrandVercel },
            ]}
        />
    );
}


