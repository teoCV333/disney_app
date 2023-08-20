const { config } = require("../config/config");

const USER = encodeURIComponent(config.user);
const PASS = encodeURIComponent(config.password);
const HOST = encodeURIComponent(config.host);
const URI = `mysql://${USER}:${PASS}@${HOST}:${config.dbPort}/${config.database}`;

module.exports = {
  development: {
    url: URI,
    dialect: 'mysql'
  },
  production: {
    url: URI,
    dialect: 'mysql'
  }
}
