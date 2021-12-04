const express = require("express");
const router = express.Router();
const fs = require("fs");
let trips = require("../../data/trips.json");

router.get("/", (req, res) => {
  try {
    fs.readFile(
      __dirname + "/" + "../../data/trips.json",
      "utf8",
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
  let getTrip;
  for (let i = 0; i < trips.length; i++) {
    if (trips[i].id == targetID) {
      getTrip = trips[i];
    }
  }
  try {
    res.status(200).json(getTrip);
  } catch (err) {
    res.status(400).end(err);
  }
});

router.post("/", (req, res) => {
  let trip = req.body;
  trips.push(trip);
  try {
    fs.writeFile(
      __dirname + "/" + "../../data/trips.json",
      JSON.stringify(trips),
      () => {
        res.status(200).json(trips);
      }
    );
  } catch (err) {
    res.status(400).end(err);
  }
});

//put for changing or adding current_vibe on one trip by ID
router.put("/:id", (req, res) => {
  //logic for "putting" a new trip vibe
  const targetID = req.params.id;
  const newVibe = req.body.current_vibe;
  for (let i = 0; i < trips.length; i++) {
    if (trips[i].id == targetID) {
      trips[i].current_vibe = newVibe;
    }
  }
  //logic for "putting" a new trip note
  const newNote = req.body.trip_notes;
  for (let i = 0; i < trips.length; i++) {
    if (trips[i].id == targetID) {
      trips[i].trip_notes = newNote;
    }
  }
  try {
    fs.writeFile(
      __dirname + "/" + "../../data/trips.json",
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
