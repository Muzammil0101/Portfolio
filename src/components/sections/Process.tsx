import React from "react";

const steps = [
  {
    step: "01",
    title: "Discovery & Strategy",
    description: "We start by deeply understanding your business goals, target audience, and project requirements to map out a clear roadmap.",
  },
  {
    step: "02",
    title: "UI/UX Design",
    description: "Creating wireframes and high-fidelity prototypes to ensure a seamless, conversion-optimized user experience.",
  },
  {
    step: "03",
    title: "Development & AI Integration",
    description: "Building the application using cutting-edge technologies (Next.js, Node.js) and integrating intelligent features.",
  },
  {
    step: "04",
    title: "Testing & QA",
    description: "Rigorous quality assurance, including performance, security, and responsive testing across all devices.",
  },
  {
    step: "05",
    title: "Launch & Iterate",
    description: "Deploying to production and monitoring analytics to iterate and improve based on real user data.",
  }
];

export function Process() {
  return (
    <section id="process" className="py-24 bg-transparent relative">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="mb-16 text-center md:text-left">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-zinc-900 mb-4">
            Our Proven <span className="text-gradient">Process</span>
          </h2>
          <p className="text-zinc-600 text-lg max-w-2xl mx-auto md:mx-0">
            A systematic, transparent approach from the initial concept to the final polished product.
          </p>
        </div>

        <div className="relative border-l border-zinc-200 ml-4 md:ml-0 md:pl-0">
          <div className="space-y-12">
            {steps.map((item, index) => (
              <div key={index} className="relative md:flex md:gap-8 items-start">
                <div className="hidden md:flex flex-col items-center justify-center w-16 shrink-0 mt-1">
                  <div className="w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm border border-zinc-300 flex items-center justify-center text-primary-600 font-bold font-mono shadow-sm">
                    {item.step}
                  </div>
                  {index !== steps.length - 1 && (
                    <div className="w-px h-full bg-zinc-200 my-2" />
                  )}
                </div>
                
                {/* Mobile step indicator */}
                <div className="absolute -left-4 md:hidden top-1 w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm border border-zinc-300 flex items-center justify-center text-primary-600 font-bold text-xs font-mono shadow-sm">
                  {item.step}
                </div>

                <div className="pl-8 md:pl-0 flex-1 pt-1 md:pt-2">
                  <h3 className="text-2xl font-bold text-zinc-900 mb-3">{item.title}</h3>
                  <p className="text-zinc-600 leading-relaxed text-lg max-w-3xl">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
