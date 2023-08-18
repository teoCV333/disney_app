const express = require('express');
const validatorHandler = require('../middlewares/validatorHandler');
const { createUserDto, getUserDto, updateUserDto } = require('../dto/user.dto');
const router = express();

const userController = require('../controllers/user.controller');

//GET ALL - FILTER
router.get('/', userController.getUsers);

//GET BY ID
router.get('/:id', validatorHandler(getUserDto, 'params'), userController.getUser);

//POST
router.post('/',
validatorHandler(createUserDto, 'body'), userController.postUser);

//PUT
router.put('/:id',
  validatorHandler(getUserDto, 'params'),
  validatorHandler(updateUserDto, 'body'),
  userController.updateUser
);

module.exports = router;
