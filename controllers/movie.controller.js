const MovieService = require('../services/movie.service');
const service = new MovieService();

const { models } = require('./../libs/sequelize');

const postMovie = async (req, res, next) => {
  try {
    const body = req.body;
    if(body) {
      const movieCreated = await service.post(body);
      res.json({
      message: 'created',
      data: movieCreated
    });
    } else {
      res.send('no params');
    }
  } catch (error) {
    console.log(error);
    next(error);
  }
}

const addMovie = async (req, res, next) => {
  try {
    const body = req.body;
    if(body) {
      const newMovie = await models.MovieGender.create(body);
      res.json({
      message: 'added',
      data: newMovie
    });
    } else {
      res.send('no params');
    }
  } catch (error) {
    console.log(error);
    next(error);
  }
}

const getMovies = async (req, res, next) => {
  try {
    const body = req.query;
    const movies = await service.get(body);
    res.send(movies);
  } catch (error) {
    console.log(error);
    next(error);
  }
}

const getMovie = async (req, res, next) => {
  try {
    const { id } = req.params;
    const movie = await service.getById(id);
    res.send(movie);
  } catch (error) {
    console.log(error);
    next(error);
  }
}

const updateMovie = async (req, res, next) => {
  try {
    const body = req.body;
    const { id } = req.params;
    if(body && id) {
      const movieUpdated = await service.update(id, body);
      res.json({
      message: 'updated',
      data: movieUpdated
    });
    } else {
      res.send('no params');
    }
  } catch (error) {
    console.log(error);
    next(error);
  }
}

module.exports = {
  getMovie,
  getMovies,
  postMovie,
  updateMovie,
  addMovie
}
