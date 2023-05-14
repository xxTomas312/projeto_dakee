from fastapi import APIRouter, status, Response
from database.models.api import Account_API_Model
from database.controllers import sign_in


router = APIRouter(prefix="/account", tags=["Main"])


@router.post("", status_code=status.HTTP_201_CREATED)
def create_account(new_account: Account_API_Model, response:Response):
    """
    Creates a new account by fiilling the following fields:
    - id
    - Name
    - E-mail
    - Password
    - Age
    - Gender
    - I Currently Live In
    - I Can Give Advices For 
    - Travel Experiences Preferences  
    """
    try:
        sign_in.create_account(new_account)
    except Exception as exc:
        response.status_code = status.HTTP_400_BAD_REQUEST
        return str(exc)


@router.patch("/{ACCOUNT_ID}")
def update_request(ACCOUNT_ID, response:Response):
    try:
        sign_in.update_account(ACCOUNT_ID)
    except Exception as exc:
        response.status_code = status.HTTP_400_BAD_REQUEST
        return str(exc)
