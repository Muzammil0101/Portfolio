"use client";
import { cn } from "@/lib/utils";
import React, { useEffect, useRef } from "react";

export const BackgroundBeams = ({ className }: { className?: string }) => {
    const beamsRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        // Simplified beam animation logic using Canvas
        const canvas = beamsRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animationFrameId: number;
        const beams: { x: number; y: number; speed: number; opacity: number }[] = [];

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        // Initialize beams
        for (let i = 0; i < 20; i++) {
            beams.push({
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                speed: 0.5 + Math.random(),
                opacity: Math.random() * 0.5
            });
        }

        const render = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
            gradient.addColorStop(0, "rgba(99, 102, 241, 0)"); // indigo-500 transparent
            gradient.addColorStop(0.5, "rgba(99, 102, 241, 0.05)");
            gradient.addColorStop(1, "rgba(16, 185, 129, 0)"); // emerald-500 transparent
            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            beams.forEach(beam => {
                beam.y -= beam.speed;
                if (beam.y < -100) {
                    beam.y = canvas.height + 100;
                    beam.x = Math.random() * canvas.width;
                }
                ctx.beginPath();
                ctx.moveTo(beam.x, beam.y);
                ctx.lineTo(beam.x, beam.y + 100);
                ctx.strokeStyle = `rgba(255, 255, 255, ${beam.opacity * 0.2})`;
                ctx.lineWidth = 1;
                ctx.stroke();
            });

            animationFrameId = requestAnimationFrame(render);
        };

        window.addEventListener("resize", resize);
        resize();
        render();

        return () => {
            window.removeEventListener("resize", resize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <div
            className={cn(
                "absolute h-full w-full inset-0 bg-neutral-950",
                className
            )}
        >
            <div className="absolute inset-0 bg-neutral-950 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
            <canvas ref={beamsRef} className="h-full w-full absolute inset-0 pointer-events-none opacity-30" />
        </div>
    );
};
