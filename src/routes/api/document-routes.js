const express = require('express');
const router = express.Router();
const fs = require('fs');
let documents = require('../../data/documents.json');

router.get('/', (req, res) => {
  try {
    fs.readFile(
      __dirname + '/' + '../../data/documents.json',
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