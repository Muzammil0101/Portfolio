"use client";
import React from "react";
import { Spotlight } from "@/components/ui/Spotlight";
import { TypewriterEffect } from "@/components/ui/TypewriterEffect";
import { motion } from "framer-motion";
import { ArrowRight, Play, Star } from "lucide-react";

export function Hero() {
    const words = [
        { text: "Scalable", className: "text-zinc-500" },
        { text: "Web", className: "text-zinc-500" },
        { text: "Applications", className: "text-zinc-500" },
        { text: "Built", className: "text-zinc-500" },
        { text: "for", className: "text-zinc-500" },
        { text: "Growth.", className: "text-primary-600" },
    ];

    const FADE_UP_ANIMATION_VARIANTS: any = {
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 20 } },
    };

    return (
        <section className="relative min-h-[120vh] w-full flex flex-col items-center justify-start overflow-hidden pt-32 pb-20 bg-transparent">
            {/* Ambient Background Glows */}
            <div className="absolute top-0 inset-x-0 h-[500px] pointer-events-none -z-10 bg-gradient-to-b from-primary-50/50 via-white/50 to-transparent" />

            <div className="relative z-10 p-4 max-w-7xl mx-auto w-full flex flex-col items-center justify-center text-center">
                <motion.div 
                    initial="hidden"
                    animate="show"
                    viewport={{ once: true }}
                    variants={{
                        hidden: {},
                        show: {
                            transition: {
                                staggerChildren: 0.15,
                            },
                        },
                    }}
                    className="flex flex-col items-center max-w-4xl"
                >
                    {/* Badge */}
                    <motion.div variants={FADE_UP_ANIMATION_VARIANTS} className="group inline-flex items-center gap-2 px-4 py-2 rounded-full border border-zinc-200/50 bg-white/70 backdrop-blur-md shadow-[0_4px_14px_0_rgba(0,0,0,0.05)] hover:shadow-[0_4px_14px_0_rgba(0,0,0,0.1)] hover:bg-white cursor-pointer transition-all mb-8">
                        <span className="flex h-2 w-2 rounded-full bg-primary-500 animate-pulse"></span>
                        <span className="text-sm font-semibold text-zinc-600">Now Accepting New Projects for 2026</span>
                        <ArrowRight className="w-4 h-4 text-zinc-400 group-hover:translate-x-1 transition-transform" />
                    </motion.div>
                    
                    {/* Heading */}
                    <motion.h1 variants={FADE_UP_ANIMATION_VARIANTS} className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-8 text-zinc-900 leading-[1.1]">
                        Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 via-accent-600 to-primary-600 bg-[length:200%_auto] animate-gradient">Digital Products</span> That Scale.
                    </motion.h1>
                    
                    {/* Subtitle */}
                    <motion.div variants={FADE_UP_ANIMATION_VARIANTS} className="text-lg md:text-xl text-zinc-600 max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
                        Hi, I&apos;m Muzammil Hussain Awan. I help forward-thinking startups and agencies build high-performance web applications and integrate AI solutions.
                        <div className="mt-4 hidden sm:block">
                             <TypewriterEffect words={words} />
                        </div>
                    </motion.div>

                    {/* CTAs */}
                    <motion.div variants={FADE_UP_ANIMATION_VARIANTS} className="flex flex-col sm:flex-row justify-center gap-4 w-full sm:w-auto relative z-50 mb-10">
                        <a href="#projects" className="group relative flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-zinc-900 text-white font-semibold text-lg overflow-hidden transition-all hover:scale-[1.02] hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] active:scale-95">
                            <span className="absolute inset-0 bg-gradient-to-r from-primary-600 to-accent-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <span className="relative z-10">Start Your Project</span>
                            <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                        </a>
                        <a href="#contact" className="group flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-zinc-200 bg-white hover:bg-zinc-50 hover:border-zinc-300 text-zinc-800 font-semibold shadow-sm transition-all hover:scale-[1.02] active:scale-95 text-lg">
                            <Play className="w-4 h-4 fill-zinc-800" />
                            <span>Schedule a Call</span>
                        </a>
                    </motion.div>

                    {/* Avatar Group / Trust */}
                    <motion.div variants={FADE_UP_ANIMATION_VARIANTS} className="flex flex-col items-center gap-3">
                        <div className="flex items-center -space-x-4">
                            {[...Array(5)].map((_, i) => (
                                <img
                                    key={i}
                                    className="w-12 h-12 rounded-full border-4 border-white shadow-sm object-cover"
                                    src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i + 15}&backgroundColor=e2e8f0`}
                                    alt="Avatar"
                                />
                            ))}
                        </div>
                        <div className="flex flex-col items-center mt-2">
                            <div className="flex gap-1 mb-1">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                                ))}
                            </div>
                            <span className="text-sm font-medium text-zinc-600">Joined by 100+ visionary clients</span>
                        </div>
                    </motion.div>
                </motion.div>
            </div>

            {/* Dashboard Mockup Layout */}
            <motion.div 
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5, type: "spring", stiffness: 50 }}
                className="relative max-w-6xl w-full mx-auto px-4 mt-20 z-20"
            >
                {/* Glow behind mockup text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-blue-500 */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[200px] bg-gradient-to-r from-primary-400/30 to-accent-500/30 blur-[80px] -z-10 rounded-full" />
                
                <div className="relative rounded-2xl border border-zinc-200/60 bg-white/40 backdrop-blur-xl shadow-2xl p-2 sm:p-4 overflow-hidden mask-image-b transform perspective-1000 rotate-x-12 scale-95 origin-top transition-all duration-700 hover:rotate-x-0 hover:scale-100">
                    <div className="absolute inset-0 bg-gradient-to-b from-white/40 to-white/10 pointer-events-none" />
                    
                    {/* Mockup Header */}
                    <div className="flex items-center gap-2 pb-4 border-b border-zinc-200/50 mb-4 px-2">
                        <div className="flex gap-1.5">
                            <div className="w-3 h-3 rounded-full bg-red-400/90" />
                            <div className="w-3 h-3 rounded-full bg-amber-400/90" />
                            <div className="w-3 h-3 rounded-full bg-green-400/90" />
                        </div>
                        <div className="mx-auto flex items-center justify-center px-4 py-1.5 rounded-md bg-zinc-100/80 border border-zinc-200/50 text-xs text-zinc-500 font-mono w-64 shadow-inner">
                            muzammil.dev/admin
                        </div>
                    </div>

                    {/* Mockup Content Layout */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 min-h-[400px]">
                        {/* Sidebar */}
                        <div className="hidden md:flex flex-col gap-4 border-r border-zinc-200/50 pr-4">
                            <div className="h-8 w-24 bg-zinc-200/70 rounded-md mb-4" />
                            {[...Array(5)].map((_, i) => (
                                <div key={i} className="h-6 w-full bg-zinc-100/80 rounded-md hover:bg-zinc-200/50 transition-colors" />
                            ))}
                            <div className="mt-auto h-24 w-full bg-primary-50/50 rounded-lg border border-primary-100/50 p-4">
                                <div className="h-4 w-1/2 bg-primary-200/60 rounded mb-2" />
                                <div className="h-4 w-3/4 bg-primary-100/60 rounded" />
                            </div>
                        </div>
                        
                        {/* Main Content */}
                        <div className="col-span-1 md:col-span-2 flex flex-col gap-6">
                            <div className="flex gap-4">
                                <div className="flex-1 h-32 bg-white/80 rounded-xl border border-zinc-100 shadow-[0_2px_10px_0_rgba(0,0,0,0.02)] p-4 flex flex-col justify-between">
                                    <div className="h-4 w-20 bg-zinc-100 rounded" />
                                    <div className="h-10 w-32 bg-zinc-200/80 rounded" />
                                </div>
                                <div className="flex-1 h-32 bg-white/80 rounded-xl border border-zinc-100 shadow-[0_2px_10px_0_rgba(0,0,0,0.02)] p-4 flex flex-col justify-between relative overflow-hidden">
                                    <div className="absolute right-0 bottom-0 w-24 h-24 bg-primary-100/40 rounded-tl-full blur-md" />
                                    <div className="h-4 w-20 bg-zinc-100 rounded" />
                                    <div className="h-10 w-32 relative z-10 bg-primary-600/10 rounded" />
                                </div>
                            </div>
                            <div className="flex-1 bg-white/80 rounded-xl border border-zinc-100 shadow-[0_2px_10px_0_rgba(0,0,0,0.02)] p-4">
                                <div className="flex justify-between items-center mb-6">
                                    <div className="h-5 w-32 bg-zinc-200/80 rounded" />
                                    <div className="h-6 w-24 bg-zinc-100 rounded-full" />
                                </div>
                                <div className="h-40 w-full bg-zinc-50/50 rounded-lg flex items-end gap-2 p-4 border border-zinc-100/50">
                                    {[35, 60, 45, 80, 55, 90, 40, 75, 100, 65, 85, 50].map((height, i) => (
                                        <div key={i} className="bg-primary-200/50 rounded-t-sm flex-1 hover:bg-primary-400/60 transition-colors" style={{ height: `${height}%` }} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Fade Out Gradient for bottom of mockup */}
                <div className="absolute bottom-[-1px] left-0 right-0 h-32 bg-gradient-to-t from-[var(--background,#FAFAFA)] to-transparent z-30 pointer-events-none" />
            </motion.div>

            {/* Stats below Mockup */}
            <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl w-full mx-auto px-6 relative z-40 pb-12">
                {[
                    { number: "100+", label: "Projects Delivered" },
                    { number: "98%", label: "Client Satisfaction" },
                    { number: "5+", label: "Years Experience" },
                    { number: "24/7", label: "Global Support" },
                ].map((stat, i) => (
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 * i, duration: 0.5 }}
                        key={i} 
                        className="flex flex-col items-center group cursor-default"
                    >
                        <span className="text-4xl md:text-5xl font-black text-zinc-900 tracking-tight group-hover:-translate-y-1 transition-transform duration-300">
                            {stat.number}
                        </span>
                        <span className="text-xs md:text-sm font-bold text-zinc-500 mt-2 tracking-widest uppercase transition-colors group-hover:text-primary-600">
                            {stat.label}
                        </span>
                    </motion.div>
                ))}
            </div>

            <style dangerouslySetInnerHTML={{__html: `
                .mask-image-b {
                    -webkit-mask-image: linear-gradient(to bottom, black 60%, transparent 100%);
                    mask-image: linear-gradient(to bottom, black 60%, transparent 100%);
                }
                .rotate-x-12 {
                    transform: perspective(1200px) rotateX(12deg) scale(0.95);
                }
                .hover\\:rotate-x-0:hover {
                    transform: perspective(1200px) rotateX(0deg) scale(1);
                }
            `}} />
        </section>
    );
}
