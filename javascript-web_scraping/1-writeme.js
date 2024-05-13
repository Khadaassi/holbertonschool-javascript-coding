#!/usr/bin/node

const fs = require('fs');

const filePath = process.argv[2];
const content = process.argv[3];

if (!filePath || !content) {
  console.error('Usage: ./script.js <file_path> <content>');
  process.exit(1);
}

fs.writeFile(filePath, content, 'utf-8', (err) => {
  if (err) {
    console.error(`Error writing to file: ${err.message}`);
  } else {
    console.log(`Content has been written to ${filePath}`);
  }
});
