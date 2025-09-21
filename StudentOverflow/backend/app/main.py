from fastapi import FastAPI
from fastapi.responses import RedirectResponse
from fastapi.middleware.cors import CORSMiddleware
from .core.config import settings

app = FastAPI(title="StudentOverflow API", version="0.1.0")

origins = settings.FRONTEND_ORIGINS or [
    "http://localhost:5173",
    "http://127.0.0.1:5173",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/health", tags=["health"]) 
def health():
    return {"status": "ok", "env": settings.ENV}


@app.get("/", include_in_schema=False)
def root():
    return RedirectResponse(url="/docs")
