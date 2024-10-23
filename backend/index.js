import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRouter from './routes/auth.js';
import hotelRouter from './routes/hotel.js';
import roomRouter from './routes/room.js';
import userRouter from './routes/users.js';
import tourTypeRoutes from './routes/tour_type.js';
import facilityRoutes from './routes/facility.js';
import destinationRoutes from './routes/destination.js';
import packageRoutes from './routes/package.js';
import packageListRoutes from './routes/packageList.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';

const app = express();
dotenv.config();

// Middleware
app.use(cors({
  origin: 'http://localhost:3000', // Allow your frontend origin
  credentials: true, // Allow credentials
}));

app.use(express.json());
app.use(cookieParser());

app.use('/auth', authRouter);
app.use('/hotels', hotelRouter);
app.use('/rooms', roomRouter);
app.use('/users', userRouter);
app.use("/tours", tourTypeRoutes);
app.use("/facility", facilityRoutes);
app.use("/destination", destinationRoutes);
app.use("/packages", packageRoutes);
app.use("/packageList", packageListRoutes);

// Root route for testing
app.get('/', (req, res) => {
  res.status(200).json({ message: 'Hello from Vercel!' });
});

// MongoDB connection function
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("MongoDB connection error:", error.message);
    throw new Error("Failed to connect to MongoDB");
  }
};

// Initialize MongoDB connection once on server startup
connect();

mongoose.connection.on("disconnected", () => {
  console.log("MongoDB disconnected");
});

// Global error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Internal Server Error', error: err.message });
});

// Export the app for Vercel
export default app;
