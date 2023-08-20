const mysql = require('mysql2');
const { config } = require("../config/config");

const dbConnection = mysql.createConnection({
  host: encodeURIComponent(config.host),
  user: encodeURIComponent(config.user),
  password: encodeURIComponent(config.password)
})

dbConnection.connect((err) => {
  if(err) {
    console.log('error connecting');
  } else {
    console.log('connection success');
  }
})

module.exports = dbConnection;
