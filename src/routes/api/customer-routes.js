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

router.get("/:id", (req, res) => {
  const targetID = req.params.id;
  console.log(req.params.id); 
  let getCustomer;
  for (let i = 0; i < customers.length; i++) {
    if (customers[i].id == targetID) {
      getCustomer = customers[i];
    }
  }
  try {
    res.status(200).json(getCustomer);
  } catch (err) {
    res.status(400).end(err);
  }
});

module.exports = router;
