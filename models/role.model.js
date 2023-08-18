const Sequelize = require('sequelize');
const sequelize = require('../libs/mysql');

const User = require('./user.model');

const Role = sequelize.define('role', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: Sequelize.STRING,
});

module.exports = Role;
