const { Model, DataTypes, Sequelize } = require('sequelize');

const MOVIE_TABLE = 'movie';

const MovieModel = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  image: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  tittle: {
    type: DataTypes.STRING(60),
    allowNull: false,
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
    field: 'created_at',
    defaultValue: Sequelize.NOW
  },
  score: {
    type: DataTypes.INTEGER,
    allowNull: true
  }
};

class Movie extends Model {
  static associate(models) {
    this.hasMany(models.Gender, {
      as: 'genders',
      foreignKey: 'id',
    });
    this.hasMany(models.Character, {
      as: 'characters',
      foreignKey: 'id',
    });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: MOVIE_TABLE,
      modelName: 'Movie',
      timestamps: false
    }
  }
}

module.exports = { MOVIE_TABLE, MovieModel, Movie};

