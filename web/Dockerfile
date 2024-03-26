# Stage 0
FROM node:16-alpine3.14

WORKDIR /usr/src/app

COPY package*.json .
RUN ls
# RUN npm install

# COPY . .

# RUN npm run build
EXPOSE 3000

RUN sleep 30
# CMD ["npm", "start"]

# Stage 1
# FROM nginx

# ADD default.conf /etc/nginx/conf.d/
# COPY --from=0 /usr/src/app/build /usr/share/nginx/html

# EXPOSE 80 443
