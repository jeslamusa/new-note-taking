# Note Taking Application

A modern note-taking application built with React, Tailwind CSS, Node.js, and MongoDB.

## Features

- Create, read, update, and delete notes
- Real-time updates
- Responsive design
- Modern UI with Tailwind CSS
- Secure authentication (coming soon)

## Tech Stack

- Frontend: React + Tailwind CSS
- Backend: Node.js + Express
- Database: MongoDB

## Project Structure

```
note-taking/
├── client/             # Frontend React application
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── App.js
│   └── package.json
└── server/             # Backend Node.js application
    ├── src/
    │   ├── controllers/
    │   ├── models/
    │   ├── routes/
    │   └── server.js
    └── package.json
```

## Setup Instructions

1. Clone the repository
2. Install dependencies:
   ```bash
   # Install backend dependencies
   cd server
   npm install

   # Install frontend dependencies
   cd ../client
   npm install
   ```

3. Create a `.env` file in the server directory with your MongoDB connection string:
   ```
   MONGODB_URI=your_mongodb_connection_string
   PORT=5000
   ```

4. Start the development servers:
   ```bash
   # Start backend server
   cd server
   npm run dev

   # Start frontend server
   cd client
   npm start
   ```

5. Open http://localhost:3000 in your browser

## API Endpoints

- GET /api/notes - Get all notes
- POST /api/notes - Create a new note
- PUT /api/notes/:id - Update a note
- DELETE /api/notes/:id - Delete a note 