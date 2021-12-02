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

module.exports = router;
