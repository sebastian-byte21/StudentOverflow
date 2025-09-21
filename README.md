# StudentOverflow
Portal web para que estudiantes y docentes hagan y respondan preguntas académicas, inspirado en StackOverflow.

## Stack técnico
- Frontend: `React + Vite`
- Backend: `FastAPI` (Python) + `SQLAlchemy`
- Base de datos: Postgres (recomendado) o SQLite (por defecto para desarrollo local)

## Backend (FastAPI)
Ruta: `StudentOverflow/backend`

1) Crear entorno y dependencias (PowerShell)
```powershell
cd "${PWD}\StudentOverflow\backend"
py -m venv .venv
.\.venv\Scripts\Activate.ps1
pip install -r requirements.txt
Copy-Item .env.example .env -Force
# Edita .env y define DATABASE_URL si usarás Postgres
# Ejemplo: DATABASE_URL=postgresql+psycopg2://USER:PASSWORD@localhost:5432/studentoverflow
```

2) Ejecutar el servidor (Uvicorn)
```powershell
cd "${PWD}\StudentOverflow\backend"
python -m uvicorn app.main:app --reload
# Salud: http://127.0.0.1:8000/health
# Docs:  http://127.0.0.1:8000/docs
```

También puedes usar la tarea de VS Code: `Backend: uvicorn --reload`.

## Frontend (Vite)
Ruta: `StudentOverflow/frontend`

Instalar y correr
```powershell
cd "${PWD}\StudentOverflow\frontend"
& "$env:ProgramFiles\nodejs\npm.cmd" install
& "$env:ProgramFiles\nodejs\npm.cmd" run dev
# Si tu entorno no reconoce `node` en scripts, usa la tarea:
#   Frontend: vite (direct)
```

Tareas disponibles en VS Code:
- `Frontend: npm install`
- `Frontend: npm run dev`
- `Frontend: vite (direct)` (usa node.exe directamente)
- `Backend: uvicorn --reload`

## Variables de entorno
- `ENV`: entorno actual (`development` por defecto)
- `DATABASE_URL`: cadena de conexión SQLAlchemy.
	- Postgres: `postgresql+psycopg2://USER:PASSWORD@HOST:PORT/DB`
	- MySQL: `mysql+pymysql://USER:PASSWORD@HOST:PORT/DB`
	- SQLite (default): `sqlite:///./studentoverflow.db`

- Frontend (Vite):
	- `VITE_SUPABASE_URL`
	- `VITE_SUPABASE_ANON_KEY`

## Endpoints útiles
- API Docs: `http://127.0.0.1:8000/docs`
- Health: `http://127.0.0.1:8000/health`

## Guion de demo sugerido
1) Landing sin sesión → clic “Explorar preguntas” → Login → Feed.
2) En Feed: votar ▲/▼ y ver contador; abrir detalle `/q/:id`.
3) FAB “+” → si no hay sesión, Login y regreso a `/ask`; con sesión abre form.
4) Refrescar en `/feed` y confirmar que la sesión persiste.

## Despliegue (resumen)
- Frontend: Vercel/Netlify (build `vite build`).
- Backend: Render/Railway/Fly (start `uvicorn app.main:app --host 0.0.0.0 --port $PORT`).
- CORS: definir `FRONTEND_ORIGINS` en el backend con el dominio del frontend.

