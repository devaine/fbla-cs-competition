#!/bin/bash
echo "$@"

if [[ $1 == "web" ]]; then
	cd ./frontend/ && npm run start
elif [[ $1 == "api" ]]; then
	cd ./api/ && source venv/bin/activate && cd ./src && fastapi run
fi
