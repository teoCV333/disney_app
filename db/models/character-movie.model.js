const { Model, DataTypes, Sequelize } = require('sequelize');
const { CHARACTER_TABLE } = require('./character.model');
const { MOVIE_TABLE } = require('./movie.model');

const CHARACTER_MOVIE_TABLE = 'character_movie';

const CharacterMovieModel = {
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
      },

  },
  characterId: {
    field: 'character_id',
      allowNull: false,
      type: DataTypes.INTEGER,
      unique: false,
      references: {
        model: CHARACTER_TABLE,
        key: 'id'
      },

  }
};

class CharacterMovie extends Model {
  static associate(models) {
      this.belongsTo(models.Character, {
        as: 'character',
        foreignKey: 'id'
      });
      this.belongsTo(models.Movie, {
        as: 'movie',
        foreignKey: 'id'
      })
    }

  static config(sequelize) {
    return {
      sequelize,
      tableName: CHARACTER_MOVIE_TABLE,
      modelName: 'CharacterMovie',
      timestamps: false
    }
  }
}

module.exports = { CHARACTER_MOVIE_TABLE, CharacterMovieModel, CharacterMovie};

