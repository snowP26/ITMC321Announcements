import express from "express";
import dotenv from "dotenv";
import path from "path";

import { connectDB } from "./config/db.js";
import ticketRoutes from "./routes/tickets.route.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT;

const __dirname = path.resolve();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API routes first
app.use("/api/tickets", ticketRoutes);

if (process.env.NODE_ENV === "production") {
  // Static files
  app.use(express.static(path.join(__dirname, "/frontend/dist")));
  
  // Simple catch-all route for the frontend
  app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/frontend/dist/index.html"));
  });
  
  // Fallback route for client-side routing
  app.use((req, res, next) => {
    if (req.path.startsWith('/api')) {
      next();
    } else {
      res.sendFile(path.join(__dirname, "/frontend/dist/index.html"));
    }
  });
}

app.listen(PORT, () => {
  connectDB();
  console.log("Server started at http://localhost:" + PORT);
});
