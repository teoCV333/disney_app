const Joi = require('joi');

const id = Joi.number().integer();
const characterId = Joi.number().integer();
const movieId = Joi.number().integer();
const status = Joi.number();


const createCharacterMovieDto = Joi.object({
  movieId: movieId.required(),
  characterId: characterId.required(),
});

const updateCharacterMovieDto = Joi.object({
   movieId: movieId,
   characterId: characterId,
   status: status
});

const getCharacterMovieDto = Joi.object({
  id: id.required()
});

module.exports = { createCharacterMovieDto, updateCharacterMovieDto, getCharacterMovieDto };
