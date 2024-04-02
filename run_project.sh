docker compose stop
docker rm $(docker ps -a -q)
docker compose build &&
docker compose up -d --build --force-recreate