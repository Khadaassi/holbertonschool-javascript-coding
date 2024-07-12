#!/usr/bin/node

const request = require('request');
const movieId = process.argv[2];

if (!movieId) {
  console.error('Please provide a movie ID as the first argument.');
  process.exit(1);
}

const apiUrl = `https://swapi.dev/api/films/${movieId}/`;

// Function to fetch and print character names in order
const fetchAndPrintCharacters = (characterUrls) => {
  const characterPromises = characterUrls.map(url => {
    return new Promise((resolve, reject) => {
      request(url, { json: true }, (error, response, body) => {
        if (error) {
          reject(error);
        } else {
          resolve(body.name);
        }
      });
    });
  });

  Promise.all(characterPromises)
    .then(characterNames => characterNames.forEach(name => console.log(name)))
    .catch(error => console.error('Error fetching character:', error));
};

// Fetch movie details
request(apiUrl, { json: true }, (error, response, body) => {
  if (error) {
    console.error('Error fetching movie details:', error);
    return;
  }

  if (response.statusCode !== 200) {
    console.error('Invalid Movie ID or error occurred.');
    return;
  }

  fetchAndPrintCharacters(body.characters);
});
