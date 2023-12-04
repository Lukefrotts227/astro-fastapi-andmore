from fastapi import FastAPI

app = FastAPI() 


@app.get("/")
def read_root():
    return {"Hello": "World"}

@app.post("/addNumbers")
def add_numbers(number1: int, number2: int):
    return {"result": number1 + number2}

