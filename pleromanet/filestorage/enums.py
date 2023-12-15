from enum import Enum


class AccessLevel(Enum):
    PRIVATE = 1
    PUBLIC = 2


class FileType(Enum):
    DOCUMENT = 1
    IMAGE = 2
    VIDEO = 3
    GAME = 4
    OTHER = 5
