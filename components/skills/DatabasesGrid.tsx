"use client";

import GridBase from "@/components/skills/GridBase";
import { SiPostgresql, SiMongodb, SiRedis, SiMysql, SiElasticsearch, SiAmazondynamodb, SiSqlite } from "react-icons/si";

export default function DatabasesGrid() {
    return (
        <GridBase
            items={[
                { name: "PostgreSQL", Icon: SiPostgresql },
                { name: "MongoDB", Icon: SiMongodb },
                { name: "Redis", Icon: SiRedis },
                { name: "MySQL", Icon: SiMysql },
                { name: "Elasticsearch", Icon: SiElasticsearch },
                { name: "DynamoDB", Icon: SiAmazondynamodb },
                { name: "SQLite", Icon: SiSqlite },
            ]}
        />
    );
}




