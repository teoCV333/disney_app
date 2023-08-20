const Joi = require('joi');

const id = Joi.number().integer();
const characterId = Joi.number().integer();
const movieId = Joi.number().integer();


const createCharacterMovieDto = Joi.object({
  movieId: movieId.required(),
  characterId: characterId.required(),
});

const updateCharacterMovieDto = Joi.object({
   movieId: movieId,
   characterId: characterId
});

const getCharacterMovieDto = Joi.object({
  id: id.required()
});

module.exports = { createCharacterMovieDto, updateCharacterMovieDto, getCharacterMovieDto };
