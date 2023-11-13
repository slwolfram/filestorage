from datetime import datetime
from fastapi.openapi.models import ExternalDocumentation
from pydantic import BaseModel
from sqlalchemy.types import UserDefinedType
from sqlalchemy.util import string_or_unprintable


class UserBase(BaseModel):
    email: str


class UserCreate(UserBase):
    password: str


class FileBase(BaseModel):
    filename: str


class FileCreate(FileBase):
    pass


class File(FileBase):
    id: int
    filepath: str
    is_deleted: bool
    created_ts: datetime
    owner_id: int

    class Config:
        orm_mode = True


class Token(BaseModel):
    access_token: str
    token_type: str


class TokenData(BaseModel):
    email: str | None = None


class User(UserBase):
    id: int
    is_active: bool
    token: Token | None = None
    files: list[File] = []

    class Config:
        orm_mode = True
