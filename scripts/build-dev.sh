#!/bin/bash
sudo chown -R ${USER} .

# sudo docker volume create techer_gpt_data && sudo docker volume create letsencrypt_data
sudo docker-compose --env-file .env -f  app/docker-compose/docker-compose.dev.yaml up -d --build
sudo docker-compose --env-file .env -f  app/docker-compose/docker-compose.dev.yaml restart database
sudo rm -R app