const Joi = require('joi');

const id = Joi.number().integer();
const movieId = Joi.number().integer();
const genderId = Joi.number().integer();


const createMovieGenderDto = Joi.object({
  movieId: movieId.required(),
  genderId: genderId.required(),
});

const updateMovieGenderDto = Joi.object({
   movieId: movieId,
   genderId: genderId
});

const getMovieGenderDto = Joi.object({
  id: id.required()
});

module.exports = { createMovieGenderDto, updateMovieGenderDto, getMovieGenderDto };
