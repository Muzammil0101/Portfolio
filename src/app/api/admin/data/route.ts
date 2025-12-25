import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/db";
import Chat from "@/models/Chat";
import Contact from "@/models/Contact";

export async function GET() {
    try {
        await connectToDatabase();

        const chats = await Chat.find().sort({ updatedAt: -1 }).limit(50);
        const contacts = await Contact.find().sort({ createdAt: -1 }).limit(50);

        return NextResponse.json({ chats, contacts });
    } catch (error: any) {
        return NextResponse.json(
            { error: "Failed to fetch admin data", details: error.message },
            { status: 500 }
        );
    }
}
