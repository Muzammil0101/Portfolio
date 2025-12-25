import mongoose, { Schema, model, models } from "mongoose";

const ChatSchema = new Schema(
    {
        sessionId: {
            type: String,
            required: [true, "Session ID is required"],
            unique: true,
            index: true,
        },
        messages: [
            {
                role: {
                    type: String,
                    enum: ["user", "assistant", "system", "data"],
                    required: true,
                },
                content: {
                    type: String,
                    required: true,
                },
                createdAt: {
                    type: Date,
                    default: Date.now,
                },
            },
        ],
    },
    {
        timestamps: true,
    }
);

// Prevent compiling the model if it already exists (Next.js hot reload fix)
const Chat = models.Chat || model("Chat", ChatSchema);

export default Chat;
