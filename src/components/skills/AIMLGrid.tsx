"use client";

import GridBase from "@/components/skills/GridBase";
import { SiPython, SiTensorflow, SiPytorch, SiOpenai, SiPandas, SiNumpy, SiLangchain } from "react-icons/si";
import { TbMessageChatbot, TbBrain, TbGraph, TbRoute } from "react-icons/tb";
import { FaRobot, FaMicrophone } from "react-icons/fa";
import { BsDatabaseFillGear } from "react-icons/bs";

export default function AIMLGrid() {
    return (
        <GridBase
            items={[
                { name: "Python ML", Icon: SiPython },
                { name: "TensorFlow", Icon: SiTensorflow },
                { name: "PyTorch", Icon: SiPytorch },
                { name: "Pandas", Icon: SiPandas },
                { name: "NumPy", Icon: SiNumpy },
                { name: "OpenAI API", Icon: SiOpenai },
                { name: "LangChain", Icon: SiLangchain },
                { name: "LangGraph", Icon: TbGraph },
                { name: "RAG", Icon: BsDatabaseFillGear },
                { name: "Pipecat", Icon: FaRobot },
                { name: "LangFuse", Icon: TbRoute },
                { name: "Agents", Icon: TbMessageChatbot },
                { name: "LLMs", Icon: TbBrain },
                { name: "TTS/STT", Icon: FaMicrophone },
            ]}
        />
    );
}
