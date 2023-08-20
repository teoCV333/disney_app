const Joi = require('joi');

const id = Joi.number().integer();
const image = Joi.string();
const tittle = Joi.string();
const score = Joi.number();

const createMovieDto = Joi.object({
  tittle: tittle.required(),
  image: image,
  score: score
});

const updateMovieDto = Joi.object({
  tittle: tittle,
  image: image,
  score: score
});

const getMovieDto = Joi.object({
  id: id.required()
});

module.exports = { getMovieDto, updateMovieDto, createMovieDto };
