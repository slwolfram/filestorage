from datetime import datetime
from sqlalchemy.orm import Session

from . import models


def create_file(db: Session, filename: str, user_id: int, file_type: str, access_level: str, description: str):
    timestamp = datetime.now().strftime("%Y%m%d%H%M%S")
    db_file = models.File(filename=filename,
                          filepath=timestamp + '_' + filename,
                          file_type_id=file_type,
                          access_level_id=access_level,
                          description=description,
                          owner_id=user_id)
    db.add(db_file)
    db.commit()
    db.refresh(db_file)
    return db_file

def update_file(db: Session, file_id: int, description: str, access_level: str, file_type: str):
    file = db.query(models.File).filter(models.File.id == file_id).one()
    file.description = description
    file.access_level_id = access_level
    file.file_type_id = file_type
    db.commit()
    db.refresh(file)
    return file

def get_files(db: Session, user_id: int, skip: int = 0, limit: int = 100):
    result = db.query(models.File).where((models.File.owner_id==user_id) & (models.File.is_deleted==False)).offset(skip).limit(limit).all()
    print(result)
    return result

def get_file_detail(db: Session, filepath: str):
    result = db.query(models.File).filter(models.File.filepath==filepath).one()
    return result

def delete_file(db: Session, file_id: str):
    #db.query(models.File).filter(models.File.id == file_id).delete()
    file = db.query(models.File).filter(models.File.id == file_id).one()
    file.is_deleted = True
    db.commit()
