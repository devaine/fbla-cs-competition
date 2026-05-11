# TODO: Plan for docker-compose.yml, create a script on run.bash to wait for .env file to run
# the application
FROM node:25-alpine

# WARNING: These ports are the default ports for the app, you should probably
# change them eventually, OR use docker-compose.yml to change them.
EXPOSE 8000
EXPOSE 3000

RUN <<EOF
apk update
apk add python3
apk add bash
EOF


# NOTE: Filesystem setup (probably needs COPY and WORKDIR)
COPY . /app
WORKDIR /app

# NOTE: Frontend setup
WORKDIR /app/frontend
RUN npm i
RUN npm run build

# NOTE: Backend setup
WORKDIR /app/api
RUN <<EOF
bash ./run.bash
EOF
ENV PATH="/app/api/venv/bin:$PATH"

WORKDIR /app
RUN ls -la
RUN "bash run.bash"
