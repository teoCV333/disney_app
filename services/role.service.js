const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');

class roleService {

  async post(body) {
      try {
       const newRole = models.Role.create(body);
       return newRole;
    } catch (error) {
      throw boom.badRequest('bad request');
    }
  }

  async get(body) {
    const data = await models.Role.findAll({
      include: [
        {
          association: 'users',
          include: 'role'
        }
      ]
    });
    return data;
  }

  async getById(id) {
      const role = await models.Role.findByPk(id);
      if(!role) {
        throw boom.notFound('role not found');
      }
      return role;
  }

  async update(id, body) {
      const role = await this.getById(id);
      if(!role) {
        throw boom.notFound('role not found');
      }
      const data = await role.update(body);
      return data;
  }

}

module.exports = roleService;
