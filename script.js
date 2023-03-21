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
