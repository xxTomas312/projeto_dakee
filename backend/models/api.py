from pydantic import BaseModel, validator
from sqlalchemy.orm import validates
from typing import List    

class Sign_In_Api_Model(BaseModel):
    email: str
    password: str

    @validator('email')
    def email_validation(cls, value):
        if not value:
            raise ValueError('email must not be empty')
        return value
    
    @validator('password')
    def password_validation(cls, value):
        if not value:
            raise ValueError('password must not be empty')
        return value

class Sign_Up_Api_Model(Sign_In_Api_Model):
    name: str

    @validator('name')
    def name_validation(cls, value):
        if not value:
            raise ValueError('name must not be empty')
        return value

    @validator('email')
    def email_validation(cls, value):
        if not value:
            raise ValueError('email must not be empty')
        return value
    
    @validator('password')
    def password_validation(cls, value):
        if not value:
            raise ValueError('password must not be empty')
        return value


class User_detail_API_Model(BaseModel):
    age: str
    gender: str
    i_currently_live_in: str
    i_can_give_advices_for: str
    travel_experiences_preferences: str
