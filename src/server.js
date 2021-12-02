const express = require('express');
const routes = require('./routes');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

app.get('/', (req, res) => {
  res.end('Welcome to the homepage');
});

app.listen(PORT, () => {
  console.log(`app listening at http://localhost:${PORT}`);
});