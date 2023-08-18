const RoleService = require('../services/role.service');
const service = new RoleService();

const postRole = async (req, res, next) => {
  try {
    const body = req.body;
    if(body) {
      const productCreated = await service.post(body);
      res.json({
      message: 'created',
      data: productCreated
    });
    } else {
      res.send('no params');
    }
  } catch (error) {
    console.log(error);
    next(error);
  }
}

const getRoles = async (req, res, next) => {
  try {
    const body = req.query.params;
    const roles = await service.get(body);
    res.send(roles);
  } catch (error) {
    console.log(error);
    next(error);
  }
}

const getRole = async (req, res, next) => {
  try {
    const { id } = req.params;
    const role = await service.getById(id);
    res.send(role);
  } catch (error) {
    console.log(error);
    next(error);
  }
}

const updateRol = async (req, res, next) => {
  try {
    const body = req.body;
    const { id } = req.params;
    if(body && id) {
      const productUpdated = await service.update(id, body);
      res.json({
      message: 'updated',
      data: productUpdated
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
  getRoles,
  getRole,
  postRole,
  updateRol
}
