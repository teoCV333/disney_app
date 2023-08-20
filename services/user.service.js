const boom = require('@hapi/boom');
const User = require('../db/models/user.model');
const bcrypt = require('bcrypt');

const { models } = require('./../libs/sequelize');

class userService {

  async post(body) {
      try {
        const hash = await bcrypt.hash(body.password, 10);
        const newUser = models.User.create({
        ...body,
        password: hash
       });
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

  async getByUsername(username) {
    try {
      const user = await models.User.findOne({where: {username: username}});
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
