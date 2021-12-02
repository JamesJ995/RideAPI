const express = require('express');
const router = express.Router();
const fs = require('fs');
let customers = require('../../data/customers.json');

router.get('/', (req, res) => {
  try {
    fs.readFile(
      __dirname + '/' + '../../data/customers.json',
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
