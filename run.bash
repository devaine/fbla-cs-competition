#!/bin/bash
source ./api/venv/bin/activate

cd ./frontend/ || exit

# NOTE: Hopefully this runs these two in the background.
npm run start &
(
	cd ../api/src || exit
	fastapi run
) &
