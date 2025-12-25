"use client";
import React, { useState, useRef, useEffect } from "react";
import { useChat } from "ai/react";
import { MessageCircle, X, Send, User, Bot, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

export const ChatWidget = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat({
        api: "/api/chat",
    });
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const toggleChat = () => setIsOpen(!isOpen);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
            {/* Chat Window */}
            {isOpen && (
                <div className="mb-4 w-[350px] md:w-[400px] h-[500px] bg-zinc-950 border border-zinc-800 rounded-xl shadow-2xl flex flex-col overflow-hidden animate-in slide-in-from-bottom-10 fade-in duration-300">
                    {/* Header */}
                    <div className="p-4 bg-zinc-900 border-b border-zinc-800 flex justify-between items-center">
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                            <h3 className="font-semibold text-white">AI Assistant</h3>
                        </div>
                        <button
                            onClick={toggleChat}
                            className="text-zinc-400 hover:text-white transition-colors"
                        >
                            <X className="w-5 h-5" />
                        </button>
                    </div>

                    {/* Messages */}
                    <div className="flex-1 overflow-y-auto p-4 space-y-4">
                        {messages.length === 0 && (
                            <div className="text-center text-zinc-500 text-sm mt-10">
                                <p>Hello! I'm Muzammil's AI Assistant.</p>
                                <p>Get in touch to discuss my skills and projects, or share your requirements and what you would like me to build for you.</p>
                            </div>
                        )}
                        {messages.map((m) => (
                            <div
                                key={m.id}
                                className={cn(
                                    "flex gap-3 text-sm",
                                    m.role === "user" ? "flex-row-reverse" : "flex-row"
                                )}
                            >
                                <div
                                    className={cn(
                                        "w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0",
                                        m.role === "user" ? "bg-indigo-600" : "bg-emerald-600"
                                    )}
                                >
                                    {m.role === "user" ? (
                                        <User className="w-5 h-5 text-white" />
                                    ) : (
                                        <Bot className="w-5 h-5 text-white" />
                                    )}
                                </div>
                                <div
                                    className={cn(
                                        "rounded-lg p-3 max-w-[80%]",
                                        m.role === "user"
                                            ? "bg-indigo-600/20 text-indigo-100"
                                            : "bg-zinc-800 text-zinc-300"
                                    )}
                                >
                                    {m.content}
                                </div>
                            </div>
                        ))}
                        {isLoading && (
                            <div className="flex gap-3 text-sm">
                                <div className="w-8 h-8 rounded-full bg-emerald-600 flex items-center justify-center flex-shrink-0">
                                    <Bot className="w-5 h-5 text-white" />
                                </div>
                                <div className="bg-zinc-800 rounded-lg p-3">
                                    <Loader2 className="w-4 h-4 animate-spin text-zinc-400" />
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* WhatsApp Fallback */}
                    <div className="px-4 py-2 bg-zinc-900/50 border-t border-zinc-800 text-xs text-center">
                        Want to talk strictly?{" "}
                        <a
                            href="https://wa.me/923167787850"
                            target="_blank"
                            className="text-emerald-500 hover:underline"
                        >
                            Chat on WhatsApp
                        </a>
                    </div>

                    {/* Input */}
                    <form onSubmit={handleSubmit} className="p-4 bg-zinc-900 border-t border-zinc-800 flex gap-2">
                        <input
                            value={input}
                            onChange={handleInputChange}
                            placeholder="Type a message..."
                            className="flex-1 bg-zinc-950 border border-zinc-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                        <button
                            type="submit"
                            disabled={isLoading || !(input || "").trim()}
                            className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg p-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            <Send className="w-5 h-5" />
                        </button>
                    </form>
                </div>
            )}

            {/* Trigger Button */}
            <button
                onClick={toggleChat}
                className="flex items-center justify-center w-14 h-14 bg-indigo-600 rounded-full shadow-lg hover:bg-indigo-700 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 focus:ring-offset-zinc-950"
            >
                {isOpen ? (
                    <X className="w-6 h-6 text-white" />
                ) : (
                    <Bot className="w-8 h-8 text-white" />
                )}
            </button>
        </div>
    );
};
