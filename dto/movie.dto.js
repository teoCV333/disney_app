const Joi = require('joi');

const id = Joi.number().integer();
const image = Joi.string();
const tittle = Joi.string();
const score = Joi.number();
const genderId = Joi.number();
const status = Joi.number();

const createMovieDto = Joi.object({
  tittle: tittle.required(),
  image: image,
  score: score
});

const updateMovieDto = Joi.object({
  tittle: tittle,
  image: image,
  score: score,
  status: status
});

const getMovieDto = Joi.object({
  id: id.required()
});

const queryMovieDto = Joi.object({
  tittle,
  genderId
});

module.exports = { getMovieDto, updateMovieDto, createMovieDto, queryMovieDto };
