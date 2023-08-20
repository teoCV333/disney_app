const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');

class characterService {

  async post(body) {
      try {
       const newCharacter = models.Character.create(body);
       return newCharacter;
    } catch (error) {
      throw boom.badRequest('bad request');
    }
  }

  async get(body) {
    const data = await models.Character.findAll();
    return data;
  }

  async getById(id) {
      const character = await models.Character.findByPk(id, {
      include: [
        {
          association: 'movies',
          include: ['genders']
        }]
    });
      if(!character) {
        throw boom.notFound('character not found');
      }
      return character;
  }

  async update(id, body) {
      const character = await this.getById(id);
      if(!character) {
        throw boom.notFound('character not found');
      }
      const data = await character.update(body);
      return data;
  }

}

module.exports = characterService;
