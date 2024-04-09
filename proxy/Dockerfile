FROM nginx:latest
LABEL mainainer="Henrique M. Hartwig <henrique2805@gmail.com>"

COPY ./proxy/nginx.conf /etc/nginx/conf.d/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]