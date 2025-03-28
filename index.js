const express = require("express");
const cors = require("cors");
const queryRoutes = require("./routes/queryRoutes");
require("dotenv").config();

const app = express();

// Middleware
app.use(cors()); // Allow cross-origin requests
app.use(express.json()); // Parse JSON body

// Load API Key from Environment Variables (For Security)
const API_KEY = process.env.API_KEY || "my_secret_key";

// Middleware for API Key Authentication
app.use((req, res, next) => {
    const userApiKey = req.header("x-api-key");
    if (!userApiKey || userApiKey !== API_KEY) {
        return res.status(401).json({ message: "Unauthorized: Invalid API Key" });
    }
    next();
});

// API Routes
app.use("/api", queryRoutes);

// Dynamic Port for Render Deployment
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});

module.exports = app;
