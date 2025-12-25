import { createOpenAI } from "@ai-sdk/openai";
import { streamText } from "ai";
import { PORTFOLIO_CONTEXT } from "@/lib/portfolio-context";
import connectToDatabase from "@/lib/db";
import Chat from "@/models/Chat";

export const maxDuration = 30;

// Create an OpenAI client configured for Groq
const groq = createOpenAI({
    baseURL: 'https://api.groq.com/openai/v1',
    apiKey: process.env.GROQ_API_KEY,
});

export async function POST(req: Request) {
    try {
        const { messages, sessionId } = await req.json();

        const result = await streamText({
            model: groq("llama-3.3-70b-versatile"),
            system: PORTFOLIO_CONTEXT,
            messages,
            onFinish: async (event) => {
                if (sessionId) {
                    try {
                        await connectToDatabase();
                        // Filter out empty messages to satisfy Mongoose validation
                        const validMessages = [
                            ...messages,
                            { role: "assistant", content: event.text },
                        ].filter(msg => msg.content && msg.content.trim() !== "");

                        if (validMessages.length > 0) {
                            await Chat.findOneAndUpdate(
                                { sessionId },
                                { messages: validMessages },
                                { upsert: true, new: true }
                            );
                        }
                    } catch (dbError) {
                        console.error("Failed to save chat to DB:", dbError);
                    }
                }
            },
        });

        return result.toDataStreamResponse();
    } catch (error) {
        console.error("AI Error:", error);

        const fallbackMessage =
            "⚠️ AI service is currently unavailable. Please try again later or contact Muzammil directly on WhatsApp.";

        const stream = new ReadableStream({
            start(controller) {
                controller.enqueue(
                    new TextEncoder().encode(fallbackMessage)
                );
                controller.close();
            },
        });

        return new Response(stream, {
            headers: {
                "Content-Type": "text/event-stream",
            },
        });
    }
}