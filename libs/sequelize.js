const { Sequelize } = require('sequelize');

const { config } = require("../config/config");
const setupModels = require('../db/models');


const HOST = encodeURIComponent(config.host);
const DB = encodeURIComponent(config.database);
const USER = encodeURIComponent(config.user);
const PASS = encodeURIComponent(config.password);
const URI = `mysql://${USER}:${PASS}@${HOST}:${config.dbPort}/${config.database}`;

const sequelize = new Sequelize(URI, {
    dialect: 'mysql',
    logging: true,
    dialectOptions: {
        connectTimeout: 60000
    },
  });

  setupModels(sequelize);

module.exports = sequelize
