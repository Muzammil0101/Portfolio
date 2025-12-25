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
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
        quote: "Next.js",
        name: "Frontend",
        title: "Framework",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    },
    {
        quote: "TypeScript",
        name: "Frontend",
        title: "Language",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    },
    {
        quote: "Tailwind CSS",
        name: "Frontend",
        title: "Styling",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    },
    {
        quote: "Node.js",
        name: "Backend",
        title: "Runtime",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    },
    {
        quote: "Express.js",
        name: "Backend",
        title: "Framework",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    },
    {
        quote: "MongoDB",
        name: "Backend",
        title: "Database",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    },
    {
        quote: "Python",
        name: "Backend",
        title: "Language",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    },
    {
        quote: "Redux",
        name: "Frontend",
        title: "State Management",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
    },
    {
        quote: "Git",
        name: "Version Control",
        title: "Tool",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    },
    {
        quote: "Firebase",
        name: "Backend",
        title: "BaaS",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
    },
];
