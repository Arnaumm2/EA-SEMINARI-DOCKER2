Procés:
Fer imatges de cada dockerfile:
docker build -t arnaumm2/ea-backend:v1 .
docker push arnaumm2/ea-backend:v1

Després importar imatges en el docker-compose.yml del dockerhub. 
El fitxer .env s'ha afegit perque en el docker-compose agafa variables globals, pero en aquest cas com que està en local no ens fa falta. 
