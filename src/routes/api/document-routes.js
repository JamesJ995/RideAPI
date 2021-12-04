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

router.get("/:id", (req, res) => {
  const targetID = req.params.id;
  console.log(req.params.id); 
  let getDocument;
  for (let i = 0; i < trips.length; i++) {
    if (documents[i].id == targetID) {
      getDocument = documents[i];
    }
  }
  try {
    res.status(200).json(getDocument);
  } catch (err) {
    res.status(400).end(err);
  }
});

module.exports = router;