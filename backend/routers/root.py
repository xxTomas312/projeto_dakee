from fastapi import APIRouter, status, Response
from models.api import User_detail_API_Model
from models.api import Sign_In_Api_Model
from models.api import Sign_Up_Api_Model
from controllers import logic


router = APIRouter(prefix="/account", tags=["Main"])


@router.post("", status_code=status.HTTP_201_CREATED)
def create_user_detail(new_detail: User_detail_API_Model, response:Response):
    """
    Creates a new account by fiilling the following fields:
    - id
    - Age
    - Gender
    - I Currently Live In
    - I Can Give Advices For 
    - Travel Experiences Preferences  
    """
    try:
        logic.create_user_detail(new_detail)
    except Exception as exc:
        response.status_code = status.HTTP_400_BAD_REQUEST
        return str(exc)



@router.post("/SignIn", status_code=status.HTTP_201_CREATED)
def Sign_In(new_signIn: Sign_In_Api_Model, response:Response):
    """
    Sign In your Account by fiilling the following fields:
    - email
    - password 
    """
    try:
        logic.Sign_In(new_signIn)
    except Exception as exc:
        response.status_code = status.HTTP_400_BAD_REQUEST
        return str(exc)



@router.post("/SignUp", status_code=status.HTTP_201_CREATED)
def Sign_Up(new_signUp: Sign_Up_Api_Model, response:Response):
    """
    Sign Up your Account by fiilling the following fields:
    - Email
    - Password
    - Name 
    """
    try:
        logic.Sign_Up(new_signUp)
    except Exception as exc:
        response.status_code = status.HTTP_400_BAD_REQUEST
        return str(exc)



@router.patch("/{ACCOUNT_ID}")
def update_request(ACCOUNT_ID, response:Response):
    try:
        logic.update_account(ACCOUNT_ID)
    except Exception as exc:
        response.status_code = status.HTTP_400_BAD_REQUEST
        return str(exc)



