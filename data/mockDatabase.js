const mockData = [
    { id: 1, name: "John Doe", age: 30, email: "john@example.com" },
    { id: 2, name: "Jane Smith", age: 25, email: "jane@example.com" },
    { id: 3, name: "Alice Johnson", age: 28, email: "alice@example.com" },
    { id: 4, name: "Bob Brown", age: 35, email: "bob@example.com" },
    { id: 5, name: "Charlie Wilson", age: 27, email: "charlie@example.com" },
    { id: 6, name: "David Miller", age: 40, email: "david@example.com" },
    { id: 7, name: "Emily Davis", age: 22, email: "emily@example.com" },
    { id: 8, name: "Frank Thomas", age: 29, email: "frank@example.com" },
    { id: 9, name: "Grace White", age: 31, email: "grace@example.com" },
    { id: 10, name: "Harry Taylor", age: 26, email: "harry@example.com" },
    { id: 11, name: "Ivy Clark", age: 33, email: "ivy@example.com" },
    { id: 12, name: "Jack Martin", age: 24, email: "jack@example.com" },
    { id: 13, name: "Katie Lewis", age: 32, email: "katie@example.com" },
    { id: 14, name: "Liam Walker", age: 38, email: "liam@example.com" },
    { id: 15, name: "Mia Hall", age: 21, email: "mia@example.com" },
    { id: 16, name: "Nathan Allen", age: 36, email: "nathan@example.com" },
    { id: 17, name: "Olivia Young", age: 27, email: "olivia@example.com" },
    { id: 18, name: "Peter King", age: 29, email: "peter@example.com" },
    { id: 19, name: "Quinn Scott", age: 34, email: "quinn@example.com" },
    { id: 20, name: "Rachel Adams", age: 30, email: "rachel@example.com" },
    { id: 21, name: "Sam Carter", age: 23, email: "sam@example.com" },
    { id: 22, name: "Tina Parker", age: 26, email: "tina@example.com" },
    { id: 23, name: "Umar Nelson", age: 39, email: "umar@example.com" },
    { id: 24, name: "Victor Hill", age: 28, email: "victor@example.com" },
    { id: 25, name: "Wendy Green", age: 31, email: "wendy@example.com" },
    { id: 26, name: "Xander Baker", age: 35, email: "xander@example.com" },
    { id: 27, name: "Yasmin Ramirez", age: 24, email: "yasmin@example.com" },
    { id: 28, name: "Zane Collins", age: 37, email: "zane@example.com" },
    { id: 29, name: "Amber Cooper", age: 22, email: "amber@example.com" },
    { id: 30, name: "Brandon Mitchell", age: 40, email: "brandon@example.com" },
    { id: 31, name: "Chloe Perez", age: 33, email: "chloe@example.com" },
    { id: 32, name: "Daniel Evans", age: 29, email: "daniel@example.com" },
    { id: 33, name: "Ethan Robinson", age: 25, email: "ethan@example.com" },
    { id: 34, name: "Fiona Campbell", age: 30, email: "fiona@example.com" },
    { id: 35, name: "George Simmons", age: 28, email: "george@example.com" },
    { id: 36, name: "Hannah Rogers", age: 35, email: "hannah@example.com" },
    { id: 37, name: "Isaac Murphy", age: 27, email: "isaac@example.com" },
    { id: 38, name: "Julia Peterson", age: 32, email: "julia@example.com" },
    { id: 39, name: "Kyle Edwards", age: 24, email: "kyle@example.com" },
    { id: 40, name: "Lily Stewart", age: 38, email: "lily@example.com" },
    { id: 41, name: "Mason Ford", age: 31, email: "mason@example.com" },
    { id: 42, name: "Natalie Henderson", age: 26, email: "natalie@example.com" },
    { id: 43, name: "Oscar Bennett", age: 34, email: "oscar@example.com" },
    { id: 44, name: "Paige Turner", age: 23, email: "paige@example.com" },
    { id: 45, name: "Ryan Ross", age: 39, email: "ryan@example.com" },
    { id: 46, name: "Sophia Morgan", age: 28, email: "sophia@example.com" },
    { id: 47, name: "Tyler Cook", age: 30, email: "tyler@example.com" },
    { id: 48, name: "Uma Patel", age: 37, email: "uma@example.com" },
    { id: 49, name: "Vincent Watson", age: 27, email: "vincent@example.com" },
    { id: 50, name: "Zoe Brooks", age: 25, email: "zoe@example.com" }
];
function extractCondition(nlQuery) {
    const agePattern = /age\s*([><=]+)\s*(\d+)/i; // Matches "age > 25" or "age = 30"
    const namePattern = /name\s*=\s*'([^']+)'/i; // Matches "name = 'John'"
    const emailPattern = /email\s*=\s*'([^']+)'/i; // Matches "email = 'xyz@abc.com'"

    let condition = "";

    if (agePattern.test(nlQuery)) {
        const [, operator, value] = nlQuery.match(agePattern);
        condition = `user.age ${operator} ${value}`;
    } else if (namePattern.test(nlQuery)) {
        const [, value] = nlQuery.match(namePattern);
        condition = `user.name === '${value}'`;
    } else if (emailPattern.test(nlQuery)) {
        const [, value] = nlQuery.match(emailPattern);
        condition = `user.email === '${value}'`;
    }

    return condition;
}

exports.getData = (nlQuery) => {
    console.log("Received Natural Language Query:", nlQuery);

    const condition = extractCondition(nlQuery); // Extract condition dynamically

    let filteredData = [...mockData];

    if (condition) {
        filteredData = filteredData.filter((user) => eval(condition)); // Evaluate condition
    }

    return filteredData.length ? filteredData : { message: "No matching data found." };
};
