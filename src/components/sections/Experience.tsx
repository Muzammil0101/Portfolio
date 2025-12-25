"use client";
import React from "react";
import { Timeline } from "@/components/ui/Timeline";

export function Experience() {
    const data = [
        {
            title: "2024 - Present",
            content: (
                <div>
                    <h4 className="text-xl md:text-2xl font-bold text-white mb-2">Full Stack Developer (Lead Engineer)</h4>
                    <p className="text-zinc-400 text-sm md:text-base mb-4">
                        SkinCare Xpert (Capstone Project)
                    </p>
                    <ul className="list-disc list-outside ml-5 text-zinc-300 space-y-2">
                        <li>Successfully architected and deployed an AI-powered dermatology application.</li>
                        <li>Engineered robust RESTful APIs using Node.js and Express.js to handle asynchronous requests between React frontend and Python ML models.</li>
                        <li>Designed efficient MongoDB schemas, optimizing query performance by 30% through proper indexing.</li>
                        <li>Implemented JWT-based authentication and Bcrypt password hashing.</li>
                        <li>Managed deployment pipeline on Vercel with 99.9% uptime.</li>
                    </ul>
                </div>
            ),
        },
        {
            title: "Aug - Nov 2024",
            content: (
                <div>
                    <h4 className="text-xl md:text-2xl font-bold text-white mb-2">Web Solutions Developer</h4>
                    <p className="text-zinc-400 text-sm md:text-base mb-4">
                        Dassi Wears
                    </p>
                    <ul className="list-disc list-outside ml-5 text-zinc-300 space-y-2">
                        <li>Spearheaded digital transformation by launching a fully functional e-commerce platform.</li>
                        <li>Integrated secure Payment Gateways and inventory management logic.</li>
                        <li>Optimized application for various devices, reducing bounce rate by 25%.</li>
                        <li>Designed customer-centric workflows for product listing and checkout.</li>
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
