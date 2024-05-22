const express = require('express');
const routes = require('./routes');

const app = express();
const port = 1245;

app.use('/', routes);

app.listen(port, () => {
  console.log(`Server is running : http://localhost:${port}/`);
});

module.exports = app;
