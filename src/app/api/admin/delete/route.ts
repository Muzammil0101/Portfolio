import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/db";
import Chat from "@/models/Chat";
import Contact from "@/models/Contact";

export async function POST(req: Request) {
    try {
        const { id, type } = await req.json();

        if (!id || !type) {
            return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
        }

        await connectToDatabase();

        if (type === "contact") {
            await Contact.findByIdAndDelete(id);
        } else if (type === "chat") {
            await Chat.findByIdAndDelete(id);
        } else {
            return NextResponse.json({ error: "Invalid type" }, { status: 400 });
        }

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("Delete Error:", error);
        return NextResponse.json({ error: "Failed to delete item" }, { status: 500 });
    }
}
