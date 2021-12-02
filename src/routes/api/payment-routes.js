const express = require('express');
const router = express.Router();
const fs = require('fs');
let payments = require('../../data/payments.json');

router.get('/', (req, res) => {
  try {
    fs.readFile(
      __dirname + '/' + '../../data/payments.json',
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