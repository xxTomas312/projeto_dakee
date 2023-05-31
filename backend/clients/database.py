from sqlalchemy import create_engine
from sqlalchemy.orm import Session
from config import Settings
from models.database import BaseDatabaseModel, engine
from models.database import User_detail_database_Model
from models.api import User_detail_API_Model
from models.api import Sign_In_Api_Model
from models.api import Sign_Up_Api_Model
from sqlalchemy import select

engine = create_engine(Settings().database_connection)

BaseDatabaseModel.metadata.create_all(engine)

#Criar um novo Request na Tabela Requests
def create_user_detail(account_api_model: User_detail_API_Model):
    with Session(engine) as db:
        new_account = User_detail_database_Model(**account_api_model.dict())
        db.add(new_account)
        db.commit()

def Sign_In(login:Sign_In_Api_Model):
    with Session(engine) as db:
        new_signIn = User_detail_database_Model(**login.dict())
        db.add(new_signIn)
        db.commit()

def Sign_Up(Sign_Up:Sign_Up_Api_Model):
    with Session(engine) as db:
        new_signUp = User_detail_database_Model(**Sign_Up.dict())
        db.add(new_signUp)
        db.commit()


#Encontrar na Tabela Requests por "id"
def update_account(ACCOUNT_ID: int) -> User_detail_database_Model:
    with Session(engine) as session:
        query = select(user_detail_database_Model).where(Account_database_Model.id == ACCOUNT_ID)
        result = session.scalars(query).one()
        if not result:
            raise Exception("Id doesn't exist")
        return result
                    