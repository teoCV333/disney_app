const Sequelize = require('sequelize');
const sequelize = require('../libs/mysql');
const Role = require("./role.model");

const User = sequelize.define('user', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  username: Sequelize.STRING(50),
  password: Sequelize.STRING(255),
  status: Sequelize.TINYINT,
  dateRegister: Sequelize.DATE,
  firstName: Sequelize.STRING(60),
  lastName: Sequelize.STRING(80),
  role: {
    type: Sequelize.INTEGER,
    references: {
      model: 'Role',
      key: 'id'
    }
  }
});


module.exports = User;
