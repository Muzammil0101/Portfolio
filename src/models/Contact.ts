import mongoose, { Schema, model, models } from "mongoose";

const ContactSchema = new Schema(
    {
        email: {
            type: String,
            required: [true, "Email is required"],
        },
        message: {
            type: String,
            required: [true, "Message is required"],
        },
    },
    {
        timestamps: true,
    }
);

const Contact = models.Contact || model("Contact", ContactSchema);

export default Contact;
