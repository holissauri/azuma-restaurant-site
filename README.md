# Azuma Restaurant Site (Standalone)

## Run locally

```bash
npm install
npm run dev
```

Open: `http://localhost:5173/`

## Main routes

- `/` : restaurant homepage
- `/admin-login` : admin login
- `/admin` : protected admin panel

## Environment

Create `.env` from `.env.example` and fill admin auth values if needed.

## Deploy (Vercel)

- Import this folder as a separate Vercel project
- Build command: `npm run build`
- Output directory: `dist`
