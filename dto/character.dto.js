const Joi = require('joi');

const id = Joi.number().integer();
const image = Joi.string();
const name = Joi.string();
const age = Joi.number();
const weight = Joi.number();
const history = Joi.string();

const createCharacterDto = Joi.object({
  image: image,
  name: name.required(),
  age: age,
  weight: weight,
  history: history
});

const updateCharacterDto = Joi.object({
  image: image,
  name: name,
  age: age,
  weight: weight,
  history: history
});

const getCharacterDto = Joi.object({
  id: id.required()
});

module.exports = { getCharacterDto, updateCharacterDto, createCharacterDto };
