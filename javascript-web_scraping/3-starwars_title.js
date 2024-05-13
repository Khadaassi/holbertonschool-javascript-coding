#!/usr/bin/node

const request = require('request');

const movieId = process.argv[2];
const apiUrl = `https://swapi-api.hbtn.io/api/films/${movieId}`;

request.get(apiUrl, (error, response, body) => {
  if (error) {
    console.error(`Error: ${error.message}`);
  } else if (response.statusCode !== 200) {
    console.error(`Unexpected status code: ${response.statusCode}`);
  } else {
    const movieData = JSON.parse(body);
    console.log(`Title: ${movieData.title}`);
  }
});
