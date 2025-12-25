"use client";
import React from "react";
import { BackgroundBeams } from "@/components/ui/BackgroundBeams"; // Verified import
import { Github, Linkedin, Mail, MessageCircle } from "lucide-react";

export function Contact() {
    return (
        <div className="h-[40rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
            <div className="max-w-2xl mx-auto p-4 relative z-10 w-full">
                <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
                    Get in Touch
                </h1>
                <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
                    Ready to build something amazing? Whether you have a question or just want to say hi, I'll try my best to get back to you!
                </p>

                <form onSubmit={async (e) => {
                    e.preventDefault();
                    const form = e.currentTarget;
                    const email = (form.elements.namedItem('email') as HTMLInputElement).value;
                    const message = (form.elements.namedItem('message') as HTMLTextAreaElement).value;

                    try {
                        const res = await fetch('/api/contact', {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({ email, message }),
                        });

                        if (res.ok) {
                            alert('Message sent successfully!');
                            form.reset();
                        } else {
                            alert('Failed to send message.');
                        }
                    } catch (error) {
                        console.error(error);
                        alert('Something went wrong.');
                    }
                }} className="mt-8 space-y-4 relative z-10">
                    <input
                        name="email"
                        type="email"
                        placeholder="Your email"
                        required
                        className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-4  bg-neutral-950 placeholder:text-neutral-700 text-neutral-200 px-4 py-3 focus:outline-none transition duration-300"
                    />
                    <textarea
                        name="message"
                        placeholder="Your message"
                        rows={4}
                        required
                        className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-4  bg-neutral-950 placeholder:text-neutral-700 text-neutral-200 px-4 py-3 focus:outline-none transition duration-300"
                    ></textarea>
                    <button type="submit" className="w-full rounded-lg bg-gradient-to-r from-indigo-500 to-emerald-500 px-4 py-3 font-bold text-white transition duration-200 hover:opacity-90">
                        Send Message
                    </button>
                </form>

                <div className="mt-10 flex justify-center space-x-6 relative z-10">
                    <a href="https://github.com" target="_blank" className="text-zinc-400 hover:text-white transition-colors">
                        <Github className="h-6 w-6" />
                    </a>
                    <a href="https://linkedin.com" target="_blank" className="text-zinc-400 hover:text-white transition-colors">
                        <Linkedin className="h-6 w-6" />
                    </a>
                    <a href="mailto:muzammilhussainawan.00@gmail.com" className="text-zinc-400 hover:text-white transition-colors">
                        <Mail className="h-6 w-6" />
                    </a>
                    <a href="https://wa.me/923167787850" target="_blank" className="text-zinc-400 hover:text-white transition-colors">
                        <MessageCircle className="h-6 w-6" />
                    </a>
                </div>
            </div>
            <BackgroundBeams className="opacity-40" />
        </div>
    );
}
