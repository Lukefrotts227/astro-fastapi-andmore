from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import dbsetup as db



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



@app.get("/")
def read_root():
    return {"Hello": "World"}

@app.post("/addNumbers")
def add_numbers(numbers: AddTwo):
    return {"result": numbers.number1 + numbers.number2}
