# MERN Blog — Integration Project

Lightweight MERN (MongoDB, Express, React, Node) blog application used for learning and integration exercises. This repository contains a React + Vite client and an Express + Mongoose server API.

## Repo layout

Root

- `client/` — React front-end (Vite)
  - `index.html`, `src/main.jsx`, `src/App.jsx`, `src/Pages/*`
- `server/` — Express API and Mongoose models
  - `server.js`, `controllers/`, `models/`, `routes/`, `.env.example`
- `README.md` — this file

## Features

- CRUD for blog posts and categories (API)
- React client using React Router for pages: Home, Create Post, Post Detail, Edit
- File upload static serving stub (uploads served from `/uploads`)

## Quick start (development)

Prerequisites:

- Node.js (v16+ recommended; project was run with Node v20 during development)
- MongoDB (Atlas or local)

1. Clone the repo and install dependencies

From repo root (PowerShell example):

```powershell
# server dependencies
cd .\server
npm install

# in a new terminal: client
cd ..\client
npm install
```

2. Configure environment variables (server)

Copy the example env and provide a real MongoDB URI:

```powershell
cd .\server
copy .env.example .env    # Windows PowerShell: Copy-Item .\server\.env.example .\server\.env
# then edit .\server\.env and replace the placeholder MONGODB_URI value
```

Example `.env` contents (do NOT commit `.env`):

```
MONGODB_URI=mongodb+srv://<user>:<password>@cluster0.mongodb.net/my-db?retryWrites=true&w=majority
# optional
# PORT=5000
# NODE_ENV=development
```

3. Run the server and client

Open two terminals.

Terminal A — server

```powershell
cd .\server
npm run dev    # uses nodemon (auto-restart)
```

Terminal B — client

```powershell
cd .\client
npm run dev    # starts Vite on http://localhost:5173 by default
```

Visit the client at: http://localhost:5173

## Why you might see a 404 at http://localhost:5173

- A 404 at port 5173 means the Vite dev server is not serving a page at that address. Common causes:
  - The client dev server (`npm run dev` from the `client` folder) is not running. Start it with `cd client && npm run dev`.
  - You're visiting the server (Express) port (commonly 5000) instead of the client port (5173). The Express API does not serve the React app in this setup — they run separately in development. Make sure both are running.
  - `index.html` is missing — this repo includes `client/index.html` and a `src/main.jsx` entry, so running Vite will serve the app.

## API Endpoints (summary)

Base URL (development): http://localhost:5000/api

- GET `/api/posts` — list posts
- GET `/api/posts/:id` — get single post
- POST `/api/posts` — create post
- PUT `/api/posts/:id` — update post
- DELETE `/api/posts/:id` — delete post

- GET `/api/categories` — list categories
- POST `/api/categories` — create category

Note: requests that modify data may require additional fields (author, category id, etc.). Check the `server/models` schemas for fields and validation rules.

## Recent fixes & developer notes

- Routes/controllers: converted mixed ESM imports/exports to CommonJS to match the rest of the server code and avoid module errors when running with `node server.js` (or `nodemon`).
- Added `server/.env.example` (copy to `.env` and add real MongoDB URI). `.env` is ignored by `.gitignore`.
- Added `dev` scripts:
  - `server`: `npm run dev` → `nodemon server.js`
  - `client`: `npm run dev` → `vite`

If you'd rather use ESM (import/export) on the server, an alternative is to add `"type": "module"` to `server/package.json` and convert the models to ESM — I can do that if you prefer.

## Troubleshooting

- "Cannot find module ...": ensure you ran `npm install` in the folder that raised the error. Also ensure code uses consistent module style (CommonJS vs ESM).
- "MongooseError: uri must be a string, got undefined": your `MONGODB_URI` is not set. Create `server/.env` (copy `server/.env.example`) and set `MONGODB_URI`.
- 404 on client (5173): make sure you ran `npm run dev` inside `client` (Vite). If Vite failed to start, check the terminal for errors.

## Next suggested improvements

- Add authentication (JWT), user model, and protect certain endpoints.
- Add unit/integration tests for server endpoints (Jest + Supertest) and client components (Vitest / React Testing Library).
- Add Dockerfiles and a docker-compose for local full-stack development.
- Configure a reverse proxy or production build to have Express serve the built React app for production deployments.

## License

This repo currently has no license file. Add one (for example MIT) if you intend to publish or share.

---

If you'd like, I can also: add a short CONTRIBUTING.md, create a production deployment guide, or convert the server to full ESM — tell me which next and I will implement it.

# MERN Stack Integration Assignment

This assignment focuses on building a full-stack MERN (MongoDB, Express.js, React.js, Node.js) application that demonstrates seamless integration between front-end and back-end components.

## Assignment Overview

You will build a blog application with the following features:

1. RESTful API with Express.js and MongoDB
2. React front-end with component architecture
3. Full CRUD functionality for blog posts
4. User authentication and authorization
5. Advanced features like image uploads and comments

## Project Structure

```
mern-blog/
├── client/                 # React front-end
│   ├── public/             # Static files
│   ├── src/                # React source code
│   │   ├── components/     # Reusable components
│   │   ├── pages/          # Page components
│   │   ├── hooks/          # Custom React hooks
│   │   ├── services/       # API services
│   │   ├── context/        # React context providers
│   │   └── App.jsx         # Main application component
│   └── package.json        # Client dependencies
├── server/                 # Express.js back-end
│   ├── config/             # Configuration files
│   ├── controllers/        # Route controllers
│   ├── models/             # Mongoose models
│   ├── routes/             # API routes
│   ├── middleware/         # Custom middleware
│   ├── utils/              # Utility functions
│   ├── server.js           # Main server file
│   └── package.json        # Server dependencies
└── README.md               # Project documentation
```

## Getting Started

1. Accept the GitHub Classroom assignment invitation
2. Clone your personal repository that was created by GitHub Classroom
3. Follow the setup instructions in the `Week4-Assignment.md` file
4. Complete the tasks outlined in the assignment

## Files Included

- `Week4-Assignment.md`: Detailed assignment instructions
- Starter code for both client and server:
  - Basic project structure
  - Configuration files
  - Sample models and components

## Requirements

- Node.js (v18 or higher)
- MongoDB (local installation or Atlas account)
- npm or yarn
- Git

## Submission

Your work will be automatically submitted when you push to your GitHub Classroom repository. Make sure to:

1. Complete both the client and server portions of the application
2. Implement all required API endpoints
3. Create the necessary React components and hooks
4. Document your API and setup process in the README.md
5. Include screenshots of your working application
