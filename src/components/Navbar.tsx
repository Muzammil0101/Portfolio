"use client";
import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export const Navbar = () => {
    return (
        <nav className="fixed top-0 inset-x-0 mx-auto z-50 transition-all duration-300">
            <div className="max-w-4xl mx-auto px-4 py-4 md:py-6">
                <div className="flex items-center justify-between glass-light border border-zinc-200 shadow-sm rounded-full px-6 py-3 transition-colors duration-200 bg-white/70 backdrop-blur-md">
                    <Link href="/" className="text-xl font-bold text-zinc-900 tracking-tight hover:opacity-80 transition-opacity">
                        Muzammil
                    </Link>
                    <div className="hidden md:flex items-center space-x-6">
                        <Link href="#work" className="text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors">
                            Work
                        </Link>
                        <Link href="#about" className="text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors">
                            About
                        </Link>
                        <Link href="#contact" className="text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors">
                            Contact
                        </Link>
                        <a href="/resume.pdf" download className="text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors">
                            Resume
                        </a>
                        <Link
                            href="#contact"
                            className="text-sm font-medium bg-zinc-900 text-white px-5 py-2 rounded-full hover:bg-zinc-800 transition-all shadow-sm"
                        >
                            Contact Me
                        </Link>
                    </div>
                    <div className="md:hidden">
                        {/* Mobile menu could go here, for now simple */}
                        <Link href="#contact" className="text-sm font-medium bg-zinc-900 text-white px-5 py-2 rounded-full shadow-sm">
                            Contact
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};
