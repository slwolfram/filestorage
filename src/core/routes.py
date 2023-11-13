


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


@api.post("/api/upload")
async def upload(current_user: Annotated[schemas.User, Depends(auth.get_current_active_user)],
                    file: UploadFile = File(...), db: Session = Depends(get_db)):
    try:
        file_result = crud.create_file(db=db, filename=file.filename, user_id=current_user.id)
        contents = file.file.read()
        with open(os.path.join(str(current_user.id), file_result.filepath), 'wb') as f:
            f.write(contents)
    except Exception:
        raise
    finally:
        file.file.close()
    return file_result


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


@api.get("/api/files", response_model=list[schemas.File])
async def get_files(current_user: Annotated[schemas.User, Depends(auth.get_current_active_user)],
                    db: Session = Depends(get_db)):
    try:
        files = crud.get_files(db=db, user_id=current_user.id)
    except Exception:
        raise
    return files

