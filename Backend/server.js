import express from "express";
import api from "./routes/index.js";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
// import userRoutes from "./routes/userRoutes.js"
// const userRoutes = require("./routes/userRoutes.js");

dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_PATH),
      console.log("MongoDB connected");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  }
};

connectDB();

const PORT = process.env.SERVER_PORT || 9000;
const origin = process.env.CORS_ORIGIN || "http://localhost:3000";

const app = express();

app.use(
  cors({
    origin,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", api); // Assuming api is an Express router and should be mounted on the /api path
// app.use("/api/users", userRoutes);

app.listen(PORT, () => {
  console.log(`Your app is running on http://localhost:${PORT}`);
});
