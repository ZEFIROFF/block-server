FROM node:lts-alpine

RUN apk add --update --no-cache openssl1.1-compat

WORKDIR ./app

COPY package*.json ./
COPY prisma ./prisma/
COPY .env ./
COPY jsconfig.json ./

RUN npm install

COPY . .

RUN npx prisma generate

EXPOSE 5000

CMD npm start