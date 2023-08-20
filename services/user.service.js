const boom = require('@hapi/boom');
const User = require('../db/models/user.model');

const { models } = require('./../libs/sequelize');

class userService {

  async post(body) {
      try {
       const newUser = models.User.create(body);
       return newUser;
    } catch (error) {
      throw boom.badRequest('bad request');
    }
  }

  async get(body) {
    return await models.User.findAll();
  }

  async getById(id) {
    try {
      const user = await models.User.findByPk(id, {
        include: 'role'
      })
    return user;
    } catch (error) {
      throw boom.badRequest('bad request');
    }
  }

  async update(id, body) {
    try {
      userUpdated = await User.update(
    {
      username: body.name,
      password: body.password,
      status: body.status,
      fistName: body.firstName,
      lastName: body.lastName,
      role: body.role
    },
    {
      where: {
        id: id,
      },
    }
  );
   return userUpdated;
    } catch (error) {
      throw boom.badRequest('bad request');
    }
  }

}

module.exports = userService;
