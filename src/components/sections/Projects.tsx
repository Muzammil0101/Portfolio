import React from "react";
import { ExternalLink, Github } from "lucide-react";

export function Projects() {
    return (
        <section id="projects" className="py-24 bg-transparent relative border-t border-zinc-200/50">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-zinc-900 mb-4">
                        Featured <span className="text-gradient">Work</span>
                    </h2>
                    <p className="text-zinc-600 text-lg max-w-2xl">
                        A selection of recent products and applications designed and engineered for scale.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {items.map((item, idx) => (
                        <div key={idx} className="group relative rounded-3xl overflow-hidden bg-white/70 backdrop-blur-md border border-zinc-200/50 hover:border-zinc-300 hover:shadow-xl transition-all duration-300 flex flex-col">
                            <div className="relative h-72 w-full overflow-hidden bg-zinc-100">
                                <img 
                                    src={item.image} 
                                    alt={item.title} 
                                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-all duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent opacity-90" />
                            </div>
                            
                            <div className="p-8 flex-1 flex flex-col relative z-20 -mt-20">
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-2xl font-bold text-zinc-900 group-hover:text-primary-600 transition-colors">
                                        {item.title}
                                    </h3>
                                    <div className="flex gap-3">
                                        {item.github && (
                                            <a href={item.github} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-zinc-100 border border-zinc-200 hover:bg-zinc-200 text-zinc-600 hover:text-zinc-900 transition-colors shadow-sm">
                                                <Github className="w-5 h-5" />
                                            </a>
                                        )}
                                        {item.link && (
                                            <a href={item.link} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-zinc-100 border border-zinc-200 hover:bg-zinc-200 text-zinc-600 hover:text-zinc-900 transition-colors shadow-sm">
                                                <ExternalLink className="w-5 h-5" />
                                            </a>
                                        )}
                                    </div>
                                </div>
                                
                                <p className="text-zinc-600 mb-6 leading-relaxed flex-1">
                                    {item.description}
                                </p>
                                
                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {item.tags.map((tag, tagIdx) => (
                                        <span key={tagIdx} className="px-3 py-1 text-xs font-semibold text-primary-700 bg-primary-50 rounded-full border border-primary-200">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

const items = [
    {
        title: "SkinCare Xpert",
        description: "AI-powered dermatology application utilizing MERN stack and Python ML models for real-time accurate skin condition analysis and recommendations.",
        image: "/projects/skincare.png",
        tags: ["React", "Node.js", "Python ML", "AI Integration"],
        link: "#",
        github: "#"
    },
    {
        title: "Dassi Wears",
        description: "Highly scalable e-commerce platform with automated secure payment gateways, cart management, and admin inventory dashboard.",
        image: "/projects/dassi.png",
        tags: ["Next.js", "Tailwind", "Stripe", "MongoDB"],
        link: "#",
        github: "#"
    },
    {
        title: "Portfolio Agency Theme",
        description: "High-performance Single Page Application built with Next.js 15, specialized as a conversion-focused landing page for digital agencies.",
        image: "/projects/portfolio.png",
        tags: ["Next.js 15", "TypeScript", "Framer Motion"],
        link: "#",
        github: "#"
    },
    {
        title: "Enterprise AI Dashboard",
        description: "Specialized internal tool for interacting with custom LLMs, integrating complex data streams into automated business insights.",
        image: "/projects/ai.png",
        tags: ["React Data Grid", "OpenAI API", "WebSockets"],
        link: "#",
        github: "#"
    },
];
