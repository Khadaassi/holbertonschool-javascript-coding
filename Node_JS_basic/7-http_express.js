const express = require('express');
const countStudents = require('./3-read_file_async');

const db = process.argv[2];

const app = express();
const port = 1245;

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
  res.end();
});
app.get('/students', (req, res) => {
  res.write('This is the list of our students\n');
  countStudents(db)
    .then((result) => {
      res.write(`${result.totalNumber}\n`);
      res.write(`${result.CS}\n`);
      res.write(`${result.SWE}`);
      res.end();
    })
    .catch(() => {
      res.write('Cannot load the database');
      res.end();
    });
});
app.listen(port, () => {
  console.log(`Server running : ${port}`);
});

module.exports = app;
