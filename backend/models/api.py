from pydantic import BaseModel, validator
from datetime import datetime
from sqlalchemy.orm import validates    

class Account_API_Model(BaseModel):
    age: str
    gender: str
    i_currently_live_in: str
    i_can_give_advices_for: str
    travel_experiences_preferences: str

class Sign_In(BaseModel):
    email : str
    password : str

class Sign_Up(Sign_In):
    name : str
    

    @validator("name")
    def name_validation(cls, value):
        if not value:
            raise ValueError("Class must not be empty")
        return value

    @validator("password")
    def password_validation(cls, value):
        if not value:
            raise ValueError("Password must not be empty")
        return value
    
    @validator("email")
    def email_validation(cls, value):
        if "@" not in value:
            raise ValueError("failed simple email validation")
        return value

    