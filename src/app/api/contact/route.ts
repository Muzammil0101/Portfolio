import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/db";
import Contact from "@/models/Contact";

export async function POST(req: Request) {
    try {
        const { email, message } = await req.json();

        if (!email || !message) {
            return NextResponse.json(
                { error: "Email and message are required" },
                { status: 400 }
            );
        }

        await connectToDatabase();

        const newContact = await Contact.create({
            email,
            message,
        });

        return NextResponse.json(
            { message: "Message sent successfully!", data: newContact },
            { status: 201 }
        );
    } catch (error: any) {
        console.error("Contact API Error:", error);
        return NextResponse.json(
            { error: "Failed to send message", details: error.message },
            { status: 500 }
        );
    }
}
