import mongoose from "mongoose";

const ticketSchema = new mongoose.Schema({
    type: {
        type: String,
        enum: ["Pending", "Approved", "Rejected", "For Revision"],
        required: true
    },
    urgent: {
        type: Boolean,
        default: false,
        required: true
    },
    recipient: {
        type: String,
        // enum: [""],
        required: true
    },
    description: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

const Ticket = mongoose.model("Ticket", ticketSchema);

export default Ticket;