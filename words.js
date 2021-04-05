// https:/ / github.com / davidmerfield / randomColor;

const chalk = require("chalk");
const { randomInt } = require("crypto");
const readlineSync = require("readline-sync");
const randomColor = require("randomcolor"); // import the script
const color = randomColor(); // a hex code for an attractive color

const words = [
  "VERT",
  "ROSE",
  "NOIR",
  "JAUNE",
  "BLANC",
  "BLEU",
  "GRIS",
  "MARRON",
  "ORANGE",
  "ROUGE",
  "VIOLET",
  "CITRON",
  "MANDARINE",
  "CAROTTE",
  "MANDARINE",
  "ARDOISE",
  "TURQUOISE",
  "CITROUILLE",
  "FRAMBOISE",
  "GRENADINE",
  "CORAIL",
  "FRAISE",
  "RAISIN",
  "PRUNE",
  "LIN",
  "MASTIC",
  "CHATAIGNE",
  "CHOCOLAT",
  "REGLISSE",
  "ANTHRACITE",
  "SOURIS",
  "POURPRE",
  "AUBERGINE",
  "ABRICOT",
  "COBALT",
  "PETROLE",
  "MENTHE",
].split();

const n = randomInt(0, words.length);
console.log(chalk.yellow(words[n]));

words = readlineSync.question("The word is: ");
let password = readlineSync.question("word: ", { hideEchoBack: true });
console.log(`Hello ${name} the word is : ${password}`);



HANGMANPICS = ['''
  +---+
  |   |
      |
      |
      |
      |
=========''', '''
  +---+
  |   |
  O   |
      |
      |
      |
=========''', '''
  +---+
  |   |
  O   |
  |   |
      |
      |
=========''', '''
  +---+
  |   |
  O   |
 /|   |
      |
      |
=========''', '''
  +---+
  |   |
  O   |
 /|\  |
      |
      |
=========''', '''
  +---+
  |   |
  O   |
 /|\  |
 /    |
      |
=========''', '''
  +---+
  |   |
  O   |
 /|\  |
 / \  |
      |
=========''']
