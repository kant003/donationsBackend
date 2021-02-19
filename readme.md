# Doations Proyect

# Mongo DB creation on Docker

docker run --name mongo -d -p 27018:27017 mongo
docker exec -it mongo mongo

# .env example

URL_BASEDATOS_LOCAL='mongodb://localhost:27017/donations'
PORT=3000
TOKEN_SECRETO='11111111111111'
URL_BASEDATOS='mongodb+srv://admin:1111111111@mong.kljzy.mongodb.net/donations'


