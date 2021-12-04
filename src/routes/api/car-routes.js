const express = require('express');
const router = express.Router();
const fs = require('fs');
let cars = require('../../data/cars.json');

router.get('/', (req, res) => {
  try {
    fs.readFile(
      __dirname + '/' + '../../data/cars.json',
      'utf8',
      (err, data) => {
        res.status(200).end(data);
      }
    );
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get("/:id", (req, res) => {
  const targetID = req.params.id;
  console.log(req.params.id); 
  let getCar;
  for (let i = 0; i < cars.length; i++) {
    if (cars[i].id == targetID) {
      getCar = cars[i];
    }
  }
  try {
    res.status(200).json(getCar);
  } catch (err) {
    res.status(400).end(err);
  }
});

module.exports = router;
