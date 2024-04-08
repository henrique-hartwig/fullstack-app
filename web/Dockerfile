# Stage 0
FROM node:lts-alpine3.19
LABEL mainainer="Henrique M. Hartwig <henrique2805@gmail.com>"

WORKDIR /usr/src/app

COPY ./web/package*.json .

RUN npm install

COPY ./web/. .

EXPOSE 3000

RUN npm run build

CMD ["npx", "serve", "-s", "build", "-l", "3000"]

# # Stage 1
# FROM nginx

# ADD default.conf /etc/nginx/conf.d/
# COPY --from=0 /usr/src/app/build /usr/share/nginx/html

# EXPOSE 80 443
