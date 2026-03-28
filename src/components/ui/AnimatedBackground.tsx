"use client";
import React from "react";

export const AnimatedBackground = () => {
    return (
        <div className="fixed inset-0 -z-50 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem]">
            {/* Animated beautiful ambient glowing orbs */}
            <div 
                className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full blur-[100px] opacity-60 mix-blend-multiply animate-[spin_15s_linear_infinite]"
                style={{ background: 'radial-gradient(circle, rgba(224,231,255,1) 0%, rgba(224,231,255,0) 70%)' }}
            />
            <div 
                className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full blur-[120px] opacity-50 mix-blend-multiply animate-[spin_20s_linear_infinite_reverse]"
                style={{ background: 'radial-gradient(circle, rgba(209,250,229,1) 0%, rgba(209,250,229,0) 70%)' }}
            />
            <div 
                className="absolute top-[20%] right-[10%] w-[40vw] h-[40vw] rounded-full blur-[90px] opacity-60 mix-blend-multiply animate-[pulse_8s_ease-in-out_infinite]"
                style={{ background: 'radial-gradient(circle, rgba(224,242,254,1) 0%, rgba(224,242,254,0) 70%)' }}
            />
            <div 
                className="absolute bottom-[20%] left-[10%] w-[45vw] h-[45vw] rounded-full blur-[100px] opacity-40 mix-blend-multiply animate-[pulse_10s_ease-in-out_infinite]"
                style={{ background: 'radial-gradient(circle, rgba(46,222,255,0.3) 0%, rgba(46,222,255,0) 70%)' }}
            />
        </div>
    );
};
