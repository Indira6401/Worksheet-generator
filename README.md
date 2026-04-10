# Worksheet Generator

This project has two parts:

- `frontend/`: an Angular app for configuring worksheets, previewing them, and exporting results.
- `backend/`: a Node.js + Express API that serves curriculum data and generates worksheets using the OpenAI API.

How they connect:

- The frontend sends requests to the backend under `/api`.
- In local development, the frontend uses `http://localhost:3000/api`.
- In production, the frontend uses `https://worksheet-generator-z4bj.onrender.com/api`.

Main backend routes:

- `/api/health`
- `/api/curriculum/*`
- `/api/worksheet/*`

Deployment:

- Frontend is deployed on Vercel.
- Backend is deployed on Render.

Run locally:

- Backend: `cd backend && npm install && npm start`
- Frontend: `cd frontend && npm install && npm start`

Up and running at - https://worksheet-generator-eta.vercel.app
