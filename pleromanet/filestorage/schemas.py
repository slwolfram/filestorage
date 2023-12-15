from datetime import datetime
from pydantic import BaseModel


class FileBase(BaseModel):
    filename: str


class FileCreate(FileBase):
    pass


class File(FileBase):
    id: int
    filepath: str
    description: str
    access_level_id: str
    file_type_id: str
    is_deleted: bool
    created_ts: datetime
    owner_id: int

    class Config:
        orm_mode = True


class FileUpdate(FileBase):
    id: int
    description: str
    access_level_id: str
    file_type_id: str
