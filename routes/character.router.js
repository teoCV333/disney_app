const express = require('express');
const validatorHandler = require('../middlewares/validatorHandler');
const { createCharacterDto, getCharacterDto, updateCharacterDto } = require('../dto/character.dto');
const { createCharacterMovieDto, getCharacterMovieDto, updateCharacterMovieDto } = require('../dto/character-movie.dto');
const router = express();

const characterController = require('../controllers/character.controller');

//GET ALL - FILTER
router.get('/', characterController.getCharacters);

//GET BY ID
router.get('/:id', validatorHandler(getCharacterDto, 'params'), characterController.getCharacter);

//POST
router.post('/',
validatorHandler(createCharacterDto, 'body'), characterController.postCharacter);

//ADD
router.post('/add-char',
validatorHandler(createCharacterMovieDto, 'body'), characterController.addCharacter);

//PUT
router.put('/:id',
  validatorHandler(getCharacterDto, 'params'),
  validatorHandler(updateCharacterDto, 'body'),
  characterController.updateCharacter
);

module.exports = router;
