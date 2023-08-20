disney app backend, 
NODEJS, EXPRESS, SEQUELIZE, MYSQL, JWT, PASSPORT

by: MCV

-node version: v16.18.1

installation:
 npm install

run:
 npm run dev

migrations: 
 migrations:generate,
 migrations:run,
 migrations:revert,
 migrations:clean

database:
 name: disney,
 dialect: mysql,
 port: 3306,
 host: localhost,
 user: root,
 pass:
