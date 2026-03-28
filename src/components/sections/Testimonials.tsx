import React from "react";
import { InfiniteMovingCards } from "@/components/ui/InfiniteMovingCards";

const testimonials = [
  {
    quote: "Muzammil completely transformed our raw idea into a scalable SaaS product in record time. His expertise in full-stack development and AI integration was exactly what we needed to launch successfully.",
    name: "Sarah Jenkins",
    title: "Founder @ TechStart",
  },
  {
    quote: "The attention to detail and clean code architecture implemented by Muzammil allowed our engineering team to scale our platform without any technical debt. Highly recommend working with him.",
    name: "David Chen",
    title: "CTO @ DataFlow Solutions",
  },
  {
    quote: "Exceptional UI/UX skills combined with deep backend knowledge. He delivered our project 2 weeks ahead of schedule and the performance optimizations he made doubled our conversion rate.",
    name: "Elena Rodriguez",
    title: "Product Manager @ eComm Plus",
  },
  {
    quote: "Integrating AI into our existing system seemed daunting until Muzammil took over. He seamlessly connected OpenAI's API and built an elegant interface that our users love.",
    name: "Marcus Thorne",
    title: "CEO @ InnovateAI",
  },
  {
    quote: "A true professional. Reliable, communicative, and incredibly skilled. The landing page and custom dashboard he built for us are nothing short of world-class.",
    name: "Rachel Kim",
    title: "Marketing Director @ GrowthStack",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-transparent relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-16 relative z-10">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-zinc-900 mb-4">
            Client <span className="text-gradient">Testimonials</span>
          </h2>
          <p className="text-zinc-600 text-lg">
            Don&apos;t just take my word for it. Here&apos;s what founders and engineering leaders have to say about working together.
          </p>
        </div>
      </div>

      <div className="relative z-10 -mx-4 md:mx-0">
        {/* We need to pass a property or the component itself should allow light mode. We'll rely on the default styles or transparent backgrounds. */}
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
          className="light-mode-cards"
        />
      </div>
      
      {/* Background gradients for added depth */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary-500/5 blur-[120px] rounded-full pointer-events-none" />
    </section>
  );
}
