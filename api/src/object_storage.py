# Environmental Variables
from main import S3_ACCESS_KEY, S3_SECRET_KEY, S3_URL

# Object Storage (S3)
import boto3
from botocore.config import Config

session = boto3.Session(
    aws_access_key_id=S3_ACCESS_KEY, aws_secret_access_key=S3_SECRET_KEY
)

s3 = session.client(
    "s3",
    endpoint_url=S3_URL,
)

# upload = s3.upload_file()
