const queryService = require("../services/queryServices");

exports.queryHandler = (req, res) => {
    const { query } = req.body;
    if (!query) return res.status(400).json({ error: "Query required" });
    res.json({ result: queryService.processQuery(query) });
};

exports.explainQuery = (req, res) => {
    const { query } = req.body;
    if (!query) return res.status(400).json({ error: "Query required" });
    res.json({ explanation: `Translating '${query}' into pseudo-SQL.` });
};

exports.validateQuery = (req, res) => {
    const { query } = req.body;
    if (!query) return res.status(400).json({ error: "Query required" });
    res.json({ valid: true, message: "Query format is valid." });
};
