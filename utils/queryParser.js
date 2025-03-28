exports.convertToSQL = (nlQuery) => {
    return `SELECT * FROM mock_data WHERE condition = '${nlQuery}';`;
};
