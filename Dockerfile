# TODO: Plan for docker-compose.yml, create a script on run.bash to wait for .env file to run
# the application
FROM node:25-alpine

WORKDIR /app

RUN <<EOF
apk update
apk add --no-cache python3 bash py3-pip
EOF

SHELL ["/bin/bash", "-c"]
# NOTE: Frontend setup
COPY frontend/package.json frontend/package-lock.json ./frontend/
WORKDIR /app/frontend
RUN npm ci && npx next telemetry disable

# NOTE: Backend setup
WORKDIR /app/api
COPY api/requirements.txt ./
RUN python3 -m venv venv
ENV PATH="/app/api/venv/bin:$PATH"
RUN <<EOF
pip install --no-cache-dir -U -r requirements.txt
pip install -U pip
EOF

# NOTE: Copy rest of the source code
WORKDIR /app
COPY . .

WORKDIR /app/frontend
RUN npm run build

EXPOSE 8000
EXPOSE 3000

WORKDIR /app
ENTRYPOINT ["bash", "/app/start.bash"]
