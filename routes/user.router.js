/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - username
 *         - password
 *         - firstName
 *         - lastName
 *         - roleName
 *         - roleId
 *       properties:
 *         id:
 *           type: number
 *         username:
 *           type: string
 *         password:
 *           type: string
 *         status:
 *           type: number
 *         firstName:
 *           type: string
 *         lastName:
 *           type: string
 *         roleName:
 *           type: string
 *         roleId:
 *           type: number
 *       example:
*          username: carva,
*          password: test,
*          firstName: Mateo,
*          lastName: Carvajal,
*          roleName: user,
*          roleId: 1
 */


const express = require('express');
const validatorHandler = require('../middlewares/validatorHandler');
const { createUserDto, getUserDto, updateUserDto } = require('../dto/user.dto');
const router = express();

const passport = require('passport');

const userController = require('../controllers/user.controller');

//GET ALL - FILTER
router.get('/', passport.authenticate('jwt', {session: false}), userController.getUsers);

//GET BY ID
router.get('/:id',
  passport.authenticate('jwt', {session: false}),
  validatorHandler(getUserDto, 'params'),
  userController.getUser);

//PUT
router.put('/:id',
  passport.authenticate('jwt', {session: false}),
  validatorHandler(getUserDto, 'params'),
  validatorHandler(updateUserDto, 'body'),
  userController.updateUser
);

module.exports = router;
