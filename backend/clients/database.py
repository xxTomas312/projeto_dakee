from sqlalchemy import create_engine
from sqlalchemy.orm import Session
from config import Settings
from models.database import BaseDatabaseModel, engine
from models.database import Account_database_Model
from models.api import Account_API_Model
from sqlalchemy import select

engine = create_engine(Settings().database_connection)

BaseDatabaseModel.metadata.create_all(engine)

#Criar um novo Request na Tabela Requests
def create_new_account(account_api_model: Account_API_Model):
    with Session(engine) as db:
        new_account = Account_database_Model(**account_api_model.dict())
        db.add(new_account)
        db.commit()

def Sign_In(login:Sign_In):
    with Session(engine) as db:
        new_signIn = Sign_In(**login.dict())
        db.add(new_signIn)
        db.commit()

def Sign_Up(Sign_In:Sign_In):
    with Session(engine) as db:
        new_signIn = Sign_In(**login.dict())
        db.add(new_signIn)
        db.commit()


#Encontrar na Tabela Requests por "id"
def update_account(ACCOUNT_ID: int) -> Account_database_Model:
    with Session(engine) as session:
        query = select(Account_database_Model).where(Account_database_Model.id == ACCOUNT_ID)
        result = session.scalars(query).one()
        if not result:
            raise Exception("Id doesn't exist")
        return result
                    