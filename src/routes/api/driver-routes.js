const express = require('express');
const router = express.Router();
const fs = require('fs');
let drivers = require('../../data/drivers.json');

router.get('/', (req, res) => {
  try {
    fs.readFile(
      __dirname + '/' + '../../data/drivers.json',
      'utf8',
      (err, data) => {
        res.status(200).end(data);
      }
    );
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/', (req, res) => {
  let driver = req.body;
  drivers.push(driver);
  try {
    fs.writeFile(
      __dirname + '/' + '../../data/drivers.json',
      JSON.stringify(drivers),
      () => {
        res.status(200).json(drivers);
      }
    );
  } catch (err) {
    res.status(400).end(err);
  }
});

module.exports = router;
