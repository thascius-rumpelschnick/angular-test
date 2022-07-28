FROM node:lts-bullseye

RUN apt-get update && apt-get install -y \
  python3 \
  g++ \
  make \
  && rm -rf /var/lib/apt/lists/*

WORKDIR /app

COPY . .

RUN npm install -g @angular/cli

CMD ["node", "-v"]

EXPOSE 4200