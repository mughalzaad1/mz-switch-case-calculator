#!/usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { type: "number",
        name: "numberOne",
        message: "Enter the first number"
    }, { type: "number",
        name: "numberTwo",
        message: "Enter the second number"
    },
    { type: "list",
        name: "operator",
        message: "Enter the operator",
        choices: ["+", "-", "*", "/"] },
]);
const { numberOne, numberTwo, operator } = answer;
let result;
switch (operator) {
    case "+":
        result = numberOne + numberTwo;
        break;
    case "-":
        result = numberOne - numberTwo;
        break;
    case "*":
        result = numberOne * numberTwo;
        break;
    case "/":
        result = numberOne / numberTwo;
        break;
    default:
        break;
        console.log("invalid operator");
}
console.log(`${numberOne} ${operator} ${numberTwo} = ${result}`);
