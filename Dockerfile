# TODO: Plans:
# Multi-stage builds, seperating building frontend & pre-requisites

# NOTE: Frontend setup
FROM node:25-alpine AS frontend-build

WORKDIR /app/frontend

COPY frontend/package.json frontend/package-lock.json ./

ENV NEXT_TELEMETRY_DISABLED=1

RUN npm ci

COPY frontend/ .

RUN npm run build

# NOTE: Backend setup
FROM python:3.12.13-alpine3.22 AS backend-build

#RUN apk add --no-cache python3 py3-pip

WORKDIR /app/api

COPY api/requirements.txt ./

RUN python3 -m venv --copies venv

ENV PATH="/app/api/venv/bin:$PATH"

RUN pip install --no-cache-dir -U -r requirements.txt

COPY api/src src/


# Actual setup
FROM node:25-alpine

WORKDIR /app

RUN apk add --no-cache bash python3

COPY --from=frontend-build /app/frontend frontend
COPY --from=backend-build /app/api api
COPY start.bash .

ENTRYPOINT ["bash", "/app/start.bash"]
