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
 *         status:
 *           type: number
 *
 *       example:
*          image: test,
*          tittle: test,
*          score: 10,
*          status: 1,
 */

const express = require('express');
const validatorHandler = require('../middlewares/validatorHandler');
const { createMovieDto, getMovieDto, updateMovieDto, queryMovieDto } = require('../dto/movie.dto');
const router = express();

const passport = require('passport');

const movieController = require('../controllers/movie.controller');
const { createMovieGenderDto } = require('../dto/movie-gender.dto');

//GET ALL - FILTER
router.get('/',
passport.authenticate('jwt', {session: false}),
validatorHandler(queryMovieDto, 'query'),
movieController.getMovies);

//GET BY ID
router.get('/:id',
passport.authenticate('jwt', {session: false}),
validatorHandler(getMovieDto, 'params'),
movieController.getMovie);

//POST
router.post('/',
passport.authenticate('jwt', {session: false}),
validatorHandler(createMovieDto, 'body'),
movieController.postMovie);

//ADD
router.post('/add-movie',
passport.authenticate('jwt', {session: false}),
validatorHandler(createMovieGenderDto, 'body'),
movieController.addMovie);

//PUT
router.put('/:id',
  passport.authenticate('jwt', {session: false}),
  validatorHandler(getMovieDto, 'params'),
  validatorHandler(updateMovieDto, 'body'),
  movieController.updateMovie
);

module.exports = router;
