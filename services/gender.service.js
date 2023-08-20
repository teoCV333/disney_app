const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');

class genderService {

  async post(body) {
      try {
       const newGender = models.Gender.create(body);
       return newGender;
    } catch (error) {
      throw boom.badRequest('bad request');
    }
  }

  async get(body) {
    const data = await models.Gender.findAll();
    return data;
  }

  async getById(id) {
      const gender = await models.Gender.findByPk(id, {
      include: 'movies'
      });
      if(!gender) {
        throw boom.notFound('gender not found');
      }
      return gender;
  }

  async update(id, body) {
      const gender = await this.getById(id);
      if(!gender) {
        throw boom.notFound('gender not found');
      }
      const data = await gender.update(body);
      return data;
  }

}

module.exports = genderService;
