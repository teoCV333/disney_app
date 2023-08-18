const express = require('express');

const router = express.Router();

//GET ALL - FILTER
router.get('/', (req, res) => {
  const { tittle, gender } = req.query;
  if(tittle || gender) {
    res.json({
      tittle,
      gender
    });
  } else {
    res.send('no params');
  }
});

//GET BY ID
router.get('/:id', (req, res) => {
  const { id } = req.params;
  if(tittle || gender) {
    res.json({
      id
    });
  } else {
    res.send('no params');
  }
});

//POST
router.post('/', (req, res) => {
  const body = req.params.body;
  if(body) {
    res.json({
      body
    });
  } else {
    res.send('no params');
  }
});

//PUT
router.put('/:id', (req, res) => {
  const body = req.params.body;
  if(body) {
    res.json({
      body
    });
  } else {
    res.send('no params');
  }
});

module.exports = router;

