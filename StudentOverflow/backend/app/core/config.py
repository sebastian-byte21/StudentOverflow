import os
from functools import lru_cache
from dotenv import load_dotenv


class Settings:
    ENV: str = os.getenv("ENV", "development")
    DATABASE_URL: str | None = os.getenv("DATABASE_URL")
    FRONTEND_ORIGINS: list[str] = [
        o.strip() for o in os.getenv("FRONTEND_ORIGINS", "").split(",") if o.strip()
    ]


@lru_cache
def get_settings() -> Settings:
    # Load .env once per process
    load_dotenv()
    return Settings()


settings = get_settings()
