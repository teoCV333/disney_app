const CharacterService = require('../services/character.service');
const characterService = new CharacterService();

const { models } = require('../libs/sequelize');

const postCharacter = async (req, res, next) => {
  try {
    const body = req.body;
    if(body) {
      const characterCreated = await characterService.post(body);
      res.json({
      message: 'created',
      data: characterCreated
    });
    } else {
      res.send('no params');
    }
  } catch (error) {
    console.log(error);
    next(error);
  }
}

const addCharacter = async (req, res, next) => {
  try {
    const body = req.body;
    if(body) {
      const newCharacter = await models.CharacterMovie.create(body);
      res.json({
      message: 'added',
      data: newCharacter
    });
    } else {
      res.send('no params');
    }
  } catch (error) {
    console.log(error);
    next(error);
  }
}

const getCharacters = async (req, res, next) => {
  try {
    const body = req.query.params;
    const characters = await characterService.get(body);
    res.send(characters);
  } catch (error) {
    console.log(error);
    next(error);
  }
}

const getCharacter = async (req, res, next) => {
  try {
    const { id } = req.params;
    const character = await characterService.getById(id);
    res.send(character);
  } catch (error) {
    console.log(error);
    next(error);
  }
}

const updateCharacter = async (req, res, next) => {
  try {
    const body = req.body;
    const { id } = req.params;
    if(body && id) {
      const characterUpdated = await characterService.update(id, body);
      res.json({
      message: 'updated',
      data: characterUpdated
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
  getCharacter,
  getCharacters,
  postCharacter,
  updateCharacter,
  addCharacter
}
