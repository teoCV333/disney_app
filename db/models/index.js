const { User, UserModel } = require('./user.model');
const { Role, RoleModel } = require('./role.model');
const { Movie, MovieModel } = require('./movie.model');
const { Gender, GenderModel } = require('./gender.model');
const { MovieGender, MovieGenderModel } = require('./movie-gender.model');
const { CharacterMovie, CharacterMovieModel } = require('./character-movie.model');
const { Character, CharacterModel } = require('./character.model');

function setupModels(sequelize) {
  User.init(UserModel, User.config(sequelize));
  Role.init(RoleModel, Role.config(sequelize));
  Movie.init(MovieModel, Movie.config(sequelize));
  Gender.init(GenderModel, Gender.config(sequelize));
  Character.init(CharacterModel, Character.config(sequelize));
  MovieGender.init(MovieGenderModel, MovieGender.config(sequelize));
  CharacterMovie.init(CharacterMovieModel, CharacterMovie.config(sequelize));

  Role.associate(sequelize.models);
  User.associate(sequelize.models);
  Movie.associate(sequelize.models);
  Gender.associate(sequelize.models);
  Character.associate(sequelize.models);
  CharacterMovie.associate(sequelize.models);
}

module.exports = setupModels;
