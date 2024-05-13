#!/usr/bin/node

const request = require('request');

const apiUrl = process.argv[2];

request(apiUrl, (error, response, body) => {
  if (error) {
    console.error(`error: ${error}`);
  } else {
    const moviesData = JSON.parse(body);
    const wedgeAntillesMovies = moviesData.results.filter(movie =>
      movie.characters.some(character => character.includes('18'))
    );
    console.log(wedgeAntillesMovies.length);
  }
});
