const express = require('express');
const router = express.Router();
const fs = require('fs');
let trips = require('../../data/trips.json');

router.get('/', (req, res) => {
  try {
    fs.readFile(
      __dirname + '/' + '../../data/trips.json',
      'utf8',
      (err, data) => {
        res.status(200).end(data);
      }
    );
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get('/:id', (req, res) => {
  try{
    fs.readFile(__dirname + '/' + '../../data/trips.json')
  } catch (err){
    res.status(400).json(err);
  }
})

router.post('/', (req, res) => {
  let trip = req.body;
  trips.push(trip);
  try {
    fs.writeFile(
      __dirname + '/' + '../../data/trips.json',
      JSON.stringify(trips),
      () => {
        res.status(200).json(trips);
      }
    );
  } catch (err) {
    res.status(400).end(err);
  }
});

router.put('/', (req, res) => {
  const currentID = req.body.id;
  const newVibe = req.body.current_vibe;
  for(let i=0; i < trips.length; i++){
    if(trips[i].id == currentID){
      console.log(newVibe);
      trips[i].current_vibe = newVibe;
      console.log(trips[i].current_vibe);
    }
  }
  try {
    fs.writeFile(
      __dirname + '/' + '../../data/trips.json',
      JSON.stringify(trips),
      () => {
        res.status(200).json(trips);
      }
    );
  } catch (err) {
    res.status(400).end(err);
  }
});

module.exports = router;
