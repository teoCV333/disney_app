const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');
const { Gender } = require('../db/models/gender.model');
const { Character } = require('../db/models/character.model');

class movieService {

  async post(body) {
        const { tittle } = body;
        const movieExist = models.Movie.findOne({where: {tittle: tittle}}).catch((err) => {
          throw boom.badRequest('bad request');
        })
        const newMovie = models.Movie.create(body);
        return newMovie;
  }

  async get(query) {
     const { tittle, genderId } = query;
      const options = {
      include: [
          {
            model: Gender,
            association: 'genders',
            required: false
          },
          {
            model: Character,
            association: 'characters',
            required: false,
            where: { status: 1 }
          }
        ],
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
        where: {status: 1},
        include: [
          {
            model: Gender,
            association: 'genders',
            required: true
          },
          {
            model: Character,
            association: 'characters',
            required: false,
            where: { status: 1 }
          }
        ]
      });
      if(!movie) {
        throw boom.notFound('movie not found');
      }
      return movie;
  }

  async update(id, body) {
      const movie = await this.getById(id);
      if(!movie) {
        throw boom.notFound('movie not found');
      }
      const data = await movie.update(body);
      return data;
  }

}

module.exports = movieService;
