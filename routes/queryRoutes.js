const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");
const queryController = require("../controllers/queryControllers");

router.post("/query", authMiddleware, queryController.queryHandler);
router.post("/explain", authMiddleware, queryController.explainQuery);
router.post("/validate", authMiddleware, queryController.validateQuery);

module.exports = router;
