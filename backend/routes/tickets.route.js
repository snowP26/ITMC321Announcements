import express from "express";
import axios from "axios";
import { deleteTicket, getTicket, updateTicket, postTicket, getTicketStatus } from "../controllers/ticket.controller.js";

const router = express.Router();

// api routes for tickets
router.post("/", postTicket);
router.get("/", getTicket);
router.delete("/:id", deleteTicket);
router.put("/:id", updateTicket);

// api routes for minute notes
router.get('/', async (req, res) => {
    try {
        const response = await axios.get('https://sys-integ-production.up.railway.app/api/notes');
        res.json(response.data);
    } catch (error) {
        console.error(error);
        res.status.json({message: 'Failed to fetch notes'});
    }
});

router.get('/approved-notes', getTicketStatus);


export default router;