import React from "react";
import { BentoGrid, BentoGridItem } from "../ui/BentoGrid";
// Replacing with Lucide icons since I installed lucide-react
import { FileText, Link, Code, Settings } from "lucide-react";

export function Projects() {
    return (
        <div className="py-20 bg-zinc-950">
            <h2 className="text-3xl font-bold text-center mb-10 text-white">Featured Projects</h2>
            <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
                {items.map((item, i) => (
                    <BentoGridItem
                        key={i}
                        title={item.title}
                        description={item.description}
                        header={item.header}
                        className={i === 3 || i === 6 ? "md:col-span-2" : ""}
                        icon={item.icon}
                    />
                ))}
            </BentoGrid>
        </div>
    );
}

const Skeleton = () => (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl   dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black"></div>
);

const items = [
    {
        title: "SkinCare Xpert",
        description: "AI-integrated skincare recommendations. Solved complex data parsing challenges.",
        header: <Skeleton />,
        icon: <Code className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "Dassi Wears",
        description: "E-commerce platform with high-performance product filtering.",
        header: <Skeleton />,
        icon: <Settings className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "AI Automation Platform",
        description: "Automating workflows with LLMs and Vercel AI SDK.",
        header: <Skeleton />,
        icon: <FileText className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "Portfolio V1",
        description: "Previous iteration of personal branding site.",
        header: <Skeleton />,
        icon: <Link className="h-4 w-4 text-neutral-500" />,
    },
];
