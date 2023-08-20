/**
 * @swagger
 * components:
 *   schemas:
 *     Gender:
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

const genderController = require('../controllers/gender.controller');

//GET ALL - FILTER
router.get('/', genderController.getGenders);

//GET BY ID
router.get('/:id', validatorHandler(getGenderDto, 'params'), genderController.getGender);

//POST
router.post('/',
validatorHandler(createGenderDto, 'body'), genderController.postGender);

//PUT
router.put('/:id',
  validatorHandler(getGenderDto, 'params'),
  validatorHandler(updateGenderDto, 'body'),
  genderController.updateGender
);

module.exports = router;
