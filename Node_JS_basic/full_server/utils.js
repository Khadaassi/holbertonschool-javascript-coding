import fs from 'fs';

function readDatabase(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf-8', (error, data) => {
      if (error) {
        reject(new Error('Cannot load the database'));
        return;
      }
      const groupedByField = data
        .split('\n')
        .filter(Boolean)
        .slice(1)
        .reduce((accumulator, line) => {
          const [firstname, , , field] = line.split(',');
          accumulator[field] = [...(accumulator[field] || []), firstname];
          return accumulator;
        }, {});
      resolve(groupedByField);
    });
  });
}

module.exports = readDatabase;
