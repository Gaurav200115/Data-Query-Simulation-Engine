# Mini Data Query Simulation Engine

## Project Overview
This project is a lightweight backend service that simulates a simplified version of a Gen AI Analytics data query system. It processes natural language queries, translates them into pseudo-SQL, and returns mock responses.

## Features
- Converts natural language queries into structured data queries.
- Simulates a database connection with mock data.
- Provides basic AI-powered query processing.
- Includes lightweight authentication using an API key.
- Offers RESTful endpoints for query processing and validation.

## Tech Stack
- **Language:** Node.js
- **Framework:** Express.js
- **Database:** In-memory mock database
- **Hosting:** Render

## Endpoints
### `/api/query` (POST)
- **Description:** Accepts a natural language query and returns mock data.
- **Headers:**
  - `x-api-key`: Authentication key
  - `Content-Type`: `application/json`
- **Request Body:**
```json
{ "query": "Get all users with age > 25" }
```
- **Response:**
```json
[
  { "id": 1, "name": "John Doe", "age": 30, "email": "john@example.com" },
  { "id": 3, "name": "Alice Johnson", "age": 28, "email": "alice@example.com" }
]
```

## Deployment Instructions
1. Clone the repository:
   ```sh
   git clone <repo-url>
   cd <repo-name>
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Create a `.env` file and add:
   ```env
   API_KEY=my_secret_key
   PORT=5000
   ```
4. Start the server:
   ```sh
   npm start
   ```

## Testing the API
### Using Postman (Recommended)
1. Open Postman (Download from [here](https://www.postman.com/downloads/)).
2. Select **POST** request.
3. In the URL, enter:
   ```bash
   https://data-query-simulation-engine.onrender.com/api/query
   ```
4. Go to **Headers** tab:
   - Add `x-api-key` → `my_secret_key`.
   - Add `Content-Type` → `application/json`.
5. Go to **Body** tab, select **raw**, and enter:
   ```json
   { "query": "Get all users with age > 25" }
   ```
6. Click **Send** and check the response.

## License
This project is open-source and free to use.

