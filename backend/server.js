import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';

import ticketRoutes from './routes/tickets.route.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());

app.use("/api/tickets", ticketRoutes);

app.listen(PORT, () => {
    connectDB();
    console.log("Server started at http://localhost:" + PORT);
});