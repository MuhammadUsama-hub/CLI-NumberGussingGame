#! /usr/bin/env node 
import inquirer from "inquirer";
// Matching user guess with ramdon result
console.log('"Remember! You have 3 attemps only to win this game"');
for (let i = 0; i < 3; i++) {
  const answers = await inquirer.prompt([
    {
      message: "Guess any number from 1-10 : ",
      type: "number",
      name: "userGuess",
    },
  ]);
  if (answers.userGuess === (Math.random() * 10).toFixed(0)) {
    console.log("Hurry ! you Win");
    break;
  } else {
    console.log("Ups! You lose");
  }
}
