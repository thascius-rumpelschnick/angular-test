FROM node:lts-bullseye-slim

RUN groupadd -r user \
    && useradd -r user -g user --shell /bin/bash

RUN set -ex \
    && apt-get update \
    && apt-get install --no-install-recommends -y chromium \
    && rm -rf /var/lib/apt/lists/*

ENV CHROME_BIN=/usr/bin/chromium

WORKDIR /app

COPY . .

RUN npm install -g @angular/cli

CMD ["node", "-v"]

EXPOSE 4200