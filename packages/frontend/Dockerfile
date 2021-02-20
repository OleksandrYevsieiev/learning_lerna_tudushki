FROM node:14.15.4-alpine3.10

RUN mkdir server

WORKDIR /frontend

COPY ./packages/frontend .

RUN npm install

EXPOSE 6000

CMD npm start