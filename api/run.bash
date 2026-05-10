#!/bin/bash

#if [ ! -f .env ]; then
#	env | grep DESEC_TOKEN >>.env
#	env | grep CURRENT_DOMAIN >>.env
#fi

# If virtual environment does exist..
if [ ! -d venv ]; then
	python3 -m venv venv
	source venv/bin/activate
	pip install -U -r requirements.txt
	pip install -U pip
fi

# Assuming that your environemnt is already setup
if [ -d venv ]; then
	pip install -U -r requirements.txt
fi
