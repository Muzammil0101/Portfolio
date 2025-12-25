"use client";
import React from "react";
import { Spotlight } from "@/components/ui/Spotlight";
import { TypewriterEffect } from "@/components/ui/TypewriterEffect";

export function Hero() {
    const words = [
        {
            text: "Full",
            className: "text-zinc-500 dark:text-zinc-500",
        },
        {
            text: "Stack",
            className: "text-zinc-500 dark:text-zinc-500",
        },
        {
            text: "Engineer",
            className: "text-zinc-500 dark:text-zinc-500",
        },
        {
            text: "|",
            className: "text-indigo-500 dark:text-indigo-500",
        },
        {
            text: "Architecting",
            className: "text-emerald-500 dark:text-emerald-500",
        },
        {
            text: "Scalable",
            className: "text-emerald-500 dark:text-emerald-500",
        },
        {
            text: "AI",
            className: "text-emerald-500 dark:text-emerald-500",
        },
        {
            text: "&",
            className: "text-emerald-500 dark:text-emerald-500",
        },
        {
            text: "Web",
            className: "text-emerald-500 dark:text-emerald-500",
        },
        {
            text: "Solutions.",
            className: "text-emerald-500 dark:text-emerald-500",
        },
    ];

    return (
        <div className="h-[40rem] w-full rounded-md flex md:items-center md:justify-center bg-zinc-950/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
            <Spotlight
                className="-top-40 left-0 md:left-60 md:-top-20"
                fill="white"
            />
            <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
                <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
                    Muzammil
                </h1>
                <div className="mt-4 font-normal text-base text-zinc-300 max-w-lg text-center mx-auto">
                    Transforming complex requirements into high-performance web applications using Next.js and Node.js.
                </div>

                <div className="mt-8">
                    <TypewriterEffect words={words} />
                </div>

                <div className="mt-8 flex justify-center gap-4">
                    <a href="#projects" className="px-8 py-2 rounded-full bg-gradient-to-b from-indigo-500 to-indigo-600 text-white focus:ring-2 focus:ring-blue-400 hover:shadow-xl transition duration-200">
                        View Work
                    </a>
                    <a href="#contact" className="px-8 py-2 rounded-full border border-zinc-700 bg-black text-white hover:bg-zinc-800 transition duration-200">
                        Contact Me
                    </a>
                </div>
            </div>
        </div>
    );
}
