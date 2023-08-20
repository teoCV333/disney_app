const Joi = require('joi');

const id = Joi.number().integer();
const username = Joi.string().min(3).max(50);
const password = Joi.string().min(3).max(255);
const status = Joi.number();
const dateRegister = Joi.date();
const firstName = Joi.string().min(3).max(60);
const lastName = Joi.string().min(3).max(80);
const roleName = Joi.string();
const roleId = Joi.number();


const createUserDto = Joi.object({
  username: username.required(),
  password: password.required(),
  roleName: roleName.required(),
  roleId: roleId.required(),
  firstName: firstName.required(),
  lastName: lastName.required(),
});

const updateUserDto = Joi.object({
  username: username,
  password: password,
  roleName: roleName,
  roleId,
  firstName: firstName,
  lastName: lastName
});

const getUserDto = Joi.object({
  id: id.required()
});

module.exports = { getUserDto, createUserDto, updateUserDto };
