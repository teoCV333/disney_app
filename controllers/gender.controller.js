const GenderService = require('../services/gender.service');
const service = new GenderService();

const postGender = async (req, res, next) => {
  try {
    const body = req.body;
    if(body) {
      const genderCreated = await service.post(body);
      res.json({
      message: 'created',
      data: genderCreated
    });
    } else {
      res.send('no params');
    }
  } catch (error) {
    console.log(error);
    next(error);
  }
}

const getGenders = async (req, res, next) => {
  try {
    const body = req.query.params;
    const genders = await service.get(body);
    res.send(genders);
  } catch (error) {
    console.log(error);
    next(error);
  }
}

const getGender = async (req, res, next) => {
  try {
    const { id } = req.params;
    const gender = await service.getById(id);
    res.send(gender);
  } catch (error) {
    console.log(error);
    next(error);
  }
}

const updateGender = async (req, res, next) => {
  try {
    const body = req.body;
    const { id } = req.params;
    if(body && id) {
      const genderUpdated = await service.update(id, body);
      res.json({
      message: 'updated',
      data: genderUpdated
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
  getGender,
  getGenders,
  postGender,
  updateGender
}
