"use client";

import GridBase from "@/components/skills/GridBase";
import { SiReact, SiFlutter, SiPwa, SiApple, SiAndroid } from "react-icons/si";
import { TbDevices } from "react-icons/tb";

export default function MobileGrid() {
    return (
        <GridBase
            items={[
                { name: "React Native", Icon: SiReact },
                { name: "Flutter", Icon: SiFlutter },
                { name: "PWA", Icon: SiPwa },
                { name: "iOS Development", Icon: SiApple },
                { name: "Android Development", Icon: SiAndroid },
                { name: "Responsive Design", Icon: TbDevices },
            ]}
        />
    );
}




