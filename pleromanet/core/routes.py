import os
from fastapi import Depends, HTTPException, status, APIRouter
from sqlalchemy.orm import Session
from typing import Annotated
from datetime import timedelta
from fastapi.security import OAuth2PasswordRequestForm

from . import crud, schemas, auth, get_db


api = APIRouter(tags=["authentication"])


@api.post("/api/register", response_model=schemas.User)
async def register_user(user: schemas.UserCreate, db: Session = Depends(get_db)):
    db_user = crud.get_user_by_email(db, email=user.email)
    if db_user:
        raise HTTPException(status_code=400, detail="Email already registered")
    db_user = crud.create_user(db=db, user=user)
    access_token_expires = timedelta(minutes=auth.ACCESS_TOKEN_EXPIRE_MINUTES)
    access_token = auth.create_access_token(
        data={"sub": user.email}, expires_delta=access_token_expires
    )
    if not os.path.isdir(str(db_user.id)):
        os.mkdir(str(db_user.id))
    db_user.token = schemas.Token(access_token=access_token, token_type='bearer')
    return db_user



@api.post("/api/login", response_model=schemas.User)
async def login_user(user: schemas.UserCreate, db: Session = Depends(get_db)):
    user = auth.authenticate_user(db, user.email, user.password)
    access_token_expires = timedelta(minutes=auth.ACCESS_TOKEN_EXPIRE_MINUTES)
    access_token = auth.create_access_token(
        data={"sub": user.email}, expires_delta=access_token_expires
    )
    user.token = schemas.Token(access_token=access_token, token_type='bearer')
    return user


@api.post("/token", response_model=schemas.Token)
async def login_for_access_token(form_data: Annotated[OAuth2PasswordRequestForm, Depends()],
                                    db: Session = Depends(get_db)):
    user = auth.authenticate_user(db, form_data.username, form_data.password)
    if not user:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect username or password",
            headers={"WWW-Authenticate": "Bearer"},
        )
    access_token_expires = timedelta(minutes=auth.ACCESS_TOKEN_EXPIRE_MINUTES)
    access_token = auth.create_access_token(
        data={"sub": user.email}, expires_delta=access_token_expires
    )
    return {"access_token": access_token, "token_type": "bearer"}
