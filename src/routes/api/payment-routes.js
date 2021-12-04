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

router.get("/:id", (req, res) => {
  const targetID = req.params.id;
  console.log(req.params.id); 
  let getPayment;
  for (let i = 0; i < payments.length; i++) {
    if (payments[i].id == targetID) {
      getPayment = payments[i];
    }
  }
  try {
    res.status(200).json(getPayment);
  } catch (err) {
    res.status(400).end(err);
  }
});

module.exports = router;