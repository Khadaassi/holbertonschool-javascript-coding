#!/usr/bin/node

const request = require('request');
const apiUrl = process.argv[2];

request(apiUrl, (error, response, body) => {
  if (error) {
    console.error(`Error: ${error}`);
  } else {
    const todoTasks = JSON.parse(body);
    const completedTasksByUser = {};

    todoTasks.forEach((todoTasks) => {
      if (todoTasks.completed) {
        if (completedTasksByUser[todoTasks.userId]) {
          completedTasksByUser[todoTasks.userId]++;
        } else {
          completedTasksByUser[todoTasks.userId] = 1;
        }
      }
    });
    console.log(completedTasksByUser);
  }
});
