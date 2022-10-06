
# MongoDBCON (Check MongoDB Connection With Application String)

## Installation
```sh
# Install All Dependencies
$ npm i --prefix
```

<<<<<<< HEAD
## Setup 

> Create .env file in MONGODBCON root folder

```sh
MONGO_DB=YOUR_MONGO_DATABASE_NAME
MONGO_USERNAME=YOUR_MONGO_USER
MONGO_PASSWORD=YOUR_MONGO_PASSWORD
MONGO_HOST=YOUR_MONGO_HOST
MONGO_PORT=YOUR_MONGO_PORT # Mongo port default is 27017
MONGO_CERT=YOUR_MONGO_CERT # The cert location is in ssl folder
=======
## Edit Connection String
```sh
# Edit Connection String in app.js
mongodb://127.0.0.1:27017/blog
          ---------:----/----
             Host  :Port/DBName
>>>>>>> e31c4385642b81189115cd825c0a25c252125383
```

## Running
```sh
# Start MongoDBCON on development mode
$ npm run start
```