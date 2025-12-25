import { createOpenAI } from "@ai-sdk/openai";
import { streamText } from "ai";
import { PORTFOLIO_CONTEXT } from "@/lib/portfolio-context";

export const maxDuration = 30;

// Create an OpenAI client configured for Ollama
// By using the OpenAI provider with Ollama's URL, we avoid version conflicts
// and can run free local models.
const ollama = createOpenAI({
    baseURL: 'http://localhost:11434/v1',
    apiKey: process.env.OLLAMA_API_KEY || 'ollama', // Use provided key or default
});

export async function POST(req: Request) {
    try {
        const { messages } = await req.json();

        const result = await streamText({
            model: ollama("llama3"), // Ensure you have run `ollama pull llama3`
            system: PORTFOLIO_CONTEXT,
            messages,
        });

        return result.toDataStreamResponse();
    } catch (error) {
        console.error("AI Error:", error);

        const fallbackMessage =
            "⚠️ AI service is currently unavailable. Please ensure Ollama is running (`ollama serve`). Contact Muzammil directly on WhatsApp if urgent.";

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