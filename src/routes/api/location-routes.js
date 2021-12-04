const express = require('express');
const router = express.Router();
const fs = require('fs');
let locations = require('../../data/locations.json');

router.get('/', (req, res) => {
  try {
    fs.readFile(
      __dirname + '/' + '../../data/locations.json',
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
  let getLocation;
  for (let i = 0; i < locations.length; i++) {
    if (locations[i].id == targetID) {
      getLocation = locations[i];
    }
  }
  try {
    res.status(200).json(getLocation);
  } catch (err) {
    res.status(400).end(err);
  }
});

module.exports = router;