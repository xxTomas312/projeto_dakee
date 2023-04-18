from database.models.api import Account_API_Model
from database.clients import database 


def create_account(account:Account_API_Model):
    database.create_new_account(account)

def update_account(update_account: Account_API_Model):
    database.update_account(update_account)