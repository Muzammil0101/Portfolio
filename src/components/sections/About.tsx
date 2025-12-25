"use client";
import React from "react";
import { BackgroundBeams } from "../ui/BackgroundBeams";

export function About() {
    return (
        <div className="h-[40rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
            <div className="max-w-2xl mx-auto p-4 relative z-10 w-full">
                <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
                    About Me
                </h1>
                <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
                    Results-oriented Full Stack Developer with experience in architecting scalable web applications using the MERN Stack (MongoDB, Express.js, React.js, Node.js).
                    <br /><br />
                    Proven track record of integrating Machine Learning models into web interfaces and deploying secure, high-performance e-commerce platforms. Skilled in RESTful API development, database optimization, and security implementation (JWT/OAuth).
                </p>
            </div>
            <BackgroundBeams />
        </div>
    );
}
