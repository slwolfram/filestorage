import os
from fastapi import Depends,File, UploadFile, APIRouter
from fastapi.responses import FileResponse

from sqlalchemy.orm import Session
from typing import Annotated, Optional

from pleromanet.core import get_db, auth, schemas as core_schemas
from pleromanet.filestorage import schemas as fs_schemas, crud
from . import enums

api = APIRouter(prefix="/api/files", tags=["filestorage"])


@api.post("/upload/{description}/{file_type}/{access_level}", tags=["filestorage"])
async def upload(description: str, file_type: str, access_level: str,
                 current_user: Annotated[core_schemas.User, Depends(auth.get_current_active_user)],
                 file: UploadFile = File(...), db: Session = Depends(get_db)):
    try:
        file_result = crud.create_file(db=db,
                                       filename=file.filename,
                                       user_id=current_user.id,
                                       file_type=file_type,
                                       access_level=access_level,
                                       description=description)
        contents = file.file.read()
        with open(os.path.join(str(current_user.id), file_result.filepath), 'wb') as f:
            f.write(contents)
    except Exception:
        raise
    finally:
        file.file.close()
    return file_result

@api.put("/", response_model=fs_schemas.File, tags=["filestorage"])
async def update(current_user: Annotated[core_schemas.User, Depends(auth.get_current_active_user)],
                 file_update: fs_schemas.FileUpdate,
                 db: Session = Depends(get_db)):
    try:
        file_result = crud.update_file(db=db,
                                       file_id=file_update.id,
                                       description=file_update.description,
                                       access_level=file_update.access_level_id,
                                       file_type=file_update.file_type_id)
    except Exception:
        raise
    return file_result


@api.delete("/{file_id}", tags=["filestorage"])
async def delete_file(file_id: str,
                      current_user: Annotated[core_schemas.User, Depends(auth.get_current_active_user)],
                      db: Session = Depends(get_db)
                      ):
    try:
        crud.delete_file(db=db, file_id=file_id)
    except Exception:
        raise
    return "Success"


@api.get("/", response_model=list[fs_schemas.File], tags=["filestorage"])
async def get_files_list(current_user: Annotated[core_schemas.User, Depends(auth.get_current_active_user)],
                         db: Session = Depends(get_db)):
    try:
        files = crud.get_files(db=db, user_id=current_user.id)
    except Exception:
        raise
    return files


@api.get("/access_levels", response_model=list[str], tags=["filestorage"])
async def get_access_levels():
    return [el.name for el in enums.AccessLevel]


@api.get("/filetypes", response_model=list[str], tags=["filestorage"])
async def get_file_types():
    return [el.name for el in enums.FileType]


@api.get("/download/{filename}/{token}")
async def download_file(token: str, filename: str, db: Session = Depends(get_db)):
    user = await auth.get_current_user(token, db)
    user = await auth.get_current_active_user(user)
    #return user.email
    return FileResponse(os.path.join(str(user.id), filename), media_type='application/octet-stream',filename=filename)


@api.get("/download/{filename}")
async def download_file_public(filename: str, db: Session = Depends(get_db)):
    file_detail = crud.get_file_detail(db, filename)
    if file_detail.access_level_id == enums.AccessLevel.PUBLIC.name:
        return FileResponse(os.path.join(str(file_detail.owner_id), filename), media_type='application/octet-stream',filename=filename)
    else:
        raise Exception('Unable to retrieve file.')
