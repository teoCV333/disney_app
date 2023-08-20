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

  async get(query) {
    const { name, age, movieId  } = query;
    const options = {
      include: ['movies'],
      where: {}
    }
    if( name ) {
      options.where.name = name;
    }
    if( age ) {
      options.where.age = age;
    }
    /* if( movieId ) {
      options.where.movieId = movieId;
    } */
    const data = await models.Character.findAll(options);
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

  async delete(id) {
      const character = await this.getById(id);
      if(!character) {
        throw boom.notFound('character not found');
      }
      await character.destroy({
        where: {
          id: id
        }
      });
      return { id };
  }

  async restore(id) {
    await Post.restore({
      where: {
        id: id
      }
    })
  }

}

module.exports = characterService;
