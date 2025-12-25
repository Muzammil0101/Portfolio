"use client";
import React from "react";
import { InfiniteMovingCards } from "../ui/InfiniteMovingCards";

export function TechStack() {
    return (
        <div className="h-[20rem] rounded-md flex flex-col antialiased bg-zinc-950 dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
            <h2 className="text-3xl font-bold text-center mb-8 z-10">The Toolbox</h2>
            <InfiniteMovingCards
                items={techStackItems}
                direction="right"
                speed="normal"
            />
        </div>
    );
}

const techStackItems = [
    {
        quote: "React",
        name: "Frontend",
        title: "Library",
    },
    {
        quote: "Next.js",
        name: "Frontend",
        title: "Framework",
    },
    {
        quote: "Tailwind CSS",
        name: "Frontend",
        title: "Styling",
    },
    {
        quote: "Node.js",
        name: "Backend",
        title: "Runtime",
    },
    {
        quote: "Python",
        name: "Backend",
        title: "Language",
    },
    {
        quote: "Docker",
        name: "DevOps",
        title: "Containerization",
    },
    {
        quote: "AWS",
        name: "DevOps",
        title: "Cloud",
    },
    {
        quote: "Figma",
        name: "Design",
        title: "Tool",
    },
    {
        quote: "Git",
        name: "Version Control",
        title: "Tool",
    },
];
