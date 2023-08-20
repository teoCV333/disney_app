const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');
const { Movie } = require('../db/models/movie.model');

class characterService {

  async post(body) {
    const { name } = body;
    const characterExist = models.Character.findOne({where: {name: name}}).catch((err) => {
        throw boom.badRequest('bad request', err);
      })
      console.log('char',characterExists)
      const newCharacter = models.Character.create(body);
      return newCharacter;
  }

  async get(query) {
    const { name, age, movieId  } = query;
    const options = {
      include: [{
        model: Movie,
        association: 'movies',
        where: { status: 1 }
      }],

    }
    if( name ) {
      options.where.name = name;
    }
    if( age ) {
      options.where.age = age;
    }
    options.where.status = 1;
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
          model: Movie,
          required: false,
          where: { status: 1 },
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
