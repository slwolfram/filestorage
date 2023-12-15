from sqlalchemy import Boolean, Column, ForeignKey, Integer, String, DateTime
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func

from pleromanet.core.db import Base


class File(Base):
    __tablename__ = "files"

    id = Column(Integer, primary_key=True, index=True)
    filename = Column(String)
    filepath = Column(String, index=True)
    is_deleted = Column(Boolean, default=False)
    owner_id = Column(Integer, ForeignKey("users.id"))
    description = Column(String)
    file_type_id = Column(String, ForeignKey("file_types.file_type"))
    access_level_id = Column(String, ForeignKey("access_levels.access_level"))
    created_ts = Column(DateTime(timezone=True), server_default=func.now())

    owner = relationship("User", back_populates="files")
    file_type = relationship("FileType", back_populates="files")
    access_level = relationship("AccessLevel", back_populates="files")


class FileType(Base):
    __tablename__ = "file_types"

    file_type = Column(String, primary_key=True, index=True)
    created_ts = Column(DateTime(timezone=True), server_default=func.now())
    files = relationship("File", back_populates="file_type")


class AccessLevel(Base):
    __tablename__ = "access_levels"

    access_level = Column(String, primary_key=True, index=True)
    created_ts = Column(DateTime(timezone=True), server_default=func.now())
    files = relationship("File", back_populates="access_level")
