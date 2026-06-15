# Essential
from uuid import uuid4
from dotenv import load_dotenv

# API
from fastapi import FastAPI

# Custom Modules
from models import Message

app = FastAPI()

# @app.post("/api/prompt")
# def SubmitPrompt(message: Message):
#  message.id = uuid4()
#  message.conversation_id =
#  message.sender_id =
#  message.type =
