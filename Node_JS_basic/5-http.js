const http = require('http');
const countStudents = require('./3-read_file_async');

const database = process.argv[2];

const app = http.createServer((request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/plain' });
  if (request.url === '/') {
    response.write('Hello Holberton School!');
    response.end();
  }

  if (request.url === '/students') {
    response.write('This is the list of our students\n');
    countStudents(database)
      .then((result) => {
        response.write(`${result.totalNumber}\n`);
        response.write(`${result.CS}\n`);
        response.write(`${result.SWE}`);
        response.end();
      })
      .catch((error) => {
        console.error('Error processing students data:', error);
        response.write('Cannot load the database');
        response.end();
      });
  }
});

const port = 1245;
module.exports = app;

if (require.main === module) {
  app.listen(port, () => {
    console.log(`Server is running : http://localhost:${port}`);
  });
}
