import Ticket from '../models/announcements.model.js';
import mongoose from 'mongoose';

export const postTicket = async(req, res) => {
    const ticket = req.body;

    if (!ticket.type || !ticket.recipient || !ticket.description) {
        return res.status(400).json({ success: false, message: "Please fill all the fields" });
    }

    const newTicket = new Ticket(ticket) 

    try {
        await newTicket.save();
        res.status(201).json({ success: true, message: "Ticket created successfully", data: newTicket });    
    } catch (error) {
        console.error("Error creating ticket:", error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
};

export const getTicket = async (req, res) => {
    try {
        const tickets = await Ticket.find();
        res.status(200).json({ success: true, data: tickets });
    } catch (error) {
        console.error("Error fetching tickets:", error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
};

export const updateTicket = async(req, res) => {
    const {id} = req.params;
    const ticket = req.body;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({success: false, message: "Invalid ticket ID"});
    }

    try {
        const updatedTicket = await Ticket.findByIdAndUpdate(id, ticket, {new:true});
        res.status(200).json({success: true, data: updatedTicket});
    } catch (error) {
        console.error("Error editing ticket: ", error);
        res.status(500).json({success: false, message: "Internal server error"});
    }
};

export const deleteTicket = async (req, res) => {
    const { id } = req.params;

    try {
        await Ticket.findByIdAndDelete(id);
        res.status(200).json({ success: true, message: "Ticket deleted successfully" });
    } catch (error) {
        console.error("Error deleting ticket:", error);
        res.status(500).json({ success: false, message: "Internal server error" });
        
    }
};
