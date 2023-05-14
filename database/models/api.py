from pydantic import BaseModel, validator
from datetime import datetime
from sqlalchemy.orm import validates    

class Account_API_Model(BaseModel):

    name : str
    email : str
    password : str
    age: str
    gender: str
    i_currently_live_in: str
    i_can_give_advices_for: str
    travel_experiences_preferences: str
    
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

    