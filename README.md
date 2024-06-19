
# Task Manager Project


### Overview

The Task Manager project is a simple yet powerful web application built with Express.js and MongoDB. It allows users to create, read, update, and delete tasks, making it an ideal starting point for learning full-stack JavaScript development.


## Features

- Create Task: Add new tasks with details like title, description, and due date.
- Read Task: View all tasks or a specific task by ID.
- Update Task: Modify existing tasks.
- Delete Task: Remove tasks from the database.
- RESTful API: Utilizes RESTful principles for API design.
- MongoDB Integration: Uses MongoDB for data persistence.


## Tech Stack

- Backend: Node.js, Express.js
- Database: MongoDB, Mongoose
- Environment Variables: Dotenv

## Prerequisites

- Node.js: Ensure you have Node.js installed. You can download it from Node.js official website.
- MongoDB: Make sure you have MongoDB installed and running. You can download it from MongoDB official website.


## Getting Started

### Installation

1. Clone the repository:
```bash
  git clone https://github.com/alahyarlou/task-manager.git
  cd task-manager
```
2. Install dependencies:

```bash
  npm install
```
3. Set up environment variables:
Create a `.env` file in the root directory and add the following variables:

```bash
MONGODB_URI=mongodb://localhost:27017/task-manager
PORT=3000
```

4. Run the application:

```bash
npm start
```

The server will start on the port specified in your `.env` file (default is `3000`).

## API Endpoints
- GET /api/v1/tasks: Retrieve all tasks.
- GET /api/v1/tasks/:id: Retrieve a task by ID.
- POST /api/v1/tasks: Create a new task.
- PATCH /api/v1/tasks/:id: Update a task by ID.
- DELETE /api/v1/tasks/:id: Delete a task by ID.

## Project Structure

```bash
task-manager/
├── models/
│   └── Task.js
├── routes/
│   └── tasks.js
├── controllers/
│   └── tasks.js
├── config/
│   └── db.config.js
├── .env
├── .gitignore
├── index.js
├── package.json
└── README.md
```

Contact
For any questions or feedback, please contact alialahyarlou@gmail.com
