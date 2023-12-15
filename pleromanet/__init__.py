from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles

from .core import models
from .core.db import engine
from .core.routes import api as auth_routes
from .filestorage.routes import api as filestorage_routes


def create_app() -> FastAPI:

    models.Base.metadata.create_all(bind=engine)

    app = FastAPI()

    app.mount("/app", StaticFiles(directory="pleromanet/www/public/"), name="static")

    app.include_router(auth_routes)

    app.include_router(filestorage_routes)

    return app
