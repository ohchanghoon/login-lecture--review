FROM node:14

RUN mkdir /LOGIN
WORKDIR /LOGIN

RUN mkdir ./app

COPY ./app ./app

WORKDIR ./app

COPY /package*.json ./

RUN npm install

EXPOSE 3000

CMD ["npm", "start"]
