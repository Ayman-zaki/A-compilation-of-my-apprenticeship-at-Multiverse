FROM node:lts-alpine

WORKDIR /docker

COPY ["package*.json",  "./"]

RUN npm install

COPY . .

CMD ["npm", "start"]