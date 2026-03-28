import React from "react";
import { Code2, Smartphone, Database, Bot, Cloud, Rocket } from "lucide-react";

const services = [
  {
    title: "Web Application Development",
    description: "Custom, scalable web applications built with modern frameworks like React, Next.js, and Node.js.",
    icon: <Code2 className="w-6 h-6 text-primary-600" />
  },
  {
    title: "AI Integration & Automation",
    description: "Integrating intelligent AI models (OpenAI, Gemini) into your products to automate tasks and enhance UI.",
    icon: <Bot className="w-6 h-6 text-accent-600" />
  },
  {
    title: "Backend & API Architecture",
    description: "Robust, secure backend systems and REST/GraphQL APIs engineered for high availability.",
    icon: <Database className="w-6 h-6 text-emerald-600" />
  },
  {
    title: "SaaS Product Development",
    description: "End-to-end development for SaaS platforms, from MVP architecture to scalable production launches.",
    icon: <Rocket className="w-6 h-6 text-orange-500" />
  },
  {
    title: "Cloud Deployment & DevOps",
    description: "Infrastructure setup, CI/CD pipelines, and cloud hosting (AWS, Vercel) for reliable delivery.",
    icon: <Cloud className="w-6 h-6 text-blue-500" />
  },
  {
    title: "Responsive Frontend Design",
    description: "Pixel-perfect, engaging user interfaces optimized for speed, accessibility, and conversion.",
    icon: <Smartphone className="w-6 h-6 text-pink-500" />
  }
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-transparent relative border-t border-zinc-200/50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-zinc-900 mb-4">
            Services & <span className="text-gradient">Expertise</span>
          </h2>
          <p className="text-zinc-600 text-lg">
            Comprehensive digital solutions tailored to accelerate your business growth and streamline operations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group p-8 rounded-2xl bg-white/70 backdrop-blur-md border border-zinc-200/50 hover:border-zinc-300 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-600 to-accent-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="mb-6 p-4 rounded-xl bg-zinc-50 border border-zinc-100 inline-block">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-zinc-900 mb-3">
                {service.title}
              </h3>
              <p className="text-zinc-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
