import express from "express";
import cardRoutes from "./routes/card.routes";
import { errorHandler } from "./middlewares/error.middleware";

// Initialize Express application
const app = express();

// Middleware to parse incoming JSON requests
app.use(express.json());

// Register routes
app.use(cardRoutes);

// Health check endpoint to verify server is running
app.get("/health", (req, res) => {
  res.status(200).json({ status: "Tobams is a Go!" });
});

// Register error handler
app.use(errorHandler);

// Export app for use in server and testing
export default app;
