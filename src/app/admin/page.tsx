"use client";
import React, { useEffect, useState } from "react";
import { format } from "date-fns";
import {
    Users,
    MessageSquare,
    Search,
    Trash2,
    RefreshCcw,
    ChevronDown,
    ChevronUp
} from "lucide-react";

type Contact = {
    _id: string;
    email: string;
    message: string;
    createdAt: string;
};

type Chat = {
    _id: string;
    sessionId: string;
    messages: any[];
    updatedAt: string;
    createdAt: string;
};

export default function AdminPage() {
    const [data, setData] = useState<{ chats: Chat[]; contacts: Contact[] } | null>(null);
    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState("");
    const [activeTab, setActiveTab] = useState<"contacts" | "chats">("contacts");

    const fetchData = () => {
        setLoading(true);
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
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleDelete = async (id: string, type: "contact" | "chat") => {
        if (!confirm("Are you sure you want to delete this item?")) return;

        try {
            await fetch("/api/admin/delete", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ id, type }),
            });
            // Optimistic update or refetch
            fetchData();
        } catch (error) {
            console.error("Delete failed", error);
            alert("Failed to delete item");
        }
    };

    if (loading) return (
        <div className="flex items-center justify-center h-full text-zinc-500 animate-pulse">
            Loading data...
        </div>
    );

    if (!data) return <div className="text-red-500">Error loading data.</div>;

    const filteredContacts = data.contacts.filter(c =>
        c.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.message.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const filteredChats = data.chats.filter(c =>
        c.sessionId.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="space-y-8">
            {/* Header */}
            <div>
                <h1 className="text-3xl font-bold text-white mb-2">Dashboard Overview</h1>
                <p className="text-zinc-400">Welcome back, Muzammil. Here's what's happening today.</p>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-xl flex items-center justify-between">
                    <div>
                        <p className="text-zinc-500 text-sm font-medium">Total Messages</p>
                        <h3 className="text-3xl font-bold text-white mt-1">{data.contacts.length}</h3>
                    </div>
                    <div className="w-12 h-12 bg-emerald-500/10 rounded-full flex items-center justify-center">
                        <MessageSquare className="w-6 h-6 text-emerald-500" />
                    </div>
                </div>
                <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-xl flex items-center justify-between">
                    <div>
                        <p className="text-zinc-500 text-sm font-medium">AI Conversations</p>
                        <h3 className="text-3xl font-bold text-white mt-1">{data.chats.length}</h3>
                    </div>
                    <div className="w-12 h-12 bg-indigo-500/10 rounded-full flex items-center justify-center">
                        <Users className="w-6 h-6 text-indigo-500" />
                    </div>
                </div>
                {/* Placeholder for future stat */}
                <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-xl flex items-center justify-between">
                    <div>
                        <p className="text-zinc-500 text-sm font-medium">Total Interactions</p>
                        <h3 className="text-3xl font-bold text-white mt-1">{data.contacts.length + data.chats.length}</h3>
                    </div>
                    <div className="w-12 h-12 bg-purple-500/10 rounded-full flex items-center justify-center">
                        <RefreshCcw className="w-6 h-6 text-purple-500" />
                    </div>
                </div>
            </div>

            {/* Content Area */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden min-h-[500px]">
                {/* Toolbar */}
                <div className="p-4 border-b border-zinc-800 flex flex-col md:flex-row gap-4 justify-between items-center bg-zinc-900/50">
                    <div className="flex bg-zinc-950 rounded-lg p-1 border border-zinc-800">
                        <button
                            onClick={() => setActiveTab("contacts")}
                            className={`px-4 py-1.5 rounded-md text-sm font-medium transition-all ${activeTab === 'contacts' ? 'bg-zinc-800 text-white shadow-sm' : 'text-zinc-400 hover:text-white'}`}
                        >
                            Messages
                        </button>
                        <button
                            onClick={() => setActiveTab("chats")}
                            className={`px-4 py-1.5 rounded-md text-sm font-medium transition-all ${activeTab === 'chats' ? 'bg-zinc-800 text-white shadow-sm' : 'text-zinc-400 hover:text-white'}`}
                        >
                            AI Chats
                        </button>
                    </div>

                    <div className="relative w-full md:w-64">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                        <input
                            type="text"
                            placeholder="Search..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full bg-zinc-950 border border-zinc-800 rounded-lg pl-9 pr-4 py-2 text-sm text-white focus:outline-none focus:border-indigo-500/50 transition-colors"
                        />
                    </div>
                </div>

                {/* Table View */}
                <div className="p-0">
                    {activeTab === "contacts" ? (
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead className="bg-zinc-950/50 text-zinc-500 text-xs uppercase font-medium">
                                    <tr>
                                        <th className="px-6 py-3">Date</th>
                                        <th className="px-6 py-3">Email</th>
                                        <th className="px-6 py-3">Message</th>
                                        <th className="px-6 py-3 text-right">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-zinc-800/50">
                                    {filteredContacts.map((c) => (
                                        <tr key={c._id} className="hover:bg-zinc-800/20 transition-colors group">
                                            <td className="px-6 py-4 text-sm text-zinc-500 whitespace-nowrap">
                                                {format(new Date(c.createdAt), "MMM d, yyyy h:mm a")}
                                            </td>
                                            <td className="px-6 py-4 text-sm font-medium text-emerald-400">
                                                {c.email}
                                            </td>
                                            <td className="px-6 py-4 text-sm text-zinc-300 max-w-sm truncate">
                                                {c.message}
                                            </td>
                                            <td className="px-6 py-4 text-right">
                                                <button
                                                    onClick={() => handleDelete(c._id, "contact")}
                                                    className="p-2 text-zinc-600 hover:text-red-400 hover:bg-red-400/10 rounded-lg transition-colors opacity-0 group-hover:opacity-100"
                                                    title="Delete Message"
                                                >
                                                    <Trash2 className="w-4 h-4" />
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                    {filteredContacts.length === 0 && (
                                        <tr>
                                            <td colSpan={4} className="px-6 py-8 text-center text-zinc-500">
                                                No messages found matching your search.
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    ) : (
                        <div className="divide-y divide-zinc-800/50">
                            {filteredChats.map((chat) => (
                                <details key={chat._id} className="group open:bg-zinc-900/30 transition-colors">
                                    <summary className="flex justify-between items-center px-6 py-4 cursor-pointer hover:bg-zinc-900/50">
                                        <div className="flex gap-6 items-center flex-1">
                                            <div className="flex flex-col">
                                                <span className="text-xs font-mono text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded border border-indigo-500/20 w-fit">
                                                    {chat.sessionId.substring(0, 8)}
                                                </span>
                                                <span className="text-xs text-zinc-500 mt-1">
                                                    {format(new Date(chat.updatedAt), "MMM d, yyyy h:mm a")}
                                                </span>
                                            </div>
                                            <div className="text-sm text-zinc-400">
                                                <span className="text-zinc-200 font-medium">{chat.messages.length}</span> messages interaction
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <button
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    handleDelete(chat._id, "chat");
                                                }}
                                                className="p-2 text-zinc-600 hover:text-red-400 hover:bg-red-400/10 rounded-lg transition-colors opacity-0 group-hover:opacity-100"
                                                title="Delete Chat Log"
                                            >
                                                <Trash2 className="w-4 h-4" />
                                            </button>
                                            <ChevronDown className="w-4 h-4 text-zinc-600 group-open:rotate-180 transition-transform" />
                                        </div>
                                    </summary>
                                    <div className="px-6 pb-6 pt-2 pl-14 space-y-3">
                                        <div className="space-y-3 bg-zinc-950/50 rounded-xl p-4 border border-zinc-800/50">
                                            {chat.messages.map((m: any, i: number) => (
                                                <div
                                                    key={i}
                                                    className={`flex gap-3 text-sm ${m.role === "user" ? "justify-end" : "justify-start"}`}
                                                >
                                                    <div
                                                        className={`p-3 rounded-2xl max-w-[85%] ${m.role === "user"
                                                            ? "bg-indigo-600 text-white rounded-br-none"
                                                            : "bg-zinc-800 text-zinc-300 rounded-bl-none"
                                                            }`}
                                                    >
                                                        <p className="whitespace-pre-wrap">{m.content}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </details>
                            ))}
                            {filteredChats.length === 0 && (
                                <div className="px-6 py-8 text-center text-zinc-500">
                                    No chat sessions found.
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
