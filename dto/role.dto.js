const Joi = require('joi');

const id = Joi.number().integer();
const name = Joi.string().min(3).max(50);

const createRoleDto = Joi.object({
  name: name.required()
});

const updateRoleDto = Joi.object({
  name: name.required()
});

const getRoleDto = Joi.object({
  id: id.required()
});

module.exports = { createRoleDto, getRoleDto, updateRoleDto };
