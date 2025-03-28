const queryParser = require("../utils/queryParser");
const mockDatabase = require("../data/mockDatabase");

exports.processQuery = (query) => {
    const sqlQuery = queryParser.convertToSQL(query);
    return mockDatabase.getData(sqlQuery);
};
