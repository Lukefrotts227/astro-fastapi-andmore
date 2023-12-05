from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import dbsetup as db
from sqlalchemy import MetaData, Table, Column, Integer, String, ForeignKey
from random import randint




app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allows all origins
    allow_credentials=True,
    allow_methods=["*"],  # Allows all methods
    allow_headers=["*"],  # Allows all headers
)


class AddTwo(BaseModel):
    number1: int
    number2: int

class ResponseType(BaseModel): 
    response: int



@app.get("/")
def read_root():
    return {"Hello": "World"}

@app.post("/addNumbers")
def add_numbers(numbers: AddTwo):
    return {"result": numbers.number1 + numbers.number2}


@app.post("/responseBasic")
def response_basic(response: ResponseType): 
    if response == 0: 
        return {"response": randint(0, 10)} 
    elif response == 1: 
        pass 
    elif response == 2: 
        pass 
    elif response == 3:
        pass 
    else: 
        pass 
    return {"response": "error not proper entry"}