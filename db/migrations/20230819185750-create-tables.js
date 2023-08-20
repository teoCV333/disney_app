'use strict';

const {ROLE_TABLE, RoleModel} = require('../models/role.model');
const {USER_TABLE, UserModel} = require('../models/user.model');
const {CHARACTER_TABLE, CharacterModel} = require('../models/character.model');
const {GENDER_TABLE, GenderModel} = require('../models/gender.model');
const {MOVIE_GENDER_TABLE, MovieGenderModel} = require('../models/movie-gender.model');
const {MOVIE_TABLE, MovieModel} = require('../models/movie.model');
const {CHARACTER_MOVIE_TABLE, CharacterMovieModel} = require('../models/character-movie.model');


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.createTable(ROLE_TABLE, RoleModel);
    await queryInterface.createTable(USER_TABLE, UserModel);
    await queryInterface.createTable(CHARACTER_TABLE, CharacterModel);
    await queryInterface.createTable(GENDER_TABLE, GenderModel);
    await queryInterface.createTable(MOVIE_TABLE, MovieModel);
    await queryInterface.createTable(MOVIE_GENDER_TABLE, MovieGenderModel);
    await queryInterface.createTable(CHARACTER_MOVIE_TABLE, CharacterMovieModel);
  },

  async down (queryInterface) {
    await queryInterface.drop(ROLE_TABLE);
    await queryInterface.drop(USER_TABLE);
    await queryInterface.drop(CHARACTER_TABLE);
    await queryInterface.drop(GENDER_TABLE);
    await queryInterface.drop(MOVIE_GENDER_TABLE);
    await queryInterface.drop(MOVIE_TABLE);
    await queryInterface.drop(CHARACTER_MOVIE_TABLE);
  }
};
