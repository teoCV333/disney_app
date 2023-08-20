const express = require('express');

const roleRouter = require('./role.router');
const movieRouter = require('./movie.router');
const genderRouter = require('./gender.router');
const characterRouter = require('./character.router');
const userRouter = require('./user.router');
const authRouter = require('./auth.router');

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/role', roleRouter);
  router.use('/movie', movieRouter);
  router.use('/gender', genderRouter);
  router.use('/character', characterRouter);
  router.use('/user', userRouter);
  router.use('/auth', authRouter);
}

module.exports = routerApi;
