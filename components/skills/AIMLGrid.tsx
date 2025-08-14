"use client";

import GridBase from "@/components/skills/GridBase";
import { SiPython, SiTensorflow, SiPytorch, SiScikitlearn, SiOpenai, SiPandas, SiNumpy } from "react-icons/si";
import { TbLink } from "react-icons/tb";

export default function AIMLGrid() {
    return (
        <GridBase
            items={[
                { name: "Python ML", Icon: SiPython },
                { name: "TensorFlow", Icon: SiTensorflow },
                { name: "PyTorch", Icon: SiPytorch },
                { name: "Scikit-learn", Icon: SiScikitlearn },
                { name: "OpenAI API", Icon: SiOpenai },
                { name: "LangChain", Icon: TbLink },
                { name: "Pandas", Icon: SiPandas },
                { name: "NumPy", Icon: SiNumpy },
            ]}
        />
    );
}




