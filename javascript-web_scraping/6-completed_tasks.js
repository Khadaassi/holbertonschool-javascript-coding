#!/usr/bin/node

const request = require('request');

const apiUrl = process.argv[2];

request.get(apiUrl, (error, response, body) => {
  if (error) {
    console.error(`Error: ${error.message}`);
  } else if (response.statusCode !== 200) {
    console.error(`Unexpected status code: ${response.statusCode}`);
  } else {
    const todos = JSON.parse(body);
    const completedTasksByUser = {};

    todos.forEach(todo => {
      if (todo.completed) {
        if (completedTasksByUser[todo.userId]) {
          completedTasksByUser[todo.userId]++;
        } else {
          completedTasksByUser[todo.userId] = 1;
        }
      }
    });

    Object.entries(completedTasksByUser).forEach(([userId, count]) => {
      console.log(`User ${userId}: ${count} completed tasks`);
    });
  }
});
