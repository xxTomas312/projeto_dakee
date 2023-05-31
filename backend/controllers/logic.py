from models.api import User_detail_API_Model
from models.api import Sign_In_Api_Model
from models.api import Sign_Up_Api_Model
from clients import database 


def create_user_detail(account:User_detail_API_Model):
    database.create_user_detail(account)

def Sign_In(login:Sign_In_Api_Model):
    database.Sign_In(login)

def Sign_Up(Sign_Up:Sign_Up_Api_Model):
    database.Sign_Up(Sign_Up)

def update_account(update_account: User_detail_API_Model):
    database.update_account(update_account)