const chalk = require("chalk");
const readlineSync = require("readline-sync");
const fs = require("fs");
const readline = require("readline");
//import fs from "fs";

//const PLAYER = Number(process.argv[2]);

console.log(chalk.yellow("😈😈😈😈😈😈😈😈 THE HANGMAN 😈😈😈😈😈😈😈😈"));
console.log("");

let userFirstName = "";
let userLastName = "";
let userAge = "";
let gameStart = "";

while (true) {
  /********************************* FIRST NAME  ***************************************/

  // get the first name and check if it's completed or not
  while (userFirstName.length === 0) {
    userFirstName = readlineSync.question(chalk.green("Hello, may I have your first name? : "));
    if (userFirstName.length === 0) {
      console.log(chalk.yellow("Oups! You have to write your first name to continue"));
      //Sans le while on peut inscrire continue OU process.exit(1) pour sortir du programme;
    }
  }

  /********************************* LAST NAME  ***************************************/

  // get the Last name and check if it's completed
  while (userLastName.length === 0) {
    userLastName = readlineSync.question(chalk.green("And your family name? : "));
    if (userLastName.length === 0) {
      console.log(chalk.yellow("Oups! You have to write your Last name to continue"));
    }
  }

  /**********************************   AGE  *******************************************/

  // get age and check if it's a number
  while (userAge.length === 0 || isNaN(userAge)) {
    userAge = readlineSync.question(chalk.green(`What is your age ${userFirstName} ? : `));
    if (userAge.length === 0) {
      console.log(chalk.yellow(`Oups! ${userFirstName}, enter your age !`));
      continue;
    }
    if (isNaN(userAge)) {
      console.log(chalk.red(`Sorry ${userFirstName}: "${userAge}" is not a number, try again!`));
      continue;
    }
  }

  /*************************************  LET START THE GAME  *******************************************/

  gameStart = readlineSync.question(chalk.green("Thanks  ↩"));

  if (readlineSync.keyInYNStrict(chalk.yellow("Well, so are you ready to play at the Hangman ?"))) {
    // 'Y' key was pressed.
    console.log(chalk.red(`Let start the ÷÷÷÷ Hangman Game ÷÷÷÷ ${userFirstName} 😈 !`));
    // continuer le programme
    process.exit(0); // Si pas de process.exist revient sur Thanks
  } else {
    // 'N' key was pressed.
    console.log(chalk.green(`See you soon ${userFirstName}!`));
    process.exit(0);
  }
}
