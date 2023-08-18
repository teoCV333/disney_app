const Joi = require('joi');

const id = Joi.number().integer();
const username = Joi.string().min(3).max(50);
const password = Joi.string().min(3).max(255);
const status = Joi.number();
const dateRegister = Joi.date();
const fistName = Joi.string().min(3).max(60);
const lastName = Joi.string().min(3).max(80);
const role = Joi.number().integer();

const createUserDto = Joi.object({
  username: username.required(),
  password: password.required(),
  role: role.required(),
  fistName: fistName.required(),
  lastName: lastName.required(),
});

const updateUserDto = Joi.object({
  username: username,
  password: password,
  role: role,
  fistName: fistName,
  lastName: lastName
});

const getUserDto = Joi.object({
  id: id.required()
});

module.exports = { getUserDto, createUserDto, updateUserDto };
