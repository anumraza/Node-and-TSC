import inquirer from "inquirer";
const answer = await inquirer.prompt([
  { message: "enter first number", type: "number", name: "firstNumber" },
  { message: "enter second number", type: "number", name: "secondNumber" },
  {
    message: "select one of the operators to prform operation",
    type: "list",
    name: "operators",
    choices: ["Addition", "Subtraction", "Multiplication", "division"],
  },
]);

if(answer.operators === "Addition") {
    console.log("your answer is ")
    console.log( answer.firstNumber+answer.secondNumber)
}
else if(answer.operators === "Subtraction") {
    console.log("your answer is ")
    console.log( answer.firstNumber - answer.secondNumber)
}

else if(answer.operators === "Multiplication") {
    console.log("your answer is ")
    console.log( answer.firstNumber * answer.secondNumber)}


else {
    console.log("your answer is ")
    console.log( answer.firstNumber / answer.secondNumber)
}

