# Readme

## Node LTS Version

node:lts-bullseye

## Run Container

    docker run -it --rm --name angular -v "$PWD":/usr/src/app -w /app node:lts-bullseye node your-daemon-or-script.js

    docker run -it --rm --name angular -v ${PWD}:/app -w /app node:lts-bullseye bash

## Build Image From Dockerfile With Context

See -> <https://docs.docker.com/develop/develop-images/dockerfile_best-practices/#understand-build-context>

    docker build --no-cache -t angular:v1 -f docker/Dockerfile app
    docker run -it --rm --name angular -v ${PWD}/app:/app -p 4200:4200 angular:v1 bash

## Angular CLI

    ng new <my-project> --skip-git
    ng serve --host 0.0.0.0 --port 4200 --poll
