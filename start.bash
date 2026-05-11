#!/bin/bash
echo "$@"

if [[ $1 == "web" ]]; then
	cd ./frontend/ && npm run start
elif [[ $1 == "api" ]]; then
	cd ./api/src && source ../venv/bin/activate && fastapi run
fi
