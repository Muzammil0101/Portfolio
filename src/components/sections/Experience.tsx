"use client";
import React from "react";
import { Timeline } from "@/components/ui/Timeline";

export function Experience() {
    const data = [
        {
            title: "2025",
            content: (
                <div>
                    <h4 className="text-xl md:text-2xl font-bold text-white mb-2">Senior Full Stack Developer</h4>
                    <p className="text-zinc-400 text-sm md:text-base mb-4">
                        Freelance & Contract
                    </p>
                    <ul className="list-disc list-outside ml-5 text-zinc-300 space-y-2">
                        <li>Architected scalable AI solutions using Next.js 15 and Vercel AI SDK.</li>
                        <li>Reduced API latency by 30% for a major e-commerce client through edge caching.</li>
                        <li>Implemented custom high-impact UI libraries for premium clients.</li>
                    </ul>
                </div>
            ),
        },
        {
            title: "2024",
            content: (
                <div>
                    <h4 className="text-xl md:text-2xl font-bold text-white mb-2">Full Stack Engineer</h4>
                    <p className="text-zinc-400 text-sm md:text-base mb-4">
                        Tech Solutions Inc.
                    </p>
                    <ul className="list-disc list-outside ml-5 text-zinc-300 space-y-2">
                        <li>Developed full-stack MERN applications for diverse industries.</li>
                        <li>Integrated complex third-party APIs (Stripe, Twilio, OpenAI).</li>
                        <li>Mentored junior developers in modern React patterns and TypeScript.</li>
                    </ul>
                </div>
            ),
        },
        {
            title: "2023",
            content: (
                <div>
                    <h4 className="text-xl md:text-2xl font-bold text-white mb-2">Frontend Developer</h4>
                    <p className="text-zinc-400 text-sm md:text-base mb-4">
                        Creative Agency
                    </p>
                    <ul className="list-disc list-outside ml-5 text-zinc-300 space-y-2">
                        <li>Built responsive, pixel-perfect websites from Figma designs.</li>
                        <li>Optimized Core Web Vitals resulting in 20% SEO improvement.</li>
                    </ul>
                </div>
            ),
        },
    ];
    return (
        <div className="w-full bg-zinc-950">
            <Timeline data={data} />
        </div>
    );
}
