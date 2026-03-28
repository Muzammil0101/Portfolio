"use client";
import React from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
    LayoutDashboard,
    MessageSquare,
    MessageCircle,
    LogOut,
    Settings,
    Shield
} from "lucide-react";
import { cn } from "@/lib/utils";

export function AdminSidebar() {
    const pathname = usePathname();
    const router = useRouter();

    const handleLogout = async () => {
        try {
            await fetch("/api/auth/logout", { method: "POST" });
            router.push("/admin/login");
        } catch (error) {
            console.error("Logout failed", error);
        }
    };

    const navItems = [
        {
            label: "Overview",
            href: "/admin",
            icon: LayoutDashboard,
        },
    ];

    if (pathname === "/admin/login") return null;

    return (
        <aside className="fixed left-0 top-0 h-screen w-64 bg-white border-r border-zinc-200 flex flex-col z-40">
            {/* Header */}
            <div className="p-6 border-b border-zinc-200 flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-emerald-500 flex items-center justify-center">
                    <Shield className="w-5 h-5 text-white" />
                </div>
                <h2 className="font-bold text-lg text-zinc-900">Admin Panel</h2>
            </div>

            {/* Nav */}
            <nav className="flex-1 p-4 space-y-1">
                {navItems.map((item) => (
                    <Link
                        key={item.href}
                        href={item.href}
                        className={cn(
                            "flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors",
                            pathname === item.href
                                ? "bg-indigo-50 text-indigo-600 border border-indigo-100"
                                : "text-zinc-600 hover:text-zinc-900 hover:bg-zinc-50"
                        )}
                    >
                        <item.icon className="w-5 h-5" />
                        {item.label}
                    </Link>
                ))}

                <Link
                    href="/admin?tab=contacts"
                    className={cn(
                        "flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors",
                        pathname === "/admin" && typeof window !== 'undefined' && new URLSearchParams(window.location.search).get('tab') === 'contacts'
                            ? "bg-indigo-50 text-indigo-600 border border-indigo-100"
                            : "text-zinc-600 hover:text-zinc-900 hover:bg-zinc-50"
                    )}
                >
                    <MessageSquare className="w-5 h-5" />
                    Messages
                </Link>
                <Link
                    href="/admin?tab=chats"
                    className={cn(
                        "flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors",
                        pathname === "/admin" && typeof window !== 'undefined' && new URLSearchParams(window.location.search).get('tab') === 'chats'
                            ? "bg-indigo-50 text-indigo-600 border border-indigo-100"
                            : "text-zinc-600 hover:text-zinc-900 hover:bg-zinc-50"
                    )}
                >
                    <MessageCircle className="w-5 h-5" />
                    AI Chats
                </Link>
            </nav>

            {/* Footer */}
            <div className="p-4 border-t border-zinc-200">
                <button
                    onClick={handleLogout}
                    className="flex w-full items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-zinc-600 hover:text-red-600 hover:bg-red-50 transition-colors"
                >
                    <LogOut className="w-5 h-5" />
                    Logout
                </button>
            </div>
        </aside>
    );
}
