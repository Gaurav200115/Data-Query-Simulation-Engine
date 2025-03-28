const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const queryProcessor = require("./queryProcessor");

const app = express();

// Middleware
app.use(cors()); // Allow cross-origin requests
app.use(bodyParser.json()); // Parse JSON body

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

// API Endpoints
app.post("/api/query", (req, res) => {
    const { query } = req.body;
    if (!query) {
        return res.status(400).json({ message: "Query is required" });
    }
    const result = queryProcessor.getData(query);
    res.json(result);
});

// Dynamic Port for Render Deployment
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});

module.exports = app;