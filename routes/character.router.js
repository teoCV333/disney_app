/**
 * @swagger
 * components:
 *   schemas:

 *     POST /character:
 *       type: object
 *       required:
 *         - name
 *       properties:
 *         id:
 *           type: number
 *           description: The auto-generated id of the character
 *         image:
 *           type: text
 *           description: The image of the character
 *         name:
 *           type: string
 *           description: The character name
 *         age:
 *           type: number
 *         weight:
 *           type: number
 *         status:
 *           type: number
 *       example:
 *         image: test,
 *         name: test,
 *         age: 10,
 *         weight: 2,
 *         history: test,
 *     GET /character/:id:
 *       type: param
 *       required:
 *         - id
 *       properties:
 *         id:
 *           type: number
 *           description: The auto-generated id of the character
 *         image:
 *           type: text
 *           description: The image of the character
 *         name:
 *           type: string
 *           description: The character name
 *         age:
 *           type: number
 *         weight:
 *           type: number
 *       example:
 *         /character/1
 *
 *     PUT /character/:id:
 *       type: object
 *       required:
 *         id:
 *           type: number
 *           description: The auto-generated id of the character
 *         body:
 *           type: number
 *           description: The auto-generated id of the character,
 *           properties:
 *              - status:
 *                   type: number
 *              - name:
 *                   type: string
 *              - age:
 *                   type: number
 *       example:
 *         path: /character/1,
 *         name: test,
 *         age: 22,
 *         status: 1,
 */


const express = require('express');
const validatorHandler = require('../middlewares/validatorHandler');
const { createCharacterDto, getCharacterDto, updateCharacterDto, queryCharacterDto } = require('../dto/character.dto');
const { createCharacterMovieDto, getCharacterMovieDto, updateCharacterMovieDto } = require('../dto/character-movie.dto');
const router = express();

const characterController = require('../controllers/character.controller');
const passport = require('passport');

//GET ALL - FILTER
router.get('/', passport.authenticate('jwt', {session: false}),
validatorHandler(queryCharacterDto, 'query'),
characterController.getCharacters);

//GET BY ID
router.get('/:id',
passport.authenticate('jwt', {session: false}),
validatorHandler(getCharacterDto, 'params'),
characterController.getCharacter);

//POST
router.post('/',
passport.authenticate('jwt', {session: false}),
validatorHandler(createCharacterDto, 'body'), characterController.postCharacter);

//ADD
router.post('/add-char',
passport.authenticate('jwt', {session: false}),
validatorHandler(createCharacterMovieDto, 'body'), characterController.addCharacter);

//PUT
router.put('/:id',
  passport.authenticate('jwt', {session: false}),
  validatorHandler(getCharacterDto, 'params'),
  validatorHandler(updateCharacterDto, 'body'),
  characterController.updateCharacter
);

//DELETE
router.delete('/:id',
  passport.authenticate('jwt', {session: false}),
  validatorHandler(getCharacterDto, 'params'),
  characterController.deleteCharacter
);

module.exports = router;
