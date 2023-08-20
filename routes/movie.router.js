/**
 * @swagger
 * components:
 *   schemas:
 *     Movie:
 *       type: object
 *       required:
 *         - tittle
 *       properties:
 *         id:
 *           type: number
 *         image:
 *           type: text
 *         tittle:
 *           type: string
 *
 *       example:
*          image: test,
*          tittle: test,
*          score: 10,
 */

const express = require('express');
const validatorHandler = require('../middlewares/validatorHandler');
const { createMovieDto, getMovieDto, updateMovieDto, queryMovieDto } = require('../dto/movie.dto');
const router = express();

const movieController = require('../controllers/movie.controller');
const { createMovieGenderDto } = require('../dto/movie-gender.dto');

//GET ALL - FILTER
router.get('/', validatorHandler(queryMovieDto, 'query'), movieController.getMovies);

//GET BY ID
router.get('/:id', validatorHandler(getMovieDto, 'params'), movieController.getMovie);

//POST
router.post('/',
validatorHandler(createMovieDto, 'body'), movieController.postMovie);

//ADD
router.post('/add-movie',
validatorHandler(createMovieGenderDto, 'body'), movieController.addMovie);

//PUT
router.put('/:id',
  validatorHandler(getMovieDto, 'params'),
  validatorHandler(updateMovieDto, 'body'),
  movieController.updateMovie
);

module.exports = router;
