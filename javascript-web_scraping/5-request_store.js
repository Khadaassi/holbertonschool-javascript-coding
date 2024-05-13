#!/usr/bin/node

const request = require('request');
const fs = require('fs');

const url = process.argv[2];
const filePath = process.argv[3];

request.get(url, (error, response, body) => {
  if (error) {
    console.error(`Error: ${error.message}`);
  } else if (response.statusCode !== 200) {
    console.error(`Unexpected status code: ${response.statusCode}`);
  } else {
    fs.writeFile(filePath, body, 'utf-8', (err) => {
      if (err) {
        console.error(`Error writing to file: ${err.message}`);
      } else {
        console.log(`Contents of ${url} have been saved to ${filePath}`);
      }
    });
  }
});
