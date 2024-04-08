FROM nginx:latest
LABEL mainainer="Henrique M. Hartwig <henrique2805@gmail.com>"

COPY ./proxy/nginx.conf /etc/nginx/templates/

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]