from pydantic import BaseModel
from pleromanet.filestorage import schemas as fs_schemas


class UserBase(BaseModel):
    email: str


class UserCreate(UserBase):
    password: str


class Token(BaseModel):
    access_token: str
    token_type: str


class TokenData(BaseModel):
    email: str | None = None


class User(UserBase):
    id: int
    is_active: bool
    token: Token | None = None
    #files: list[fs_schemas.File] = []

    class Config:
        orm_mode = True
