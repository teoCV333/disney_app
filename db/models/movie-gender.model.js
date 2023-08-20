const { Model, DataTypes, Sequelize } = require('sequelize');
const { GENDER_TABLE } = require('./gender.model');
const { MOVIE_TABLE } = require('./movie.model');

const MOVIE_GENDER_TABLE = 'movie_gender';

const MovieGenderModel = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  movieId: {
      field: 'movie_id',
      allowNull: false,
      type: DataTypes.INTEGER,
      unique: false,
      references: {
        model: MOVIE_TABLE,
        key: 'id'
      }
  },
  genderId: {
      field: 'gender_id',
      allowNull: false,
      type: DataTypes.INTEGER,
      unique: false,
      references: {
        model: GENDER_TABLE,
        key: 'id'
      }
  }
};

class MovieGender extends Model {
  static associate(models) {
    this.belongsTo(models.Movie, {
      as: 'movie',
      foreignKey: 'id'
    });
    this.belongsTo(models.Gender, {
      as: 'gender',
      foreignKey: 'id'
    });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: MOVIE_GENDER_TABLE,
      modelName: 'MovieGender',
      timestamps: false
    }
  }
}

module.exports = { MOVIE_GENDER_TABLE, MovieGenderModel, MovieGender};

