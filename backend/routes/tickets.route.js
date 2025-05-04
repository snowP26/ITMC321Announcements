import express from "express";
import { deleteTicket, getTicket, updateTicket, postTicket } from "../controllers/ticket.controller.js";

const router = express.Router();

router.post("/", postTicket);

router.get("/", getTicket);

router.delete("/:id", deleteTicket);

router.put("/:id", updateTicket);

export default router;