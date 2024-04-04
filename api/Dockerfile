FROM node:lts-alpine3.19

WORKDIR /usr/src/app

COPY package*.json ./ 
RUN npm install

COPY . .

EXPOSE 4000

RUN npm run build

CMD ["npx", "serve", "-s", "build", "-l", "4000"]