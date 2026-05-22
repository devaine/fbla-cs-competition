# Essential / Compliments
import os
from dotenv import load_dotenv
from uuid import uuid4

# API
from fastapi import FastAPI

# Custom Modules
from models import Message

# Load environment variables
load_dotenv()
AI_API_KEY = os.getenv("AI_API_KEY")

S3_ACCESS_KEY = os.getenv("S3_ACCESS_KEY")
S3_SECRET_KEY = os.getenv("S3_SECRET_KEY")
S3_URL = os.getenv("S3_URL")

KEYCLOAK_URL = os.getenv("KEYCLOAK_URL")
KEYCLOAK_ADMIN_USERNAME = os.getenv("KEYCLOAK_ADMIN_USERNAME")
KEYCLOAK_ADMIN_PASSWORD = os.getenv("KEYCLOAK_ADMIN_PASSWORD")
KEYCLOAK_REALM_NAME = os.getenv("KEYCLOAK_REALM_NAME")
KEYCLOAK_CLIENT_ID = os.getenv("KEYCLOAK_CLIENT_ID")

# Debugging
# print(GEMINI_KEY)
# print(S3_ACCESS_KEY)
# print(S3_SECRET_KEY)
# print(S3_URL)

# app = FastAPI()

# @app.post("/api/prompt")
# def SubmitPrompt(message: Message):
#   message.id = uuid4()
#   message.conversation_id =
#   message.sender_id =
#   message.type =
