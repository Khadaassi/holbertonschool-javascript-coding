function welcomeMessage() {
  process.stdout.write('Welcome to Holberton School, what is your name?\n');
  process.stdin.setEncoding('utf8');
  process.stdin.on('data', (input) => {
    const userInput = input.toString();
    process.stdout.write(`Your name is: ${userInput}`);
    process.stdout.write('This important software is now closing\n');
    process.exit();
  });
}

module.exports = welcomeMessage;

if (require.main === module) {
  welcomeMessage();
}
