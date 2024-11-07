FROM hub.hamdocker.ir/node:18.20.4 AS base

WORKDIR /app

ARG NODE_OPTIONS

COPY package.json ./
RUN yarn
COPY . ./
RUN yarn build

CMD yarn start