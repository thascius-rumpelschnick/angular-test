#!/bin/bash

echo
echo "---------------------------------"
echo "| Node Angular CLI Shell Helper |"
echo "---------------------------------"
echo

echo "Chose option:"
echo "---------------------------------"
echo "[1] - Build image"
echo "[2] - Install dependencies"
echo "[3] - Serve app"
echo "[4] - Attach to running container"
echo "[5] - Stop running container"
echo "[6] - Start and attach to container"
echo

read option

if [ "$option" == "1" ]
    then
        echo "Building image..."
        docker build --no-cache -t angular:v1 -f docker/Dockerfile app
     elif [ "$option" == "2" ]
        then
            echo "Installing dependencies..."
            docker run --rm --name angular -v ${PWD}/app:/app angular:v1 npm install
    elif [ "$option" == "3" ]
        then
            echo "Serving app..."
            docker run -it --rm --name angular -v ${PWD}/app:/app -p 4200:4200 angular:v1 ng serve --host 0.0.0.0 --port 4200
     elif [ "$option" == "4" ]
        then
            echo "Attaching to running container..."
            docker exec -it angular bash
            docker container stop angular
      elif [ "$option" == "5" ]
        then
            echo "Stopping running container..."
            docker container stop angular
    elif [ "$option" == "6" ]
        then
            echo "Starting and attaching to container..."
            docker run -it --rm --name angular -v ${PWD}/app:/app -p 4200:4200 angular:v1 bash
    else
        echo "ERROR: Unknown option: ${option}"
        exit 1
fi

echo "Done for the day..."
exit 0
