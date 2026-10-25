# MacroVerse — Separate Frontend and Backend

MacroVerse is split into two independent applications:

- `frontend/`: plain HTML, CSS, and JavaScript, served by Vite. It calls the API only through `fetch` in `frontend/js/api.js`.
- `backend/`: Express REST API, MongoDB models, JWT authentication, and food importer. It does not serve frontend files.

## Project structure

```text
macroverse-separated/
├── data.json                 # Your food catalogue (not included)
├── package.json              # Convenience scripts
├── frontend/
│   ├── package.json
│   ├── index.html
│   ├── my-meals.html
│   ├── search-foods.html
│   ├── css/
│   └── js/
│       ├── config.js          # Backend API URL
│       ├── api.js             # All frontend API fetch calls
│       ├── auth.js
│       └── app.js
└── backend/
    ├── package.json
    ├── .env                  # Create from .env.example
    ├── index.js              # API only; does not serve HTML
    ├── models/
    ├── routes/
    ├── middleware/
    ├── scripts/import-foods.js
    └── utils/
```

## Requirements

- Node.js 18 or newer
- MongoDB local or MongoDB Atlas
- Your original `data.json` file

## 1. Configure the backend

Copy `backend/.env.example` to `backend/.env` and set your database URL and a strong JWT secret:

```env
PORT=5000
MONGODB_URI=mongodb://127.0.0.1:27017/macroverse
JWT_SECRET=replace_with_a_long_random_secret
JWT_EXPIRES_IN=7d
FRONTEND_ORIGIN=http://localhost:5173,http://127.0.0.1:5173
```

Do not put database credentials in the frontend. The frontend must never connect directly to MongoDB.

## 2. Put `data.json` in the project root

Put it beside the root `package.json`:

```text
macroverse-separated/
├── data.json
├── package.json
├── frontend/
└── backend/
```

## 3. Install dependencies

From the project root:

```bash
npm run install:all
```

Or install each application independently:

```bash
cd backend
npm install
```

In a second terminal:

```bash
cd frontend
npm install
```

## 4. Import food records

From the project root:

```bash
npm run import-foods
```

The import script reads `../data.json` relative to its own backend script location and upserts the food records into MongoDB.

## 5. Run frontend and backend separately

Open two terminals in the project root.

Terminal 1 — backend API:

```bash
npm run dev:backend
```

The API runs at `http://localhost:5000`.

Terminal 2 — frontend:

```bash
npm run dev:frontend
```

Vite prints the frontend URL, usually `http://localhost:5173`. Open that URL in your browser. Do not open the HTML files by double-clicking them.

## 6. Set the API URL for deployment

Edit `frontend/js/config.js`:

```js
window.MV_API_BASE = "http://localhost:5000/api";
```

For a deployed backend, replace that value with the public API base URL, including `/api`, for example `https://your-api.example.com/api`.

Also set `FRONTEND_ORIGIN` in `backend/.env` to the exact deployed frontend origin, e.g. `https://your-site.example.com`. CORS allows the configured frontend origins only.

## Architecture and security boundary

- The browser calls Express endpoints with `fetch` through `frontend/js/api.js`.
- JWT is attached as `Authorization: Bearer ...` when present.
- Only the backend reads `data.json`, connects to MongoDB, verifies JWTs, and performs database operations.
- The frontend has no MongoDB connection string, database credentials, or server-side code.
- `GET /api/health` can be used to verify the backend at `http://localhost:5000/api/health`.

## Troubleshooting

- **CORS error:** confirm the frontend URL is listed in `FRONTEND_ORIGIN` in `backend/.env`, then restart the backend.
- **Foods not showing:** run `npm run import-foods`, check MongoDB, and inspect the browser Network tab for requests to `http://localhost:5000/api/foods`.
- **Wrong backend URL:** edit `frontend/js/config.js` and refresh the frontend.
- **401 errors:** sign in again to refresh the stored JWT.
