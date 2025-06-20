# Task Management System

## Overview
This is a backend for a Task Management System, built as part of the Backend Intermediate Level Assignment No. 3. It supports task assignment, project tracking, and team collaboration, allowing users to create tasks, assign them to team members, track progress, and manage project milestones. The application is developed using the JavaScript stack with Express.js, Node.js, and MongoDB.

## Features
- Create new tasks with titles, assignees, projects, due dates, and milestones.
- Retrieve all tasks or a specific task by ID.
- Update task details (e.g., status, milestones).
- Delete tasks.
- Track task progress and project milestones.

## Tech Stack
- **Backend Framework**: Express.js
- **Runtime**: Node.js
- **Database**: MongoDB

## Prerequisites
- Node.js (v24.2.0 or later recommended)
- MongoDB (local installation or MongoDB Atlas)
- npm (Node Package Manager)

## Project Structure
```
task-management-system/
├── models/
│   └── Task.js         # Mongoose schema for tasks
├── routes/
│   └── tasks.js        # API routes for task operations
├── .env                # Environment variables
├── server.js           # Main server file
└── package.json        # Project dependencies and scripts
└── README.md           # Project documentation
```

## Setup Instructions

### 1. Clone or Download the Project
If you haven't already, place the project files in a directory:
```bash
mkdir task-management-system
cd task-management-system
```

### 2. Install Dependencies
Install the required npm packages:
```bash
npm install
```

This will install the following dependencies:
- `express`
- `mongoose`
- `cors`
- `dotenv`

### 3. Set Up Environment Variables
Create a `.env` file in the root directory with the following content:
```
PORT=5002
MONGO_URI=mongodb://127.0.0.1:27017/task-management
```

- `PORT`: The port where the server will run (set to 5002 as per your setup).
- `MONGO_URI`: The MongoDB connection string. If using MongoDB Atlas, replace this with your Atlas connection string (e.g., `mongodb+srv://<username>:<password>@cluster0.mongodb.net/task-management`).

### 4. Start MongoDB
Ensure MongoDB is running on your machine:
- If using a local MongoDB instance:
  ```bash
  brew services start mongodb-community
  ```
  Or run manually:
  ```bash
  mongod
  ```
- Verify MongoDB is running on port `27017`:
  ```bash
  lsof -i :27017
  ```
- If using MongoDB Atlas, ensure your cluster is active and the `MONGO_URI` is correctly set in the `.env` file.

### 5. Start the Server
Run the server:
```bash
node server.js
```

You should see:
```
Server running on port 5002
MongoDB connected
```

If you encounter a MongoDB connection error (`ECONNREFUSED`), ensure MongoDB is running and the `MONGO_URI` is correct.

## API Endpoints
The server runs on `http://localhost:5002`. Below are the available endpoints:

- **GET /**  
  Root route to confirm the server is running.  
  Response: `Welcome to the Task Management System API! Use /api/tasks to manage tasks.`

- **POST /api/tasks**  
  Create a new task.  
  Example Request Body:
  ```json
  {
    "title": "Design UI",
    "assignee": "Rohit Kumar",
    "project": "Project X",
    "dueDate": "2025-07-01",
    "milestones": ["Wireframe", "Prototype"]
  }
  ```
  Example: Use `curl` to test:
  ```bash
  curl -X POST http://localhost:5002/api/tasks \
  -H "Content-Type: application/json" \
  -d '{"title": "Design UI", "assignee": "Rohit Kumar", "project": "Project X", "dueDate": "2025-07-01", "milestones": ["Wireframe", "Prototype"]}'
  ```

- **GET /api/tasks**  
  Retrieve all tasks.  
  Example: `http://localhost:5002/api/tasks`  
  Response: Array of tasks (e.g., `[{"title":"Design UI",...}]`)

- **GET /api/tasks/:id**  
  Retrieve a specific task by ID.  
  Example: `http://localhost:5002/api/tasks/<task-id>`  
  Response: Task object or `{ message: 'Task not found' }` if not found.

- **PUT /api/tasks/:id**  
  Update a task by ID.  
  Example Request Body:
  ```json
  {
    "status": "In Progress",
    "milestones": ["Wireframe", "Prototype", "Review"]
  }
  ```
  Example: Use `curl` to test:
  ```bash
  curl -X PUT http://localhost:5002/api/tasks/<task-id> \
  -H "Content-Type: application/json" \
  -d '{"status": "In Progress"}'
  ```

- **DELETE /api/tasks/:id**  
  Delete a task by ID.  
  Example: `http://localhost:5002/api/tasks/<task-id>`  
  Response: `{ message: 'Task deleted' }`

## Troubleshooting
- **MongoDB Connection Error**:
  - Ensure MongoDB is running on `127.0.0.1:27017`.
  - Check MongoDB logs: `cat /usr/local/var/log/mongodb/mongo.log`.
  - If local MongoDB fails, consider using MongoDB Atlas (see setup instructions above).
- **Port Conflict**:
  - Check if port `5002` is in use: `lsof -i :5002`.
  - Kill the process using the port: `kill -9 <PID>` (replace `<PID>` with the process ID), or change the `PORT` in `.env` to another value (e.g., `5003`).
- **CORS Issues**:
  - Ensure the frontend (if used) is configured to allow requests to `http://localhost:5002`.

## License
This project is for educational purposes as part of the Backend Intermediate Level Assignment No. 3.