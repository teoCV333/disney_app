const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');

class movieService {

  async post(body) {
      try {
       const newMovie = models.Movie.create(body);
       return newMovie;
    } catch (error) {
      throw boom.badRequest('bad request');
    }
  }

  async get(query) {
     const { tittle, genderId } = query;
      const options = {
      include: ['genders', 'characters'],
      where: {},
      order: [['id', 'DESC']]
    }
    if(tittle) {
      options.where.tittle = tittle;
    }
    /* if(genderId) {
      options.where.genderId = genderId;
    } */
    const data = await models.Movie.findAll(options);
    return data;
  }

  async getById(id) {
      const movie = await models.Movie.findByPk(id, {
      include: ['genders', 'characters']
      });
      if(!movie) {
        throw boom.notFound('role not found');
      }
      return movie;
  }

  async update(id, body) {
      const movie = await this.getById(id);
      if(!movie) {
        throw boom.notFound('role not found');
      }
      const data = await movie.update(body);
      return data;
  }

}

module.exports = movieService;
