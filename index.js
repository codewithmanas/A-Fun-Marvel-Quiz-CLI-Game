// A Fun Marvel Quiz Game:
//*********************************************
const chalk = require("chalk");
let readlineSync = require('readline-sync');
//*********************************************
const log = console.log;

// welcome section
log(chalk.bold.red(">> ") + chalk.bold.bgRed(" Hi, Welcome to this FUN MARVEL QUIZ GAME ") + chalk.red.bold(" *****"));

// Rules:
//*********************************************
log("");
log(chalk.bold.blue(">> Rules:-"));
log("");

// Data of Rules
let Rules = ["Write on either lowercase or uppercase.",
  "Write without a space.",
  ".i.e if your answer is Iron Man, then enter 'IronMan'."
];

for (let i = 0; i < Rules.length; i++) {
  log(chalk.yellow("* ") + Rules[i]);
}

log("");
log(chalk.bold.white(">>") + " " + chalk.bold.inverse(" Tell a little bit about yourself : "));

// Game Begins
let score = 0;
//**********************************************

// intro section
let userName = readlineSync.question(chalk.yellow("* ") + "What is your name? ");
log("");
log(chalk.yellow("* ") + "Welcome " + chalk.cyan.bold(userName) + " to this amazing fun marvel quiz game.");
log("");

let userAge = readlineSync.question(chalk.yellow("* ") + "What is your age? ");
log("");
log(chalk.blue.bold(">> Let's begin:-"));
log("");

//*********************************************

// play function 
function play(question, answer, i) {
  log(chalk.bold.blue(">> Q") + chalk.bold.blue(i) + " " + question);

  let userAnswer = readlineSync.question(chalk.bold.blue(">> Answer: "));

  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    log(chalk.green.bold("right!"));
    score = score + 1;
  } else {
    log(chalk.red.bold("wrong!"));
    // log(chalk("Game Over !!!"));
  }

  log("Your Score is: ", score);
  log("______________________");
}

// data of High scores
let highScores = [
  {
    name: "Manas",
    score: 5
  },
  {
    name: "Vishal",
    score: 4
  },
];

// array of objects of questions
let questions = [
  {
    question: "What year was the first Iron Man movie released, kicking off the Marvel Cinematic Universe? ",
    answer: "2008"
  },
  {
    question: "What is Captain America's shield made out of? ",
    answer: "vibranium"
  },
  {
    question: "How many Infinity Stones are there? ",
    answer: "6"
  },
  {
    question: "Who did The Winter Soldier take shelter with during “Infinity War”? ",
    answer: "blackpanther"
  },
  {
    question: "Where is Captain America from? ",
    answer: "brooklyn"
  },
  {
    question: "Who is Tony Stark's father? ",
    answer: "howardstark"
  },
  {
    question: "Who was able to pick up Thor's hammer in Endgame? ",
    answer: "captainamerica"
  },
  {
    question: "Wanda and her brother Pietro are from where? ",
    answer: "sokovia"
  },
  {
    question: "Who rescued Tony Stark and Nebula from space? ",
    answer: "captainmarvel"
  },
  {
    question: "Thor played what video game in Avengers: Endgame? ",
    answer: "fortnite"
  }
];

//loops  for asking questions
for (let i = 0; i < questions.length; i++) {
  let currentQues = questions[i];
  play(currentQues.question, currentQues.answer, i + 1);
  let key = "q";
  let userKey = readlineSync.question("press q to exit, any other key to continue... ");
  if (key === userKey) break;
}

//********************
// final message
function showScores() {
  log(chalk.bold.yellow("YAY! You SCORED: "), score);
  log("Check out the high scores, if you should be there ping me and I'll update it");
  highScores.map(score => log(chalk.bold.blue(score.name), " : ", score.score));
}

log("");
showScores();
