const { Model, DataTypes, Sequelize } = require('sequelize');

const CHARACTER_TABLE = 'character';

const CharacterModel = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  image: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  name: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  age: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  weight: {
    type: DataTypes.FLOAT,
    allowNull: true
  },
  history: {
    type: DataTypes.TEXT,
    allowNull: true
  }
};

class Character extends Model {
  static associate(models) {
    this.hasMany(models.Movie, {
      as: 'movies',
      foreignKey: 'id',
    })
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: CHARACTER_TABLE,
      modelName: 'Character',
      timestamps: false
    }
  }
}

module.exports = { CHARACTER_TABLE, CharacterModel, Character};

