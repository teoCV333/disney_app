const { Model, DataTypes, Sequelize } = require('sequelize');
const { ROLE_TABLE } = require('./role.model');

const USER_TABLE = 'user';

const UserModel = {
   id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  username: {
    type: DataTypes.STRING(50),
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  status: {
    type: DataTypes.TINYINT,
  },
  dateRegister: {
    type: DataTypes.DATE,
    allowNull: false,
    field: 'date_register',
    defaultValue: Sequelize.NOW
  },
  firstName: {
    type: DataTypes.STRING(60),
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING(80),
    allowNull: false
  },
  roleName: {
    allowNull: false,
    type: DataTypes.STRING,
    defaultValue: 'user'
  },
  roleId: {
    field: 'role_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    unique: false,
    references: {
      model: ROLE_TABLE,
      key: 'id'
    }
  }
}

class User extends Model {

  static associate(models) {
    this.belongsTo(models.Role, {as: 'role'});
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: USER_TABLE,
      modelName: 'User',
      timestamps: false
    }
  }
}

module.exports = { USER_TABLE, UserModel, User };
