import app from "./app";

// Define application port
const PORT = 3000;

// Start server and listen for incoming requests
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
