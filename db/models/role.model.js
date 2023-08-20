const { Model, DataTypes, Sequelize } = require('sequelize');

const {config} = require('../../config/config');

const ROLE_TABLE = 'role';

const RoleModel = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  }
};

class Role extends Model {
  static associate(models) {
    this.hasMany(models.User, {
      as: 'users',
      foreignKey: 'roleId'
    })
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: ROLE_TABLE,
      modelName: 'Role',
      timestamps: false
    }
  }
}

module.exports = { ROLE_TABLE, RoleModel, Role};

