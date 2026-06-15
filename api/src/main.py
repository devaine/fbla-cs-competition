# Essential
import os
from dotenv import load_dotenv

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
KEYCLOAK_CLIENT_SECRET = os.getenv("KEYCLOAK_CLIENT_SECRET")

# Debugging
print(
    "AI KEY: " + str(AI_API_KEY) + "\n"
    "S3 ACCESS KEY: " + str(S3_ACCESS_KEY) + "\n"
    "S3 SECRET KEY: " + str(S3_SECRET_KEY) + "\n"
    "S3 URL: " + str(S3_URL) + "\n"
    "KEYCLOAK URL: " + str(KEYCLOAK_URL) + "\n"
    "KEYCLOAK ADMIN USERNAME: " + str(KEYCLOAK_ADMIN_USERNAME) + "\n"
    "KEYCLOAK ADMIN PASSWORD: " + str(KEYCLOAK_ADMIN_PASSWORD) + "\n"
    "KEYCLOAK REALM NAME: " + str(KEYCLOAK_REALM_NAME) + "\n"
    "KEYCLOAK CLIENT ID: " + str(KEYCLOAK_CLIENT_ID) + "\n"
    "KEYCLOAK CLIENT SECRET: " + str(KEYCLOAK_CLIENT_SECRET) + "\n"
)
