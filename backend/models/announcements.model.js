import mongoose from "mongoose";

const ticketSchema = new mongoose.Schema({
    type: {
        type: String,
        enum: ["Pending", "Approved", "Rejected", "For Revision"],
        required: true
    },
    header: {
        type: String,
        required: true
    },
    urgent: {
        type: Boolean,
        default: false,
        required: true
    },
    recipient: {
        type: String,
        enum: ["Budget", "Finance", "Management", "Executive", "Social Media"],
        required: true
    },
    description: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    isSocial: {
        type: Boolean,
        default: false,
    }
}, {
    timestamps: true
});

const Ticket = mongoose.model("Ticket", ticketSchema);

export default Ticket;