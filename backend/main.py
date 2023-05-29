from fastapi import FastAPI
from routers import root
from fastapi.middleware.cors import CORSMiddleware
from models.api import Sign_Up, Sign_In

origins = [
    "*",
]


api = FastAPI(
    title="dakee_api",
    description="An API for dakee"
)


api.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


routers = [
    root.router
]

for router in routers:
    api.include_router(router=router)



@api.post("/signup", response_model=Sign_Up)
def signup():
    pass

@api.post("/login", response_model=Sign_In)
def signin():
    pass