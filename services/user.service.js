const boom = require('@hapi/boom');
const User = require('../models/user.model');

class userService {

  async post(body) {
      try {
       const newUser = User.build(body);
       await newUser.save();
       return newUser;
    } catch (error) {
      throw boom.badRequest('bad request');
    }
  }

  async get(body) {
    return await User.findAll();
  }

  async getById(id) {
    try {
      var user = await User.findOne({where: {id: id}})
      console.log(user)
    if(user == null) {
      return boom.notFound('not found').output.payload;
    }
    /* if(role.isBlocked) {
      throw boom.conflict('is blocked');
    } */
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
