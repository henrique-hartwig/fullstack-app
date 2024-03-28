# Stage 0
FROM node:lts-alpine3.19

WORKDIR /usr/src/app

COPY ./web/package*.json ./

RUN npm install
# RUN yarn

COPY ./web/. .


EXPOSE 3000

RUN npm run build

# ENTRYPOINT ["npm", "start"]
# ENTRYPOINT [ "python", "nada.py" ]


# Stage 1
# FROM nginx

# ADD default.conf /etc/nginx/conf.d/
# COPY --from=0 /usr/src/app/build /usr/share/nginx/html

# EXPOSE 80 443
