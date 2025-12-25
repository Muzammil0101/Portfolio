"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { format } from "date-fns";

export default function AdminPage() {
    const [data, setData] = useState<{ chats: any[]; contacts: any[] } | null>(null);
    const [loading, setLoading] = useState(true);
    const [activeTab, setActiveTab] = useState<"contacts" | "chats">("contacts");

    const router = useRouter();

    const handleLogout = async () => {
        await fetch("/api/auth/logout", { method: "POST" });
        router.push("/admin/login");
    };

    useEffect(() => {
        fetch("/api/admin/data")
            .then((res) => res.json())
            .then((d) => {
                setData(d);
                setLoading(false);
            })
            .catch((err) => {
                console.error(err);
                setLoading(false);
            });
    }, []);

    if (loading) return <div className="p-10 text-white">Loading Admin Dashboard...</div>;
    if (!data) return <div className="p-10 text-white">Error loading data.</div>;

    return (
        <div className="min-h-screen bg-zinc-950 text-zinc-200 p-8 pt-24">
            <div className="max-w-6xl mx-auto">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-emerald-500">
                        Admin Dashboard
                    </h1>
                    <button
                        onClick={handleLogout}
                        className="px-4 py-2 bg-zinc-900 border border-zinc-700 hover:bg-zinc-800 rounded-lg text-sm text-zinc-300 transition-colors"
                    >
                        Logout
                    </button>
                </div>

                <div className="flex gap-4 mb-8">
                    <button
                        onClick={() => setActiveTab("contacts")}
                        className={`px-4 py-2 rounded-lg font-medium transition-colors ${activeTab === "contacts"
                            ? "bg-indigo-600 text-white"
                            : "bg-zinc-900 text-zinc-400 hover:bg-zinc-800"
                            }`}
                    >
                        Messages ({data.contacts.length})
                    </button>
                    <button
                        onClick={() => setActiveTab("chats")}
                        className={`px-4 py-2 rounded-lg font-medium transition-colors ${activeTab === "chats"
                            ? "bg-indigo-600 text-white"
                            : "bg-zinc-900 text-zinc-400 hover:bg-zinc-800"
                            }`}
                    >
                        Chat Logs ({data.chats.length})
                    </button>
                </div>

                <div className="bg-zinc-900/50 rounded-xl border border-zinc-800 p-6">
                    {activeTab === "contacts" ? (
                        <div className="overflow-x-auto">
                            <table className="w-full text-left">
                                <thead>
                                    <tr className="border-b border-zinc-800 text-zinc-500 text-sm">
                                        <th className="pb-3 pl-2">Date</th>
                                        <th className="pb-3">Email</th>
                                        <th className="pb-3">Message</th>
                                    </tr>
                                </thead>
                                <tbody className="text-sm">
                                    {data.contacts.map((c) => (
                                        <tr key={c._id} className="border-b border-zinc-800/50 hover:bg-zinc-900">
                                            <td className="py-4 pl-2 text-zinc-500 whitespace-nowrap">
                                                {format(new Date(c.createdAt), "PP p")}
                                            </td>
                                            <td className="py-4 font-medium text-emerald-400">{c.email}</td>
                                            <td className="py-4 text-zinc-300 max-w-md">{c.message}</td>
                                        </tr>
                                    ))}
                                    {data.contacts.length === 0 && (
                                        <tr>
                                            <td colSpan={3} className="py-8 text-center text-zinc-500">
                                                No messages yet.
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    ) : (
                        <div className="space-y-4">
                            {data.chats.map((chat) => (
                                <details key={chat._id} className="group bg-zinc-950 border border-zinc-800 rounded-lg open:border-indigo-500/50 transition-colors">
                                    <summary className="flex justify-between items-center p-4 cursor-pointer list-none">
                                        <div className="flex gap-4 items-center">
                                            <span className="text-xs font-mono text-zinc-500 bg-zinc-900 px-2 py-1 rounded">
                                                {chat.sessionId.substring(0, 8)}...
                                            </span>
                                            <span className="text-sm text-zinc-400">
                                                {format(new Date(chat.updatedAt), "PP p")}
                                            </span>
                                        </div>
                                        <span className="text-xs text-zinc-500 group-open:text-indigo-400">
                                            {chat.messages.length} msgs
                                        </span>
                                    </summary>
                                    <div className="p-4 pt-0 border-t border-zinc-800/50 mt-2 space-y-3 bg-zinc-900/20">
                                        {chat.messages.map((m: any, i: number) => (
                                            <div
                                                key={i}
                                                className={`flex gap-3 text-sm ${m.role === "user" ? "flex-row-reverse" : "flex-row"
                                                    }`}
                                            >
                                                <div
                                                    className={`p-3 rounded-lg max-w-[85%] ${m.role === "user"
                                                        ? "bg-indigo-900/20 text-indigo-200 border border-indigo-500/20"
                                                        : "bg-zinc-800 text-zinc-300"
                                                        }`}
                                                >
                                                    <p className="whitespace-pre-wrap">{m.content}</p>
                                                    <p className="text-[10px] opacity-40 mt-1 uppercase">{m.role}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </details>
                            ))}
                            {data.chats.length === 0 && (
                                <div className="text-center text-zinc-500 py-8">No chat logs found.</div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
