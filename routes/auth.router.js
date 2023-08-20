const express = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken');

const validatorHandler = require('../middlewares/validatorHandler');

const { createUserDto } = require('../dto/user.dto');

const userController = require('../controllers/user.controller');


const { config } = require('./../config/config');


const router = express.Router();

router.post('/login',
  passport.authenticate('local', {session: false}),
  async (req, res, next) => {
    try {
      const user = req.user;
      const payload = {
        sub: user.id,
        role: user.roleName
      }
      const token = jwt.sign(payload, config.jwtSecret);
      res.json({
        user,
        token
      });
    } catch (error) {
      next(error);
    }
  }
);

router.post('/register',
  validatorHandler(createUserDto, 'body'), userController.postUser);

module.exports = router;
