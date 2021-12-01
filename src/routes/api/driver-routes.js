let drivers = require('./drivers.json');

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
