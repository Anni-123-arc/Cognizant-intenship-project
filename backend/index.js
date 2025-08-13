// server.js
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import rateLimit from "express-rate-limit";

// Load environment variables
dotenv.config();

import { dbConnection } from "./config/db.js";

// Auth & User routes
import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import addressRoutes from "./routes/addressRoutes.js";


// Orders routes
import { orderRouter } from "./routes/ordersRoute.js";
import { OrderHRoute } from "./routes/orderHistoryRouter.js";

//reply Route
import { replyToUserQueryRouter } from "./routes/replyToUserQuery.js";
import {getQueryRouter} from './routes/getUserQueries.js';

//product upload route
import {uploadProductRoute} from "./routes/uploadProduct.js";

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to database
dbConnection();

// Security & middleware
app.use(helmet());
app.use(cors({
  origin: process.env.CORS_ORIGIN || "*"
}));
app.use(express.json());
app.use(morgan("dev"));

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 300
});
app.use(limiter);

// API routes
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/address", addressRoutes);
app.use("/api", orderRouter);
app.use("/api", OrderHRoute);
app.use('/api', replyToUserQueryRouter);
app.use('/api', getQueryRouter);
app.use('/api', uploadProductRoute);

// Health check
app.get("/", (req, res) => res.json({ status: "ok" }));

// Global error handler
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ message: "Server error" });
});

// Start server
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
