const UserService = require('../services/user.service');
const userService = new UserService();

const postUser = async (req, res, next) => {
  try {
    const body = req.body;
    if(body) {
      const userCreated = await userService.post(body);
      res.json({
      message: 'created',
      data: userCreated
    });
    } else {
      res.send('no params');
    }
  } catch (error) {
    console.log(error);
    next(error);
  }
}

const getUsers = async (req, res, next) => {
  try {
    const body = req.query.params;
    const users = await userService.get(body);
    res.send(users);
  } catch (error) {
    console.log(error);
    next(error);
  }
}

const getUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await userService.getById(id);
    res.send(user);
  } catch (error) {
    console.log(error);
    next(error);
  }
}

const updateUser = async (req, res, next) => {
  try {
    const body = req.body;
    const { id } = req.params;
    if(body && id) {
      const userUpdated = await userService.update(id, body);
      res.json({
      message: 'updated',
      data: userService
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
  getUsers,
  getUser,
  postUser,
  updateUser
}
