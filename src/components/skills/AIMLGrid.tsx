"use client";

import GridBase from "@/components/skills/GridBase";
import { GiArtificialIntelligence } from "react-icons/gi";
import { SiPython, SiTensorflow, SiPytorch, SiOpenai, SiPandas, SiNumpy, SiScikitlearn } from "react-icons/si";
import { TbLink, TbBinaryTree, TbTopologyStar3 } from "react-icons/tb";
import { FaRobot, FaBrain, FaMicrophone, FaLanguage } from "react-icons/fa";

export default function AIMLGrid() {
    return (
        <GridBase
            items={[
                { name: "Python ML", Icon: SiPython },
                { name: "TensorFlow", Icon: SiTensorflow },
                { name: "PyTorch", Icon: SiPytorch },
                { name: "Pandas", Icon: SiPandas },
                { name: "NumPy", Icon: SiNumpy },
                { name: "NLTK", Icon: FaLanguage },
                { name: "RAG", Icon: GiArtificialIntelligence },
                { name: "Pipecat", Icon: FaRobot },
                { name: "LangChain", Icon: TbBinaryTree },
                { name: "LangGraph", Icon: TbTopologyStar3 },
                { name: "LangFuse", Icon: TbLink },
                { name: "Braintrust Tracing", Icon: FaBrain },
                { name: "OpenAI API", Icon: SiOpenai },
                { name: "TTS/STT Pipelines", Icon: FaMicrophone },
            ]}
        />
    );
}
