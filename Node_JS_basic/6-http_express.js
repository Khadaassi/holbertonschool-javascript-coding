const express = require('express');

const app = express();

app.get('/', (request, response) => {
  response.send('Hello Holberton School!');
});

const port = 1245;
app.listen(port, () => {
  console.log(`Server is running : http://localhost:${port}/`);
});
module.exports = app;
