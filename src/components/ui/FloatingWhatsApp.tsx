"use client";
import React from "react";
import { MessageCircle } from "lucide-react";

export const FloatingWhatsApp = () => {
    const phoneNumber = "923167787850";
    const message = "Hello Muzammil, I saw your portfolio and would like to connect.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-green-500 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-zinc-950"
            aria-label="Chat on WhatsApp"
        >
            <MessageCircle className="w-8 h-8 text-white" fill="white" />
            <span className="absolute right-full mr-4 bg-white text-zinc-900 px-3 py-1 rounded-md text-sm font-medium shadow-md opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap hidden md:block group-hover:opacity-100">
                Chat with me
            </span>
        </a>
    );
};
