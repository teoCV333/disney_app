const boom = require('@hapi/boom');
const Role = require('../models/role.model');

class roleService {

  async post(body) {
      try {
       const newRole = Role.build(body);
       await newRole.save();
       return newRole;
    } catch (error) {
      throw boom.badRequest('bad request');
    }
  }

  async get(body) {
    return await Role.findAll();
  }

  async getById(id) {
    try {
      var role = await Role.findOne({where: {id: id}})
      console.log(role)
    if(role == null) {
      return boom.notFound('not found').output.payload;
    }
    /* if(role.isBlocked) {
      throw boom.conflict('is blocked');
    } */
    return role;
    } catch (error) {
      throw boom.badRequest('bad request');
    }
  }

  async update(id, body) {
    try {
      roleUpdated = await Role.update(
    {
      name: body.name
    },
    {
      where: {
        id: id,
      },
    }
  );
   return roleUpdated;
    } catch (error) {
      throw boom.badRequest('bad request');
    }
  }

}

module.exports = roleService;
