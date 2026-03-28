"use client";
import React from "react";
// Verified import conceptually, though BackgroundBeams may need adjustment for light mode or we just rely on opacity
import { BackgroundBeams } from "@/components/ui/BackgroundBeams"; 
import { Github, Linkedin, Mail, MessageCircle } from "lucide-react";

export function Contact() {
    return (
        <div className="h-[40rem] w-full rounded-md bg-transparent relative flex flex-col items-center justify-center antialiased overflow-hidden border-t border-zinc-200/50">
            <div className="max-w-2xl mx-auto p-4 relative z-10 w-full">
                <h1 className="relative z-10 text-4xl md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-zinc-900 to-zinc-600 text-center font-sans font-extrabold tracking-tight">
                    Get in Touch
                </h1>
                <p className="text-zinc-600 max-w-lg mx-auto my-4 text-base md:text-lg text-center relative z-10 leading-relaxed">
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
                }} className="mt-8 space-y-4 relative z-10 bg-white p-8 rounded-2xl border border-zinc-200 shadow-sm">
                    <input
                        name="email"
                        type="email"
                        placeholder="Your email address"
                        required
                        className="rounded-xl border border-zinc-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent w-full relative z-10 bg-zinc-50 placeholder:text-zinc-400 text-zinc-900 px-4 py-3 focus:outline-none transition duration-300"
                    />
                    <textarea
                        name="message"
                        placeholder="How can I help you?"
                        rows={4}
                        required
                        className="rounded-xl border border-zinc-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent w-full relative z-10 bg-zinc-50 placeholder:text-zinc-400 text-zinc-900 px-4 py-3 focus:outline-none transition duration-300 resize-none"
                    ></textarea>
                    <button type="submit" className="w-full rounded-xl bg-gradient-to-r from-primary-600 to-accent-600 mt-2 px-4 py-4 font-bold text-white transition duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5">
                        Send Message
                    </button>
                </form>

                <div className="mt-12 flex justify-center space-x-6 relative z-10">
                    <a href="https://github.com" target="_blank" className="p-3 rounded-full bg-white border border-zinc-200 text-zinc-500 hover:text-zinc-900 hover:bg-zinc-50 transition-all shadow-sm hover:shadow">
                        <Github className="h-6 w-6" />
                    </a>
                    <a href="https://linkedin.com" target="_blank" className="p-3 rounded-full bg-white border border-zinc-200 text-zinc-500 hover:text-primary-600 hover:bg-zinc-50 transition-all shadow-sm hover:shadow">
                        <Linkedin className="h-6 w-6" />
                    </a>
                    <a href="mailto:muzammilhussainawan.00@gmail.com" className="p-3 rounded-full bg-white border border-zinc-200 text-zinc-500 hover:text-red-500 hover:bg-zinc-50 transition-all shadow-sm hover:shadow">
                        <Mail className="h-6 w-6" />
                    </a>
                    <a href="https://wa.me/923167787850" target="_blank" className="p-3 rounded-full bg-white border border-zinc-200 text-zinc-500 hover:text-green-500 hover:bg-zinc-50 transition-all shadow-sm hover:shadow">
                        <MessageCircle className="h-6 w-6" />
                    </a>
                </div>
            </div>
            {/* BackgroundBeams tends to be dark, so we might need to fade it out heavily or let it provide a subtle trace */}
            <BackgroundBeams className="opacity-10 opacity-invert" />
        </div>
    );
}
