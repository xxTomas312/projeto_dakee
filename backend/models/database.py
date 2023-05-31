from sqlalchemy.orm import declarative_base, relationship
from sqlalchemy import String, Column, String, Integer, ForeignKey, Text
from sqlalchemy import create_engine
from config import Settings
from sqlalchemy.dialects.mysql import ENUM
from sqlalchemy.orm import Mapped
from sqlalchemy.orm import mapped_column

import enum 


#Creates connector to the database engine = create_engine("mysql+pymysql://user:pw@host/db", pool_pre_ping=True)
engine = create_engine(Settings().database_connection)

BaseDatabaseModel = declarative_base()


# Models Definition


class User_database_Model(BaseDatabaseModel):
    __tablename__ = "user"
    id: Mapped[int] = mapped_column(Integer,primary_key=True)
    name: Mapped[str] = mapped_column(String(200))
    email: Mapped[str] = mapped_column(String(200), unique=True)
    password: Mapped[str] = mapped_column(String(100))
    detail = relationship("user_detail_database_Model", back_populates="user")

class Cities_database_Model(BaseDatabaseModel):
    __tablename__ = "cities"
    id: Mapped[str] = mapped_column(Integer, primary_key=True)
    city_name: Mapped[str] = mapped_column(String(255))

class User_city_database_Model(BaseDatabaseModel):
    __tablename__ = "user_city"
    user_email: Mapped[str] = mapped_column(String(255), ForeignKey("user.email"), primary_key=True)
    i_can_give_advices_for: Mapped[str]= mapped_column(Integer, ForeignKey("cities.id"), primary_key=True)

class User_detail_database_Model(BaseDatabaseModel):
    __tablename__ = "user_detail"
    id: Mapped[int] = mapped_column(Integer, primary_key=True)
    user_email: Mapped[str] = mapped_column(String(200), ForeignKey("user.email"))
    age: Mapped[str] = mapped_column('user_detail.age', ENUM("<20", "22-39", "40-59", "60+"))
    gender: Mapped[str] = mapped_column('user_detail.gender', ENUM("Female", "Male", "Complex", "Prefer not to say"))  
    i_currently_live_in: Mapped[str] = mapped_column(String(100))
    user_city_id: Mapped[str] = mapped_column(Integer, ForeignKey("cities.id"))
    travel_experiences_preferences: Mapped[str]  = mapped_column('user_detail.travel_experiences_preferences', ENUM("Party", "Sightseeing", "Art", "History", "Music", "Sports", "Adventure", "Spiritual", "Nature", "Food") )
    user = relationship("User_database_Model", back_populates="detail")

    user_city = relationship("Cities_database_Model", foreign_keys=[user_city_id])

BaseDatabaseModel.metadata.create_all(engine, checkfirst=True)