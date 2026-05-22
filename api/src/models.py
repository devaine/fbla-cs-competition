from pydantic import BaseModel, UUID4
from typing import Literal
from datetime import datetime


# NOTE: Creating a way to refer to messages, from either the user or the AI.
class Message(BaseModel):
    id: UUID4  # ID of the message
    conversation_id: UUID4  # ID of the converstaion
    sender_id: UUID4  # ID of whoever is sending messages
    type: Literal["text", "image", "file"]  # Type of message is sent
    file_id: str  # File ID in SeaweedFS
    created_at: datetime  # Timestamp of the message
