#!/usr/bin/node

const request = require('request');

const apiUrl = process.argv[2];

request.get(apiUrl, (error, response, body) => {
  if (error) {
    console.error(`Error: ${error.message}`);
  } else if (response.statusCode !== 200) {
    console.error(`Unexpected status code: ${response.statusCode}`);
  } else {
    const filmsData = JSON.parse(body).results;
    const wedgeMovies = filmsData.filter(film => film.characters.includes("https://swapi-api.hbtn.io/api/people/18/"));
    console.log(`Number of movies where "Wedge Antilles" is present: ${wedgeMovies.length}`);
  }
});
