import express from "express";

// Initialize Express application
const app = express();

// Middleware to parse incoming JSON requests
app.use(express.json());

// Health check endpoint to verify server is running
app.get("/health", (req, res) => {
  res.status(200).json({ status: "Tobams is a Go!" });
});

// Export app for use in server and testing
export default app;
