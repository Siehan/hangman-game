const chalk = require("chalk");
const readlineSync = require("readline-sync");

console.log(
  chalk.yellow(`

████████ ██   ██ ███████     ██   ██  █████  ███    ██  ██████  ███    ███  █████  ███    ██ 
   ██    ██   ██ ██          ██   ██ ██   ██ ████   ██ ██       ████  ████ ██   ██ ████   ██ 
   ██    ███████ █████       ███████ ███████ ██ ██  ██ ██   ███ ██ ████ ██ ███████ ██ ██  ██ 
   ██    ██   ██ ██          ██   ██ ██   ██ ██  ██ ██ ██    ██ ██  ██  ██ ██   ██ ██  ██ ██ 
   ██    ██   ██ ███████     ██   ██ ██   ██ ██   ████  ██████  ██      ██ ██   ██ ██   ████ 

`)
);

//console.log(chalk.yellow("😈😈😈😈😈😈😈😈 THE HANGMAN 😈😈😈😈😈😈😈😈"));

console.log("");

userFirstName = readlineSync.question(chalk.green("Hello, may I have your first name? : "));
userLastName = readlineSync.question(chalk.green("And your family name? : "));
userAge = readlineSync.question(chalk.green(`What is your age ${userFirstName} ? : `));
gameStart = readlineSync.question(chalk.green("Thanks  ↩ "));

console.log("");

if (readlineSync.keyInYNStrict(chalk.yellow("Well, so are you ready to play at the Hangman ?"))) {
  // 'Y' key was pressed.
  console.log("");
  console.log(chalk.yellow(`Let start the ÷÷ HANGMAN GAME ÷÷ ${userFirstName} 😈 !`));
  // process.exit(0); // Si pas de process.exist revient sur Thanks
  console.log("");
} else {
  // 'N' key was pressed.
  console.log(chalk.green(`See you soon ${userFirstName}!`));
  process.exit(0);
}
