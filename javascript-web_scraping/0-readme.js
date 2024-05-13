#!/usr/bin/node

const fs = require('fs').promises;
const { exit } = require('process');

async function readFileContent(filePath) {
  try {
    const data = await fs.readFile(filePath, 'utf-8');
    console.log(data);
  } catch (err) {
    console.error(`Error reading file: ${err.message}`);
    exit(1);
  }
}

if (process.argv.length !== 3) {
  console.error('Usage: node read-file.js <file-path>');
  exit(1);
}

const filePath = process.argv[2];
readFileContent(filePath);
