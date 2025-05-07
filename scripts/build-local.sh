# docker network create dropin
# docker volume create techer_gpt_data
docker-compose --env-file .env -f docker-compose/docker-compose.local.yaml up -d --build