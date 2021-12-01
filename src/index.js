const express = require('express');
const fs = require('fs');
let drivers = require('./drivers.json');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.end('Hello World!');
});

app.get('/drivers', (req, res) => {
  fs.readFile(__dirname + '/' + 'drivers.json', 'utf8', (err, data) => {
    res.end(data);
  });
});

app.post('/drivers', async (req, res) => {
  let driver = req.body;
  drivers.push(driver);
  await fs.writeFile('drivers.json', JSON.stringify(drivers), (err) => {
    // Checking for errors
    if (err) throw err;
  });
  await fs.readFile(__dirname + '/' + 'drivers.json', 'utf8', (err, data) => {
    res.end(data);
  });
});

app.listen(PORT, () => {
  console.log(`app listening at http://localhost:${PORT}`);
});
