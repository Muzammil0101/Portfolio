"use client";
import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export const Navbar = () => {
    return (
        <nav className="fixed top-0 inset-x-0 mx-auto z-50 transition-all duration-300">
            <div className="max-w-4xl mx-auto px-4 py-4 md:py-6">
                <div className="flex items-center justify-between glass-dark rounded-full px-6 py-3 transition-colors duration-200">
                    <Link href="/" className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-emerald-500">
                        Muzammil
                    </Link>
                    <div className="hidden md:flex items-center space-x-6">
                        <Link href="#work" className="text-sm font-medium text-zinc-300 hover:text-white transition-colors">
                            Work
                        </Link>
                        <Link href="#about" className="text-sm font-medium text-zinc-300 hover:text-white transition-colors">
                            About
                        </Link>
                        <Link href="#contact" className="text-sm font-medium text-zinc-300 hover:text-white transition-colors">
                            Contact
                        </Link>
                        <Link
                            href="#contact"
                            className="text-sm font-medium bg-zinc-800 text-white px-4 py-2 rounded-full hover:bg-zinc-700 transition-colors border border-zinc-700"
                        >
                            Contact Me
                        </Link>
                    </div>
                    <div className="md:hidden">
                        {/* Mobile menu could go here, for now simple */}
                        <Link href="#contact" className="text-sm font-medium bg-zinc-800 text-white px-4 py-2 rounded-full">
                            Contact
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};
