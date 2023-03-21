// function to add two numbers
function add(num1, num2) {
  return num1 + num2;
}

// function to subtract two numbers
function subtract(num1, num2) {
  return num1 - num2;
}

// function to multiply two numbers
function multiply(num1, num2) {
  return num1 * num2;
}

// function to divide two numbers
function divide(num1, num2) {
  if (num2 === 0) {
    return "Error: Cannot divide by zero";
  } else {
    return num1 / num2;
  }
}


// create variables for the first number, operator, and second number
let firstNumber = 3;
let operator = "+";
let secondNumber = 5;

function operate(operator, num1, num2) {
  if (operator === "+") {
    return add(num1, num2);
  } else if (operator === "-") {
    return subtract(num1, num2);
  } else if (operator === "*") {
    return multiply(num1, num2);
  } else if (operator === "/") {
    return divide(num1, num2);
  } else {
    return "Error: Invalid operator";
  }
}

