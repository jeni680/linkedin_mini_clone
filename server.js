import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js";
import postRoutes from './routes/postRoutes.js';

dotenv.config();
const app = express();

// Middleware
app.use(express.json());

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use('/api/posts', postRoutes);

app.get("/", (req, res) => {
  res.send("API is running...");
});

// DB + Server Start
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(5000, () => {
      console.log("Server running on port 5000");
    });
  })
  .catch((err) => console.error(err));
