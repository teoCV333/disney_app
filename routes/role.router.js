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

const roleController = require('../controllers/role.controller');

//GET ALL - FILTER
router.get('/', roleController.getRoles);

//GET BY ID
router.get('/:id', validatorHandler(getRoleDto, 'params'), roleController.getRole);

//POST
router.post('/',
validatorHandler(createRoleDto, 'body'), roleController.postRole);

//PUT
router.put('/:id',
  validatorHandler(getRoleDto, 'params'),
  validatorHandler(updateRoleDto, 'body'),
  roleController.updateRol
);

module.exports = router;
