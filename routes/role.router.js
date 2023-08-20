/**
 * @swagger
 * components:
 *   schemas:
 *     Role:
 *       type: object
 *       required:
 *         - name
 *       properties:
 *         id:
 *           type: number
 *           description: The auto-generated id of the character
 *         name:
 *           type: string
 *           description: The character name
 *
 *       example:
 *          name: test,
 */

const express = require('express');
const validatorHandler = require('../middlewares/validatorHandler');
const { createRoleDto, getRoleDto, updateRoleDto } = require('../dto/role.dto');
const router = express();

const passport = require('passport');

const roleController = require('../controllers/role.controller');

//GET ALL - FILTER
router.get('/',
passport.authenticate('jwt', {session: false}),
roleController.getRoles);

//GET BY ID
router.get('/:id',
passport.authenticate('jwt', {session: false}),
validatorHandler(getRoleDto, 'params'),
roleController.getRole);

//POST
router.post('/',
passport.authenticate('jwt', {session: false}),
validatorHandler(createRoleDto, 'body'),
roleController.postRole);

//PUT
router.put('/:id',
 passport.authenticate('jwt', {session: false}),
  validatorHandler(getRoleDto, 'params'),
  validatorHandler(updateRoleDto, 'body'),
  roleController.updateRol
);

module.exports = router;
