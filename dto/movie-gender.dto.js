const Joi = require('joi');

const id = Joi.number().integer();
const movieId = Joi.number().integer();
const genderId = Joi.number().integer();
const status = Joi.number();


const createMovieGenderDto = Joi.object({
  movieId: movieId.required(),
  genderId: genderId.required(),
});

const updateMovieGenderDto = Joi.object({
   movieId: movieId,
   genderId: genderId,
   status: status
});

const getMovieGenderDto = Joi.object({
  id: id.required()
});

module.exports = { createMovieGenderDto, updateMovieGenderDto, getMovieGenderDto };
