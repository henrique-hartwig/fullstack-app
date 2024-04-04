FROM nginx:latest

COPY ./proxy/nginx.conf /etc/nginx/templates/

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]