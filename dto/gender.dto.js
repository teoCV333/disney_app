const Joi = require('joi');

const id = Joi.number().integer();
const name = Joi.string().min(3).max(50);
const image = Joi.string();

const createGenderDto = Joi.object({
  name: name.required(),
  image: image
});

const updateGenderDto = Joi.object({
  name: name,
  image: image
});

const getGenderDto = Joi.object({
  id: id.required()
});

module.exports = { createGenderDto, getGenderDto, updateGenderDto };
