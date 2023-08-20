/**
 * @swagger
 * components:
 *   schemas:
 *     POST /gender:
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
 *
 *       example:
*          image: test,
*          name: test,
*
 */

const express = require('express');
const validatorHandler = require('../middlewares/validatorHandler');
const { createGenderDto, getGenderDto, updateGenderDto } = require('../dto/gender.dto');
const router = express();
const passport = require('passport');

const genderController = require('../controllers/gender.controller');

//GET ALL - FILTER
router.get('/', passport.authenticate('jwt', {session: false}), genderController.getGenders);

//GET BY ID
router.get('/:id', passport.authenticate('jwt', {session: false}), validatorHandler(getGenderDto, 'params'), genderController.getGender);

//POST
router.post('/',
passport.authenticate('jwt', {session: false}),
validatorHandler(createGenderDto, 'body'),
genderController.postGender);

//PUT
router.put('/:id',
  passport.authenticate('jwt', {session: false}),
  validatorHandler(getGenderDto, 'params'),
  validatorHandler(updateGenderDto, 'body'),
  genderController.updateGender
);

module.exports = router;
