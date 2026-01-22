"use client";

import GridBase from "@/components/skills/GridBase";
import { 
    SiApacheairflow, 
    SiApachekafka, 
    SiApacheflink, 
    SiApachespark, 
    SiSnowflake, 
    SiDbt,
    SiApachehadoop,
    SiAmazonredshift
} from "react-icons/si";
import { TbTransform } from "react-icons/tb";

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
                { name: "Hadoop", Icon: SiApachehadoop },
                { name: "Redshift", Icon: SiAmazonredshift },
                { name: "ETL Pipelines", Icon: TbTransform },
            ]}
        />
    );
}
