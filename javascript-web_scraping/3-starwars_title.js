#!/usr/bin/node

const request = require('request');

const moviesId = process.argv[2];

const url = `https://swapi-api.hbtn.io/api/films/${moviesId}`;

request.get(url, (error, response, body) => {
  if (error) {
    console.error(`Error: ${error}`);
  } else {
    console.log(JSON.parse(body).title);
  }
});
