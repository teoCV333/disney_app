const { Model, DataTypes, Sequelize } = require('sequelize');

const GENDER_TABLE = 'gender';

const GenderModel = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  image: {
    type: DataTypes.TEXT,
    allowNull: true
  }
};

class Gender extends Model {
  static associate(models) {
    this.hasMany(models.Movie, {
      as: 'movies',
      foreignKey: 'id',
    })
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: GENDER_TABLE,
      modelName: 'Gender',
      timestamps: false
    }
  }
}

module.exports = { GENDER_TABLE, GenderModel, Gender};

