#!/usr/bin/node
import { readFile } from 'fs';
const filePath = process.argv[2];

readFile(filePath, 'utf-8', (err, data) => {
  if (err) {
    console.error(err);
  } else {
    console.log(data);
  }
});
