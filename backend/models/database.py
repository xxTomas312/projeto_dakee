from sqlalchemy.orm import DeclarativeBase
from sqlalchemy import String, Column, String, Integer, ForeignKey, Text
from sqlalchemy import create_engine
from config import Settings
from sqlalchemy.dialects.mysql import ENUM
from sqlalchemy.orm import Mapped
from sqlalchemy.orm import mapped_column

import enum 


#Creates connector to the database engine = create_engine("mysql+pymysql://user:pw@host/db", pool_pre_ping=True)
engine = create_engine(Settings().database_connection, pool_pre_ping=True)


class BaseDatabaseModel(DeclarativeBase):
    pass



# Models Definition
class Account_database_Model(BaseDatabaseModel):
    __tablename__ = "Account"

    id: Mapped[int] = mapped_column(Integer, primary_key=True, autoincrement=True)
    name: Mapped[str] = mapped_column(String(50))
    email: Mapped[str] = mapped_column(String(50))
    password: Mapped[str] = mapped_column(String(100))
    age: Mapped[str] = mapped_column('account.age', ENUM("<20", "22-39", "40-59", "60+"))
    gender: Mapped[str] = mapped_column('account.gender', ENUM("Female", "Male", "Complex", "Prefer not to say"))  
    i_currently_live_in: Mapped[str] = mapped_column(String(100))
    i_can_give_advices_for: Mapped[str] = mapped_column(String(100))
    travel_experiences_preferences: Mapped[str]  = mapped_column('account.travel_experiences_preferences', ENUM("Party", "Sightseeing", "Art", "History", "Music", "Sports", "Adventure", "Spiritual", "Nature", "Food") )