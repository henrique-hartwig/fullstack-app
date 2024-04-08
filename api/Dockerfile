FROM node:lts-alpine3.19
LABEL mainainer="Henrique M. Hartwig <henrique2805@gmail.com>"

WORKDIR /usr/src/app

COPY ./api/package*.json .

RUN npm install

COPY ./api/. .

EXPOSE 4000

CMD ["npx", "serve", "-s", "build", "-l", "4000"]