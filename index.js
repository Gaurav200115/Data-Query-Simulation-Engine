const express = require("express");
const queryRoutes = require("./routes/queryRoutes");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use("/api", queryRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

module.exports = app;