from datetime import datetime
from sqlalchemy.orm import Session

from . import models, schemas, auth


def get_user(db: Session, user_id: int):
    return db.query(models.User).filter(models.User.id == user_id).first()


def get_user_by_email(db: Session, email: str):
    return db.query(models.User).filter(models.User.email == email).first()


def get_users(db: Session, skip: int = 0, limit: int = 100):
    return db.query(models.User).offset(skip).limit(limit).all()


def create_user(db: Session, user: schemas.UserCreate):
    #fake_hashed_password = user.password + "notreallyhashed"
    hashed_password = auth.get_password_hash(user.password)
    db_user = models.User(email=user.email, hashed_password=hashed_password)
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user


def create_file(db: Session, filename: str, user_id: int):
    timestamp = datetime.now().strftime("%Y%m%d%H%M%S")
    db_file = models.File(filename=filename, filepath=timestamp + '_' + filename, owner_id=user_id)
    db.add(db_file)
    db.commit()
    db.commit()
    db.refresh(db_file)
    return db_file


def get_files(db: Session, user_id: int, skip: int = 0, limit: int = 100):
    result = db.query(models.File).where(models.File.owner_id==user_id).offset(skip).limit(limit).all()
    print(result)
    return result

