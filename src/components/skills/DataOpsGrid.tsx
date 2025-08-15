"use client";

import GridBase from "@/components/skills/GridBase";
import { 
    SiApacheairflow, 
    SiApachekafka, 
    SiApacheflink, 
    SiApachespark, 
    SiSnowflake, 
    SiDbt 
} from "react-icons/si";

export default function DataGrid() {
    return (
        <GridBase
            items={[
                { name: "Snowflake", Icon: SiSnowflake },
                { name: "DBT", Icon: SiDbt },
                { name: "Airflow", Icon: SiApacheairflow },
                { name: "Apache Spark", Icon: SiApachespark },
                { name: "Apache Flink", Icon: SiApacheflink },
                { name: "Apache Kafka", Icon: SiApachekafka },
            ]}
        />
    );
}
